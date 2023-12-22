import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeInAnimationVariants1 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { type: 'spring', duration: 3, delay: 1 } },
}

const slideInAnimationVariants1 = {
    initial: { x: '8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}

const slideInAnimationVariants2 = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}

function StoriesHero() {
    return (
        <div id='sectionStories1' className='md:flex md:h-screen'>
            <div className='md:w-1/2 h-[40vh] md:h-[80vh] pt-10 md:pt-20'>
                <motion.div
                    variants={slideInAnimationVariants2}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="bg-[url('/stories.webp')] bg-no-repeat bg-center bg-cover md:w-4/5 mx-auto h-full"></motion.div>
            </div>
            <div className='md:w-1/2 pt-16 md:pt-40 text-center'>
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
                    >stories</motion.h1>
                </div>
                <motion.p
                    variants={fadeInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='md:w-5/6 mx-auto text-left md:text-center pt-5 md:pt-8 leading-6 tracking-wide'>
                    Dive into the compelling stories of our alumni—a collection of inspiring narratives that
                    showcase diverse paths, triumphs, and resilience. Join us in celebrating the extraordinary
                    journeys that define our vibrant community.
                </motion.p>
                <motion.h1
                    variants={fadeInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className=' py-3 px-6 md:px-20 mt-14 mx-auto md:w-3/5 rounded border border-primary'>Reach out to feature</motion.h1>
            </div>
        </div>
    )
}

export default StoriesHero