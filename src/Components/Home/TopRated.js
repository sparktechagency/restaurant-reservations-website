'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa6';
import { IoMdHeartEmpty } from 'react-icons/io';

const topRatedData = [
    {
        id: 1,
        title: 'Royal Curry House',
        rating: 4.9,
        cuisine: 'Thai',
        location: 'Bangkok, Thailand',
        image: '/Images/Home/TopRated.png',
    },
    {
        id: 2,
        title: 'Sushi Express',
        rating: 4.8,
        cuisine: 'Japanese',
        location: 'Tokyo, Japan',
        image: '/Images/Home/TopRated.png',
    },
    {
        id: 3,
        title: 'Pasta Palace',
        rating: 4.7,
        cuisine: 'Italian',
        location: 'Rome, Italy',
        image: '/Images/Home/TopRated.png',
    },
    {
        id: 4,
        title: 'Taco Fiesta',
        rating: 4.6,
        cuisine: 'Mexican',
        location: 'Mexico City, Mexico',
        image: '/Images/Home/TopRated.png',
    },
    {
        id: 5,
        title: 'Burger Barn',
        rating: 4.5,
        cuisine: 'American',
        location: 'New York, USA',
        image: '/Images/Home/TopRated.png',
    },
    {
        id: 6,
        title: 'Café Paris',
        rating: 4.9,
        cuisine: 'French',
        location: 'Paris, France',
        image: '/Images/Home/TopRated.png',
    },
];

const LocationIcon = () => (
    <svg
        className="w-3.5 h-3.5 mr-1 fill-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
);

const StarIcon = () => (
    <svg
        className="w-3.5 h-3.5 mr-1 fill-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const TopRated = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsPerView = 3;
    const maxIndex = topRatedData.length - cardsPerView;

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [maxIndex]);

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    return (
        <div className="mt-10 mb-10 font-poppins text-[#3e1b28]">
            {/* Header */}
            <div className="border-t border-b border-[#4d4d4d54] my-10 py-3">
                <div className="container flex justify-between items-center mb-6">
                    <h2 className="flex items-center gap-1.5 font-bold text-lg">
                        <div className='w-14 h-14 flex items-center justify-center p-2 rounded-full border border-[#4b1c2f] bg-[#ac648146]'>
                            {/* <FaStar className="text-yellow-500 text-2xl" /> */}
                            <img className='w-8' src="/Images/Home/toratedicon.svg" alt="Top Rated Icon" />
                        </div>
                        Top Rated
                    </h2>
                    <Link href={'/details/top-rated'}
                        className="text-[#4b1c2f] underline font-semibold text-base cursor-pointer hover:underline"
                    >
                        View All
                    </Link>
                </div>
            </div>

            {/* Slider container */}
            <div className="relative overflow-hidden container">
                {/* Cards wrapper - sliding */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
                        width: `${(100 / cardsPerView) * topRatedData.length}%`,
                    }}
                >
                    {topRatedData.map(({ id, title, rating, cuisine, location, image }) => (
                        <div
                            key={id}
                            className="flex-shrink-0 md:px-3 px-1"
                            style={{ flexBasis: `${100 / topRatedData.length}%` }}
                        >
                            <div className="border-b border-gray-300 pb-4 relative cursor-default">
                                <div className="relative rounded-lg cursor-pointer">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover block"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="mt-2.5 mb-1.5 font-bold text-sm md:text-base">{title}</h4>
                                        <div className="flex items-center flex-wrap text-xs mb-2 gap-2.5">
                                            <div className="flex items-center text-yellow-400">
                                                <StarIcon />
                                                <span>{rating}</span>
                                            </div>
                                            <span className="text-gray-600 md:block hidden">|</span>
                                            <span className="font-semibold text-[#4b1c2f]">{cuisine}</span>
                                            <span className="text-gray-600 md:block hidden">|</span>
                                            <div className="flex items-center text-[#4b1c2f] font-semibold">
                                                <LocationIcon />
                                                <span>{location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2.5">
                                        <IoMdHeartEmpty className="text-[#4b1c2f] text-xl md:text-3xl cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination dots */}
            <div className="mt-6 flex justify-center gap-2">
                {topRatedData.slice(0, maxIndex + 1).map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-3 h-3 rounded-full inline-block cursor-pointer ${currentIndex === idx ? 'bg-[#4b1c2f]' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default TopRated;
