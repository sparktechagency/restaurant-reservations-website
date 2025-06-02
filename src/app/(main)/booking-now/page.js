'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5';
import { FaStar, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Modal } from 'antd';
import { FaCalendarAlt, FaDollarSign, FaClock, FaChair } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import { IoIosTrendingUp } from 'react-icons/io';

const dinnerTimes = [
    { id: 1, time: '7:00 PM', price: 'Bid' },
    { id: 2, time: '8:00 PM', price: '€12' },
    { id: 3, time: '9:00 PM', price: '€12' },
    { id: 4, time: '10:00 PM', price: '€12' },
    { id: 5, time: '11:00 PM', price: '€22' },
];


const galleryImages = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
];


const restaurants = [
    { id: 1, coordinates: { lat: 51.5074, lng: -0.1278 } },
    { id: 2, coordinates: { lat: 51.515, lng: -0.12 } },
    { id: 3, coordinates: { lat: 51.52, lng: -0.11 } },
];

const containerStyle = {
    width: '100%',
    height: '100%',
};
const center = {
    lat: 51.5074,
    lng: -0.1278,
};

const Page = () => {
    const router = useRouter();

    const [selectedDinner, setSelectedDinner] = useState(3);


    const [guests, setGuests] = useState('4 Guests');
    const [date, setDate] = useState('');
    const [service, setService] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showAntDesignModal = () => {
        setIsModalOpen(true);
    };


    return (
        <div className="container mx-auto px-4 py-10 font-sans max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side */}
            <div className="flex flex-col space-y-6">
                {/* Go Back */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-gray-600 hover:underline text-sm mb-2"
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

                {/* Title and rating */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-[#360916] mb-1">Urban Open Bar</h1>
                        <div className="flex items-center space-x-3 text-sm">
                            <div className="flex items-center text-yellow-400 font-semibold">
                                <FaStar className="mr-1" />
                                4.2
                            </div>
                            <div className="font-semibold text-[#601a2e]">Indian</div>
                        </div>
                    </div>
                    {/* Heart icon */}
                    <button
                        aria-label="Favorite"
                        className="text-[#7c637a] hover:text-[#360916]"
                        type="button"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>
                </div>

                {/* Trending badge */}
                <button
                    type="button"
                    className="inline-flex items-center gap-2 border border-[#601a2e] text-[#601a2e] rounded-full px-4 py-2 text-sm font-semibold w-max"
                >
                    <IoIosTrendingUp />
                    Trending
                </button>

                <div className="flex flex-col sm:flex-row items-center border border-[#601a2e] rounded-full overflow-hidden gap-3 sm:gap-0 py-2 px-4 text-sm mb-6 relative">
                    {/* Guests select */}
                    <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="flex-1 appearance-none bg-transparent border-none text-[#601a2e] font-semibold cursor-pointer px-2 py-1 rounded-full focus:outline-none focus:ring-0"
                    >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5 Guests">5 Guests</option>
                    </select>

                    <div className="border-l border-[#601a2e] h-8 hidden sm:block" />

                    {/* Date input */}
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="flex-1 bg-transparent border-none text-[#601a2e] font-semibold cursor-pointer px-2 py-1 rounded-full focus:outline-none focus:ring-0"
                        placeholder="Pick event date"
                    />

                    <div className="border-l border-[#601a2e] h-8 hidden sm:block" />

                    {/* Service select */}
                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="flex-1 appearance-none bg-transparent border-none text-[#601a2e] font-semibold cursor-pointer px-2 py-1 rounded-full focus:outline-none focus:ring-0"
                    >
                        <option value="" disabled>
                            Select type of service(s)
                        </option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Private Event">Private Event</option>
                    </select>

                    {/* Search Icon */}
                    <IoSearchOutline
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#601a2e] cursor-pointer"
                        size={22}
                    />
                </div>

                {/* Lunch section */}
                <div>
                    <h3 className="font-semibold text-[#360916] mb-2">Lunch</h3>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            stroke="#ccc"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v4l3 3" />
                        </svg>
                        Sorry No Table Available Right Now
                    </p>
                </div>

                {/* Dinner section */}
                <div>
                    <h3 className="font-semibold text-[#360916] mb-4">Dinner</h3>
                    <div className="flex flex-wrap gap-3">
                        {dinnerTimes.map(({ id, time, price }) => {
                            const selected = selectedDinner === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => setSelectedDinner(id)}
                                    className={`border rounded cursor-pointer px-5 py-2 text-sm font-semibold
                    ${selected ? 'bg-[#360916] text-white' : 'border-[#601a2e] text-[#601a2e]'}
                    hover:bg-[#601a2e] hover:text-white transition-colors`}
                                >
                                    <div>{time}</div>
                                    <div className="text-xs">{price}</div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Book Now */}
                <button
                    type="button"
                    onClick={showAntDesignModal}
                    className="w-full py-2 cursor-pointer border border-[#601a2e] rounded text-[#360916] font-semibold hover:bg-[#601a2e] hover:text-white transition-colors"
                >
                    Book Now
                </button>

                {/* Need to Know and About */}
                <div className="space-y-8 mt-4 text-sm text-[#360916]">
                    <section>
                        <h4 className="font-semibold mb-2">Need to Know</h4>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. It uses a dictionary of over 200 Latin words,
                        </p>
                    </section>
                    <section>
                        <h4 className="font-semibold mb-2">About Restaurant</h4>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. It uses a dictionary of over 200 Latin words,
                        </p>
                    </section>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-4">
                {/* Main Image */}
                <img
                    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
                    alt="Dish main"
                    className="rounded object-cover w-full max-h-[320px]"
                    loading="lazy"
                />

                {/* Gallery */}
                <div className="grid grid-cols-4 gap-2">
                    {galleryImages.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Gallery image ${i + 1}`}
                            className="rounded object-cover w-full h-20"
                            loading="lazy"
                        />
                    ))}
                </div>

                {/* Right Panel - Map */}
                <div className="flex-1 h-[20vh] md:h-auto rounded overflow-hidden shadow-lg border border-[#601a2e]">
                    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBUKgC5i0rzRLbGhndTjM0b6QdWbigR6_E'}>
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
                            {restaurants.map(({ id, coordinates }) => (
                                <Marker key={id} position={coordinates} />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 border border-[#ddd] rounded  text-sm text-[#360916]">
                    <div className="flex border-b border-[#eee] items-center gap-2 py-2 px-5">
                        <FaMapMarkerAlt className="text-[#601a2e]" />
                        Dhaka, Bangladesh
                    </div>
                    <div className="flex border-b border-[#eee] items-center gap-2 py-2 px-5">
                        <FaPhoneAlt className="text-[#601a2e]" />
                        +880 418515281
                    </div>
                    <div className="flex border-b border-[#eee] items-center gap-2 py-2 px-5">
                        <FaEnvelope className="text-[#601a2e]" />
                        afedfdg@gmail.com
                    </div>
                    <div className="flex  items-center gap-2 py-2 px-5">
                        <FaGlobe className="text-[#601a2e]" />
                        www.gasggdvfafg.com
                    </div>
                </div>
            </div>

            <Modal
                visible={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                width={600}
                style={{ top: 150 }}
            >
                <div className="max-w-xl mx-auto p-2 font-sans text-gray-900">
                    <h1 className="text-3xl font-bold mb-4 text-[#360916]">Urban Open Bar</h1>

                    <div className="flex justify-between mb-6">
                        {/* Left labels */}
                        <div className="space-y-2 text-sm text-[#601a2e] font-semibold flex flex-col justify-between">
                            <div className="flex items-center gap-2">
                                <FaUsers />
                                <span>
                                    2
                                </span> {/* You can add icon here if you want */}
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt />
                                <span>Date</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaDollarSign />
                                <span>Price</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock />
                                <span>Time</span>
                            </div>
                        </div>

                        {/* Right values */}
                        <div className="space-y-4 text-[#601a2e] font-bold  text-lg text-right">
                            <span className="text-2xl">$397.83</span>
                            <p className="text-base flex items-center gap-2">
                                Seats Available:{' '}
                                <span className="font-bold flex items-center justify-end gap-1">
                                    <FaChair />
                                    12
                                </span>
                            </p>
                        </div>
                    </div>

                    <section className="mb-6">
                        <h2 className="text-[#360916] font-bold text-lg mb-2">About Restaurant</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                        </p>
                    </section>

                    <label className="inline-flex items-center space-x-2 mb-6 text-sm text-[#360916] cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-[#601a2e]" />
                        <span>I agree to the terms and conditions.</span>
                    </label>

                    <button
                        type="button"
                        className="w-full bg-[#360916] text-white font-semibold py-3 rounded hover:bg-[#601a2e] transition-colors"
                    >
                        Reserve Now
                    </button>
                </div>
            </Modal>

        </div>
    );
};

export default Page;
