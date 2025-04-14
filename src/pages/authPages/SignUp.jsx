import React from 'react'

function SignUp() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                            <legend className="fieldset-legend">Register</legend>

                            <label className="fieldset-label">Username</label>
                            <input type="text" className="input" placeholder="User name" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Mobile No</label>
                            <input type="number" className="input" placeholder="Mobile No" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <label className="fieldset-label">Confirm Password</label>
                            <input type="password" className="input" placeholder="Confirm Password" />

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
