'use client';
import React, { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'This is the answer to question 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 2,
        question: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'This is the answer to question 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 3,
        question: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'This is the answer to question 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 4,
        question: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'This is the answer to question 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 5,
        question: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'This is the answer to question 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

export default function Page() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 font-sans mt-10">
            <h1 className="text-3xl font-bold text-[#360916] mb-6 text-center">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map(({ id, question, answer }) => (
                    <div
                        key={id}
                        className="border border-b-2 border-[#601a2e] rounded shadow-sm cursor-pointer"
                    >
                        <button
                            onClick={() => toggle(id)}
                            className="w-full flex justify-between cursor-pointer items-center p-4 font-semibold text-[#360916] focus:outline-none"
                            aria-expanded={openId === id}
                        >
                            <span>{question}</span>
                            <span className="text-2xl select-none">{openId === id ? '−' : '+'}</span>
                        </button>
                        {openId === id && (
                            <div className="px-4 pb-4 text-gray-700 text-sm">
                                {answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
