import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaClock, FaSearch, FaPhoneAlt } from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <>
      {/* Fixed Navigation Container */}
      <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
        
        {/* Top Bar */}
        <div className="bg-[#35678A] text-white text-sm py-2 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>FMA Traders Welcomes You</span>
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-1">
              <FaEnvelope />
              <a href="mailto:@gmail.com" className="hover:underline">
                @gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaClock />
              <span>Mon – Sat 8:00 – 6:30, Sunday – CLOSED</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4 px-8 border-b border-gray-300 bg-white">
          <div className="flex items-center">
            <img src="src/assets/logo.png" className="h-10" alt="FMA Traders Logo" />
          </div>
          <nav className="flex gap-6 text-gray-600 text-lg">
            <Link to="/" className="text-[#F0832C] font-semibold underline">
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/price">Price</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <FaSearch className="text-[#35678A] text-xl cursor-pointer" />
            <div className="flex items-center gap-2 text-[#35678A]">
              <div className="bg-[#35678A] text-white p-2 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Anytime</p>
                <p className="text-lg font-semibold">+91-</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding so content doesn't get hidden behind the fixed navbar */}
      <div className="pt-14"></div>
    </>
  );
};

export default NavBar;
