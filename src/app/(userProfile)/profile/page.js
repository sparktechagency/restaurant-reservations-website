'use client';

import React, { useState, useEffect, useRef } from 'react';
import url from '@/redux/api/baseUrl';
import { useGetProfileQuery } from '@/redux/features/auth/profile/getProfile';
import { useUpdateProfileMutation } from '@/redux/features/auth/profile/editProfile';
import { IoCameraOutline } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const fileInputRef = useRef(null);
    const { data, refetch } = useGetProfileQuery();
    const userInfo = data?.data?.attributes?.user;

    const [updateProfile] = useUpdateProfileMutation();

    // Initial States
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [callingCode, setCallingCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        if (userInfo) {
            setFirstName(userInfo.firstName || '');
            setLastName(userInfo.lastName || '');
            setEmail(userInfo.email || '');
            setCallingCode(userInfo.callingCode || '');
            setPhoneNumber(userInfo.phoneNumber || '');
            setAddress(userInfo.address || '');
            setPreviewImage(userInfo.image ? `${url}${userInfo.image}` : '');
        }
    }, [userInfo]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('callingCode', callingCode);
        formData.append('phoneNumber', phoneNumber);
        formData.append('address', address);
        if (profileImage) {
            formData.append('image', profileImage);
        }

        try {
            const response = await updateProfile(formData).unwrap();
            if (response?.code === 200) {
                toast.success('Profile updated successfully!');
                refetch(); // Refetch profile data to update UI
            } else {
                toast.error(response?.message || 'Update failed.');
            }
        } catch (err) {
            toast.error(err?.data?.message || 'Something went wrong.');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 font-sans">
            <ToastContainer position="top-right" theme="colored" autoClose={3000} hideProgressBar={false} newestOnTop={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover />

            {/* Profile Image */}
            <div
                className="relative mx-auto w-40 h-40 rounded-full bg-[#4B1C2F] flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => fileInputRef.current.click()}
            >
                {previewImage ? (
                    <div className="relative w-full h-full group cursor-pointer">
                        {/* Profile Image */}
                        <img
                            src={previewImage}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                            <IoCameraOutline size={34} className="text-white" />
                        </div>
                    </div>

                ) : (
                    <div className="text-white text-center">
                        <IoCameraOutline size={34} className="mx-auto" />
                        <span className="text-sm">Add Image</span>
                    </div>
                )}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* First Name */}
                <div>
                    <label className="block text-sm font-medium text-[#4B1C2F] mb-1">First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full border border-[#4B1C2F] rounded px-3 py-2"
                        placeholder="Enter your first name"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block text-sm font-medium text-[#4B1C2F] mb-1">Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full border border-[#4B1C2F] rounded px-3 py-2"
                        placeholder="Enter your last name"
                    />
                </div>

                {/* Email (disabled) */}
                <div>
                    <label className="block text-sm font-medium text-[#4B1C2F] mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        disabled
                        className="w-full cursor-not-allowed border border-gray-300 bg-gray-100 rounded px-3 py-2"
                    />
                </div>

                {/* Calling Code */}
                <div>
                    <label className="block text-sm font-medium text-[#4B1C2F] mb-1">Calling Code</label>
                    <input
                        type="text"
                        value={callingCode}
                        onChange={(e) => setCallingCode(e.target.value)}
                        className="w-full border border-[#4B1C2F] rounded px-3 py-2"
                        placeholder="+880"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm font-medium text-[#4B1C2F] mb-1">Phone Number</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full border border-[#4B1C2F] rounded px-3 py-2"
                        placeholder="Enter your phone number"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-[#4B1C2F] mb-1">Address</label>
                    <textarea
                        rows={3}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full border border-[#4B1C2F] rounded px-3 py-2"
                        placeholder="Enter your address"
                    />
                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#4B1C2F] text-white py-3 rounded font-semibold hover:bg-[#632635] transition"
                >
                    Save Profile
                </button>
            </form>
        </div>
    );
};

export default Page;
