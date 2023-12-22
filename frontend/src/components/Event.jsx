import React, { useEffect, useRef, useState } from 'react'
import NewEventModal from './modals/NewEventModal'
import UpdateEventModal from './modals/UpdateEventModal'
import { Link } from 'react-router-dom'
import { addAttendee, fetchEvents, removeAttendee } from '../services/api'
import { useUsersStore } from '../stores/useUsersStore'
import EventSearch from './EventSearch'
import UpdateUserModal from './modals/UpdateUserModal'
import ConfettiExplosion from 'react-confetti-explosion'
import Alert from './modals/Alert'
import DeleteAlert from './modals/DeleteAlert'
import { motion } from 'framer-motion'

const slideInAnimationVariants1 = {
    initial: { y: '8vh', opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'spring', duration: 2, delay: 0.2 } },
}

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
    const { user, loginError } = useUsersStore()
    const attendeeData = useRef({})
    const [confetti, setConfetti] = useState(false)
    const [alert, setAlert] = useState(false)
    const [deleteAlert, setDeleteAlert] = useState(false)
    const [eventId, setEventId] = useState(0)
    const [searchFilter, setSearchFilter] = useState('')
    const [filteredData, setFilteredData] = useState(null)
    const [search, setSearch] = useState('')
    const [myEvents, setMyEvents] = useState('')

    console.log(myEvents)

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
                setFilteredData(response)
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
                    'Authorization': `Bearer ${user.token}`,
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

    useEffect(() => {
        setFilteredData(eventData)

        if (myEvents != '') {
            let data = eventData
            myEvents == 'myCreatedEvents' && (data = eventData.filter((event) => event.creator_user.email == user.email))
            myEvents == 'myReservedEvents' && (data = eventData.filter((event) => event.attendees.includes(user.id)))
            setFilteredData(data)
        }

        if (search != '') {
            const data = eventData.filter((event) => event.title.toLowerCase().search(search.toLowerCase()) >= 0)
            setFilteredData(data)
        }

        if (searchFilter != '') {
            const data = eventData.filter((event) => event.category == searchFilter)
            setFilteredData(data)
        }

    }, [searchFilter, search, myEvents])

    return (
        <>
            <EventSearch
                setShowModal={setShowModal}
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                search={search}
                setSearch={setSearch}
                myEvents={myEvents}
                setMyEvents={setMyEvents}
            />
            <div id='sectionEvent3' className='mt-20 md:w-4/5 mx-auto md:mb-10 relative'>
                {/* <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-xl'>Events</h1>
                    <button className=" p-4 rounded-full shadow-xl bg-white" type='button' onClick={() => setShowModal(true)}>
                        <div className="bg-[url('/add.png')] bg-contain bg-no-repeat w-5 h-5"></div>
                    </button>
                </div> */}

                {filteredData?.map((data) => (
                    <motion.div
                        variants={slideInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className='mt-5 mb-10 md:mb-24' key={data._id}>
                        <div className='md:grid grid-cols-2 grid-rows-2 gap-4 w-full md:h-[80vh] bg-white p-4 rounded my-2 shadow-xl px-7 '>
                            <div
                                className="h-[20vh] md:h-auto"
                                style={{
                                    backgroundImage: `url(${data.thumbnail})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            ></div>
                            <div className="mt-5 md:mt-0 font-bold text-left md:text-center md:text-5xl flex justify-between md:justify-center items-center md:p-5 relative capitalize">
                                {data.title}
                                {data.creator_user.email == user.email || user.admin ?
                                    <div className='w-16 md:w-24 flex justify-between items-center md:absolute md:top-3 right-0 md:right-3'>
                                        <button
                                            className="bg-primary bg-opacity-0 hover:bg-opacity-10 flex items-center justify-center rounded-full w-5 h-5 md:w-10 md:h-10 "
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
                                        <button className="bg-primary bg-opacity-0 hover:bg-opacity-10 flex items-center justify-center rounded-full w-10 h-10 " type="button"
                                            onClick={() => {
                                                setEventId(data._id)
                                                setDeleteAlert(true)
                                            }}>
                                            <div className="bg-[url('/delete.png')] bg-contain bg-no-repeat w-5 h-5"></div>
                                        </button>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="p-5 flex flex-col justify-between">
                                <h1 className='font-semibold text-xs'>{data.category}</h1>
                                <p className='line-clamp-4'>{data.description}</p>
                                <Link to={`/event/${data._id}`}>
                                    <h1 className='font-semibold text-tertiary text-xs underline hover:text-blue-500 hover:cursor-pointer mt-5 md:mt-0 mb-3 md:mb-0'>See more ...</h1>
                                </Link>
                                {confetti && <ConfettiExplosion
                                    force={0.6}
                                    particleCount={80}
                                    width={1000}
                                    duration={2500}
                                    onComplete={() => setConfetti(false)}
                                />}

                                {data.attendees.includes(user.id) ?
                                    <div className='w-full flex justify-evenly items-center'>
                                        <div className='text-green-600 font-medium md:text-lg '> You are attending!</div>
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
                                        className='text-white bg-primary hover:bg-secondary focus:outline-none w-full px-5 py-2.5 md:mt-3 text-center rounded'
                                        onClick={() => {
                                            if (!user.token) {
                                                setAlert(true)
                                                return
                                            }
                                            attendeeData.current = { eventId: data._id, userId: user.id }
                                            handleReserve()
                                        }}
                                    >
                                        Reserve a sit
                                    </button>
                                }

                            </div>
                            <div className="bg-tertiary bg-opacity-30 flex flex-col justify-center items-center py-5">
                                <div className='w-3/5 mx-auto'>
                                    <div className='flex justify-between items-center mb-8'>
                                        <h2 className='text-primary text-base font-semibold capitalize'>{data.location}</h2>
                                        <div className="w-5 h-5 bg-[url('/address.png')] bg-center bg-contain bg-no-repeat"></div>
                                    </div>
                                    <div className='flex justify-between items-center mb-8'>
                                        <h2 className='text-primary text-base font-semibold'>
                                            {new Date(data.eventDate).getDay()} {new Date(data.eventDate).toLocaleString('en-US', { month: 'long' })} {new Date(data.eventDate).getFullYear()}
                                            <br />
                                            {data.startTime} - {data.endTime} (GMT)
                                        </h2>
                                        <div className="w-5 h-5 bg-[url('/calendar.png')] bg-center bg-contain bg-no-repeat"></div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='text-primary text-base font-semibold capitalize'>{data.creator_user.firstName} {data.creator_user.lastName},
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
                    </motion.div>
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

            {alert && <Alert message={loginError} setAlert={setAlert} />}
            {deleteAlert && <DeleteAlert message={"Deleting an event is irreversible!"} setAlert={setDeleteAlert} handleDelete={handleDelete} id={eventId} />}
        </>
    )
}

export default Event