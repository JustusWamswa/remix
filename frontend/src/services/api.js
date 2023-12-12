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