import React from 'react'
import { Link } from 'react-router-dom'
import { eventData } from '../cache/data'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 3, delay: 0.2 } },
}
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

function UpcomingEvents() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }

    return (
        <div id='section2' className='flex flex-col-reverse md:flex-row md:h-screen mt-32 md:mt-0'>
            <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='md:w-1/2 px-10 py-10 h-[90%] bg-tertiary bg-opacity-20 mt-10 md:0'>
                <Slider {...settings}>
                    {eventData.map((item) => (
                        <div key={item.description} className='px-4 pb-4'>

                            <h1 className='font-semibold capitalize'>{item.title}</h1>
                            <h2 className='pb-5 pt-1 font-light text-sm'>{item.eventType}</h2>
                            <div
                                className="w-full h-48"
                                style={{
                                    backgroundImage: `url(${item.picture})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                            <div className='py-6'>
                                <p className='line-clamp-6 md:line-clamp-3'>{item.description}</p>
                            </div>
                            <div className='flex items-center mt-6'>
                                <div className="bg-[url('/location.png')] w-8 h-5 bg-center bg-contain bg-no-repeat mr-8"></div>
                                <h1 className='text-primary font-bold text-sm'>{item.location}</h1>
                            </div>
                            <div className='flex items-center mt-3'>
                                <div className="bg-[url('/calendar.png')] w-8 h-5 bg-center bg-contain bg-no-repeat mr-8"></div>
                                <h1 className='text-primary font-bold text-sm'>{item.date}</h1>
                            </div>
                            <div className='flex items-center mt-3'>
                                <div className="bg-[url('/user.jpg')] rounded-full w-8 h-8 bg-center bg-cover bg-no-repeat mr-8"></div>
                                <h1 className='text-primary font-bold text-sm'>{item.name}<br /> {item.organizer}</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            </motion.div>
            <div className='md:w-1/2 md:pt-32 text-center flex flex-col items-center'>
                <div className='font-extrabold text-4xl md:text-7xl'>
                    <motion.h1
                        variants={slideInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >Upcoming</motion.h1>
                    <motion.h1
                        variants={slideInAnimationVariants2}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >events</motion.h1>
                </div>
                <motion.p
                    variants={fadeInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='md:w-5/6 mx-auto text-left md:text-center pt-8 md:leading-6 md:tracking-wide'>
                    Stay in the loop and mark your calendar with our upcoming events!
                    From informative webinars to exciting community gatherings, our events page
                    is your go-to source for the latest happenings. Don't miss out on opportunities to
                    connect, learn, and engage with our dynamic community.
                </motion.p>
                <Link to={'/event'}>
                    <motion.h1
                        variants={fadeInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className='bg-primary hover:bg-secondary text-white py-3 px-6 md:px-20 mt-14 mx-auto md:w-full rounded'>See more</motion.h1>
                </Link>
            </div>
        </div>
    )
}

export default UpcomingEvents