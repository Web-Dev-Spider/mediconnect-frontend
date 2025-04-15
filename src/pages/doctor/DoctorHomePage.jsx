import React from "react";
import { Link } from "react-router-dom";

const DoctorHomePage = () => {
    // Sample data
    const upcomingAppointments = [
        { id: 1, patient: "John Doe", time: "10:00 AM", type: "Follow-up" },
        { id: 2, patient: "Jane Smith", time: "11:30 AM", type: "Consultation" },
    ];

    const recentPatients = [
        { id: 1, name: "John Doe", lastVisit: "2 days ago" },
        { id: 2, name: "Alice Johnson", lastVisit: "1 week ago" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Dr. Sarah Johnson</span>
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            SJ
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-500">Today's Appointments</h3>
                        <p className="text-3xl font-bold text-blue-600">8</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-500">Patients This Week</h3>
                        <p className="text-3xl font-bold text-green-600">24</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-500">Pending Documents</h3>
                        <p className="text-3xl font-bold text-yellow-600">3</p>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Upcoming Appointments */}
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {upcomingAppointments.map((appointment) => (
                                <div key={appointment.id} className="px-6 py-4 hover:bg-gray-50">
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="font-medium">{appointment.patient}</p>
                                            <p className="text-sm text-gray-500">{appointment.type}</p>
                                        </div>
                                        <p className="text-blue-600 font-medium">{appointment.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="px-6 py-4 bg-gray-50 text-right">
                            <Link
                                to="/doctor/appointments"
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                                View All →
                            </Link>
                        </div>
                    </div>

                    {/* Recent Patients */}
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Patients</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {recentPatients.map((patient) => (
                                <div key={patient.id} className="px-6 py-4 hover:bg-gray-50">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-medium">{patient.name}</p>
                                        </div>
                                        <span className="text-sm text-gray-500">{patient.lastVisit}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="px-6 py-4 bg-gray-50 text-right">
                            <Link
                                to="/doctor/patients"
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                                View All →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link
                        to="/doctor/appointments/new"
                        className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition-colors"
                    >
                        <div className="mx-auto h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">New Appointment</span>
                    </Link>
                    <Link
                        to="/doctor/patients/new"
                        className="bg-white shadow rounded-lg p-4 text-center hover:bg-green-50 transition-colors"
                    >
                        <div className="mx-auto h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Add Patient</span>
                    </Link>
                    <Link
                        to="/doctor/prescriptions"
                        className="bg-white shadow rounded-lg p-4 text-center hover:bg-purple-50 transition-colors"
                    >
                        <div className="mx-auto h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Prescriptions</span>
                    </Link>
                    <Link
                        to="/doctor/reports"
                        className="bg-white shadow rounded-lg p-4 text-center hover:bg-yellow-50 transition-colors"
                    >
                        <div className="mx-auto h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Reports</span>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default DoctorHomePage;