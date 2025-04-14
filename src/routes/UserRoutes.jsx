import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserProfile from '../components/userComponents/UserProfile'
import UserLayout from '../layouts/UserLayout'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import SignIn from '../pages/authPages/SignIn'
import SignUp from '../pages/authPages/SignUp'


function UserRoutes() {
  return (

    <Routes>
      <Route path='/' element={< UserLayout />} >
        <Route index element={<HomePage />} />
        <Route path='profile' element={<UserProfile />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Route>
    </Routes>

  )
}

export default UserRoutes
