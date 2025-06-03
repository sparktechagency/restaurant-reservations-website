import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const reservations = [
    {
        id: 1,
        name: 'Ezhe Source',
        rating: 4.2,
        cuisine: 'Indian',
        location: 'Dhaka, Bangladesh',
        description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 2,
        name: 'Specialty Restaurant Group',
        rating: 4.2,
        cuisine: 'Indian',
        location: 'Dhaka, Bangladesh',
        description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 3,
        name: 'Magna Bar',
        rating: 4.2,
        cuisine: 'Indian',
        location: 'Dhaka, Bangladesh',
        description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
];

const Page = () => {
    return (
        <div className="max-w-4xl  px-4 py-10 font-sans">
            <h1 className="text-3xl font-bold text-[#360916] mb-8">My Reservations</h1>
            <div className="space-y-6">
                {reservations.map(({ id, name, rating, cuisine, location, description, image }) => (
                    <div
                        key={id}
                        className="flex border border-[#601a2e] rounded-lg overflow-hidden shadow-sm"
                    >
                        {/* Image */}
                        <img
                            src={image}
                            alt={name}
                            className="w-40 object-cover"
                            loading="lazy"
                        />
                        {/* Content */}
                        <div className="p-4 flex flex-col justify-center flex-1">
                            <h2 className="text-xl font-semibold text-[#360916] mb-2">{name}</h2>
                            <div className="flex items-center text-sm text-[#601a2e] mb-2 space-x-4">
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>{rating}</span>
                                </div>
                                <span>|</span>
                                <span className="font-semibold">{cuisine}</span>
                                <span>|</span>
                                <div className="flex items-center gap-1">
                                    <FaMapMarkerAlt />
                                    <span>{location}</span>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
