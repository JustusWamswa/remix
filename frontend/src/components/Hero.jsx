import React from 'react'

function Hero() {
    return (
        <div className='flex h-screen'>
            <div className='w-1/2 pt-32 text-center'>
                <div className='font-extrabold text-7xl'>
                    <h1>Collaborate</h1>
                    <h1>Connect</h1>
                    <h1>Meet</h1>
                </div>
                <p className='w-5/6 mx-auto text-center pt-8 leading-6 tracking-wide'>
                    Explore 'REMIX' where alumni unite across generations, sharing memories and successes.
                    Join our vibrant community, connecting for support and inspiration beyond boundaries.
                </p>
            </div>

            <div className='w-1/2 h-[80vh] pt-72 relative'>
                <div className='rotate-[27deg]'>
                    <div className='bg-secondary w-3/5 h-40 ml-24 absolute'></div>
                    <div className='bg-tertiary w-3/5 h-40 ml-40 mt-14 absolute z-10'></div>
                    <div className='bg-light w-3/5 h-40 ml-56 mt-28 z-20 absolute'></div>
                </div>
                <div className="bg-[url('/hero.png')] bg-no-repeat bg-center bg-contain w-full h-full absolute z-30 top-0"></div>
            </div>
        </div>
    )
}

export default Hero