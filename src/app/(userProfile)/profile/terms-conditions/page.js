import React from 'react';

const Page = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 font-sans text-[#360916] leading-relaxed">
            <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Introduction</h2>
                <p>
                    Welcome to our application. By accessing or using our services, you agree to be bound by these Terms and Conditions.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
                <p>
                    You agree to use the service only for lawful purposes and not to engage in any harmful activities.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Reservations and Payments</h2>
                <p>
                    All reservations are subject to availability. Payments must be made according to the specified terms.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Cancellation Policy</h2>
                <p>
                    Cancellations must be made within the specified timeframe to avoid penalties.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
                <p>
                    We are not liable for any damages arising from the use of our services except as required by law.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
                <p>
                    We reserve the right to modify these Terms and Conditions at any time. Continued use of the service constitutes acceptance of the updated terms.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p>
                    For questions about these Terms, please contact us at support@example.com.
                </p>
            </section>
        </div>
    );
};

export default Page;
