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

const slideInAnimationVariants2 = {
    initial: { x: '8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}

function Quote() {
    return (
        <div id='section5' className='md:h-screen pt-32 md:pt-72 mb-32 md:mb-40'>
            <div className='md:w-2/3 text-center mx-auto'>
                <div className='font-extrabold text-4xl md:text-7xl'>
                    <motion.h1
                        variants={slideInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >Quote of the</motion.h1>
                    <motion.h1
                        variants={slideInAnimationVariants2}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >week</motion.h1>
                </div>
                <motion.p
                    variants={fadeInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='text-left md:text-center pt-8 md:leading-6 md:tracking-wide'>

                    Welcome to our weekly dose of inspiration! Each week, we handpick a
                    thought-provoking quote that encapsulates the essence of our community's
                    spirit. Get ready to kickstart your week with wisdom and motivation as we
                    present our Quote of the Week—a beacon of encouragement and reflection to
                    fuel your journey ahead.
                </motion.p>
            </div>

            <motion.div
                variants={fadeInAnimationVariants1}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='w-2/3 mx-auto md:h-[80vh] relative pt-7'>
                <div className="h-16 bg-[url('/left-quotes-sign.png')] bg-contain bg-no-repeat"></div>
                <h1 className='md:w-2/3 mx-auto py-5 text-primary text-2xl md:text-4xl'>
                    Take care of your body. It’s the only place you have to live.
                </h1>
                <h2 className='text-right w-2/3 mx-auto'>
                    - Jim Rohn
                </h2>
            </motion.div>
        </div>
    )
}

export default Quote