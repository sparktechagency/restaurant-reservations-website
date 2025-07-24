'use client';
import url from '@/redux/api/baseUrl';
import { useGetProfileQuery } from '@/redux/features/auth/profile/getProfile';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaRegUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {

    const navigate = useRouter();

    const { data } = useGetProfileQuery();
    const userinfo = data?.data?.attributes;

    console.log(userinfo);

    const [showProfileCard, setShowProfileCard] = React.useState(false);
    const handleShowProfileCard = () => {
        setShowProfileCard(!showProfileCard);
    }

    const handleLogout = () => {
        localStorage.removeItem('userinfo');
        toast.success('Logout successful!');
        navigate.push('/login');
    }



    return (
        <div className='py-2 bg-[#4b1c2f]'>
            <ToastContainer position="top-right" theme="colored" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link href={'/'}>
                            <img className='w-28 cursor-pointer' src="/Images/Auth/logo2.png" alt="" />
                        </Link>
                        <p className='flex items-center gap-1 text-sm md:text-base text-white font-medium'><CiLocationOn className='text-2xl' /> London, United Kingdom </p>
                    </div>
                    {
                        !userinfo?.user ?
                            <Link href={'/login'}>
                                <button className='md:px-20 px-5 py-3 cursor-pointer rounded-md  border-2 border-white text-white'>Login</button>
                            </Link>
                            :
                            // user profile 
                            <div onClick={handleShowProfileCard} className='flex cursor-pointer items-center gap-3'>
                                <button className='  rounded-full text-white font-semibold  transition'>
                                    <img className='border-2 border-[#aa3866] w-12 h-12 rounded-full cursor-pointer' src={url + userinfo?.user?.image} alt="User Profile" />
                                </button>
                                <p className='text-white font-medium md:block hidden'>{userinfo?.user?.fullName}</p>
                            </div>
                    }

                    {
                        showProfileCard &&
                        <div className='absolute z-[99] right-5  md:right-24 top-20 bg-white shadow-lg rounded-md p-4 w-48'>
                            <ul className='space-y-5'>
                                <li>
                                    <Link href={'/profile'} className='text-gray-700 hover:text-[#4b1c2f] flex items-center gap-2'><FaRegUserCircle /> My Profile</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout} className=' text-[#e41f1f] flex items-center gap-2'><FiLogOut /> Logout</button>
                                </li>
                            </ul>
                        </div>
                    }


                </div>
            </div>
        </div>
    );
}

export default Header; 