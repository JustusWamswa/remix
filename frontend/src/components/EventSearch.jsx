import React, { useEffect, useState } from 'react'
import { categories } from '../cache/categories'
import { useUsersStore } from '../stores/useUsersStore'
import Alert from './modals/Alert'
import { motion } from 'framer-motion'


const slideInAnimationVariants1 = {
    initial: { y: '8vh', opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'spring', duration: 2, delay: 0.2 } },
}

const slideInAnimationVariants2 = {
    initial: { y: '8vh', opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'spring', duration: 2, delay: 0.5 } },
}

function EventSearch({ setShowModal, setSearchFilter, searchFilter, search, setSearch, setMyEvents }) {

    const { user, loginError } = useUsersStore()
    const [alert, setAlert] = useState(false)

    return (
        <>
            <motion.div
                variants={slideInAnimationVariants1}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                id='sectionEvent2' className='md:w-4/5 md:h-28 mx-auto bg-secondary mt-16 flex flex-col md:flex-row items-center justify-around'>
                <div className='flex justify-center items-center'>
                    <div className="w-4 h-4 bg-[url('/search.png')] bg-center bg-no-repeat bg-contain mb-5 mr-3"></div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={search} onChange={e => setSearch(e.target.value)} type='text' name="search" id="search" className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " />
                        <label htmlFor="search" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search by name</label>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    {/* <div className="w-8 h-8 bg-[url('/sort.png')] bg-center bg-no-repeat bg-contain mb-5 mr-3"></div> */}
                    <div className="relative z-0 w-5/6 md:w-full mb-6 group">
                        <select
                            name="category"
                            placeholder="Category"
                            value={searchFilter || ''}
                            onChange={(e) => setSearchFilter(e.target.value)}
                            className='p-3 w-full focus:outline-none bg-none rounded'
                        >
                            <option value='' >Filter by event category</option>
                            {categories.map((category) => (
                                <option key={category} value={`${category}`} >{category}</option>
                            ))}

                        </select>
                    </div>
                </div>
                <button
                    className="mb-5 md:w-1/5 py-3 px-6 flex items-center justify-around bg-primary hover:bg-tertiary text-white hover:text-black rounded"
                    type='button'
                    onClick={() => {
                        if (!user.token) {
                            setAlert(true)
                            return
                        }
                        setShowModal(true)
                    }}>
                    <h1 className=''>Create event</h1>
                </button>
                {alert && <Alert message={loginError} setAlert={setAlert} />}
            </motion.div>
            <motion.div
                variants={slideInAnimationVariants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='md:flex md:w-1/2 mx-auto justify-between items-center py-5 px-10 rounded-3xl mt-8 border border-primary'>
                <div>
                    <input type='radio' name='myEvents' id='all' onChange={() => setMyEvents("all")} className='mr-2' />
                    <label htmlFor='all'>All</label>
                </div>
                <div>
                    <input type='radio' name='myEvents' id='myCreatedEvents' onChange={() => setMyEvents("myCreatedEvents")} className='mr-2' />
                    <label htmlFor='myCreatedEvents'>My created events</label>
                </div>
                <div>
                    <input type='radio' name='myEvents' id='myReservedEvents' onChange={() => setMyEvents("myReservedEvents")} className='mr-2' />
                    <label htmlFor='myReservedEvents'>My reserved events</label>
                </div>
            </motion.div>
        </>

    )
}

export default EventSearch