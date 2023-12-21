const apiUrl = import.meta.env.VITE_API_URL

export const createUser = async (newUserData) => {
    const response = await fetch(`${apiUrl}/user/createUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserData),
    })

    return await response.json()
}

export const loginUser = async (userData) => {
    const response = await fetch(`${apiUrl}/user/loginUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })

    return await response.json()
}

export const fetchEvents = async () => {
    const response = await fetch(`${apiUrl}/event/getEvents`, {
    
    })
    return await response.json()
}

export const sendMessage = async (newMessageData) => {
    const response = await fetch(`${apiUrl}/message/createMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessageData),
    })

    return await response.json()
}

export const createEvent = async (newEventData, token) => {
    const response = await fetch(`${apiUrl}/event/createEvent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newEventData),
    })
    return await response.json()
}

export const updateUser = async (updatedUserData, token) => {
    const response = await fetch(`${apiUrl}/user/updateUser`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUserData),
    });

    const data = await response.json()
}

export const addAttendee = async (attendeeData, token) => {
    const response = await fetch(`${apiUrl}/event/addAttendee`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(attendeeData),
    })
    return await response.json()
}

export const removeAttendee = async (attendeeData, token) => {
    const response = await fetch(`${apiUrl}/event/removeAttendee`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(attendeeData),
    })
    return await response.json()
}

export const getUser = async (id, token) => {
    const response = await fetch(`${apiUrl}/user/getUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(id),
    })
    return await response.json()
}