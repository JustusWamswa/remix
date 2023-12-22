import React from 'react'


function DeleteAlert(props) {
    const { message, setAlert, id, handleDelete } = props

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-60"
                onClick={() => setAlert(false)}
            ></div>
            <div className="bg-white p-8 z-10 w-1/3 flex flex-col justify-center items-center rounded">
                <div className="w-20 h-20 bg-[url('/cautionRed.png')] bg-contain bg-center bg-no-repeat"></div>
                <h1 className='mb-3 font-medium py-7'>{message}!</h1>
                <div className='flex w-full justify-center'>
                    <button
                        className='w-1/3 bg-primary bg-opacity-0 py-2 text-primary outline-none border border-primary rounded'
                        onClick={() => setAlert(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className='w-1/3 bg-red-500 py-2 text-white ml-4 rounded'
                        onClick={() => {
                            handleDelete(id)
                            setAlert(false)
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAlert
