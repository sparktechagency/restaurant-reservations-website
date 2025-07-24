'use client';
import url from '@/redux/api/baseUrl';
import React, { useState, useRef, use, useEffect } from 'react';
import { IoCalendarOutline, IoCameraOutline } from 'react-icons/io5';

const Page = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');

    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const [userinfo, setUserinfo] = useState(null);

    useEffect(() => {
        const userinfo = localStorage.getItem('userinfo');
        setUserinfo(userinfo ? JSON.parse(userinfo) : null);
    }, []);


    return (
        <div className="max-w-md mx-auto p-6 font-sans">
            {/* Profile Image */}
            <div className="relative mx-auto w-40 h-40 rounded-full bg-[#4B1C2F] flex items-center justify-center cursor-pointer overflow-hidden">
                {profileImage ? (
                    <img
                        src={profileImage ? profileImage : (url + userinfo?.user?.image)}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                        onClick={() => fileInputRef.current.click()}
                    />
                ) : (
                    <button
                        onClick={() => fileInputRef.current.click()}
                        className="flex flex-col items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
                        aria-label="Add Image"
                    >
                        <IoCameraOutline size={32} />
                        <span className="mt-2 text-sm bg-white text-[#4B1C2F] rounded px-2 py-1">Add Image</span>
                    </button>
                )}
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                />
            </div>

            {/* Form */}
            <form className="mt-8 space-y-6">
                {/* Username */}
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-[#4B1C2F] mb-1">
                        Username
                    </label>
                    <input
                        type="text"

                        id="username"
                        placeholder="Enter your last name"
                        value={userinfo?.user?.fullName ? userinfo?.user?.fullName : username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-[#4B1C2F] rounded px-3 py-2 text-[#4B1C2F] placeholder:text-[#a87f8e] focus:outline-none focus:ring-2 focus:ring-[#4B1C2F]"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4B1C2F] mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        disabled
                        placeholder="Enter your email address"
                        value={userinfo?.user?.email ? userinfo?.user?.email : email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-[#4B1C2F] rounded px-3 py-2 text-[#4B1C2F] placeholder:text-[#a87f8e] focus:outline-none focus:ring-2 focus:ring-[#4B1C2F]"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#4B1C2F] mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={userinfo?.user?.phoneNumber ? userinfo?.user?.phoneNumber : phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-[#4B1C2F] rounded px-3 py-2 text-[#4B1C2F] placeholder:text-[#a87f8e] focus:outline-none focus:ring-2 focus:ring-[#4B1C2F]"
                    />
                </div>

                {/* Date of Birth */}
                <div className="relative">
                    <label htmlFor="dob" className="block text-sm font-medium text-[#4B1C2F] mb-1">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dob"
                        placeholder="Enter your date of birth"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full border border-[#4B1C2F] rounded px-3 py-2 pr-2 text-[#4B1C2F] placeholder:text-[#a87f8e] focus:outline-none focus:ring-2 focus:ring-[#4B1C2F]"
                    />
                    {/* <IoCalendarOutline
                        size={20}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B1C2F] pointer-events-none"
                    /> */}
                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#4B1C2F] text-white py-3 rounded mt-6 font-semibold hover:bg-[#632635] transition-colors"
                >
                    Save Profile
                </button>
            </form>
        </div>
    );
};

export default Page;
