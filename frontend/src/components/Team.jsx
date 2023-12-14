import React from 'react'

function Team() {
    return (
        <div id='section4' className='h-screen'>
            <div className='w-2/3 text-center mx-auto'>
                <div className='font-extrabold text-7xl'>
                    <h1>The team</h1>
                </div>
                <p className='text-center pt-8 leading-6 tracking-wide'>
                    Explore 'REMIX' where alumni unite across generations, sharing memories and successes.
                    Join our vibrant community, connecting for support and inspiration beyond boundaries.
                </p>
            </div>

            <div className='w-2/3 mx-auto h-[80vh] relative flex flex-col pt-5'>
                <div className="h-4/5 bg-[url('/testimonial.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className='flex justify-end items-center h-2/5 bg-tertiary bg-opacity-20'>
                    <div className='w-3/5 flex justify-evenly'>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-12 w-12 flex justify-center items-center">
                                <div className="bg-[url('/light-bulb.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Powerful</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-12 w-12 flex justify-center items-center">
                                <div className="bg-[url('/star.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Informative</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-12 w-12 flex justify-center items-center">
                                <div className="bg-[url('/shield.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Resilient</p>
                        </div>

                    </div>
                </div>
                <div className="absolute bottom-8 left-8 h-3/5 w-1/3 bg-secondary p-3 flex flex-col justify-between">
                    <h2 className='text-tertiary font-bold'>Class of '17</h2>
                    <h1 className='text-white font-semibold'>PAMELA JOHNSON</h1>
                    <p className='text-white text-sm'>
                        To become a member lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at risus iaculis, commodo odio non, posuere felis.
                        Nunc consequat nunc in mollis maximus. Fusce nisl libero, dictum sed blandit eu, malesuada id libero
                    </p>
                    <div className='flex justify-between items-center w-4/5'>
                        <h3 className='text-white text-sm'>Contact Me</h3>
                        <p className='text-white text-lg'>|</p>
                        <div className="bg-[url('/facebook.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/instagram.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/linkedin.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/x.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team