import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className="max-w-[80%] mx-auto min-h-[100vh] relative pb-16">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout