import React from 'react'

function SignIn() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                            <legend className="fieldset-legend">Login</legend>

                            <label className="fieldset-label">User name / Email</label>
                            <input type="text" className="input" placeholder="Username /Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
