import React, { useState } from 'react'
import User from './User'
import Messages from './Messages'
import DashEvents from './DashEvents'

function Dashboard() {
    const [button, setButton] = useState('users')

    return (
        <div className='bg-white rounded p-5 min-h-screen'>
            <div className='flex justify-between md:w-1/4 mx-auto'>
                <div
                    className={`md:px-10 py-3 font-semibold text-zinc-700 hover:bg-gray-300 hover:cursor-pointer border-b-zinc-500 ${button == 'users' && 'border-b-2'}`}
                    onClick={() => setButton('users')}
                >Users</div>
                <div className={`md:px-10 py-3 font-semibold text-zinc-700 hover:bg-gray-300 hover:cursor-pointer border-b-zinc-500 ${button == 'messages' && 'border-b-2'}`}
                    onClick={() => setButton('messages')}
                >Messages</div>
                <div className={`md:px-10 py-3 font-semibold text-zinc-700 hover:bg-gray-300 hover:cursor-pointer border-b-zinc-500 ${button == 'events' && 'border-b-2'}`}
                    onClick={() => setButton('events')}
                >Events</div>
            </div>
            {button == 'users' && <User />}
            {button == 'messages' && <Messages />}
            {button == 'events' && <DashEvents />}
        </div>
    )
}

export default Dashboard