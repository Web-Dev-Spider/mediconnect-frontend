import React from 'react'
import Header from '../components/userComponents/Header'
import { Outlet } from 'react-router'
import Footer from '../components/userComponents/Footer'

function UserLayout() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='flex-1'>

                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout
