import React, { useState, useEffect } from 'react';
import '../index.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scrolling and show/hide the button
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 100);
    };

    // Function to scroll to the top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Add a scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <div className="rounded-full bg-tertiary bg-opacity-30 bg-center bg-contain bg-no-repeat h-12 w-12 flex justify-center items-center">
                <div className="bg-[url('/top.png')] bg-center bg-contain bg-no-repeat h-1/2 w-1/2"></div>
            </div>
        </div>
    );
};

export default ScrollToTopButton;
