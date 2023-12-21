import React from 'react'

function EventHero() {
  return (
    <div className="w-full h-[80vh] bg-[url('/event.webp')] bg-center bg-cover bg-no-repeat flex justify-center items-center">
      <div className="w-2/3 h-2/3 bg-black bg-opacity-70">
        <h1 className='text-white font-medium text-5xl text-center tracking-wider pt-7'>FROM IDEA TO <br /> ENTERPRISE</h1>
        <div className='w-2/3 h-1/6 mt-7 bg-tertiary mx-auto text-primary text-2xl font-medium flex justify-center items-center'> February 22, 10:00 - 14:00</div>
        <h1 className='text-7xl text-white font-bold text-center mt-7'>2024</h1>
      </div>
    </div>
  )
}

export default EventHero