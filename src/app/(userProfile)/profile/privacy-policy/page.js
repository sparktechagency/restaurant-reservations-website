'use client';
import { useGetPrivacyPolicyQuery } from '@/redux/features/auth/Settings/settings';
import React from 'react';

const Page = () => {

  const { data } = useGetPrivacyPolicyQuery();
  console.log("Privacy Policy Data:", data?.data?.attributes[0]?.content);


  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-[#360916] leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <div>
        {data?.data?.attributes[0]?.content ? data?.data?.attributes[0]?.content : '---- No content available.'}
      </div>

    </div>
  );
};

export default Page;
