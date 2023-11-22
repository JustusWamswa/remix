import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='flex justify-between pt-3 items-center'>

        <Link to={'/'}>
          <div className='flex justify-center items-center'>
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

        </Link>

        <ul className='flex w-5/12 justify-evenly'>
          <li><Link to={'/'} className='hover:underline'>Home</Link></li>
          <li><Link to={'/about'} className='hover:underline'>About</Link></li>
          <li><Link to={'/event'} className='hover:underline'>Events</Link></li>
          <li><Link to={'/opportunity'} className='hover:underline'>Opportunities</Link></li>
          <li><Link to={'/opportunity'} className='hover:underline'>Alumni Stories</Link></li>
        </ul>

        <ul className='flex justify-evenly items-center'>
          <li>
            <Link to={'/login'} className='mr-8 hover:underline'>
              Login
            </Link>
          </li>
          <li>
            <Link to={'/signup'}>
              <h1 className='bg-primary hover:bg-secondary text-white py-2 px-6'>Join</h1>
            </Link>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Navbar