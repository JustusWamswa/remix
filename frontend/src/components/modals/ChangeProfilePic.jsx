import React, { useState } from 'react'
import { updateUser } from '../../services/api'
import { useUsersStore } from '../../stores/useUsersStore'


function ChangeProfilePic(props) {

    const { handleInputChange, updatedUserData, validateFile, setShowProfilePicModal,
        setUpdatedUserData, userInfo, uploading, image, setImage, changingElement, changingElementPlaceholder } = props
    const { user, successfulUpdate, setSuccessfulUpdate } = useUsersStore()
    const [loading, setLoading] = useState(false)

    const handleSave = (e) => {
        e.preventDefault()
        setLoading(true)
        updateUser(updatedUserData, user.token)
            .then((response) => {
                console.log(response)
                setLoading(false)
                setSuccessfulUpdate(!successfulUpdate)
                setShowProfilePicModal(false)
            })
            .catch((error) => {
                console.error('Error updating user data: ', error)
                setLoading(false)
            })
    }

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div
                    className="absolute inset-0 bg-black opacity-60"
                    onClick={() => {
                        setShowProfilePicModal(false)
                        setUpdatedUserData(userInfo)
                        setImage('')
                    }}
                ></div>
                <div className="bg-white p-8 z-10 w-1/3 flex flex-col justify-center items-center space-y-8 rounded">
                    {changingElement == 'profilePicture' ? <div className=" flex flex-col space-y-4">
                        <label className='font-medium' htmlFor="profilePicture">Choose profile picture</label>
                        <input
                            type="file"
                            name="profilePicture"
                            placeholder="profilePicture"
                            value={image}
                            onChange={handleInputChange}
                            className=' border border-black p-2 w-full mb-2 rounded'
                        />
                        {validateFile ? <p className="text-red-500 text-xs">Images should be less than 2 MB</p> : null}
                        {uploading ? <p className="italic text-zinc-700 text-xs">Uploading...</p> : null}
                        {!uploading && image && !validateFile ?
                            <button
                                className='px-5 py-2 border-2 border-primary hover:border-2 hover:border-secondary rounded bg-primary hover:bg-secondary outline-none mt-5 text-white' type="button"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            : loading ?
                                <button disabled className='px-5 py-2 border-2 border-zinc-400 rounded bg-zinc-400 outline-none mt-5 text-white' type="button">Saving...</button>
                                :
                                <button disabled className='px-5 py-2 border-2 border-zinc-400 rounded bg-zinc-400 outline-none mt-5 text-white' type="button">Save</button>
                        }
                    </div> : <div className=" flex flex-col space-y-4">
                        <label className='font-medium' htmlFor={changingElement}>{changingElementPlaceholder}</label>
                        <input
                            type={changingElement == 'graduationYear' ? "date" : "text"}
                            name={changingElement}
                            placeholder={changingElementPlaceholder}
                            value={updatedUserData[changingElement]}
                            onChange={handleInputChange}
                            className=' border border-black p-2 w-full mb-2 rounded'
                        />
                        {updatedUserData[changingElement] ?
                            <button
                                className='px-5 py-2 border-2 border-primary hover:border-2 hover:border-secondary rounded bg-primary hover:bg-secondary outline-none mt-5 text-white' type="button"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            : loading ?
                                <button disabled className='px-5 py-2 border-2 border-zinc-400 rounded bg-zinc-400 outline-none mt-5 text-white' type="button">Saving...</button>
                                :
                                <button disabled className='px-5 py-2 border-2 border-zinc-400 rounded bg-zinc-400 outline-none mt-5 text-white' type="button">Save</button>
                        }
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default ChangeProfilePic