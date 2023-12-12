import React from 'react'
import { Link } from 'react-router-dom'

function UpcomingEvents() {
    return (
        <div className='flex h-screen'>
            <div className='w-1/2 p-7 h-4/5 bg-tertiary bg-opacity-20'>
                <h1 className='font-semibold'>FIRESIDE CHAT AT MOLINEAUX</h1>
                <h2 className='pb-5 pt-1 font-light text-sm'>Networking</h2>
                <div className="w-full h-2/5 bg-[url('/people.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className='py-6'>
                    <p className='line-clamp-3'>
                        Join us for an intimate fireside chat event, where industry leaders will engage in candid
                        conversations about their journeys, insights, and the lessons learned along the way.
                        This exclusive gathering offers a unique opportunity fireside chat event, where industry leaders will engage in candid
                        fireside chat event, where industry leaders will engage in candid...
                    </p>
                </div>
                <div className='flex items-center mt-6'>
                    <div className="bg-[url('/location.png')] w-8 h-5 bg-center bg-contain bg-no-repeat mr-8"></div>
                    <h1 className='text-primary font-bold text-sm'>Molineaux</h1>
                </div>
                <div className='flex items-center mt-3'>
                    <div className="bg-[url('/calendar.png')] w-8 h-5 bg-center bg-contain bg-no-repeat mr-8"></div>
                    <h1 className='text-primary font-bold text-sm'>31 October 2023, 1100 - 1500 hrs</h1>
                </div>
                <div className='flex items-center mt-3'>
                    <div className="bg-[url('/user.jpg')] rounded-full w-8 h-8 bg-center bg-cover bg-no-repeat mr-8"></div>
                    <h1 className='text-primary font-bold text-sm'>Mary Jane, 15' <br /> Organiser</h1>
                </div>
            </div>
            <div className='w-1/2 pt-32 text-center flex flex-col items-center'>
                <div className='font-extrabold text-7xl'>
                    <h1>Upcoming</h1>
                    <h1>events</h1>
                </div>
                <Link to={'/signup'}>
                    <h1 className='bg-primary hover:bg-secondary text-white py-3 px-20 mt-14 w-full'>See more</h1>
                </Link>
            </div>
        </div>
    )
}

export default UpcomingEvents