'use client';
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { IoSearchOutline } from "react-icons/io5";
import { FaChartLine } from 'react-icons/fa6';

const restaurants = [
    {
        id: 1,
        name: 'Ezhe Source',
        rating: 4.2,
        cuisine: 'Indian',
        location: 'Dhaka, Bangladesh',
        description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
        coordinates: { lat: 51.5074, lng: -0.1278 }, // London center (example)
        image:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=80&q=80',
    },
    {
        id: 2,
        name: 'Specialty Restaurant Group',
        rating: 4.2,
        cuisine: 'Indian',
        location: 'Dhaka, Bangladesh',
        description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
        coordinates: { lat: 51.515, lng: -0.12 },
        image:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=80&q=80',
    },
    {
        id: 3,
        name: 'Magna Bar',
        rating: 4.2,
        cuisine: 'Indian',
        location: 'Dhaka, Bangladesh',
        description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
        coordinates: { lat: 51.52, lng: -0.11 },
        image:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=80&q=80',
    },
];

// Google Maps container style
const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 51.5074,
    lng: -0.1278,
};

const Page = () => {
    const { id } = useParams();
    const router = useRouter();

    // State for filters
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(3);
    const [location, setLocation] = useState('');

    // Handle search button click (just console.log for now)
    const handleSearch = () => {
        // You can filter restaurants here based on inputs
        console.log({ date, time, guests, location });
    };

    return (
        <div
            className="container mx-auto min-h-screen py-10 font-sans
                       grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            {/* Left Panel */}
            <div className="flex flex-col">
                <button
                    onClick={() => router.back()}
                    className="flex cursor-pointer items-center text-sm text-gray-600 mb-4 hover:underline"
                    aria-label="Go Back"
                >
                    <svg
                        className="w-4 h-4 mr-2 stroke-current"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Go Back
                </button>

                <div className="flex gap-2 items-start">
                    <div className="md:min-w-14 min-w-10 md:min-h-14 min-h-10 flex items-center justify-center p-2 rounded-full border border-[#4b1c2f] bg-[#ac648146]">
                        <FaChartLine className="text-[#4b1c2f] md:text-2xl text-xl" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#360916] mb-2 capitalize">{id}</h2>
                        <p className="text-sm text-[#360916] mb-6">
                            Stay ahead of the curve by exploring London’s trending restaurants. These are the buzzing hotspots where locals and visitors alike flock for innovative menus, unique dining concepts, and vibrant atmospheres that are capturing everyone’s attention.
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="flex-grow px-3 py-2 border border-[#601a2e] rounded focus:outline-none focus:ring-2 focus:ring-[#360916]"
                        aria-label="Date"
                    />
                    <input
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        className="flex-grow px-3 py-2 border border-[#601a2e] rounded focus:outline-none focus:ring-2 focus:ring-[#360916]"
                        aria-label="Time"
                    />
                    <select
                        value={guests}
                        onChange={e => setGuests(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-[#601a2e] rounded focus:outline-none focus:ring-2 focus:ring-[#360916]"
                        aria-label="Number of guests"
                    >
                        {[1, 2, 3, 4, 5].map(n => (
                            <option key={n} value={n}>
                                {n}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="relative">
                    <input
                        type="search"
                        placeholder="Location"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        className="w-full mb-4 px-3 pl-10 py-2 border border-[#601a2e] rounded focus:outline-none focus:ring-2 focus:ring-[#360916]"
                        aria-label="Location search"
                    />
                    <IoSearchOutline className="absolute left-3 top-5 transform -translate-y-1/2 text-[#4b1c2f]" />
                </div>

                <button
                    onClick={handleSearch}
                    className="w-full cursor-pointer bg-[#360916] text-white py-2 rounded font-semibold hover:bg-[#601a2e] transition-colors"
                    aria-label="Search restaurants"
                >
                    Search
                </button>

                {/* Restaurant List */}
                <div className="mt-6 space-y-4 overflow-y-auto max-h-[55vh]">
                    {restaurants.map(({ id, name, rating, cuisine, location, description, image }) => (
                        <div
                            key={id}
                            className="border border-[#601a2e] rounded p-2 flex gap-4 cursor-pointer hover:shadow-lg transition-shadow relative"
                        >
                            {image && (
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-20 h-20 rounded object-cover flex-shrink-0"
                                    loading="lazy"
                                />
                            )}

                            <div className="flex flex-col flex-grow">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-[#360916]">{name}</h3>
                                    <button
                                        aria-label="Favorite"
                                        className="text-gray-400 hover:text-red-500 focus:outline-none"
                                        type="button"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center text-yellow-500 mb-1">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 0 0-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 0 0-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 0 0-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.97z" />
                                    </svg>
                                    <span className="text-sm font-semibold text-[#360916]">{rating}</span>
                                </div>
                                <div className="text-xs text-[#601a2e] font-semibold flex items-center gap-1 mb-1">
                                    <span>{cuisine}</span>
                                    <svg
                                        className="w-3 h-3"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                    <span>{location}</span>
                                </div>
                                <p className="text-xs text-gray-600">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel - Map */}
            <div className="flex-1 h-[60vh] md:h-auto rounded overflow-hidden shadow-lg border border-[#601a2e]">
                <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBUKgC5i0rzRLbGhndTjM0b6QdWbigR6_E'}>
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
                        {restaurants.map(({ id, coordinates }) => (
                            <Marker key={id} position={coordinates} />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Page;
