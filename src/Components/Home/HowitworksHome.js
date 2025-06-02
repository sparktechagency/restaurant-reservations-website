import React from 'react';

const HowitworksHome = () => {
    return (
        <div
            className="relative bg-[#3e1b28] bg-cover bg-no-repeat bg-center min-h-[400px] py-20 "
        //   style={{ backgroundImage: "url('/Images/Home/Rectangle21.png') opacity: 0.7" }} // replace with your texture image path
        >
            <div className="container text-white grid md:grid-cols-2 gap-5">
                <div>
                    {/* Logo */}
                    <div className="mb-8">
                        <img src="/Images/Home/Logo.png" alt="LuxeTables 24/7" className="w-32" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl font-bold mb-4 leading-tight">How it works!</h2>

                    {/* Paragraph */}
                    <p className="mb-8 text-base leading-relaxed">
                        Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget. Cras sollicitudin l
                    </p>

                    {/* Button */}
                    <button className="bg-[#efbb38] text-[#3e1b28] font-semibold px-6 py-3 rounded-sm hover:bg-yellow-400 transition-colors">
                        WHO ARE WE?
                    </button>
                </div>
                <div>
                    {/* <img src="/public" alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default HowitworksHome;
