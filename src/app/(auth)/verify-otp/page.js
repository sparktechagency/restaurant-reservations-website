'use client';
import { useVerifyOtpMutation } from '@/redux/features/auth/login';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import OTPInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';

const Page = () => {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const [verifyOtp] = useVerifyOtpMutation();
    const router = useRouter();

    // ✅ Run only on client
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const query = new URLSearchParams(window.location.search);
            const emailParam = query.get('email');
            const isSignupParam = query.get('isSignup');
            if (emailParam) setEmail(emailParam);
            if (isSignupParam) setIsSignup(true);
        }
    }, []);

    const handleVerify = async () => {
        const data = { code: otp, email };

        try {
            const response = await verifyOtp(data).unwrap();
            console.log('OTP verification successful:', response);

            if (response?.code === 200) {
                toast.success('OTP verified successfully!');

                if (isSignup) {
                    router.push('/login');
                } else {
                    router.push(`/update-password?email=${email}`);
                }
            } else {
                toast.error('Verification failed.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            toast.error('Failed to verify OTP. Please try again.');
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <ToastContainer position="top-right" theme="colored" autoClose={5000} />
            <div className="md:flex-[2] flex flex-col justify-center items-start px-6 md:px-20 p-20 md:pt-0 bg-white md:ml-36 md:min-h-screen">
                <div className="min-w-96">
                    <h2 className="text-3xl font-medium">Verify OTP</h2>
                    <p className="mt-5 text-gray-600">Please enter the OTP sent to your email.</p>
                    <div className="mt-5">
                        <label className="font-semibold" htmlFor="otp">Enter OTP</label>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            containerStyle={{ justifyContent: 'space-between' }}
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    className="!border-b-2 border-[#4b1c2f] px-2 py-1"
                                    style={{ width: '50px', height: '50px', textAlign: 'center' }}
                                />
                            )}
                        />
                    </div>
                    <button onClick={handleVerify} className="mt-5 w-full p-2 bg-[#4b1c2f] text-white font-semibold rounded-md">
                        Verify
                    </button>
                </div>
            </div>

            <div className="md:flex-1 bg-[#4b1c2f] md:flex hidden justify-center items-center relative mt-8 md:mt-0 h-64 md:h-auto">
                <img
                    src="/Images/Auth/all.png"
                    alt="Cafe interior"
                    className="object-cover md:block hidden max-w-full max-h-full md:absolute md:left-0 md:-ml-[50%] shadow-lg"
                    style={{ maxHeight: '600px' }}
                />
            </div>
        </div>
    );
};

export default Page;
