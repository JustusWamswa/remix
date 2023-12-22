import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <div id='section1' className='flex flex-col-reverse md:flex md:flex-row md:h-screen'>
            <div className='md:w-1/2 pt-8 md:pt-32 text-center'>
                <div className='font-extrabold text-4xl md:text-7xl'>
                    <motion.h1
                        initial={{ x: '-8vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.2 }}
                    >
                        Collaborate
                    </motion.h1>
                    <motion.h1
                        initial={{ x: '-8vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.5 }}
                    >
                        Connect
                    </motion.h1>
                    <motion.h1
                        initial={{ x: '-8vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.8 }}
                    >
                        Meet
                    </motion.h1>
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.8 }}
                    className='md:w-5/6 mx-auto text-left md:text-center pt-8 md:leading-6 md:tracking-wide'>
                    Explore 'REMIX' where alumni unite across generations, sharing memories and successes.
                    Join our vibrant community, connecting for support and inspiration beyond boundaries.
                </motion.p>
                <Link to={'/signup'}>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.8 }}
                        type='button' className='bg-primary w-2/5 mx-auto mt-5 md:mt-10 hover:bg-secondary text-white py-3 px-6 rounded'>Join</motion.button>
                </Link>
            </div>

            <div className='md:w-1/2 h-[40vh] md:h-[80vh] pt-28 md:pt-72 relative'>
                <div className='rotate-[27deg] mt-16 ml-12 md:mt-0 md:ml-0'>
                    <motion.div
                        initial={{ y: '2vh', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.8 }}
                        className='bg-secondary w-2/3 md:w-3/5 h-20 md:h-40 ml-4 md:ml-24 absolute'></motion.div>
                    <motion.div
                        initial={{ y: '3vh', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.5 }}
                        className='bg-tertiary w-2/3 md:w-3/5 h-20 md:h-40 ml-12 md:ml-40 mt-8 md:mt-14 absolute z-10'></motion.div>
                    <motion.div className='bg-light w-2/3 md:w-3/5 h-20 md:h-40 ml-20 md:ml-56 mt-16 md:mt-28 z-20 absolute'></motion.div>
                </div>
                <motion.div
                    initial={{ x: '10vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.2 }}
                    className="bg-[url('/hero.png')] bg-no-repeat bg-center bg-contain w-full h-full absolute z-30 top-0"></motion.div>
            </div>
        </div>
    )
}

export default Hero