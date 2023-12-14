import React from 'react'

function Footer() {
  return (
    <>
      <div className='text-center w-full absolute bottom-0'>
        <div className='flex justify-center items-center -ml-8'>
          <div className="bg-[url('/logo.png')] h-20 w-20 bg-no-repeat bg-center bg-contain mr-2"></div>
          <div>
            <div className="text-4xl font-bold">
              REMIX
            </div>
            <div className="text-xs font-light text-right">
              ALUMNI NETWORK
            </div>
          </div>
        </div>
        Copyright &copy; 2023 Remix, Org.
        <div className='flex justify-center'>
          <h1 className='underline'>Legal</h1>
          <h1 className=''>&nbsp;|&nbsp;</h1>
          <h1 className='underline'>Privacy Policy</h1>
          <h1 className=''>&nbsp;|&nbsp;</h1>
          <h1 className='underline'>Security</h1>
        </div>
      </div>
    </>
  )
}

export default Footer   