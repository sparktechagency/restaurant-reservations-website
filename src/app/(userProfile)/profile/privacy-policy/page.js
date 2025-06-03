import React from 'react';

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-[#360916] leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          Your privacy is important to us. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our application.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, phone number, and usage data. This helps us provide better service and improve your experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <p>
          We use your information to process your reservations, improve our services, communicate with you, and comply with legal obligations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p>
          We implement reasonable security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. Contact us if you want to exercise these rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          For any questions about this privacy policy, please contact us at privacy@example.com.
        </p>
      </section>
    </div>
  );
};

export default Page;
