import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import home from "./pages/home"
import user from "./pages/user"
import event from "./pages/event"
import eventDetail from "./pages/eventDetail"
import opportunity from "./pages/opportunity"
import pageNotFound from "./pages/pageNotFound"
import about from "./pages/about"
import signUp from "./pages/signUp"
import login from "./pages/login"
import { useUsersStore } from "./stores/useUsersStore"

function App() {
  
  const {user, setUser} = useUsersStore()
  const localItem = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    if (localItem) {
      setUser(localItem)
    }
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={home} />
          <Route path="/about" Component={about} />
          <Route path="/event" Component={event} />
          <Route path="/event/:id" Component={eventDetail} />
          <Route path="/opportunity" Component={opportunity} />
          <Route path="/signup" Component={signUp} />
          <Route path="/login" Component={login} />
          <Route path="*" Component={pageNotFound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
