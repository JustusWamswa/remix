import React, { useEffect, useState } from 'react'
import NewUserModal from './modals/NewUserModal'
import UpdateUserModal from './modals/UpdateUserModal'
import UpdateAdminModal from './modals/UpdateAdminModal'
import DeleteAlert from './modals/DeleteAlert'
import { useUsersStore } from '../stores/useUsersStore'
import { motion } from 'framer-motion'
import { fetchEvents } from '../services/api'

const slideInAnimationVariants1 = {
    initial: { x: '-8vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', duration: 2, delay: 0.2 } },
}

const apiUrl = import.meta.env.VITE_API_URL

function DashEvents() {

    const [userData, setUserData] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [change, setChange] = useState(false)
    const [search, setSearch] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [deleteAlert, setDeleteAlert] = useState(false)
    const [userId, setUserId] = useState(null)
    const { user } = useUsersStore()
    const [eventData, setEventData] = useState(null)
    console.log(eventData)

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

    useEffect(() => {
        setFilteredData(eventData)

        if (search != '') {
            const data = eventData?.filter((event) => event.title.toLowerCase().search(search?.toLowerCase()) >= 0)
            setFilteredData(data)
        }

    }, [search])

    return (
        <>
            <div className='mt-20 md:w-2/3 mx-auto mb-10 relative'>
                {/* <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-xl'>Users</h1>
                    <button className=" p-4 rounded-full shadow-xl bg-white" type='button' onClick={() => setShowModal(true)}>
                        <div className="bg-[url('/add.png')] bg-contain bg-no-repeat w-5 h-5"></div>
                    </button>
                </div> */}
                <div className='flex justify-center items-center'>
                    <div className="w-4 h-4 bg-[url('/search.png')] bg-center bg-no-repeat bg-contain mb-5 mr-3"></div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={search} onChange={e => setSearch(e.target.value)} type='text' name="search" id="search" className="block py-2.5 w-full text-sm text-zinc-700 bg-transparent border-0 border-b-2 border-zinc-700 focus:outline-none focus:border-zinc-700 peer" placeholder=" " />
                        <label htmlFor="search" className="peer-focus:font-medium absolute text-sm text-zinc-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search by name</label>
                    </div>
                </div>
                {filteredData?.map((data) => (
                    <motion.div
                        variants={slideInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className='mt-5' key={data.id}>
                        <div className='w-full bg-white p-4 rounded my-2 shadow-xl flex justify-between px-7 items-center'>
                            <div>
                                <h1>Title: {data.title}</h1>
                                <h1>Category: {data.category} </h1>
                            </div>
                            {/* <button
                                className="bg-none border-2 text-primary bg-contain bg-no-repeat px-3 py-2 rounded"
                                type="button"
                                onClick={() => {
                                    setShowModal(true)
                                }}
                            >See attendees</button> */}

                        </div>

                    </motion.div>
                ))}
            </div>

            {showModal && <NewUserModal setShowModal={setShowModal} setChange={setChange} change={change} />}
        </>
    )
}

export default DashEvents