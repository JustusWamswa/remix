import React from 'react'
import Home from '../components/Home'
import Hero from '../components/Hero'
import UpcomingEvents from '../components/UpcomingEvents'

function home() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <Home />
    </>
  )
}

export default home