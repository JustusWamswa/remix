import React from 'react'

function AboutUsHero() {
    return (
        <div className='flex h-screen'>
            <div className='w-1/2 h-[80vh] pt-20'>
                <div className="bg-[url('/about.jpg')] bg-no-repeat bg-center bg-cover w-4/5 mx-auto h-full"></div>
            </div>
            <div className='w-1/2 pt-52 text-center'>
                <div className='font-extrabold text-7xl'>
                    <h1>About Us</h1>
                </div>
                <p className='w-5/6 mx-auto text-center pt-8 leading-6 tracking-wide'>
                    Explore 'REMIX' where alumni unite across generations, sharing memories and successes.
                    Join our vibrant community, connecting for support and inspiration beyond boundaries.
                </p>
            </div>
        </div>
    )
}

export default AboutUsHero