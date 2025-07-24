'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useResetPasswordMutation } from '@/redux/features/auth/resetPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdatePasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [updatePassword] = useResetPasswordMutation();

    useEffect(() => {
        const emailParam = searchParams.get('email');
        if (emailParam) setEmail(emailParam);
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        if (!password || !confirmPassword) {
            toast.error('Both password fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        if (!email) {
            toast.error('Email not found in URL.');
            return;
        }

        try {
            const response = await updatePassword({ email, password }).unwrap();
            if (response?.code === 200) {
                toast.success('Password updated successfully!');
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            } else {
                toast.error('Failed to update password.');
            }
        } catch (error) {
            toast.error(error?.data?.message || 'Something went wrong.');
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <ToastContainer position="top-right" theme="colored" autoClose={4000} />

            <form
                onSubmit={handleSubmit}
                className="md:flex-[2] flex flex-col justify-center items-start px-6 md:px-20 p-20 bg-white md:ml-36 md:min-h-screen"
            >
                <div className="max-w-80 w-full">
                    <h2 className="text-3xl font-medium text-center">Update Password</h2>
                    <p className="text-center mt-5 text-gray-600">
                        Please enter your new password and confirm it.
                    </p>

                    {/* Password */}
                    <div className="mt-5">
                        <label className="font-semibold" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                placeholder="Enter your password"
                                className="mt-2 w-full p-2 border border-[#4b1c2f] rounded-md focus:outline-none bg-white"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-[30px] transform -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-5">
                        <label className="font-semibold" htmlFor="confirmPassword">Confirm Password</label>
                        <div className="relative">
                            <input
                                placeholder="Confirm your password"
                                className="mt-2 w-full p-2 border border-[#4b1c2f] rounded-md focus:outline-none bg-white"
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                id="confirmPassword"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-[30px] transform -translate-y-1/2 text-gray-500"
                            >
                                {showConfirmPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <div className="mt-5 w-full">
                        <button
                            type="submit"
                            className="w-full p-2 bg-[#4b1c2f] font-semibold text-white rounded-md"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </form>

            {/* Image */}
            <div className="md:flex-1 bg-[#4b1c2f] md:flex hidden justify-center items-center relative mt-8 md:mt-0 h-64 md:h-auto">
                <img
                    src="/Images/Auth/all.png"
                    alt="Cafe interior"
                    className="object-cover max-w-full max-h-full md:absolute md:left-0 md:-ml-[50%] shadow-lg"
                    style={{ maxHeight: '600px' }}
                />
            </div>
        </div>
    );
}

// ⛑️ Wrap with Suspense to avoid build-time crash
export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UpdatePasswordForm />
        </Suspense>
    );
}
