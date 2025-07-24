'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useAdminLoginMutation } from '@/redux/features/auth/login';
import { ToastContainer, toast } from 'react-toastify';
import { Joan } from 'next/font/google';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(prev => !prev);
    const navigate = useRouter();

    const [loginUser] = useAdminLoginMutation();



    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        try {
            const response = await loginUser(data).unwrap();
            console.log('Login successful:', response);
            if (response?.code === 200) {
                localStorage.setItem('userinfo', JSON.stringify(response?.data?.attributes));

                toast.success('Login successful!');
                // Redirect to dashboard or home page
                if (response?.data?.attributes?.user?.role === 'user') {
                    navigate.push('/'); // Adjust the path as needed
                }
                else if (response?.data?.attributes?.user?.role === 'admin') {
                    navigate.push('/admin/dashboard'); // Adjust the path as needed
                }


            } else {
                console.error('Login failed:', response);
            }

        } catch (error) {
            toast.error(error?.data?.message || 'Login failed. Please try again.');
        }

    }


    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <ToastContainer position="top-right" theme="colored" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            {/* Left side - form */}
            <div className="md:flex-[2] flex flex-col justify-center md:items-start items-center px-6 md:px-20 p-20 md:pt-0  bg-white
                      md:ml-36 md:min-h-screen">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Login Now</h2>

                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full border border-gray-400 rounded-md p-2 mb-5 focus:outline-[#4b1c2f]"
                    />

                    <label className="block text-sm font-semibold mb-1" htmlFor="password">Password</label>
                    <div className="relative mb-3">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="w-full border border-gray-400 rounded-md p-2 pr-10 focus:outline-[#4b1c2f]"
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {!showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>

                    <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                        <label className="flex items-center">
                            <input type="checkbox" name="remember" />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <Link href="/forgot-password" className="text-[#4b1c2f] hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#4b1c2f] text-white py-2 rounded-md font-semibold hover:bg-[#3a1525] transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6  text-gray-600">
                    Already have an account?
                    <Link href="/signup" className="text-[#4b1c2f] font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>

            {/* Right side - image with purple background */}
            <div className="md:flex-1  bg-[#4b1c2f] md:flex hidden justify-center items-center relative
                      mt-8 md:mt-0 h-64 md:h-auto">
                <img
                    src="/Images/Auth/all.png" // your image path
                    alt="Cafe interior"
                    className="object-cover md:block hidden max-w-full max-h-full md:absolute md:left-0 md:-ml-[50%] shadow-lg"
                    style={{ maxHeight: '600px' }}
                />
            </div>
        </div>
    );
};

export default Page;
