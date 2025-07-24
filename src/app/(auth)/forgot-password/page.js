'use client';

import React from 'react';
import { useForgotPasswordMutation } from '@/redux/features/auth/forgotPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
    const navigate = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value.trim();
        if (!email) {
            toast.error('Email is required!');
            return;
        }

        const data = { email };

        try {
            const response = await forgotPassword(data).unwrap();
            if (response?.code === 200) {
                console.log('OTP sent successfully:', response);
                toast.success('OTP sent successfully! Please check your email.');

                navigate.push(`/verify-otp?email=${email}`); // Redirect to OTP verification page
                // Redirect or show UI feedback if needed
            }
        } catch (error) {
            console.error('Failed to send OTP:', error);
            toast.error(error?.data?.message || 'Failed to send OTP');
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <ToastContainer position="top-right" theme="colored" autoClose={5000} />

            {/* Left side - form */}
            <form
                onSubmit={handleSubmit}
                className="md:flex-[2] flex flex-col justify-center items-start px-6 md:px-20 p-20 bg-white md:ml-36 md:min-h-screen"
            >
                <div className="max-w-96 w-full">
                    <h2 className="text-3xl font-medium">Forgot Password?</h2>
                    <p className="mt-5 text-gray-600">
                        Please enter your email address <br /> to reset your password.
                    </p>
                    <div className="mt-5 w-full">
                        <label className="block font-semibold" htmlFor="email">Email</label>
                        <input
                            placeholder="Enter your email"
                            className="mt-2 max-w-96 w-full p-2 border border-[#4b1c2f] rounded-md focus:outline-none bg-white"
                            type="email"
                            name="email"
                            id="email"
                            required
                        />
                    </div>
                    <div className="mt-5  block">
                        <button
                            type="submit"
                            className="cursor-pointer max-w-96 w-full p-2 bg-[#4b1c2f] font-semibold text-white rounded-md"
                        >
                            Send OTP{isLoading && <span className="ml-1">...</span>}
                        </button>
                    </div>
                </div>
            </form>

            {/* Right side - image */}
            <div className="md:flex-1 bg-[#4b1c2f] md:flex hidden justify-center items-center relative h-64 md:h-auto">
                <img
                    src="/Images/Auth/all.png"
                    alt="Cafe interior"
                    className="object-cover max-w-full max-h-full md:absolute md:left-0 md:-ml-[50%] shadow-lg"
                    style={{ maxHeight: '600px' }}
                />
            </div>
        </div>
    );
};

export default Page;