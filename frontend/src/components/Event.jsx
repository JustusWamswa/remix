import React, { useEffect, useState } from 'react'
import NewEventModal from './modals/NewEventModal'
import UpdateEventModal from './modals/UpdateEventModal'
import { Link } from 'react-router-dom'
import { fetchEvents } from '../services/api'
import { useUsersStore } from '../stores/useUsersStore'

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
    const { user, setUser, loginError } = useUsersStore()

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

        if (!user.token) {
            console.log(loginError)
            return
        }
        
        fetchEvents(user.token)
            .then((response) => {
                setEventData(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [change, user])

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

    return (
        <>
            <div className='mt-20 w-2/3 mx-auto mb-10 relative'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-xl'>Events</h1>
                    <button className=" p-4 rounded-full shadow-xl bg-white" type='button' onClick={() => setShowModal(true)}>
                        <div className="bg-[url('/add.png')] bg-contain bg-no-repeat w-5 h-5"></div>
                    </button>
                </div>
                {eventData?.map((data) => (
                    <div className='mt-5' key={data._id}>
                        <div className='w-full bg-white p-4 rounded my-2 shadow-xl flex justify-between px-7 items-center'>
                            <div className='w-10/12'>
                                <Link to={`/event/${data._id}`}><h1 className='text-lg font-bold hover:underline'>{data.title} </h1></Link>
                                <h1 className='text-sm font-semibold text-gray-700'>{data.category} </h1>
                                <h1 className='my-5'>{data.description} </h1>
                                <h1 className='text-sm font-bold text-gray-500'>{data.location} </h1>
                                <h1 className='text-sm font-bold text-gray-500'>{formatDate(data.eventDate)} </h1>
                                <h1 className='text-sm font-bold text-gray-500'>{data.startTime} - {data.endTime} hrs </h1>
                                <h1 className='text-sm font-medium'>____ {data.creator_user.firstName} {data.creator_user.lastName}</h1>
                            </div>
                            <div className='w-1/12 flex justify-between'>
                                <button
                                    className="bg-[url('/pen.png')] bg-contain bg-no-repeat w-5 h-5"
                                    type="button"
                                    onClick={() => {
                                        setShowModal1(true)
                                        setUpdatedEventData({
                                            title: data.title, description: data.description, category: data.category,
                                            location: data.location, eventDate: data.eventDate, startTime: data.startTime,
                                            endTime: data.endTime, id: data._id
                                        })
                                    }}
                                ></button>
                                <button className="bg-[url('/delete.png')] bg-contain bg-no-repeat w-5 h-5" type="button" onClick={() => handleDelete(data._id)}></button>
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