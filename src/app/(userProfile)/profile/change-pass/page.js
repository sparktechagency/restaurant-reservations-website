'use client';
import { useChangePasswordMutation } from '@/redux/features/auth/changePassword';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Page = () => {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [changePassword] = useChangePasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPass !== confirmPass) {
      setError('New passwords do not match!');
      return;
    }

    try {
      const response = await changePassword({
        oldPassword: current,
        newPassword: newPass,
      }).unwrap();

      if (response?.code === 200) {
        toast.success('Password changed successfully!');
        setSuccess('Password changed successfully!');
        setCurrent('');
        setNewPass('');
        setConfirmPass('');
      } else {
        toast.error(response?.message || 'Failed to change password');
      }
    } catch (error) {
      toast.error(error?.data?.message || 'An error occurred while changing password');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 font-sans mt-10 md:mt-20 text-[#360916]">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6">Change Password</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Current Password */}
        <div className="relative">
          <label htmlFor="current" className="block mb-1 font-semibold">
            Current Password
          </label>
          <input
            id="current"
            type={showCurrent ? 'text' : 'password'}
            placeholder="Enter your current password"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            required
            className="w-full border border-[#601a2e] rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#360916]"
          />
          <span
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute top-[38px] right-3 cursor-pointer text-gray-600"
          >
            {showCurrent ? '👁️' : '🙈'}
          </span>
        </div>

        {/* New Password */}
        <div className="relative">
          <label htmlFor="new" className="block mb-1 font-semibold">
            New Password
          </label>
          <input
            id="new"
            type={showNew ? 'text' : 'password'}
            placeholder="Enter your new password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            required
            className="w-full border border-[#601a2e] rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#360916]"
          />
          <span
            onClick={() => setShowNew(!showNew)}
            className="absolute top-[38px] right-3 cursor-pointer text-gray-600"
          >
            {showNew ? '👁️' : '🙈'}
          </span>
        </div>

        {/* Confirm New Password */}
        <div className="relative">
          <label htmlFor="confirm" className="block mb-1 font-semibold">
            Confirm New Password
          </label>
          <input
            id="confirm"
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm your new password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
            className="w-full border border-[#601a2e] rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#360916]"
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute top-[38px] right-3 cursor-pointer text-gray-600"
          >
            {showConfirm ? '👁️' : '🙈'}
          </span>
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