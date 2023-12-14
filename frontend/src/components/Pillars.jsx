import React from 'react'

function Pillars() {
    return (
        <div className='flex h-screen pt-10'>
            <div className='w-1/2 pl-8'>
                <div className='font-extrabold text-7xl'>
                    <h1>Our 3 Pillars</h1>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className='w-8 h-5 bg-tertiary mr-16'></div>
                    <div>
                        <h1 className='text-xl font-black text-tertiary pl-10 pb-6'>PURPOSE</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at risus iaculis, commodo odio non
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className='w-8 h-5 bg-secondary mr-16'></div>
                    <div>
                        <h1 className='text-xl font-black text-secondary pl-10 pb-6'>MISSION</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at risus iaculis, commodo odio non
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className='w-8 h-5 bg-primary mr-16'></div>
                    <div>
                        <h1 className='text-xl font-black text-primary pl-10 pb-6'>VISION</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at risus iaculis, commodo odio non
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-[80vh] relative'>
                <div className="border-[2rem] border-primary w-80 mx-auto h-80 rounded-full absolute right-10 top-10"></div>
                <div className="border-[2rem] border-tertiary w-80 mx-auto h-80 rounded-full absolute right-[65%] translate-x-1/2 top-10"></div>
                <div className="border-[2rem] border-secondary w-80 mx-auto h-80 rounded-full absolute right-[50%] translate-x-1/2 bottom-10"></div>
            </div>
        </div>
    )
}

export default Pillars