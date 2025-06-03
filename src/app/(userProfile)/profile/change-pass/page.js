'use client';
import React, { useState } from 'react';

const Page = () => {
    const [current, setCurrent] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (newPass !== confirmPass) {
            setError('New passwords do not match!');
            return;
        }
        // Add your password change logic here
        setSuccess('Password changed successfully!');
        setCurrent('');
        setNewPass('');
        setConfirmPass('');
    };

    return (
        <div className="max-w-md mx-auto p-6 font-sans mt-10 md:mt-20 text-[#360916]">
            <h1 className="text-2xl font-bold mb-6">Change Password</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="current" className="block mb-1 font-semibold">
                        Current Password
                    </label>
                    <input
                        id="current"
                        type="password"
                        placeholder='Enter your current password'
                        value={current}
                        onChange={(e) => setCurrent(e.target.value)}
                        required
                        className="w-full border border-[#601a2e] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#360916]"
                    />
                </div>
                <div>
                    <label htmlFor="new" className="block mb-1 font-semibold">
                        New Password
                    </label>
                    <input
                        id="new"
                        type="password"
                        placeholder='Enter your new password'
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        required
                        className="w-full border border-[#601a2e] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#360916]"
                    />
                </div>
                <div>
                    <label htmlFor="confirm" className="block mb-1 font-semibold">
                        Confirm New Password
                    </label>
                    <input
                        id="confirm"
                        type="password"
                        placeholder='Confirm your new password'
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                        className="w-full border border-[#601a2e] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#360916]"
                    />
                </div>
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
                <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#360916] text-white py-2 rounded font-semibold hover:bg-[#601a2e] transition-colors"
                >
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default Page;
