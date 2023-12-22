import React from 'react'
import AboutUsHero from '../components/AboutUsHero'
import Pillars from '../components/Pillars'
import Team from '../components/Team'
import AlumComm from '../components/AlumComm'
import FAQ from '../components/FAQ'
import ScrollSpyAbout from '../components/ScrollSpyAbout'

function about() {
  return (
    <>
      <AboutUsHero />
      <Pillars />
      <Team />
      <AlumComm />
      <FAQ />
      <ScrollSpyAbout />
    </>
  )
}

export default about