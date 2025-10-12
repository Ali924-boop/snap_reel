"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircleArrowDown } from "lucide-react";

const Gallery = () => {
  const columns: string[][] = [
    ["/Col4-d.png", "/Col4-c.png", "/Col4-d.png", "/Col4-a.png","/Col4-d.png", "/Col4-c.png", "/Col4-d.png", "/Col4-a.png","/Col4-d.png", "/Col4-c.png", "/Col4-d.png"], 
    ["/Col3-d.png", "/Col3-c.png", "/Col3-d.png", "/Col3-a.png","/Col3-d.png", "/Col3-c.png", "/Col3-d.png", "/Col3-a.png","/Col3-d.png", "/Col3-c.png", "/Col3-d.png", "/Col3-a.png"], 
    ["/Col2-d.png", "/Col2-c.png", "/Col2-b.png", "/Col2-a.png","/Col2-d.png", "/Col2-c.png", "/Col2-b.png", "/Col2-a.png","/Col2-d.png", "/Col2-c.png", "/Col2-b.png", "/Col2-a.png"], 
    ["/Col1-d.png", "/Col1-c.png", "/Col1-b.png", "/Col1-a.png","/Col1-d.png", "/Col1-c.png", "/Col1-b.png", "/Col1-a.png","/Col1-d.png", "/Col1-c.png", "/Col1-b.png", "/Col1-a.png"], 
  ];

  const speed = 14;

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Top blur */}
      <div className="absolute top-[-57px] left-1/2 transform -translate-x-1/2 z-30 w-[90%] max-w-[1255px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] pointer-events-none">
        <img src="/blur.png" alt="cloudy top" className="w-full h-full object-cover" />
      </div>

      {/* Grid container */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[95%] sm:w-[90%] mx-auto justify-items-center">
        {columns.map((colImages, colIndex) => (
          <div key={colIndex} className="overflow-hidden flex flex-col items-center w-full">
            <motion.div
              animate={{
                y: colIndex % 2 === 0 ? ["-50%", "0%"] : ["0%", "-50%"],
              }}
              transition={{
                duration: speed,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-col gap-3 w-full"
            >
              {colImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className="w-full h-48 sm:h-56 md:h-72 lg:h-80 object-cover rounded-2xl"
                  alt={`Gallery ${index}`}
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Sticky/fixed circle down arrow for all devices including mobile */}
      <div 
        className="fixed bottom-10 left-1/3 transform -translate-x-1/2 z-50 cursor-pointer block sm:block md:block lg:block"
        onClick={() => {
          const el = document.getElementById("Testimonial");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <CircleArrowDown size={24} className="text-[#C15F3C]" />
        </div>
      </div>

      {/* Bottom blur */}
      <div className="absolute bottom-[-57px] left-1/2 transform -translate-x-1/2 z-30 w-[90%] max-w-[1255px] h-[180px] sm:h-[280px] md:h-[320px] lg:h-[355px] pointer-events-none">
        <img src="/blur-b.png" alt="cloudy bottom" className="w-full h-full object-cover" />
      </div>

    </div>
  );
};

export default Gallery;
