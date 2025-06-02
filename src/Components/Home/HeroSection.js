import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { CiCalendar } from 'react-icons/ci';
import { WiTime2 } from "react-icons/wi";


const HeroSection = () => {
    return (
        <div className='container relative' >
            <div className='grid lg:grid-cols-2 gap-10 gerid-cols-1 items-center py-20 lg:py-0'>
                <div>
                    <h2 className='lg:text-6xl text-4xl font-semibold text-[#4b1c2f]'>Book Exclusive <br /> London Tables <br /> Instantly</h2>
                    <br />
                    <p className='text-[#4b1c2f]'>Bid or buy your spot instantly — powered by AppointmentTrader. Experience dining like never before, with real-time access to the best tables in town.</p>
                </div>
                <div className='hidden lg:flex justify-center items-center '>
                    <img src="/Images/Home/heroImage.png" alt="" />
                </div>
            </div>

            <div className="lg:absolute bottom-0 lg:bottom-[10%] lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] 
      bg-white border-2 border-[#4b1c2f] rounded-lg shadow-md 
      flex items-center flex-wrap gap-6 py-3 px-4 min-w-[340px] max-w-[900px] ">

                {/* Search Input */}
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search Restaurants"
                        className="w-full min-w-[320px] pl-10 pr-4 py-2 border border-[#70707046] rounded focus:outline-none text-sm text-[#4b1c2f]"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4b1c2f]" />
                </div>

                {/* Users */}
                <div className="flex items-center gap-1 text-[#4b1c2f] text-sm font-normal">
                    <FaUsers className="text-2xl" />
                    <span>3</span>
                </div>

                {/* Separator */}
                <div className="h-6 border-l border-[#4b1c2f] opacity-90"></div>

                {/* Date */}
                <div className="flex items-center gap-1 text-[#4b1c2f] text-sm font-normal">
                    <CiCalendar className="text-2xl" />
                    <span>Date</span>
                </div>

                {/* Separator */}
                <div className="h-6 border-l border-[#4b1c2f] opacity-90"></div>

                {/* Time */}
                <div className="flex items-center gap-1 text-[#4b1c2f] text-sm font-normal">
                    <WiTime2 className="text-2xl" />
                    <span>Time</span>
                </div>

                {/* Button */}
                <button className="bg-[#4b1c2f] text-white py-3 px-8 rounded-lg cursor-pointer text-sm font-semibold hover:bg-[#62172b] transition">
                    Find a Table
                </button>
            </div>

        </div>
    );
}

export default HeroSection;
