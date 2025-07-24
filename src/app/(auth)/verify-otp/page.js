'use client'
import { useVerifyOtpMutation } from '@/redux/features/auth/login';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';

const Page = () => {

    const [otp, setOtp] = useState('');
    const [verifyOtp] = useVerifyOtpMutation();
    const searchPeramsisSignup = new URLSearchParams(window.location.search).get('isSignup');
    const navigate = useRouter();

    const handleVerify = async () => {

        const data = {
            code: otp,
            email: new URLSearchParams(window.location.search).get('email') // Assuming email is passed in the query params
        };

        try {
            const response = await verifyOtp(data).unwrap();
            console.log('OTP verification successful:', response);
            if (!searchPeramsisSignup) {
                toast.success('OTP verified successfully! You can now log in.');
                navigate.push(`/update-password?email=${data?.email}`); // Redirect to login page after successful verification
            }
            else {
                toast.success('OTP verified successfully! You can now sign up.');
                navigate.push('/login'); // Redirect to login page after successful verification
            }
            if (response?.code === 200) {
                // Redirect or show success message
            } else {
                console.error('OTP verification failed:', response);
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            toast.error('Failed to verify OTP. Please try again.');
        }

    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <ToastContainer position="top-right" theme="colored" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            {/* Left side - form */}
            <div className='md:flex-[2] flex flex-col justify-center items-start px-6 md:px-20 p-20 md:pt-0  bg-white
                      md:ml-36 md:min-h-screen'>
                <div className='min-w-96'>
                    <h2 className='text-3xl font-medium '>Verify OTP</h2>
                    <p className=' mt-5 text-gray-600'>Please Enter the OTP sented to your email . </p>
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="email">Enter OTP </label>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            containerStyle={{ justifyContent: 'space-between' }}
                            renderInput={(props) => (
                                <input
                                    {...props} // Spread props from OTPInput (like value, onChange, etc.)
                                    className="!border-b-2  border-[#4b1c2f]  px-2 py-1" // Custom styles for the input
                                    style={{ width: '50px', height: '50px', textAlign: 'center' }} // Optional: adjust input size if needed
                                />
                            )}
                        />


                    </div>
                    <button onClick={handleVerify} className='mt-5 block'>
                        <button className='cursor-pointer w-full p-2 bg-[#4b1c2f]  font-semibold text-white rounded-md'>Verify</button>
                    </button>
                </div>
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
}

export default Page;
