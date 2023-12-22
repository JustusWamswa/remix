import React from 'react'
import Event from '../components/Event'
import EventHero from '../components/EventHero'
import EventSearch from '../components/EventSearch'
import ScrollSpyEvent from '../components/ScrollSpyEvent'

function event() {
    return (
        <>
            <EventHero />
            <Event />
            <ScrollSpyEvent />
        </>
    )
}

export default event