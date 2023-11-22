import React, { useEffect, useState } from 'react'
import NewUserModal from './modals/NewUserModal'
import UpdateUserModal from './modals/UpdateUserModal'
import UpdateAdminModal from './modals/UpdateAdminModal'

const apiUrl = import.meta.env.VITE_API_URL
console.log("url: ", apiUrl)
function User() {

    const [userData, setUserData] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [change, setChange] = useState(false)
    const [updatedUserData, setUpdatedUserData] = useState({
        firstName: '', lastName: '', email: '', graduationYear: '', phone: '', password: ''
    });

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${apiUrl}/user/getUsers`)
            const data = await response.json()
            setUserData(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fetchUsers()

    }, [change])

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/user/deleteUser`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            })
            const data = await response.json()
            setChange(!change)

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className='mt-20 w-2/3 mx-auto mb-10 relative'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-xl'>Users</h1>
                    <button className=" p-4 rounded-full shadow-xl bg-white" type='button' onClick={() => setShowModal(true)}>
                        <div className="bg-[url('/add.png')] bg-contain bg-no-repeat w-5 h-5"></div>
                    </button>
                </div>
                {userData?.map((data) => (
                    <div className='mt-5' key={data._id}>
                        <div className='w-full bg-white p-4 rounded my-2 shadow-xl flex justify-between px-7 items-center'>
                            <div>
                                <h1>Name: {data.firstName} {data.lastName} {data.admin && <span className='italic font-bold text-sm'>(admin)</span>}</h1>
                                <h1>Email: {data.email} </h1>
                                <h1>Year of Graduation: {data.graduationYear} </h1>
                            </div>
                            <div className='w-2/12 flex justify-between'>
                                <button
                                    className="bg-[url('/setting.png')] bg-contain bg-no-repeat w-5 h-5"
                                    type="button"
                                    onClick={() => {
                                        setShowModal2(true)
                                        setUpdatedUserData({
                                            admin: data.admin, id: data._id
                                        })
                                    }}
                                ></button>
                                <button
                                    className="bg-[url('/pen.png')] bg-contain bg-no-repeat w-5 h-5"
                                    type="button"
                                    onClick={() => {
                                        setShowModal1(true)
                                        setUpdatedUserData({
                                            firstName: data.firstName, lastName: data.lastName, email: data.email, graduationYear: data.graduationYear,
                                            phone: data.phone, password: '', id: data._id
                                        })
                                    }}
                                ></button>
                                <button className="bg-[url('/delete.png')] bg-contain bg-no-repeat w-5 h-5" type="button" onClick={() => handleDelete(data._id)}></button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

            {showModal && <NewUserModal setShowModal={setShowModal} setChange={setChange} change={change} />}
            {showModal1 &&
                <UpdateUserModal
                    setShowModal={setShowModal1}
                    setChange={setChange}
                    change={change}
                    updatedUserData={updatedUserData}
                    setUpdatedUserData={setUpdatedUserData}
                />
            }
            {showModal2 &&
                <UpdateAdminModal
                    setShowModal={setShowModal2}
                    setChange={setChange}
                    change={change}
                    updatedUserData={updatedUserData}
                    setUpdatedUserData={setUpdatedUserData}
                />
            }

        </>
    )
}

export default User