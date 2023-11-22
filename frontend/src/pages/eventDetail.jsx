import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatDate } from '../components/Event'

const apiUrl = import.meta.env.VITE_API_URL

function eventDetail() {
    const params = useParams()
    const [eventData, setEventData] = useState({})

    const fetchEvent = async () => {
        try {
            const response = await fetch(`${apiUrl}/event/getEvent/${params.id}`)
            const data = await response.json()
            setEventData(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchEvent()
    }, [])


    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <div>
                <h1 className='text-lg font-bold underline'>{eventData?.title} </h1>
                <h1 className='text-sm font-semibold text-gray-700'>{eventData?.category} </h1>
                <h1 className='my-5'>{eventData?.description} </h1>
                <h1 className='text-sm font-bold text-gray-500'>{eventData?.location} </h1>
                <h1 className='text-sm font-bold text-gray-500'>{formatDate(eventData?.eventDate)} </h1>
                <h1 className='text-sm font-bold text-gray-500'>{eventData?.startTime} - {eventData?.endTime} hrs </h1>
                <h1 className='text-sm font-medium'>____ {eventData?.creator_user?.firstName} {eventData?.creator_user?.lastName}</h1>
            </div>
        </div>
    )
}

export default eventDetail