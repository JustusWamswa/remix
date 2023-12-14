import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'

function Layout({ children }) {
    return (
        <div className="max-w-[80%] mx-auto min-h-[100vh] relative pb-52">
            <Navbar />
            {children}
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default Layout