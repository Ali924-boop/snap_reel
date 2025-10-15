"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true); 
      } else {
        setScrolled(false);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 md:py-1 md:px-10 lg:py-1 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Logo.svg"
            alt="Logo"
            height={50}
            width={50}
            className="cursor-pointer sm:h-12 sm:w-12 md:h-18 md:w-18 lg:w-20 lg:h-20"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <li><Link href="/" className="text-black font-medium text-xs sm:text-sm md:text-base lg:text-sm hover:text-[#C15F3C] transition">
            STORY TO VIDEO
          </Link></li>
          <li><Link href="/pricing" className="text-black font-medium text-xs sm:text-sm md:text-base lg:text-sm hover:text-[#C15F3C] transition">
            PRICING
          </Link></li>
          <li><Link href="/features" className="text-black font-medium text-xs sm:text-sm md:text-base lg:text-sm hover:text-[#C15F3C] transition">
            FEATURE
          </Link></li>
          <button className="text-black bg-[#C15F3C] hover:bg-[#a54d2d] transition text-xs font-medium rounded-lg py-1 sm:px-4 sm:text-sm sm:py-2 md:text-base lg:px-14">
            Get Started
          </button>
        </ul>

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
          <Link href="/" className="block text-black font-medium text-sm sm:text-base hover:text-[#C15F3C] transition">
            STORY TO VIDEO
          </Link>
          <Link href="/pricing" className="block text-black font-medium text-sm sm:text-base hover:text-[#C15F3C] transition">
            PRICING
          </Link>
          <Link href="/feature" className="block text-black font-medium text-sm sm:text-base hover:text-[#C15F3C] transition">
            FEATURE
          </Link>
          <button className="w-full text-white font-medium rounded-md py-2 sm:py-3 bg-[#C15F3C] hover:bg-[#a54d2d] text-sm sm:text-base transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
