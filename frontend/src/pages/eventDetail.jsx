import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatDate } from '../components/Event'
import ConfettiExplosion from 'react-confetti-explosion'
import { useUsersStore } from '../stores/useUsersStore'
import { addAttendee, removeAttendee } from '../services/api'


const apiUrl = import.meta.env.VITE_API_URL

function eventDetail() {
    const params = useParams()
    const [eventData, setEventData] = useState({})
    const { user, loginError } = useUsersStore()
    const [confetti, setConfetti] = useState(false)
    const [change, setChange] = useState(false)
    const attendeeData = useRef({})

    const handleReserve = async () => {
        addAttendee(attendeeData.current, user.token)
            .then((response) => {
                setConfetti(true)
                setChange(!change)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleCancel = async () => {
        removeAttendee(attendeeData.current, user.token)
            .then((response) => {
                setChange(!change)
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
    }, [change])


    return (
        <div className='flex flex-col justify-center items-center mt-20 w-2/3 mx-auto'>
            <div>
                <h1 className='text-lg font-bold underline'>{eventData?.title} </h1>
                <h1 className='text-sm font-semibold text-gray-700'>{eventData?.category} </h1>
                {confetti && <ConfettiExplosion
                    force={0.6}
                    particleCount={500}
                    width={1000}
                    duration={2500}
                    onComplete={() => setConfetti(false)}
                />}
                <div
                    style={{
                        backgroundImage: `url(${eventData?.thumbnail})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain'
                    }}
                    className='h-[40vh] mt-5'></div>
                <h1 className='my-5'>{eventData?.description} </h1>
                <h1 className='text-sm font-bold text-gray-500'>{eventData?.location} </h1>
                <h1 className='text-sm font-bold text-gray-500'>{formatDate(eventData?.eventDate)} </h1>
                <h1 className='text-sm font-bold text-gray-500'>{eventData?.startTime} - {eventData?.endTime} hrs </h1>
                <h1 className='text-sm font-medium'>____ {eventData?.creator_user?.firstName} {eventData?.creator_user?.lastName}</h1>
                {eventData?.attendees?.includes(user.id) ?
                    <div className='w-full flex justify-evenly items-center'>
                        <div className='text-green-600 font-medium text-lg '> You are attending!</div>
                        <button
                            className=' hover:bg-red-400 focus:outline-none w-1/3 px-1 py-1 text-center rounded border-red-400 border'
                            onClick={() => {
                                attendeeData.current = { eventId: eventData._id, userId: user.id }
                                handleCancel()
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                    :
                    <button
                        type="button"
                        className='md:w-2/5 text-white bg-primary hover:bg-secondary focus:outline-none px-5 py-2.5 mt-6 text-center rounded'
                        onClick={() => {
                            attendeeData.current = { eventId: eventData._id, userId: user.id }
                            handleReserve()
                        }}
                    >
                        Reserve a sit
                    </button>
                }
            </div>
        </div>
    )
}

export default eventDetail