'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoPersonOutline } from 'react-icons/io5';
import { FiLock, FiCalendar, FiHeart } from 'react-icons/fi';
import { BiDirections } from 'react-icons/bi';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { CgTerminal } from 'react-icons/cg';
import { GoInfo } from 'react-icons/go';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Sidebar = () => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        { id: 1, route: '/profile', label: 'Profile', Icon: IoPersonOutline },
        { id: 2, route: '/profile/change-pass', label: 'Password', Icon: FiLock },
        { id: 3, route: '/profile/reservations', label: 'Reservations', Icon: FiCalendar },
        { id: 4, route: '/profile/biddings', label: 'My Biddings', Icon: BiDirections },
        { id: 5, route: '/profile/bookmarks', label: 'Bookmarks', Icon: FiHeart },
        { id: 6, route: '/profile/faq', label: 'FAQ', Icon: FaRegCircleQuestion },
        { id: 7, route: '/profile/privacy-policy', label: 'Privacy Policy', Icon: MdOutlinePrivacyTip },
        { id: 8, route: '/profile/terms-conditions', label: 'Terms & Conditions', Icon: CgTerminal },
        { id: 9, route: '/profile/about', label: 'About', Icon: GoInfo },
    ];

    return (
        <div className='relative'>
            {/* Mobile hamburger */}
            <div className="md:hidden absolute left-5 top-5 ">
                <button
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open menu"
                    className="text-3xl text-[#3e1b28]"
                >
                    <HiOutlineMenu />
                </button>
            </div>

            {/* Mobile sidebar */}
            <div
                className={`fixed inset-0 z-[999] bg-white border-r border-[#3e1b28] p-10 flex flex-col gap-8 transform transition-transform duration-300 ease-in-out md:hidden
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Close button */}
                <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="self-end text-3xl text-[#3e1b28] mb-6"
                >
                    <HiX />
                </button>

                <Link
                    href="/"
                    className="flex items-center gap-3 mb-10 text-sm text-gray-800 hover:text-[#3e1b28] cursor-pointer"
                    aria-label="Go Back"
                    onClick={() => setMobileOpen(false)}
                >
                    <svg
                        className="w-4 h-4 stroke-current"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Go Back
                </Link>

                <nav className="flex flex-col gap-6">
                    {menuItems.map(({ id, label, route, Icon }) => {
                        const isActive = pathname === route || pathname.startsWith(route + '/');

                        return (
                            <Link
                                href={route}
                                key={id}
                                className={`flex items-center gap-4 text-base cursor-pointer transition-colors duration-200
                  ${isActive ? 'text-[#3e1b28] font-semibold' : 'text-gray-700 hover:text-[#3e1b28]'}`}
                                onClick={() => setMobileOpen(false)}
                            >
                                <Icon size={20} />
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Desktop sidebar */}
            <div className="border-r-2 hidden h-screen border-[#3e1b28] p-10 md:flex flex-col gap-8">
                <Link
                    href="/"
                    className="flex items-center gap-3 mb-10 text-sm text-gray-800 hover:text-[#3e1b28] cursor-pointer"
                    aria-label="Go Back"
                >
                    <svg
                        className="w-4 h-4 stroke-current"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Go Back
                </Link>

                <nav className="flex flex-col gap-6">
                    {menuItems.map(({ id, label, route, Icon }) => {
                        const isActive = pathname === route || pathname.startsWith(route + '/');

                        return (
                            <Link
                                href={route}
                                key={id}
                                className={`flex items-center gap-4 text-base cursor-pointer transition-colors duration-200
                  ${isActive ? 'text-[#3e1b28] font-semibold' : 'text-gray-700 hover:text-[#3e1b28]'}`}
                            >
                                <Icon size={20} />
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
