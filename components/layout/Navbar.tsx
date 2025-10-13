"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true); // scroll ho gaya
      } else {
        setScrolled(false); // top par
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full items-center mx-auto z-50 transition-all duration-300 rounded-3xl ${
        scrolled
          ? "mt-4 backdrop-blur-lg bg-white/30 shadow-md"
          : "mt-0 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-1 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Logo.svg"
            alt="Logo"
            height={50}
            width={50}
            className="cursor-pointer sm:h-12 sm:w-12 md:h-16 md:w-16"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a href="#" className="text-black font-medium text-xs sm:text-sm md:text-base hover:text-[#C15F3C] transition">
            STORY TO VIDEO
          </a>
          <a href="#" className="text-black font-medium text-xs sm:text-sm md:text-base hover:text-[#C15F3C] transition">
            PRICING
          </a>
          <a href="#" className="text-black font-medium text-xs sm:text-sm md:text-base hover:text-[#C15F3C] transition">
            FEATURE
          </a>
          <button className="text-white font-medium rounded-lg px-2 sm:px-4 py-1 sm:py-2 bg-[#C15F3C] hover:bg-[#a54d2d] text-xs sm:text-sm md:text-base transition">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#C15F3C] focus:outline-none">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-md shadow-md border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-2 sm:space-y-3 rounded-xl">
          <a href="#" className="block text-black font-medium text-sm sm:text-base hover:text-[#C15F3C] transition">
            STORY TO VIDEO
          </a>
          <a href="#" className="block text-black font-medium text-sm sm:text-base hover:text-[#C15F3C] transition">
            PRICING
          </a>
          <a href="#" className="block text-black font-medium text-sm sm:text-base hover:text-[#C15F3C] transition">
            FEATURE
          </a>
          <button className="w-full text-white font-medium rounded-md py-2 sm:py-3 bg-[#C15F3C] hover:bg-[#a54d2d] text-sm sm:text-base transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
