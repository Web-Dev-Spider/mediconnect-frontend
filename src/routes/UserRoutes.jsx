import React from 'react'
import UserDashboard from '../components/userComponents/UserDashboard'
import { Route, Routes } from 'react-router'
import UserProfile from '../components/userComponents/UserProfile'
import SignIn from '../components/authComponents/SignIn'
import SignUp from '../components/authComponents/SignUp'
import UserLayout from '../layouts/userLayout'
import HomePage from '../components/HomePage'
import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'


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
