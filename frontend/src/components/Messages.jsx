import React, { useEffect, useRef, useState } from 'react'
import NewUserModal from './modals/NewUserModal'
import UpdateUserModal from './modals/UpdateUserModal'
import UpdateAdminModal from './modals/UpdateAdminModal'
import DeleteAlert from './modals/DeleteAlert'
import { useUsersStore } from '../stores/useUsersStore'
import { motion } from 'framer-motion'

const slideInAnimationVariants1 = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 2, delay: 0.2 } },
}

const apiUrl = import.meta.env.VITE_API_URL

function Messages() {

    const [messageData, setMessageData] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [change, setChange] = useState(false)
    const updatedMessageData = useRef({})
    const [search, setSearch] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [deleteAlert, setDeleteAlert] = useState(false)
    const [messageId, setMessageId] = useState(null)
    const { user } = useUsersStore()
    const [myEvents, setMyEvents] = useState('')

    const fetchMessages = async () => {
        try {
            const response = await fetch(`${apiUrl}/message/getMessages`)
            const data = await response.json()
            setMessageData(data)
            setFilteredData(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fetchMessages()

    }, [change])

    useEffect(() => {
        setFilteredData(messageData)

        if (search != '') {
            const data = messageData?.filter((message) => {
                const messageName = message.firstName + ' ' + message.lastName
                return messageName?.toLowerCase().search(search?.toLowerCase()) >= 0
            })
            setFilteredData(data)
        }
        if (myEvents != '') {
            let data = messageData
            myEvents == 'resolved' && (data = messageData.filter((message) => message.resolved == true))
            myEvents == 'unresolved' && (data = messageData.filter((message) => message.resolved == false))
            setFilteredData(data)
        }

    }, [search, myEvents])

    const handleSubmit = async () => {
        console.log(updatedMessageData.current)
        try {
            const response = await fetch(`${apiUrl}/message/updateMessageStatus`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedMessageData.current),
            });

            const data = await response.json()
            console.log("data: ", data)
            setChange(!change)

        } catch (error) {
            console.error('Error making PUT request:', error)
        }
    }

    return (
        <>
            <div className='mt-20 md:w-2/3 mx-auto mb-10 relative'>
                <div className='flex justify-center items-center'>
                    <div className="w-4 h-4 bg-[url('/search.png')] bg-center bg-no-repeat bg-contain mb-5 mr-3"></div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={search} onChange={e => setSearch(e.target.value)} type='text' name="search" id="search" className="block py-2.5 w-full text-sm text-zinc-700 bg-transparent border-0 border-b-2 border-zinc-700 focus:outline-none focus:border-zinc-700 peer" placeholder=" " />
                        <label htmlFor="search" className="peer-focus:font-medium absolute text-sm text-zinc-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search by name</label>
                    </div>
                </div>
                <div className='md:flex md:w-full mx-auto justify-between items-center py-5 px-10 rounded-3xl mt-8 border border-primary'>
                    <div>
                        <input type='radio' name='myEvents' id='all' onChange={() => setMyEvents("all")} className='mr-2' />
                        <label htmlFor='all'>All</label>
                    </div>
                    <div>
                        <input type='radio' name='myEvents' id='resolved' onChange={() => setMyEvents("resolved")} className='mr-2' />
                        <label htmlFor='resolved'>Resolved</label>
                    </div>
                    <div>
                        <input type='radio' name='myEvents' id='unresolved' onChange={() => setMyEvents("unresolved")} className='mr-2' />
                        <label htmlFor='unresolved'>Unresolved</label>
                    </div>
                </div>
                {filteredData?.map((data) => (
                    <motion.div
                        variants={slideInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className='mt-5' key={data._id}>
                        <div className='w-full bg-white p-4 rounded my-2 shadow-xl flex justify-between px-7 items-center'>
                            <div>
                                <h1>Name: {data.firstName} {data.lastName} {data.admin && <span className='italic font-bold text-sm'>(admin)</span>}</h1>
                                <h1>Email: {data.email} </h1>
                                <h1>Message: {data.message}</h1>
                                <h1>Date sent: {new Date(data.createdAt).getDate()} {new Date(data.createdAt).toLocaleString('en-US', { month: 'long' })} {new Date(data.createdAt).getFullYear()}</h1>
                            </div>
                            <div className='flex justify-between'>
                                {data.resolved ? <button
                                    className="bg-green-800 text-white bg-contain bg-no-repeat px-3 py-2 rounded"
                                    type="button"
                                    onClick={() => {

                                        for (let i in filteredData) {
                                            filteredData[i]._id == data._id && (updatedMessageData.current = { ...filteredData[i], resolved: !filteredData[i].resolved })
                                        }
                                        handleSubmit()
                                    }}
                                >Resolved</button>
                                    :
                                    <button className="bg-red-800 text-white bg-contain bg-no-repeat px-3 py-2 rounded" type="button"
                                        onClick={() => {
                                            for (let i in filteredData) {
                                                filteredData[i]._id == data._id && (updatedMessageData.current = { ...filteredData[i], resolved: !filteredData[i].resolved })
                                            }
                                            handleSubmit()
                                        }}>Unresolved</button>}
                            </div>

                        </div>

                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default Messages