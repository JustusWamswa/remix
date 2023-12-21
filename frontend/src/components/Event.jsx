import React, { useEffect, useRef, useState } from 'react'
import NewEventModal from './modals/NewEventModal'
import UpdateEventModal from './modals/UpdateEventModal'
import { Link } from 'react-router-dom'
import { addAttendee, fetchEvents, removeAttendee } from '../services/api'
import { useUsersStore } from '../stores/useUsersStore'
import EventSearch from './EventSearch'
import UpdateUserModal from './modals/UpdateUserModal'
import ConfettiExplosion from 'react-confetti-explosion'

const apiUrl = import.meta.env.VITE_API_URL

export const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function Event() {

    const [eventData, setEventData] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showModal1, setShowModal1] = useState(false)
    const [change, setChange] = useState(false)
    const [updatedEventData, setUpdatedEventData] = useState({
        title: '', description: '', category: '', location: '', eventDate: '', startTime: '', endTime: ''
    });
    const { user } = useUsersStore()
    const attendeeData = useRef({})
    const [confetti, setConfetti] = useState(false)
    console.log(eventData)

    // const fetchEvents = async () => {
    //     try {
    //         const response = await fetch(`${apiUrl}/event/getEvents`)
    //         const data = await response.json()
    //         setEventData(data)
    //         console.log(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        fetchEvents()
            .then((response) => {
                setEventData(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [change])

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/event/deleteEvent`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            })
            const data = await response.json()
            setChange(!change)

        } catch (error) {
            console.error(error)
        }
    }

    const handleReserve = async () => {
        addAttendee(attendeeData.current, user.token)
            .then((response) => {
                setChange(!change)
                setConfetti(true)
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

    return (
        <>
            <EventSearch setShowModal={setShowModal} />
            <div className='mt-20 w-4/5 mx-auto mb-10 relative'>
                {/* <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-xl'>Events</h1>
                    <button className=" p-4 rounded-full shadow-xl bg-white" type='button' onClick={() => setShowModal(true)}>
                        <div className="bg-[url('/add.png')] bg-contain bg-no-repeat w-5 h-5"></div>
                    </button>
                </div> */}

                {eventData?.map((data) => (
                    <div className='mt-5 mb-24' key={data._id}>
                        <div className='grid grid-cols-2 grid-rows-2 gap-4 w-full h-[80vh] bg-white p-4 rounded my-2 shadow-xl   px-7 '>
                            <div
                                className=""
                                style={{
                                    backgroundImage: `url(${data.thumbnail})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            ></div>
                            <div className="font-bold text-center text-5xl flex justify-center items-center p-5 relative">
                                {data.title}
                                {data.creator_user.email == user.email || user.admin ?
                                    <div className='w-24 flex justify-between absolute top-3 right-3'>
                                        <button
                                            className="bg-primary bg-opacity-0 hover:bg-opacity-10 flex items-center justify-center rounded-full w-10 h-10 "
                                            type="button"
                                            onClick={() => {
                                                setShowModal1(true)
                                                setUpdatedEventData({
                                                    title: data.title, description: data.description, category: data.category,
                                                    location: data.location, eventDate: data.eventDate, startTime: data.startTime,
                                                    endTime: data.endTime, id: data._id
                                                })
                                            }}
                                        >
                                            <div className="bg-[url('/pen.png')] bg-contain bg-no-repeat w-5 h-5"></div>
                                        </button>
                                        <button className="bg-primary bg-opacity-0 hover:bg-opacity-10 flex items-center justify-center rounded-full w-10 h-10 " type="button" onClick={() => handleDelete(data._id)}>
                                            <div className="bg-[url('/delete.png')] bg-contain bg-no-repeat w-5 h-5"></div>
                                        </button>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="p-5 flex flex-col justify-between">
                                <p>{data.description}</p>
                                {confetti && <ConfettiExplosion
                                    force={0.6}
                                    particleCount={80}
                                    width={1000}
                                    duration={2500}
                                    onComplete={() => setConfetti(false)}
                                />}
                                <h1 className='font-semibold text-xs'>{data.category}</h1>
                                {data.attendees.includes(user.id) ?
                                    <div className='w-full flex justify-evenly items-center'>
                                        <div className='text-green-600 font-medium text-lg '> You are attending!</div>
                                        <button
                                            className=' hover:bg-red-400 focus:outline-none w-1/3 px-1 py-1 text-center rounded border-red-400 border'
                                            onClick={() => {
                                                attendeeData.current = { eventId: data._id, userId: user.id }
                                                handleCancel()
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                    :
                                    <button
                                        type="button"
                                        className='text-white bg-primary hover:bg-secondary focus:outline-none w-full px-5 py-2.5 mt-3 text-center rounded'
                                        onClick={() => {
                                            attendeeData.current = { eventId: data._id, userId: user.id }
                                            handleReserve()
                                        }}
                                    >
                                        Reserve a sit
                                    </button>
                                }

                            </div>
                            <div className="bg-tertiary bg-opacity-30 flex flex-col justify-center items-center">
                                <div className='w-3/5 mx-auto'>
                                    <div className='flex justify-between items-center mb-8'>
                                        <h2 className='text-primary text-base font-semibold'>{data.location}</h2>
                                        <div className="w-5 h-5 bg-[url('/address.png')] bg-center bg-contain bg-no-repeat"></div>
                                    </div>
                                    <div className='flex justify-between items-center mb-8'>
                                        <h2 className='text-primary text-base font-semibold'>
                                            {new Date(data.eventDate).getDay()} {new Date(data.eventDate).toLocaleString('en-US', { month: 'long' })} {new Date(data.eventDate).getFullYear()}
                                            <br />
                                            {data.startTime} - {data.endTime}
                                        </h2>
                                        <div className="w-5 h-5 bg-[url('/calendar.png')] bg-center bg-contain bg-no-repeat"></div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='text-primary text-base font-semibold'>{data.creator_user.firstName} {data.creator_user.lastName},
                                            '{new Date(data.creator_user.graduationYear).getFullYear().toString()[2]}{new Date(data.creator_user.graduationYear).getFullYear().toString()[3]}
                                            <br />
                                            Organizer
                                        </h2>
                                        {data.creator_user.profilePicture ?
                                            <div className="w-8 h-8 rounded-full"
                                                style={{
                                                    backgroundImage: `url(${data.creator_user.profilePicture})`,
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover'
                                                }}
                                            ></div>
                                            :
                                            <div className="w-5 h-5 bg-[url('/userIcon.png')] bg-center bg-contain bg-no-repeat border-2 p-3 rounded-full"></div>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {showModal && <NewEventModal setShowModal={setShowModal} setChange={setChange} change={change} />}
            {showModal1 &&
                <UpdateEventModal
                    setShowModal={setShowModal1}
                    setChange={setChange}
                    change={change}
                    updatedEventData={updatedEventData}
                    setUpdatedEventData={setUpdatedEventData}
                />
            }
            

        </>
    )
}

export default Event