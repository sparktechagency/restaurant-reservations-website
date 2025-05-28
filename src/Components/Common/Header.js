import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
    return (
        <div className='py-2 bg-[#4b1c2f]'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img className='w-28 cursor-pointer' src="/Images/Auth/logo2.png" alt="" />
                        <p className='flex items-center gap-1 text-white font-medium'><CiLocationOn className='text-2xl' /> London, United Kingdom </p>
                    </div>
                    <div>
                        <button className='px-20 py-3 cursor-pointer rounded-md  border-2 border-white text-white'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;