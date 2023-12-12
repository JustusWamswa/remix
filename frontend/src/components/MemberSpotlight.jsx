import React from 'react'
import '../index.css'

function MemberSpotlight() {
    return (
        <div className='flex h-screen'>
            <div className='w-1/2 pt-32 text-center'>
                <div className='font-extrabold text-7xl'>
                    <h1>Member</h1>
                    <h1>spotlight</h1>
                </div>
                <p className='w-5/6 mx-auto text-center pt-8 leading-6 tracking-wide'>
                    Explore 'REMIX' where alumni unite across generations, sharing memories and successes.
                    Join our vibrant community, connecting for support and inspiration beyond boundaries.
                </p>
            </div>

            <div className='w-1/2 h-[80vh] relative flex flex-col'>
                <div className='flex justify-between'>
                    <div className="hexagon bg-[url('/member3.jpg')] bg-center bg-cover bg-no-repeat h-72 w-72">

                    </div>
                    <div className="hexagon bg-[url('/member2.jpg')] bg-center bg-cover bg-no-repeat h-72 w-72">

                    </div>
                </div>
                <div className="hexagon bg-[url('/member1.jpg')] bg-center bg-cover bg-no-repeat h-72 w-72 mx-auto -mt-10">

                </div>
            </div>
        </div>
    )
}

export default MemberSpotlight
