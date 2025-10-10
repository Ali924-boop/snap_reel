"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 rounded-xl mt-2 mx-0.5 bg-transparent  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/Logo.svg"
              alt="Logo"
              height={90}
              width={90}
              className="cursor-pointer"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-black font-medium text-sm hover:text-[#C15F3C] transition"
            >
              STORY TO VIDEO
            </a>
            <a
              href="#"
              className="text-black font-medium text-sm hover:text-[#C15F3C] transition"
            >
              PRICING
            </a>
            <a
              href="#"
              className="text-black font-medium text-sm hover:text-[#C15F3C] transition"
            >
              FEATURE
            </a>
            <button className="text-black font-medium rounded-md lg:w-[200px] lg:h-[35px] py-1 px-6 bg-[#C15F3C] hover:bg-[#a54d2d] transition">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#C15F3C] focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <div className="px-4 py-3 space-y-3">
            <a
              href="#"
              className="block text-black font-medium hover:text-[#C15F3C] transition"
            >
              STORY TO VIDEO
            </a>
            <a
              href="#"
              className="block text-black font-medium hover:text-[#C15F3C] transition"
            >
              PRICING
            </a>
            <a
              href="#"
              className="block text-black font-medium hover:text-[#C15F3C] transition"
            >
              FEATURE
            </a>
            <button className="w-full text-black font-medium rounded-md py-2 bg-[#C15F3C] hover:bg-[#a54d2d] transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
