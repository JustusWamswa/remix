import { create } from 'zustand'

export const useUsersStore = create((set) => ({
    user: '',
    setUser: (newUser) => set({user: newUser})
}))

