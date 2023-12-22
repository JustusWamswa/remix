import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeInAnimationVariants1 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { type: 'spring', duration: 3, delay: 1 } },
}
const slideInAnimationVariants1 = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}
const slideInAnimationVariants2 = {
    initial: { x: '8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}

function AlumComm() {
    return (
        <div id='sectionAbout4' className='md:flex md:h-screen pt-10'>
            <div className='md:w-1/2 md:pt-52 text-center md:border-r-2 border-black'>
                <div className='font-extrabold text-4xl md:text-7xl'>
                    <motion.h1
                        variants={slideInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >Alumni</motion.h1>
                    <motion.h1
                        variants={slideInAnimationVariants2}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >community</motion.h1>
                </div>
                <motion.p
                    variants={fadeInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='md:w-5/6 mx-auto text-left md:text-center pt-8 leading-6 tracking-wide'>
                    Step into our Alumni Community—a dynamic network where shared experiences
                    and achievements weave a tapestry of connections beyond graduation. Together,
                    we celebrate excellence, foster collaboration, and inspire one another on our remarkable journeys.
                </motion.p>
            </div>
            <motion.div
                variants={fadeInAnimationVariants1}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='md:w-1/2 md:h-[80vh]'>
                <div className="">
                    <h1 className='text-secondary text-lg font-medium pb-2 pt-10 md:pt-0 md:pl-5 md:pb-5'>MEMBERSHIP INFO</h1>
                    <ul className='m-0 pl-5 md:pl-10 list-disc'>
                        <li>Eligibility criteria - must have graduated from Remix College </li>
                        <li>Annual membership fee - 12 USD</li>
                        <li>Register using the ‘Join’ or ‘Register’ buttons provided</li>
                        <li>Membership approved upon confirmation of details  </li>
                        <li>Enjoy the benefits of being a member of Remix</li>
                    </ul>
                    <Link to={'/signup'}>
                        <h1 className='bg-primary hover:bg-secondary text-white text-center py-3 px-20 mt-8 w-2/3 md:ml-5 rounded'>Register</h1>
                    </Link>
                </div>
                <div className="">
                    <h1 className='text-secondary text-lg font-medium pb-2 pt-10 md:pt-5 md:pl-5 md:pb-5'>BENEFITS</h1>
                    <ul className='m-0 pl-5 md:pl-10 list-disc'>
                        <li>Networking Opportunities </li>
                        <li>Stay Informed</li>
                        <li>Professional Development</li>
                        <li>Exclusive Events</li>
                        <li>Lifelong Connections</li>
                    </ul>
                </div>
                <div className="">
                    <h1 className='text-secondary text-lg font-medium pb-2 pt-10 md:pt-0 md:pl-5 md:pb-5'>CONTACT US</h1>
                    <div className='flex justify-between md:justify-around items-center md:w-4/5'>
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
            </motion.div>
        </div>
    )
}

export default AlumComm