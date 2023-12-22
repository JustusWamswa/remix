import React from 'react'
import { motion } from 'framer-motion'

const slideInAnimationVariants1 = {
    initial: { x: '8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}
const slideInAnimationVariants3 = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}
const slideInAnimationVariants4 = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.5 } },
}
const slideInAnimationVariants5 = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.8 } },
}
const scaleInAnimationVariants1 = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}
const scaleInAnimationVariants2 = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.5 } },
}
const scaleInAnimationVariants3 = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.8 } },
}

function Pillars() {
    return (
        <div id='sectionAbout2' className='md:flex md:h-screen pt-16 md:pt-10'>
            <div className='md:w-1/2 md:pl-8'>
                <div className='font-extrabold text-4xl text-center md:text-7xl'>
                    <motion.h1
                        variants={slideInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >Our 3 Pillars</motion.h1>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className='w-8 h-5 bg-tertiary mr-16'></div>
                    <motion.div
                        variants={slideInAnimationVariants3}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h1 className='text-xl font-black text-tertiary pl-10 pb-6'>PURPOSE</h1>
                        <p>
                            To cultivate a vibrant and supportive ecosystem that celebrates the achievements and contributions of our esteemed alumni.
                        </p>
                    </motion.div>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className='w-8 h-5 bg-secondary mr-16'></div>
                    <motion.div
                        variants={slideInAnimationVariants4}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h1 className='text-xl font-black text-secondary pl-10 pb-6'>MISSION</h1>
                        <p>
                            To empower and engage alumni from diverse backgrounds, fostering a sense of belonging and pride in our shared heritage.                        </p>
                    </motion.div>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className='w-8 h-5 bg-primary mr-16'></div>
                    <motion.div
                        variants={slideInAnimationVariants5}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h1 className='text-xl font-black text-primary pl-10 pb-6'>VISION</h1>
                        <p>
                            To create a dynamic and global network of alumni who are leaders, innovators, and ambassadors for positive change.                        </p>
                    </motion.div>
                </div>
            </div>
            <div className='md:w-1/2 h-[30vh] md:h-[80vh] relative'>
                <motion.div
                    variants={scaleInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="border-[1rem] md:border-[2rem] border-primary w-32 md:w-80 mx-auto h-32 md:h-80 rounded-full absolute right-10 top-10"></motion.div>
                <motion.div
                    variants={scaleInAnimationVariants2}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="border-[1rem] md:border-[2rem] border-tertiary w-32 md:w-80 mx-auto h-32 md:h-80 rounded-full absolute right-[40%] translate-x-1/2 top-10"></motion.div>
                <motion.div
                    variants={scaleInAnimationVariants3}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="border-[1rem] md:border-[2rem] border-secondary w-32 md:w-80 mx-auto h-32 md:h-80 rounded-full absolute right-[25%] translate-x-1/2 bottom-10"></motion.div>
            </div>
        </div>
    )
}

export default Pillars