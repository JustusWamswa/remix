import React from 'react'
import { Link } from 'react-router-dom'
import { eventData } from '../cache/data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UpcomingEvents() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }

    return (
        <div id='section2' className='flex h-screen'>
            <div className='w-1/2 p-7 h-4/5 bg-tertiary bg-opacity-20'>
                <Slider {...settings}>
                    {eventData.map((item) => (
                        <div key={item.description}>

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
                                <p className='line-clamp-3'>{item.description}</p>
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
            </div>
            <div className='w-1/2 pt-32 text-center flex flex-col items-center'>
                <div className='font-extrabold text-7xl'>
                    <h1>Upcoming</h1>
                    <h1>events</h1>
                </div>
                <Link to={'/signup'}>
                    <h1 className='bg-primary hover:bg-secondary text-white py-3 px-20 mt-14 w-full'>See more</h1>
                </Link>
            </div>
        </div>
    )
}

export default UpcomingEvents