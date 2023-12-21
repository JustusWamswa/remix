import React from 'react'


function Alert(props) {
    const { message, setAlert } = props

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-60"
                onClick={() => setAlert(false)}
            ></div>
            <div className="bg-white p-8 z-10 w-1/3 flex flex-col justify-center items-center">
                <div className="w-20 h-20 bg-[url('/caution.png')] bg-contain bg-center bg-no-repeat"></div>
                <h1 className='mb-3 font-medium py-7'>{message}!</h1>
                <button 
                className='w-1/3 bg-primary py-2 text-white'
                onClick={() => setAlert(false)}
                >
                    Return
                </button>
            </div>
        </div>
    )
}

export default Alert
