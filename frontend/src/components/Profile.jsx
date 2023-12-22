import React, { useEffect, useRef, useState } from 'react'
import { useUsersStore } from '../stores/useUsersStore';
import { getUser, updateUser } from '../services/api';
import axios from 'axios';
import ChangeProfilePic from './modals/ChangeProfilePic';

const apiUrl = import.meta.env.VITE_API_URL

function Profile() {
    const { user, setUpdateUser, successfulUpdate } = useUsersStore()
    const [validateFile, setValidateFile] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [image, setImage] = useState('')
    const [showEdit, setShowEdit] = useState(false)
    const [showEdit1, setShowEdit1] = useState(false)
    const [showEdit2, setShowEdit2] = useState(false)
    const [showEdit3, setShowEdit3] = useState(false)
    const [showEdit4, setShowEdit4] = useState(false)
    const [showEdit5, setShowEdit5] = useState(false)
    const [showProfilePicModal, setShowProfilePicModal] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const changingElement = useRef()
    const changingElementPlaceholder = useRef()
    const [saving, setSaving] = useState(false)
    const [response, setResponse] = useState(null);
    const [updatedUserData, setUpdatedUserData] = useState({})
    console.log(updatedUserData)


    useEffect(() => {
        getUser({ id: user.id }, user.token)
            .then((response) => {
                setUserInfo(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [successfulUpdate])

    const presetKey = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET_KEY
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

    const handleInputChange = (e) => {
        if (e.target.name == 'profilePicture') {
            setImage(e.target.value)
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
                    setUploading(false)
                    setUpdatedUserData({ ...userInfo, profilePicture: response.data.secure_url })
                })
                .catch((error) => {
                    console.log(error)
                    setUploading(false)
                })

            return
        }
        setUpdatedUserData({ ...userInfo, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1 className='py-3 text-2xl font-medium text-center pt-16 pb-4'>My profile</h1>
            <div className=' w-full md:flex items-center justify-evenly px-16 bg-white shadow-lg rounded py-16 md:divide-x divide-gray-300'>
                <div className='flex flex-col justify-center items-center'>
                    {
                        userInfo.profilePicture ?
                            <div
                                className="w-32 h-32 rounded-full"
                                style={{
                                    backgroundImage: `url(${userInfo.profilePicture})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            ></div>
                            :
                            <div className='p-2 rounded-full border-2 border-zinc-400 w-32 h-32 flex justify-center items-center'>
                                <div
                                    className="bg-[url('/userIcon.png')] w-24 h-24 bg-center bg-no-repeat bg-contain"
                                ></div>
                            </div>
                    }
                    <button
                        className=' px-2 md:px-5 py-2 border-2 border-white hover:border-2 hover:border-tertiary rounded bg-secondary outline-none bg-opacity-10 mt-5 text-secondary mb-5 md:mb-0'
                        type="button"
                        onClick={() => {
                            setShowProfilePicModal(true)
                            changingElement.current = 'profilePicture'
                            changingElementPlaceholder.current = 'profilePicture'
                        }}
                    >
                        Change profile picture
                    </button>
                </div>
                <div className='md:w-1/4'>
                    <h1 className='font-bold text-sm text-zinc-500 p-4 flex justify-between items-center hover:bg-gray-50'
                        onMouseOver={() => setShowEdit(true)}
                        onMouseLeave={() => setShowEdit(false)}
                        onClick={() => {
                            setShowProfilePicModal(true)
                            changingElement.current = 'firstName'
                            changingElementPlaceholder.current = 'First Name'
                        }}
                    >
                        <span>
                            First Name:&emsp;
                            <span className='text-base font-normal text-black'>{userInfo.firstName}</span>
                        </span>
                        {showEdit && <span
                            className='text-blue-600 font-normal hover:cursor-pointer hover:underline'
                            onClick={() => {
                                setShowProfilePicModal(true)
                                changingElement.current = 'firstName'
                                changingElementPlaceholder.current = 'First Name'
                            }}
                        >
                            edit
                        </span>}
                    </h1>
                    <h1 className='font-bold text-sm text-zinc-500 p-4 flex justify-between items-center hover:bg-gray-50'
                        onMouseOver={() => setShowEdit1(true)}
                        onMouseLeave={() => setShowEdit1(false)}
                        onClick={() => {
                            setShowProfilePicModal(true)
                            changingElement.current = 'lastName'
                            changingElementPlaceholder.current = 'Last Name'
                        }}
                    >
                        <span>
                            Last Name:&emsp;
                            <span className='text-base font-normal text-black'>{userInfo.lastName}</span>
                        </span>
                        {showEdit1 && <span
                            className='text-blue-600 font-normal hover:cursor-pointer hover:underline'
                            onClick={() => {
                                setShowProfilePicModal(true)
                                changingElement.current = 'lastName'
                                changingElementPlaceholder.current = 'Last Name'
                            }}
                        >
                            edit
                        </span>}
                    </h1>
                    <h1 className='font-bold text-sm text-zinc-500 p-4 flex justify-between items-center hover:bg-gray-50'
                        onMouseOver={() => setShowEdit2(true)}
                        onMouseLeave={() => setShowEdit2(false)}
                        onClick={() => {
                            setShowProfilePicModal(true)
                            changingElement.current = 'email'
                            changingElementPlaceholder.current = 'Email'
                        }}
                    >
                        <span>
                            Email:&emsp;
                            <span className='text-base font-normal text-black'>{userInfo.email}</span>
                        </span>
                        {showEdit2 && <span
                            className='text-blue-600 font-normal hover:cursor-pointer hover:underline'
                            onClick={() => {
                                setShowProfilePicModal(true)
                                changingElement.current = 'email'
                                changingElementPlaceholder.current = 'Email'
                            }}
                        >
                            edit
                        </span>}
                    </h1>
                </div>
                <div className='w-1/4'>
                    <h1 className='font-bold text-sm text-zinc-500 p-4 flex justify-between items-center hover:bg-gray-50'
                        onMouseOver={() => setShowEdit3(true)}
                        onMouseLeave={() => setShowEdit3(false)}
                        onClick={() => {
                            setShowProfilePicModal(true)
                            changingElement.current = 'graduationYear'
                            changingElementPlaceholder.current = 'Year of Graduation'
                        }}
                    >
                        <span>
                            Year of Graduation:&emsp;
                            <span className='text-base font-normal text-black'>{new Date(userInfo.graduationYear).getFullYear()}</span>
                        </span>
                        {showEdit3 && <span
                            className='text-blue-600 font-normal hover:cursor-pointer hover:underline'
                            onClick={() => {
                                setShowProfilePicModal(true)
                                changingElement.current = 'graduationYear'
                                changingElementPlaceholder.current = 'Year of Graduation'
                            }}
                        >
                            edit
                        </span>}
                    </h1>
                    <h1 className='font-bold text-sm text-zinc-500 p-4 flex justify-between items-center hover:bg-gray-50'
                        onMouseOver={() => setShowEdit4(true)}
                        onMouseLeave={() => setShowEdit4(false)}
                        onClick={() => {
                            setShowProfilePicModal(true)
                            changingElement.current = 'phone'
                            changingElementPlaceholder.current = 'Phone Number'
                        }}
                    >
                        <span>
                            Phone Number:&emsp;
                            <span className='text-base font-normal text-black'>{userInfo.phone}</span>
                        </span>
                        {showEdit4 && <span
                            className='text-blue-600 font-normal hover:cursor-pointer hover:underline'
                            onClick={() => {
                                setShowProfilePicModal(true)
                                changingElement.current = 'phone'
                                changingElementPlaceholder.current = 'Phone Number'
                            }}
                        >
                            edit
                        </span>}
                    </h1>
                    <h1 className='font-bold text-sm text-zinc-500 p-4 flex justify-between items-center hover:bg-gray-50' onMouseOver={() => setShowEdit5(true)} onMouseLeave={() => setShowEdit5(false)}>
                        <span>
                            Identification:&emsp;
                            <span className='text-base font-normal text-black'>{userInfo.admin ? 'Alumni Admin' : 'Alumni'}</span>
                        </span>
                    </h1>
                </div>
            </div>
            <div className='flex justify-end space-x-5'>
                <button className='px-2 md:px-5 py-2 border-2 border-tertiary hover:border-2 hover:border-primary rounded bg-secondary outline-none bg-opacity-10 mt-5 text-primary' type="button">Change password</button>
                {!saving ? <button
                    className='px-2 md:px-5 py-2 border-2 border-primary hover:border-2 hover:border-secondary rounded bg-primary hover:bg-secondary outline-none mt-5 text-white'
                    type="button"
                    onClick={() => {
                        setSaving(true)
                        setTimeout(() => {
                            setSaving(false)
                        }, 1000)
                    }}
                >
                    Save profile
                </button>
                :
                <button className='px-2 md:px-5 py-2 border-2 border-zinc-400 rounded bg-zinc-400 outline-none mt-5 text-white' type="button">
                    Saving...
                </button>}
            </div>
            {showProfilePicModal && <ChangeProfilePic
                handleInputChange={handleInputChange}
                updatedUserData={updatedUserData}
                validateFile={validateFile}
                setShowProfilePicModal={setShowProfilePicModal}
                uploading={uploading}
                setUpdatedUserData={setUpdatedUserData}
                userInfo={userInfo}
                image={image}
                changingElement={changingElement.current}
                changingElementPlaceholder={changingElementPlaceholder.current}
                setImage={setImage}
            />}


        </div>
    )
}

export default Profile

