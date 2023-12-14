import React from 'react'
import { Link } from 'react-router-dom'

function AlumComm() {
    return (
        <div className='flex h-screen pt-10'>
            <div className='w-1/2 pt-52 text-center border-r-2 border-black'>
                <div className='font-extrabold text-7xl'>
                    <h1>Alumni</h1>
                    <h1>community</h1>
                </div>
                <p className='w-5/6 mx-auto text-center pt-8 leading-6 tracking-wide'>
                    Explore 'REMIX' where alumni unite across generations, sharing memories and successes.
                    Join our vibrant community, connecting for support and inspiration beyond boundaries.
                </p>
            </div>
            <div className='w-1/2 h-[80vh]'>
                <div className="">
                    <h1 className='text-secondary text-lg font-medium pl-5 pb-5'>MEMBERSHIP INFO</h1>
                    <ul className='m-0 pl-10 list-disc'>
                        <li>Eligibility criteria - must have graduated from Remix College </li>
                        <li>Annual membership fee - 12 USD</li>
                        <li>Register using the ‘Join’ or ‘Register’ buttons provided</li>
                        <li>Membership approved upon confirmation of details  </li>
                        <li>Enjoy the benefits of being a member of Remix</li>
                    </ul>
                    <Link to={'/signup'}>
                        <h1 className='bg-primary hover:bg-secondary text-white text-center py-3 px-20 mt-8 w-2/3 ml-5'>Register</h1>
                    </Link>
                </div>
                <div className="">
                    <h1 className='text-secondary text-lg font-medium pl-5 py-5'>BENEFITS</h1>
                    <ul className='m-0 pl-10 list-disc'>
                        <li>Eligibility criteria - must have graduated from Remix College </li>
                        <li>Annual membership fee - 12 USD</li>
                        <li>Register using the ‘Join’ or ‘Register’ buttons provided</li>
                        <li>Membership approved upon confirmation of details  </li>
                        <li>Enjoy the benefits of being a member of Remix</li>
                    </ul>
                </div>
                <div className="">
                    <h1 className='text-secondary text-lg font-medium pl-5 py-5'>CONTACT US</h1>
                    <div className='flex justify-around items-center w-4/5'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-5 h-5 bg-[url('/address.png')] bg-center bg-contain bg-no-repeat mb-4"></div>
                            <p className='text-center'>
                                P.M. Rd, Mauritius
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-5 h-5 bg-[url('/phone.png')] bg-center bg-contain bg-no-repeat mb-4"></div>
                            <p className='text-center'>
                                345 674 534
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-5 h-5 bg-[url('/email.png')] bg-center bg-contain bg-no-repeat mb-4"></div>
                            <p className='text-center'>
                                remix@info.org
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlumComm