import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'
import { useUsersStore } from '../stores/useUsersStore'

function Navbar() {

  const { user } = useUsersStore()
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <div className='flex justify-between pt-3 items-center'>

        <Link to={'/'}>
          <div className='flex justify-center items-center'>
            <div className="bg-[url('/logo.png')] h-10 md:h-20 w-10 md:w-20 bg-no-repeat bg-center bg-contain mr-2"></div>
            <div>
              <div className="md:text-4xl text-right font-bold">
                REMIX
              </div>
              <div className=" text-[8px] md:text-xs font-light text-right">
                ALUMNI NETWORK
              </div>
            </div>
          </div>

        </Link>

        <div className="md:hidden">
          <button
            className="p-2 text-black rounded-md outline-none "
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`flex justify-between items-center md:flex absolute z-50 top-28 md:relative md:top-0 w-full md:w-3/5 h-screen md:h-auto ${navbar ? 'block' : 'hidden'} space-y-2 md:space-y-0 bg-white md:bg-light p-24 md:p-0 rounded`}>

          <ul className={`md:flex absolute z-50 top-5 md:relative md:top-0 md:w-3/4 h-screen md:h-auto justify-evenly`}>
            <li className='border-b pb-2 md:pb-0'><Link to={'/'} className='hover:underline' onClick={()=>setNavbar(!navbar)}>Home</Link></li>
            <li className='border-b pb-2 md:pb-0'><Link to={'/about'} className='hover:underline'>About</Link></li>
            <li className='border-b pb-2 md:pb-0'><Link to={'/event'} className='hover:underline'>Events</Link></li>
            {/* <li className='border-b pb-2 md:pb-0'><Link to={'/opportunity'} className='hover:underline'>Opportunities</Link></li> */}
            <li className='border-b pb-2 md:pb-0'><Link to={'/alumnistories'} className='hover:underline'>Alumni Stories</Link></li>
          </ul>
          {user.email ?
            <UserProfile setNavbar={setNavbar} navbar={navbar} />
            :
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
          }
        </div >
      </div>
    </>
  )
}

export default Navbar