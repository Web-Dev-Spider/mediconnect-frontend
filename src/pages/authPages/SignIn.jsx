import React, { useState } from 'react';
// import axios from 'axios';
import { isEmail } from '../../utilities/helperFunctions';
import { signIn } from '../../services/authAPI';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

function SignIn() {
    const [formData, setFormData] = useState({
        loginId: '',
        password: '',
    });

    const [fieldErrors, setFieldErrors] = useState({});

    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setFieldErrors(prev => ({ ...prev, [name]: '' }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            email: isEmail(formData.loginId) ? formData.loginId : null,
            userName: !isEmail(formData.loginId) ? formData.loginId : null,
            password: formData.password,
        };

        const newErrors = {};

        if (!formData.loginId.trim()) {
            newErrors.loginId = 'Username or email is required';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setFieldErrors(newErrors);
            return;
        }

        try {


            const res = await signIn(loginData);
            console.log("res", res)

            if (res.success) {

                toast.success(res.data.message, {
                    className: '!text-green-800 !bg-green-100 !border !border-green-600',
                });
                navigate(res.redirectTo)
            }

            console.log("Response:", res.data);
        } catch (error) {

            toast(error?.response?.data?.message, { className: '!text-red-800 !bg-red-100 !border !border-red-600', })
            console.log("Error:", error);
        }
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                                <legend className="fieldset-legend">Login</legend>



                                <label className="fieldset-label">Username / Email</label>
                                <input
                                    type="text"
                                    name="loginId"
                                    className="input"
                                    placeholder="Username / Email"
                                    value={formData.loginId}
                                    onChange={handleChange}
                                />
                                {fieldErrors.loginId && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.loginId}</p>
                                )}

                                <label className="fieldset-label mt-3">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {fieldErrors.password && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.password}</p>
                                )}

                                <button type="submit" className="btn btn-neutral mt-4">
                                    Login
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
