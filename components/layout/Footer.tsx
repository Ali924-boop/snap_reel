import React from "react";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#F4F3EE] flex items-center space-between h-[50px] sm:w-full sm:h-[42px] md:px-10 md:w-full md:h-[80px] lg:w-full lg:h-[100px] lg:px-20">
      <div className="flex items-center mt-3 mx-10 md:mt-5 lg:h-[21px] lg:mt-6 ">
        <p className="text-black font-semibold text-xs sm:text-sm md:text-sm lg:text-lg lg:ml-6">COPYRIGHT@SNAPREEL</p>
        <div className="flex items-center space-x-2 ml-20 md:ml-80 md:space-x-3 lg:ml-175 lg:space-x-5">
          <Linkedin className="text-black w-3 h-3 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          <Facebook className="text-black w-3 h-3 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          <Instagram className="text-black w-3 h-3 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          <Twitter className="text-black w-3 h-3 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
