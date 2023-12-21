import React from 'react'
import '../index.css'
import { motion } from 'framer-motion'

const fadeInAnimationVariants1 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { type: 'spring', duration: 3, delay: 1 } },
}

const slideInAnimationVariants1 = {
    initial: { x: '8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}

const slideInAnimationVariants2 = {
    initial: { x: '8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 1 } },
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

function MemberSpotlight() {
    return (
        <div id='section3' className='md:pt-32 md:flex md:h-screen'>
            <div className='md:w-1/2 pt-32 text-center'>
                <div className='font-extrabold text-4xl md:text-7xl'>
                    <motion.h1
                    variants={slideInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    >Member</motion.h1>
                    <motion.h1
                    variants={slideInAnimationVariants2}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    >spotlight</motion.h1>
                </div>
                <motion.p
                variants={fadeInAnimationVariants1}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                 className='md:w-5/6 mx-auto text-left md:text-center pt-8 md:leading-6 md:tracking-wide'>
                Highlighted members have immensely contributed 
                to our community through their unique skills, passions, and impactful journeys. 
                Join us in celebrating them for making our community vibrant and extraordinary.
                </motion.p>
            </div>

            <div className='md:w-1/2 md:h-[80vh] relative flex flex-col mt-9 md:mt-0'>
                <div className='flex justify-evenly md:justify-between'>
                    <motion.div 
                    variants={scaleInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="hexagon h-32 w-1/3 md:h-72 md:w-72 overflow-hidden">
                        <div className="hexagon bg-[url('/member3.webp')] bg-center bg-cover bg-no-repeat h-full w-full hover:scale-105 ease-in-out transition-all duration-200">
                        <div className='bg-black w-full h-full bg-opacity-0 hover:bg-opacity-20 text-3xl font-bold text-white text-opacity-0 hover:text-opacity-100 flex justify-center items-center ease-in-out transition-all duration-200'>
                                Dylan Jones
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={scaleInAnimationVariants3}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="hexagon w-1/3 h-32 md:h-72 md:w-72 overflow-hidden">
                        <div className="hexagon bg-[url('/member2.webp')] bg-center bg-cover bg-no-repeat h-full w-full hover:scale-105 ease-in-out transition-all duration-200">
                            <div className='bg-black w-full h-full bg-opacity-0 hover:bg-opacity-20 text-3xl font-bold text-white text-opacity-0 hover:text-opacity-100 flex justify-center items-center ease-in-out transition-all duration-200'>
                                Mercy Kaitlyn
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                variants={scaleInAnimationVariants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="hexagon h-32 w-1/3 md:h-72 md:w-72 overflow-hidden mx-auto md:-mt-10">
                    <div className="hexagon bg-[url('/member1.webp')] bg-center bg-cover bg-no-repeat h-full w-full hover:scale-105 ease-in-out transition-all duration-200">
                    <div className='bg-black w-full h-full bg-opacity-0 hover:bg-opacity-20 text-3xl font-bold text-white text-opacity-0 hover:text-opacity-100 flex justify-center items-center ease-in-out transition-all duration-200'>
                                Julian Steve
                            </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default MemberSpotlight
