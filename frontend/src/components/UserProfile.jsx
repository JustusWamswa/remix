import React, { useEffect, useState } from 'react'
import { useUsersStore } from '../stores/useUsersStore'
import { getUser } from '../services/api'
import { useNavigate } from 'react-router-dom'

function UserProfile({ setNavbar, navbar }) {

    const [showModal, setShowModal] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const { user, setUser, updateUser, setUpdateUser, successfulUpdate } = useUsersStore()
    const navigate = useNavigate()

    useEffect(() => {
        getUser({ id: user.id }, user.token)
            .then((response) => {
                setUserInfo(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [successfulUpdate])

    const handleLogout = () => {

        // delete user from localStorage
        localStorage.removeItem('user')
        // update global state
        setUser({})

        navigate('/')

        return
    }

    const handleDashboard = () => {
        navigate('/dashboard')
        setShowModal(false)
        setUpdateUser(true)
    }

    const handleUpdateProfile = () => {
        navigate('/profile')
        setShowModal(false)
        setUpdateUser(true)
    }

    return (
        <div>
            <div
                className='flex justify-center items-center hover:cursor-pointer'
                onClick={() => {
                    setShowModal(true)
                    setNavbar(!navbar)
                }}
            >
                <h1 className='pr-4 text-sm font-medium text-zinc-600'>{userInfo.firstName} {userInfo.lastName}</h1>
                {userInfo.profilePicture ?
                    <div
                        className="w-12 h-12 rounded-full"
                        style={{
                            backgroundImage: `url(${userInfo.profilePicture})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                    ></div>
                    :
                    <div className='p-2 rounded-full border-2 border-zinc-400  '>
                        <div
                            className="bg-[url('/userIcon.png')] w-7 h-7 bg-center bg-no-repeat bg-contain"
                        ></div>
                    </div>
                }
            </div>
            {showModal &&
                <div className="fixed inset-0 flex items-start justify-end z-50">
                    <div className="absolute inset-0"
                        onClick={() => setShowModal(false)}
                    >

                    </div>
                    <div className="bg-white z-10 h-[40%] mr-[10%] mt-20 w-1/6 rounded shadow-xl">
                        <div class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded">
                            <div className="px-4 py-3">
                                <div
                                    className="w-5 h-5 bg-[url('/top.png')] bg-center bg-no-repeat bg-contain -rotate-90 mb-3 hover:cursor-pointer"
                                    onClick={() => setShowModal(false)}
                                ></div>
                                <span className="block text-sm text-gray-900 ">{userInfo.firstName} {userInfo.lastName}</span>
                                <span className="block text-xs pt-2  text-gray-500 truncate ">{userInfo.email}</span>
                            </div>
                            <ul className="py-2 m-0">
                                {user.admin && <li>
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={handleDashboard}
                                    >Dashboard</a>
                                </li>}
                                <li>
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleUpdateProfile}
                                    >My profile</a>
                                </li>
                                <li>
                                    <a
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleLogout}
                                    >Sign out</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            }
        </div>

    )
}

export default UserProfile