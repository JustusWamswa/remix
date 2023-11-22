import React, { useState } from 'react'

const apiUrl = import.meta.env.VITE_API_URL

export const categories = ["Reunions", "Networking Events", "Career Development Workshops", "Lectures and Speaker Series",
    "Homecoming Events", "Mentorship Programs", "Cultural and Arts Events", "Community Service and Volunteer Opportunities",
    "Sports and Athletic Events", "Fundraising Galas", "Alumni Awards and Recognition Ceremonies", "Family and Kids' Events",
    "Educational Seminars", "Cruise or Travel Tours", "Online Virtual Events", "Alumni Sports Tournaments", "Home and Garden Tours",
    "Wine Tasting and Food Events", "Book Clubs and Literature Events", "Career Fairs", "Technology and Innovation Events",
    "Retirement Planning and Financial Wellness", "Legacy and Heritage Events", "Campus Events"]

    categories.sort()

function NewEventModal({ setShowModal, setChange, change }) {

    const [newEventData, setNewEventData] = useState({
        title: '', description: '', creator_user: '6546569dde3f773433fa6dc3', category: '', location: '', eventDate: '', startTime: '', endTime: ''
    });
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${apiUrl}/event/createEvent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEventData),
            });

            const data = await response.json()
            console.log("data: ", data)
            setResponse(data)
            if (!data.error) {
                setShowModal(false)
                setChange(!change)
            }


        } catch (error) {
            console.error('Error making POST request:', error)
        }
    }

    const handleInputChange = (e) => {
        setNewEventData({ ...newEventData, [e.target.name]: e.target.value })
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-60"
                onClick={() => setShowModal(false)}
            >

            </div>
            <div className="bg-white p-8 z-10 w-1/3">
                <h1 className='mb-3 font-semibold'>Create a new event</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        type="text"
                        name="title"
                        placeholder="Event Title *"
                        value={newEventData.title}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <textarea
                        rows={4}
                        name="description"
                        placeholder="Description *"
                        value={newEventData.description}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2 resize-none'
                        required
                    />
                    <input
                        type="text"
                        name="creator_user"
                        placeholder="Creator user id *"
                        value={newEventData.creator_user}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <select
                        name="category"
                        placeholder="Category *"
                        value={newEventData.category}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    >
                        {categories.map((category) => (
                            <option value={`${category}`} >{category}</option>
                        ))}

                    </select>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location *"
                        value={newEventData.location}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <input
                        type="date"
                        name="eventDate"
                        placeholder="Date of Event *"
                        value={newEventData.eventDate}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <input
                        type="time"
                        name="startTime"
                        placeholder="Event start time *"
                        value={newEventData.startTime}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <input
                        type="time"
                        name="endTime"
                        placeholder="Event end time *"
                        value={newEventData.endTime}
                        onChange={handleInputChange}
                        className=' border border-black p-3 w-full mb-2'
                        required
                    />
                    <div className="flex justify-end">
                        <button
                            type='submit'
                            className="mt-4 mr-4 px-4 py-2 bg-slate-900 text-white"
                        >
                            Submit
                        </button>

                        <button
                            className="mt-4 px-4 py-2  text-black border border-primary"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                    {response && <p className='text-red-600'>{response.error}</p>}
                </form>

            </div>
        </div>
    )
}

export default NewEventModal
