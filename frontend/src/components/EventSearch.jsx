import React, { useEffect, useState } from 'react'
import { categories } from '../cache/categories'
import { useUsersStore } from '../stores/useUsersStore'
import Alert from './modals/Alert'

function EventSearch({ setShowModal }) {

    const [search, setSearch] = useState('')
    const [searchFilter, setSearchFilter] = useState(null)
    const {user, loginError} = useUsersStore()
    const[alert, setAlert] = useState(false)

    return (
        <div className='w-4/5 h-28 mx-auto bg-secondary mt-16 flex items-center justify-around'>
            <div className='flex justify-center items-center'>
                <div className="w-4 h-4 bg-[url('/search.png')] bg-center bg-no-repeat bg-contain mb-5 mr-3"></div>
                <div className="relative z-0 w-full mb-6 group">
                    <input value={search} onChange={e => setSearch(e.target.value)} type='text' name="search" id="search" className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-white peer" placeholder=" " />
                    <label htmlFor="search" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search by name</label>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                {/* <div className="w-8 h-8 bg-[url('/sort.png')] bg-center bg-no-repeat bg-contain mb-5 mr-3"></div> */}
                <div className="relative z-0 w-full mb-6 group">
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
                className="mb-5 w-1/5 py-3 px-6 flex items-center justify-around bg-primary hover:bg-tertiary text-white hover:text-black rounded"
                type='button'
                onClick={() => {
                    if(!user.token) {
                        setAlert(true)
                        return
                    }
                    setShowModal(true)
                }}>
                <h1 className=''>Create event</h1>
            </button>
            {alert && <Alert message={loginError} setAlert={setAlert} />}
        </div>
    )
}

export default EventSearch