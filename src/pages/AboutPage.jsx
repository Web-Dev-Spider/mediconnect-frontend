import React from 'react'

function AboutPage() {
    return (
        <div className="min-h-screen bg-[#e7fcd8] text-[#1e3a8a] flex flex-col items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 border-t-4 border-blue-500">
                <h1 className="text-4xl font-bold text-center mb-6 text-[#1e3a8a]">
                    About MediConnect
                </h1>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    <span className="font-semibold text-[#4c9f70]">MediConnect</span> is a cutting-edge digital healthcare platform designed to seamlessly connect patients, doctors, and medical services under one roof. Our mission is to make healthcare accessible, efficient, and patient-centered.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    From booking appointments and accessing reports to teleconsultations and secure health records, MediConnect ensures a smoother and smarter experience for everyone involved in healthcare.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Our commitment is to bridge the gap between quality care and technology, ensuring that every individual receives the attention they deserve — anytime, anywhere.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
