import React from 'react'
import AboutUsHero from '../components/AboutUsHero'
import Pillars from '../components/Pillars'
import Team from '../components/Team'
import AlumComm from '../components/AlumComm'
import FAQ from '../components/FAQ'

function about() {
  return (
    <>
      <AboutUsHero />
      <Pillars />
      <Team />
      <AlumComm />
      <FAQ />
    </>
  )
}

export default about