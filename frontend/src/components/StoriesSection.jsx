import React from 'react'
import { motion } from 'framer-motion'

const fadeInAnimationVariants1 = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { type: 'spring', duration: 2, delay: 0.5 } },
}

const slideInAnimationVariants1 = {
    initial: { x: '8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 2, delay: 0.2 } },
}

const slideInAnimationVariants2 = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 2, delay: 0.2 } },
}

function StoriesSection() {
    return (
        <div id='section4' className='pt-24 md:pt-10'>
            <div className='md:w-2/3 text-center mx-auto'>
                <div className='font-extrabold text-4xl md:text-7xl'>
                    <motion.h1
                        variants={slideInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >Insights from our own</motion.h1>
                </div>
                <motion.p
                    variants={fadeInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='text-left md:text-center pt-8 pb-4 leading-6 tracking-wide'>
                    Discover the remarkable tales of our alumni - a mosaic of diverse journeys, triumphs, and resilience.
                    Join us as we celebrate the unique stories that bind our community together
                </motion.p>
            </div>

            <motion.div
                id='sectionStories2'
                variants={slideInAnimationVariants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='md:w-2/3 mx-auto h-[65vh] md:h-[80vh] relative flex flex-col pt-5'>
                <div className="h-4/5 bg-[url('/eric.webp')] bg-cover bg-center bg-no-repeat"></div>
                <div className='flex justify-end items-center h-2/5 bg-tertiary bg-opacity-20'>
                    <div className='w-full md:w-3/5 flex justify-evenly'>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/light-bulb.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Innovative</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/star.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Thoughtful</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/shield.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Courageous</p>
                        </div>

                    </div>
                </div>
                <div className="md:absolute bottom-8 left-8 md:h-3/5 md:w-1/3 bg-secondary p-3 flex flex-col justify-between">
                    <h2 className='text-tertiary font-bold'>Class of '20</h2>
                    <h1 className='text-white font-semibold'>ERIC PALMER</h1>
                    <p className='text-white text-sm'>

                        Eric, a recent graduate, navigated our alumni platform to connect with seasoned professionals in
                        his field, gaining valuable insights that propelled his career. Through engaging webinars and networking
                        events, he found a supportive community that not only broadened his professional horizons but also provided
                        mentorship opportunities for his ongoing growth.
                    </p>
                    <div className='flex justify-between items-center w-4/5'>
                        <h3 className='text-white text-sm'>Contact Me</h3>
                        <p className='text-white text-lg'>|</p>
                        <div className="bg-[url('/facebook.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/instagram.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/linkedin.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/x.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                id='sectionStories3'
                variants={slideInAnimationVariants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='md:w-2/3 mx-auto h-[65vh] md:h-[80vh] relative flex flex-col pt-5 mt-10'>
                <div className="h-4/5 bg-[url('/testimonial.webp')] bg-cover bg-center bg-no-repeat"></div>
                <div className='flex justify-end items-center h-2/5 bg-tertiary bg-opacity-20'>
                    <div className='w-full md:w-3/5 flex justify-evenly'>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/light-bulb.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Powerful</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/star.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Informative</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/shield.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Resilient</p>
                        </div>

                    </div>
                </div>
                <div className="md:absolute bottom-8 left-8 md:h-3/5 md:w-1/3 bg-secondary p-3 flex flex-col justify-between">
                    <h2 className='text-tertiary font-bold'>Class of '17</h2>
                    <h1 className='text-white font-semibold'>PAMELA JOHNSON</h1>
                    <p className='text-white text-sm'>
                        Joining this community has been a game-changer for me! The wealth of knowledge and support is unparalleled.
                        From collaborative projects to insightful discussions, I've found an invaluable network that has not only expanded
                        my skills but also enriched my professional journey. Grateful to be part of such a vibrant and empowering community!
                    </p>
                    <div className='flex justify-between items-center w-4/5'>
                        <h3 className='text-white text-sm'>Contact Me</h3>
                        <p className='text-white text-lg'>|</p>
                        <div className="bg-[url('/facebook.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/instagram.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/linkedin.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/x.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                id='sectionStories4'
                variants={slideInAnimationVariants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='md:w-2/3 mx-auto h-[65vh] md:h-[80vh] relative flex flex-col pt-5 mt-10'>
                <div className="h-4/5 bg-[url('/dawson.webp')] bg-cover bg-center bg-no-repeat"></div>
                <div className='flex justify-end items-center h-2/5 bg-tertiary bg-opacity-20'>
                    <div className='w-full md:w-3/5 flex justify-evenly'>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/light-bulb.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Inspired</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/star.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Proactive</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/shield.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Patient</p>
                        </div>

                    </div>
                </div>
                <div className="md:absolute bottom-8 left-8 md:h-3/5 md:w-1/3 bg-secondary p-3 flex flex-col justify-between">
                    <h2 className='text-tertiary font-bold'>Class of '12</h2>
                    <h1 className='text-white font-semibold'>MASON DAWSON</h1>
                    <p className='text-white text-sm'>

                        Mason, an established entrepreneur, leveraged the alumni network to share insights from their successful business journey, inspiring
                        fellow graduates and fostering a spirit of collaboration. By participating in industry-specific forums and events, Mason continues to
                        contribute to the community while staying abreast of the latest trends in their field.
                    </p>
                    <div className='flex justify-between items-center w-4/5'>
                        <h3 className='text-white text-sm'>Contact Me</h3>
                        <p className='text-white text-lg'>|</p>
                        <div className="bg-[url('/facebook.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/instagram.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/linkedin.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/x.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                id='sectionStories5'
                variants={slideInAnimationVariants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='md:w-2/3 mx-auto h-[65vh] md:h-[80vh] relative flex flex-col pt-5 mt-10'>
                <div className="h-4/5 bg-[url('/claire.webp')] bg-cover bg-center bg-no-repeat"></div>
                <div className='flex justify-end items-center h-2/5 bg-tertiary bg-opacity-20'>
                    <div className='w-full md:w-3/5 flex justify-evenly'>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/light-bulb.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Creative</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/star.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Focused</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className="rounded-full bg-tertiary bg-center bg-contain bg-no-repeat h-8 w-8 flex justify-center items-center">
                                <div className="bg-[url('/shield.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
                            </div>
                            <p className='text-sm font-bold pt-3'>Understanding</p>
                        </div>

                    </div>
                </div>
                <div className="md:absolute bottom-8 left-8 md:h-3/5 md:w-1/3 bg-secondary p-3 flex flex-col justify-between">
                    <h2 className='text-tertiary font-bold'>Class of '19</h2>
                    <h1 className='text-white font-semibold'>CLAIRE ROSE</h1>
                    <p className='text-white text-sm'>
                        Claire, a mid-career professional, discovered new career opportunities through the alumni job portal and secured
                        a leadership role in a company founded by a fellow graduate. The connections made within the alumni network not
                        only accelerated Claire's career but also forged lasting partnerships that continue to thrive.
                    </p>
                    <div className='flex justify-between items-center w-4/5'>
                        <h3 className='text-white text-sm'>Contact Me</h3>
                        <p className='text-white text-lg'>|</p>
                        <div className="bg-[url('/facebook.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/instagram.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/linkedin.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                        <div className="bg-[url('/x.png')] bg-center bg-contain bg-no-repeat h-4 w-4"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default StoriesSection