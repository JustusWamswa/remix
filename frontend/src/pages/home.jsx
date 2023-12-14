import React from 'react'
import Hero from '../components/Hero'
import UpcomingEvents from '../components/UpcomingEvents'
import MemberSpotlight from '../components/MemberSpotlight'
import Testimonials from '../components/Testimonials'
import Quote from '../components/Quote'
import ScrollSpy from '../components/ScrollSpy'

function home() { 
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <MemberSpotlight />
      <Testimonials />
      <Quote />
      <ScrollSpy />
    </>
  )
}

export default home