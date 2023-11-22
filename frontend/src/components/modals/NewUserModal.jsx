import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_API_URL

function NewUserModal({ setShowModal, setChange, change }) {

    const [newUserData, setNewUserData] = useState({
        firstName: '', lastName: '', email: '', graduationYear: '', phone: '', password: ''
    });
    const [response, setResponse] = useState(null);
    const navigate = useNavigate()

    response && console.log("res: ", response)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${apiUrl}/user/createUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserData),
            });

            const data = await response.json()
            console.log("data: ", data)
            setResponse(data)
            if (!data.error) {
                setShowModal(false)
                setChange(!change)
            }

            
        } catch (error) {
            console.error('Error making POST request:', error)
        }
    }

    const handleInputChange = (e) => {
        setNewUserData({ ...newUserData, [e.target.name]: e.target.value })
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-60"
                onClick={() => setShowModal(false)}
            >

            </div>
            <div className="bg-white p-8 z-10 w-1/3">
                <h1 className='mb-3 font-semibold'>Create a new user</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        value={newUserData.firstName}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        value={newUserData.lastName}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email *"
                        value={newUserData.email}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <input
                        type="number"
                        name="graduationYear"
                        placeholder="Year of Graduation *"
                        value={newUserData.graduationYear}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={newUserData.phone}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password *"
                        value={newUserData.password}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
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
                    {response && <p className='text-red-600'>{response.error}</p>}
                </form>

            </div>
        </div>
    )
}

export default NewUserModal
