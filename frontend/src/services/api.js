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

export const fetchEvents = async (token) => {
    const response = await fetch(`${apiUrl}/event/getEvents`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
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

// import { useUsersStore } from "../stores/useUsersStore"
// const { user, setUser} = useUsersStore()
// export const logoutUser = () => {
//     // delete user from localStorage
//     localStorage.removeItem('user')
//     // update global state
//     setUser('')

//     return
// }