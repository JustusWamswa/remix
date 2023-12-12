import React from 'react'
import Home from '../components/Home'
import Hero from '../components/Hero'
import UpcomingEvents from '../components/UpcomingEvents'
import MemberSpotlight from '../components/MemberSpotlight'

function home() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <MemberSpotlight />
      <Home />
    </>
  )
}

export default home