import React, { useState } from 'react'
import { useUsersStore } from '../../stores/useUsersStore';
import { updateUser } from '../../services/api';
import axios from 'axios';


const apiUrl = import.meta.env.VITE_API_URL

function UpdateUserModal(props) {

    const { setChange, change } = props
    const { user, setUpdateUser } = useUsersStore()
    const [validateFile, setValidateFile] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [image, setImage] = useState('')

    const [response, setResponse] = useState(null);
    const [updatedUserData, setUpdatedUserData] = useState({
        firstName: user.firstName, lastName: user.lastName, email: user.email, graduationYear: '', phone: '', password: '', profilePicture: '', id: user.id
    });


    const handleSubmit = async (e) => {
        e.preventDefault()

        updateUser({ ...updatedUserData, profilePicture: image }, user.token)
            .then((response) => {
                console.log(response)
                setResponse(response)
                setUploading(false)
                if (!response.error) {
                    setUpdateUser(false)
                    setChange(!change)
                }
            })
            .catch((error) => {
                console.error('Error updating user: ', error)
                setUploading(false)
            })
    }

    const presetKey = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET_KEY
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

    const handleInputChange = (e) => {
        setUpdatedUserData({ ...updatedUserData, [e.target.name]: e.target.value })
        if (e.target.name == 'profilePicture') {
            setValidateFile(false)
            const file = e.target.files[0]
            if (file.size > 2_000_000) {
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
                onClick={() => setUpdateUser(false)}
            >

            </div>
            <div className="bg-white p-8 z-10 w-1/3 rounded">
                <h1 className='mb-3 font-semibold'>Edit personal information</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={updatedUserData.firstName}
                        onChange={handleInputChange}
                        className=' border border-black p-2 w-full mb-2 rounded'
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={updatedUserData.lastName}
                        onChange={handleInputChange}
                        className=' border border-black p-2 w-full mb-2 rounded'
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={updatedUserData.email}
                        onChange={handleInputChange}
                        className=' border border-black p-2 w-full mb-2 rounded'
                    />
                    <label htmlFor="graduationYear">Year of Graduation</label>
                    <input
                        type="date"
                        name="graduationYear"
                        placeholder="Year of Graduation"
                        value={updatedUserData.graduationYear}
                        onChange={handleInputChange}
                        className=' border border-black p-2 w-full mb-2 rounded'
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={updatedUserData.phone}
                        onChange={handleInputChange}
                        className=' border border-black p-2 w-full mb-2 rounded'
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={updatedUserData.password}
                        onChange={handleInputChange}
                        className=' border border-black p-2 w-full mb-2 rounded'
                    />
                    <label htmlFor="profilePicture">Profile Picture</label>
                    <input
                        type="file"
                        name="profilePicture"
                        placeholder="profilePicture"
                        value={updatedUserData.profilePicture}
                        onChange={handleInputChange}
                        className=' border border-black p-2 w-full mb-2 rounded'
                    />
                    {validateFile ? <p className="text-red-500 text-xs">Images should be less than 2 MB</p> : null}
                    <div className="flex justify-end">
                        {!uploading ?
                            <button
                                type='submit'
                                className="mt-4 mr-4 px-4 py-2 bg-slate-900 text-white rounded hover:bg-secondary focus:outline-none"
                            >
                                Submit
                            </button>
                            :
                            <button
                                type='button'
                                className="mt-4 mr-4 px-4 py-2 bg-zinc-500 text-white"
                                disabled
                            >
                                Uploading image...
                            </button>
                        }

                        <button
                            className="mt-4 px-4 py-2  text-black border border-primary hover:border-secondary hover:bg-secondary hover:text-white focus:outline-none rounded"
                            onClick={() => setUpdateUser(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default UpdateUserModal
