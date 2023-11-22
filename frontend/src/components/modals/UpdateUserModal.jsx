import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_API_URL

function UpdateUserModal(props) {

    const { setShowModal, setChange, change, setUpdatedUserData, updatedUserData } = props

    const [response, setResponse] = useState(null);
    const navigate = useNavigate()

    response && console.log("res: ", response)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${apiUrl}/user/updateUser`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUserData),
            });

            const data = await response.json()
            console.log("data: ", data)
            setResponse(data)

            setShowModal(false)
            setChange(!change)



        } catch (error) {
            console.error('Error making PUT request:', error)
        }
    }

    const handleInputChange = (e) => {
        setUpdatedUserData({ ...updatedUserData, [e.target.name]: e.target.value })
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-60"
                onClick={() => setShowModal(false)}
            >

            </div>
            <div className="bg-white p-8 z-10 w-1/3">
                <h1 className='mb-3 font-semibold'>Edit user information</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={updatedUserData.firstName}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={updatedUserData.lastName}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={updatedUserData.email}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <input
                        type="number"
                        name="graduationYear"
                        placeholder="Year of Graduation"
                        value={updatedUserData.graduationYear}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={updatedUserData.phone}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={updatedUserData.password}
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

export default UpdateUserModal
