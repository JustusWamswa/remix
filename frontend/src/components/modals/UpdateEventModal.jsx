import React, { useState } from 'react'
import { categories } from '../../cache/categories'
import { useUsersStore } from '../../stores/useUsersStore'

const apiUrl = import.meta.env.VITE_API_URL

function UpdateEventModal(props) {

    const { setShowModal, setChange, change, setUpdatedEventData, updatedEventData } = props
    const {user} = useUsersStore()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${apiUrl}/event/updateEvent`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify(updatedEventData),
            });

            const data = await response.json()
            console.log("data: ", data)

            setShowModal(false)
            setChange(!change)



        } catch (error) {
            console.error('Error making PUT request:', error)
        }
    }

    const handleInputChange = (e) => {
        setUpdatedEventData({ ...updatedEventData, [e.target.name]: e.target.value })
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-60"
                onClick={() => setShowModal(false)}
            >

            </div>
            <div className="bg-white p-8 z-10 w-1/3">
                <h1 className='mb-3 font-semibold'>Edit event information</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        type="text"
                        name="title"
                        placeholder="Event Title *"
                        value={updatedEventData.title}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <textarea
                        rows={4}
                        name="description"
                        placeholder="Description *"
                        value={updatedEventData.description}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2 resize-none'
                    />
                    <select
                        name="category"
                        placeholder="Category *"
                        value={updatedEventData.category}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    >
                        {categories.map((category) => (
                            <option value={`${category}`} >{category}</option>
                        ))}

                    </select>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location *"
                        value={updatedEventData.location}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <input
                        type="date"
                        name="eventDate"
                        placeholder="Date of Event *"
                        value={updatedEventData.eventDate}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <input
                        type="time"
                        name="startTime"
                        placeholder="Event start time *"
                        value={updatedEventData.startTime}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <input
                        type="time"
                        name="endTime"
                        placeholder="Event end time *"
                        value={updatedEventData.endTime}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <div className="flex justify-end">
                        <button
                            type='submit'
                            className="mt-4 mr-4 px-4 py-2 bg-slate-900 text-white"
                        >
                            Submit
                        </button>

                        <button
                            className="mt-4 px-4 py-2  text-black border border-primary"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default UpdateEventModal
