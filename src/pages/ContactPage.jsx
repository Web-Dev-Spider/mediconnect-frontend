import React from 'react'

function ContactPage() {
    return (
        <div className="min-h-screen bg-[#e7fcd8] flex items-center justify-center px-4 py-12">
            <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl p-8 border-t-4 border-blue-500">
                <h1 className="text-4xl font-bold text-[#1e3a8a] text-center mb-6">ContactPage Us</h1>

                <p className="text-gray-700 text-center mb-8">
                    Have questions or need help? Reach out to our MediConnect team and we'll get back to you as soon as possible.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[#1e3a8a]">Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c9f70]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#1e3a8a]">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c9f70]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#1e3a8a]">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Your message"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c9f70]"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#1e3a8a] hover:bg-[#3552b2] text-white px-6 py-2 rounded-lg transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
