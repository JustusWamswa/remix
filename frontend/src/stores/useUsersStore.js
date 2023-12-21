import { create } from 'zustand'

export const useUsersStore = create((set) => ({
    user: {},
    setUser: (newUser) => set({user: newUser}),
    loginError: 'Login or sign up to gain access',
    updateUser: false,
    setUpdateUser: (newValue) => set({updateUser: newValue}),
    successfulUpdate: false,
    setSuccessfulUpdate: (newValue) => set({successfulUpdate: newValue})
}))

