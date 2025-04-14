import React from 'react'
import DoctorHeader from '../components/doctorComponents/DoctorHeader'
import { Outlet } from 'react-router-dom'
import DoctorFooter from '../components/doctorComponents/DoctorFooter'

function DoctorLayout() {
    return (
        <div className='flex flex-col min-h-screen'>
            <DoctorHeader />
            <div className='flex-1'>

                <Outlet />
            </div>
            <DoctorFooter />

        </div>
    )
}

export default DoctorLayout
