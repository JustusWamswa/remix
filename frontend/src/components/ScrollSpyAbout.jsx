// src/components/ScrollSpy.js
import React, { useState, useEffect } from 'react'
import '../index.css'



const ScrollSpyAbout = () => {
    const [activeSection, setActiveSection] = useState(null)
    const[allSections, setAllSections] = useState([])

    const handleScroll = () => {
        const scrollPosition = window.scrollY

        const sections = [
            document.getElementById('sectionAbout1'),
            document.getElementById('sectionAbout2'),
            document.getElementById('sectionAbout3'),
            document.getElementById('sectionAbout4'),
            document.getElementById('sectionAbout5')
        ]
        setAllSections(sections)
        // Determine the active section based on scroll position
        let active = null
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 96
            const sectionBottom = sectionTop + section.clientHeight

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                active = section.id
            }
        })

        setActiveSection(active)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    return (
        <div className="scroll-spy hidden md:block">
            {allSections.map((section) => (
                <ul>
                    <li className={activeSection === section.id ? 'active' : 'bg-white w-4 h-4 rounded-full'}></li>
                </ul>
            ))}
        </div>
    )
}

export default ScrollSpyAbout
