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
import alreadyLoggedIn from "./pages/alreadyLoggedIn"
import profile from "./pages/profile"
import { useUsersStore } from "./stores/useUsersStore"
import alumniStories from "./pages/alumniStories"
import dashboard from "./pages/dashboard"

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
          <Route path="/event/:id" Component={user.email ? eventDetail : pageNotFound} />
          <Route path="/opportunity" Component={opportunity} />
          <Route path="/alumnistories" Component={alumniStories} />
          <Route path="/signup" Component={!user.email ? signUp : alreadyLoggedIn} />
          <Route path="/login" Component={!user.email ? login : alreadyLoggedIn} />
          <Route path="/profile" Component={user.email ? profile : pageNotFound} />
          <Route path="/dashboard" Component={user.email ? dashboard : pageNotFound} />
          <Route path="*" Component={pageNotFound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
