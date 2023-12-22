import React from 'react'
import { motion } from 'framer-motion'

const fadeInAnimationVariants1 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { type: 'spring', duration: 3, delay: 1 } },
}
const slideInAnimationVariants1 = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
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

function Team() {
    return (
        <div id='sectionAbout3' className='pt-16 md:pt-0 md:h-screen'>
            <div className='md:w-2/3 text-center mx-auto'>
                <div className='font-extrabold text-4xl md:text-7xl'>
                    <motion.h1
                        variants={slideInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >The team</motion.h1>
                </div>
                <motion.p
                    variants={fadeInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='text-center pt-8 leading-6 tracking-wide'>
                    Meet the passionate individuals behind the scenes, dedicated
                    to shaping and sustaining the vibrant community of our alumni.
                    Our team is driven by a shared commitment to fostering connections,
                    providing valuable resources, and curating experiences that resonate with
                    the diverse journeys of our esteemed alumni.
                </motion.p>
            </div>

            <div className='md:w-4/5 mx-auto md:h-[80vh] relative md:flex pt-16'>
                <motion.div
                    variants={scaleInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='md:w-1/3 h-[45vh] md:h-full relative mb-40 md:mb-0'>
                    <div className="rounded-full h-32 w-32 border-8 border-light overflow-hidden absolute left-[50%] -translate-x-1/2 -top-16 md:-top-0">
                        <div className="rounded-full bg-[url('/teamM1.webp')] bg-center bg-cover bg-no-repeat h-full w-full hover:scale-105 ease-in-out transition-all duration-200"></div>
                    </div>
                    <div className="h-full md:h-2/3 w-4/5 mx-auto bg-secondary p-3 pt-20 mt-[8vh] flex flex-col justify-between">
                        <h2 className='text-tertiary font-bold'>Class of '12</h2>
                        <div>
                            <h1 className='text-white font-semibold uppercase'>Sarah Rodriguez</h1>
                            <h2 className='text-tertiary text-xs'>Alumni Engagement Coordinator</h2>
                        </div>
                        <p className='text-white text-sm'>
                            Sarah, our Alumni Engagement Coordinator, orchestrates events, ensuring our community remains a vibrant hub of collaboration and support.
                        </p>
                        <div className='flex justify-center items-center mx-auto w-4/5'>
                            <div className="bg-[url('/facebook.png')] bg-center bg-contain bg-no-repeat h-4 w-4 mr-3"></div>
                            <div className="bg-[url('/instagram.png')] bg-center bg-contain bg-no-repeat h-4 w-4 mr-3"></div>
                            <div className="bg-[url('/linkedin.png')] bg-center bg-contain bg-no-repeat h-4 w-4 mr-3"></div>
                            <div className="bg-[url('/x.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleInAnimationVariants2}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='md:w-1/3 h-[45vh] md:h-full relative mb-40 md:mb-0'>
                    <div className="rounded-full h-32 w-32 border-8 border-light overflow-hidden absolute left-[50%] -translate-x-1/2 -top-16 md:-top-0">
                        <div className="rounded-full bg-[url('/teamM2.webp')] bg-center bg-cover bg-no-repeat h-full w-full hover:scale-105 ease-in-out transition-all duration-200"></div>
                    </div>
                    <div className="h-full md:h-2/3 w-4/5 mx-auto bg-secondary p-3 pt-20 mt-[8vh] flex flex-col justify-between">
                        <h2 className='text-tertiary font-bold'>Class of '10</h2>
                        <div>
                            <h1 className='text-white font-semibold uppercase'>Jennifer Lee</h1>
                            <h2 className='text-tertiary text-xs'> Events Coordinator</h2>
                        </div>
                        <p className='text-white text-sm'>
                            Jennifer, our Events Coordinator, crafts memorable gatherings that strengthen alumni bonds with meticulous planning and attention to detail.
                        </p>
                        <div className='flex justify-center items-center mx-auto w-4/5'>
                            <div className="bg-[url('/facebook.png')] bg-center bg-contain bg-no-repeat h-4 w-4 mr-3"></div>
                            <div className="bg-[url('/instagram.png')] bg-center bg-contain bg-no-repeat h-4 w-4 mr-3"></div>
                            <div className="bg-[url('/linkedin.png')] bg-center bg-contain bg-no-repeat h-4 w-4 mr-3"></div>
                            <div className="bg-[url('/x.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleInAnimationVariants3}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='md:w-1/3 h-[45vh] md:h-full relative mb-20 md:mb-0'>
                    <div className="rounded-full h-32 w-32 border-8 border-light overflow-hidden absolute left-[50%] -translate-x-1/2 -top-16 md:-top-0">
                        <div className="rounded-full bg-[url('/teamM3.webp')] bg-center bg-cover bg-no-repeat h-full w-full hover:scale-105 ease-in-out transition-all duration-200"></div>
                    </div>
                    <div className="h-full md:h-2/3 w-4/5 mx-auto bg-secondary p-3 pt-20 mt-[8vh] flex flex-col justify-between">
                        <h2 className='text-tertiary font-bold'>Class of '07</h2>
                        <div>
                            <h1 className='text-white font-semibold uppercase'>Alex Turner</h1>
                            <h2 className='text-tertiary text-xs'> Digital Outreach Specialist</h2>
                        </div>
                        <p className='text-white text-sm'>
                            Alex, our Digital Outreach Specialist, bridges alumni globally through innovative online strategies, ensuring a connected and engaged community.
                        </p>
                        <div className='flex justify-center items-center mx-auto w-4/5'>
                            <div className="bg-[url('/facebook.png')] bg-center bg-contain bg-no-repeat h-4 w-4 mr-3"></div>
                            <div className="bg-[url('/instagram.png')] bg-center bg-contain bg-no-repeat h-4 w-4 mr-3"></div>
                            <div className="bg-[url('/linkedin.png')] bg-center bg-contain bg-no-repeat h-4 w-4 mr-3"></div>
                            <div className="bg-[url('/x.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Team