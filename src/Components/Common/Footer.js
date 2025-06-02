import React from 'react';
import { BsInstagram, BsWhatsapp, BsTelegram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#fff0f4]">
      <div className=" ml-[5%] grid grid-cols-1 gap-10 md:grid-cols-2 md:pt-20 pt-10">
        {/* Left: Logo + text */}
        <div className="flex flex-col gap-1 md:w-1/4">
          <img
            src="/Images/Auth/logo2.png"
            alt="LuxeTables 24/7"
            className="w-24"
          />
          <p className=" mt-3 text-[#3e1b28] leading-tight max-w-xs">
            The first free end-to-end analytics service for the site, designed to work with enterprises.
          </p>
        </div>

        <div className='border-t border-l flex items-center justify-between flex-wrap  border-[#3e1b28] rounded-tl-[120px] '>
          {/* Middle: Nav + copyright */}
          <div className="flex flex-col md:w-1/2  md:p-16 p-10  text-[#3e1b28] text-xs leading-snug">
            <nav className="flex flex-col gap-1.5 mb-6">
              <a href="#" className="hover:underline">Restaurants</a>
              <a href="#" className="hover:underline">FAQ</a>
              <a href="#" className="hover:underline">Contact Us</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </nav>
            <div className="text-[#6b4d5d]">
              © 2025 — Copyright
            </div>
          </div>

          {/* Right: Follow us + icons */}
          <div className="flex flex-col p-3 ml-6 items-start">
            <span className="text-xs font-semibold mb-2 text-[#3e1b28]">FOLLOW US</span>
            <div className="flex gap-3">
              {[BsInstagram, BsWhatsapp, BsTelegram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#4b1c2f] text-[#4b1c2f] hover:bg-[#4b1c2f] hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
