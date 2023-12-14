import React from 'react'

function Quote() {
    return (
        <div id='section5' className='h-screen pt-32'>
            <div className='w-2/3 text-center mx-auto'>
                <div className='font-extrabold text-7xl'>
                    <h1>Quote of the</h1>
                    <h1>week</h1>
                </div>
                <p className='text-center pt-8 leading-6 tracking-wide'>
                    Explore 'REMIX' where alumni unite across generations, sharing memories and successes.
                    Join our vibrant community, connecting for support and inspiration beyond boundaries.
                </p>
            </div>

            <div className='w-2/3 mx-auto h-[80vh] relative pt-7'>
                <div className="h-16 bg-[url('/left-quotes-sign.png')] bg-contain bg-no-repeat"></div>
                <h1 className='w-2/3 mx-auto py-5 text-primary text-4xl'>
                Take care of your body. It’s the only place you have to live.
                </h1>
                <h2 className='text-right w-2/3 mx-auto'>
                    - Jim Rohn
                </h2>
            </div>
        </div>
    )
}

export default Quote