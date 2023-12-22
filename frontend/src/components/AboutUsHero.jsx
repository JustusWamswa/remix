import React from 'react'
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
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}

function AboutUsHero() {
    return (
        <div id='sectionAbout1' className='md:flex md:h-screen'>
            <div className='md:w-1/2 h-[40vh] md:h-[80vh] pt-10 md:pt-20'>
                <motion.div 
                variants={slideInAnimationVariants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-[url('/about.jpg')] bg-no-repeat bg-center bg-cover md:w-4/5 mx-auto h-full"></motion.div>
            </div>
            <div className='md:w-1/2 pt-16 md:pt-52 text-center'>
                <div className='font-extrabold text-4xl md:text-7xl'>
                    <motion.h1
                    variants={slideInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    >About Us</motion.h1>
                </div>
                <motion.p 
                variants={fadeInAnimationVariants1}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='md:w-5/6 mx-auto text-left md:text-center pt-5 md:pt-8 leading-6 tracking-wide'>
                    Welcome to our Alumni Hub, where memories converge and connections endure.
                    As a collective of accomplished individuals, our alumni community is a testament
                    to the enduring spirit of excellence, fostering a network that transcends time and
                    continues to inspire success.
                </motion.p>
            </div>
        </div>
    )
}

export default AboutUsHero