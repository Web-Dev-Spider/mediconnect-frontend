import React from 'react'
import { Link } from 'react-router'

function HomePage() {
    return (
        <div className="min-h-screen bg-[#e7fcd8] flex items-center justify-center px-6 py-12">
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-5xl font-extrabold text-[#1e3a8a] mb-6">
                    Welcome to <span className="text-[#4c9f70]">MediConnect</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Your trusted digital healthcare partner — connecting you with doctors, appointments, reports, and more at your fingertips.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/sign-in"
                        className="bg-[#1e3a8a] hover:bg-[#3552b2] text-white px-6 py-3 rounded-lg transition duration-200"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/about"
                        className="bg-[#4c9f70] hover:bg-[#63b983] text-white px-6 py-3 rounded-lg transition duration-200"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
