'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRegisterMutation } from '@/redux/features/auth/login';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';



const Page = () => {
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    // Use Next.js router for navigation
    const navigate = useRouter();

    // Function to toggle password visibility
    const togglePassword = () => {
        setShowPassword(prevState => !prevState);
    };


    const [register] = useRegisterMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        console.log(data);

        try {
            const response = await register(data).unwrap();
            if (response?.code === 201) {
                console.log('Registration successful:', response);
                toast.success('Registration successful! Please log in.');
                navigate.push(`/verify-otp?isSignup=true&email=${data?.email}`); // Redirect to login page after successful registration
            }

        } catch (error) {
            console.error('Registration failed:', error);
            message.error(error?.data?.message);
        }
    }



    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <ToastContainer position="top-right" theme="colored" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            {/* Left side - form */}
            <form onSubmit={handleSubmit} className='md:flex-[2] flex flex-col justify-center items-start px-6 md:px-20 p-20 md:pt-0  bg-white
                      md:ml-36 md:min-h-screen'>
                <div className='min-w-96'>
                    <h2 className='text-3xl font-medium text-center'>Sign Up</h2>

                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="name">First Name</label>
                        <input
                            placeholder='Enter your first name'
                            className='mt-2 w-full p-2 border border-[#4b1c2f]  rounded-md focus:outline-0 ring-0 bg-white'
                            type="text"
                            name="firstName"
                            id="name"
                        />
                    </div>

                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="name">Last Name</label>
                        <input
                            placeholder='Enter your last name'
                            className='mt-2 w-full p-2 border border-[#4b1c2f]  rounded-md focus:outline-0 ring-0 bg-white'
                            type="text"
                            name="lastName"
                            id="name"
                        />
                    </div>

                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <input
                            placeholder='Enter your email'
                            className='mt-2 w-full p-2 border border-[#4b1c2f]  rounded-md focus:outline-0 ring-0 bg-white'
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Enter your password'
                                className='mt-2 w-full p-2 border border-[#4b1c2f]  rounded-md focus:outline-0 ring-0 bg-white'
                                type={showPassword ? "text" : "password"} // Toggle password visibility
                                name="password"
                                id="password"
                            />
                            {/* Show/Hide Password Icon */}
                            <button
                                type="button"
                                onClick={togglePassword}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center my-5'>
                        <label className='' htmlFor="remember">
                            <input className='' type="checkbox" name="remember" id="remember" />
                            <span className='ml-2 text-gray-600'>I agree to all terms & conditions.</span>
                        </label>
                    </div>
                    <div className='mt-5'>
                        <button type='submit' className='cursor-pointer w-full p-2 bg-[#4b1c2f]  font-semibold text-white rounded-md'>Sign Up</button>
                    </div>
                    <p className='text-center mt-5 text-gray-600'>Already have an account? <Link className='text-[#4b1c2f] font-semibold ' href="/login" >Login</Link></p>
                </div>
            </form>

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
