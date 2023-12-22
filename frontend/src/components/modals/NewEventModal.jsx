import React, { useState } from 'react'
import { categories } from '../../cache/categories';
import { useUsersStore } from '../../stores/useUsersStore';
import { createEvent } from '../../services/api';
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL



categories.sort()

function NewEventModal({ setShowModal, setChange, change }) {

    const { user } = useUsersStore()

    const [newEventData, setNewEventData] = useState({
        title: '', description: '', creator_user: user.email, category: '', location: '', eventDate: '', startTime: '', endTime: '', thumbnail: ''
    });
    const [response, setResponse] = useState(null);
    const [validateCategory, setValidateCategory] = useState(false)
    const [validateFile, setValidateFile] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [image, setImage] = useState('')

    const presetKey = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET_KEY
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newEventData.category == '') {
            setValidateCategory(true)
            return
        }
        setValidateCategory(false)
        createEvent({...newEventData, thumbnail: image}, user.token)
            .then((response) => {
                setResponse(response)
                setUploading(false)
                if (!response.error) {
                    setShowModal(false)
                    setChange(!change)
                }
            })
            .catch((error) => {
                console.error('Error creating event: ', error)
                setUploading(false)
            })
    }

    const handleInputChange = (e) => {
        setNewEventData({ ...newEventData, [e.target.name]: e.target.value })
        if (e.target.name == 'thumbnail') {
            setValidateFile(false)
            const file = e.target.files[0]
            if(file.size > 2_000_000) {
                setValidateFile(true)
                return
            }
            setUploading(true)
            const formData = new FormData()
            formData.append('file', file)
            formData.append('upload_preset', presetKey)
            axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
                .then((response) => {
                    setImage(response.data.secure_url)
                    setUploading(false)
                })
                .catch((error) => {
                    console.log(error)
                    setUploading(false)
                })
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-60"
                onClick={() => setShowModal(false)}
            >

            </div>
            <div className="bg-white px-8 pt-4 z-10 h-[90%] w-2/5">
                <h1 className='mb-3 font-semibold'>Create a new event</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className="flex justify-between py-5">
                        <div className='w-full mr-3'>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Event Title *"
                                value={newEventData.title}
                                onChange={handleInputChange}
                                className=' border border-black p-2 w-full mb-2'
                                required
                            />
                        </div>
                        <div className='w-full ml-3'>
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Location *"
                                value={newEventData.location}
                                onChange={handleInputChange}
                                className=' border border-black p-2 w-full mb-2'
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className='w-full mr-3'>
                            <label htmlFor="startTime">Start Time (GMT)</label>
                            <input
                                type="time"
                                name="startTime"
                                placeholder="Event start time *"
                                value={newEventData.startTime}
                                onChange={handleInputChange}
                                className=' border border-black p-2 w-full mb-2'
                                required
                            />
                        </div>
                        <div className='w-full ml-3'>
                            <label htmlFor="endTime">End Time (GMT)</label>
                            <input
                                type="time"
                                name="endTime"
                                placeholder="Event end time *"
                                value={newEventData.endTime}
                                onChange={handleInputChange}
                                className=' border border-black p-2 w-full mb-2'
                                required
                            />
                        </div>
                    </div>
                    <div className='pt-5 pb-2'>
                        <label htmlFor="description">Description</label>
                        <textarea
                            rows={2}
                            name="description"
                            placeholder="Description *"
                            value={newEventData.description}
                            onChange={handleInputChange}
                            className=' border border-black p-2 w-full mb-2 resize-none'
                            required
                        />
                    </div>

                    <label htmlFor="eventDate">Date</label>
                    <input
                        type="date"
                        name="eventDate"
                        placeholder="Date of Event *"
                        value={newEventData.eventDate}
                        onChange={handleInputChange}
                        className=' border border-black p-2 w-full mb-2'
                        required
                    />
                    <div className='py-5 flex'>
                        <select
                            name="category"
                            placeholder="Category *"
                            value={newEventData.category}
                            onChange={handleInputChange}
                            className=' border border-black p-2 w-full mr-3'
                            required
                        >
                            <option value='' >Select event category</option>
                            {categories.map((category) => (
                                <option value={`${category}`} >{category}</option>
                            ))}

                        </select>
                        <input
                            type='file'
                            name='thumbnail'
                            value={newEventData.thumbnail}
                            onChange={handleInputChange}
                            className=' border border-black p-2 w-full ml-3'
                            required
                        />
                    </div>
                    {validateCategory ? <p className="text-red-500 text-xs">Select event category</p> : null}
                    {validateFile ? <p className="text-red-500 text-xs">Images should be less than 2 MB</p> : null}
                    <div className="flex justify-end">
                        {newEventData.title && newEventData.description && newEventData.category &&
                            newEventData.location && newEventData.eventDate && newEventData.startTime &&
                            newEventData.endTime && newEventData.thumbnail && !uploading ?
                            <button
                                type='submit'
                                className="mt-4 mr-4 px-4 py-2 bg-primary hover:bg-secondary text-white rounded"
                            >
                                Submit
                            </button>
                            :
                            uploading ?
                                <button
                                    type='button'
                                    className="mt-4 mr-4 px-4 py-2 bg-zinc-500 text-white rounded"
                                    disabled
                                >
                                    Uploading image...
                                </button>
                                :
                                <button
                                    type='button'
                                    className="mt-4 mr-4 px-4 py-2 bg-zinc-500 text-white rounded"
                                    disabled
                                >
                                    Submit
                                </button>
                        }

                        <button
                            className="mt-4 px-4 py-2  text-black border border-primary hover:bg-secondary hover:text-white rounded"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                    {response && <p className='text-red-600'>{response.error}</p>}
                </form>

            </div>
        </div>
    )
}

export default NewEventModal
