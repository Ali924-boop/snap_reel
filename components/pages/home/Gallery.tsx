"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircleArrowDown } from "lucide-react";

const Gallery = () => {
  const columns: string[][] = [
    ["/Col4-d.png", "/Col4-c.png", "/Col4-d.png", "/Col4-a.png","/Col4-d.png", "/Col4-c.png", "/Col4-d.png", "/Col4-a.png"], 
    ["/Col3-d.png", "/Col3-c.png", "/Col3-d.png", "/Col3-a.png","/Col3-d.png", "/Col3-c.png", "/Col3-d.png", "/Col3-a.png"], 
    ["/Col2-d.png", "/Col2-c.png", "/Col2-b.png", "/Col2-a.png","/Col2-d.png", "/Col2-c.png", "/Col2-b.png", "/Col2-a.png"], 
    ["/Col1-d.png", "/Col1-c.png", "/Col1-b.png", "/Col1-a.png","/Col1-d.png", "/Col1-c.png", "/Col1-b.png", "/Col1-a.png"], 
  ];

  const speed = 16;

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Top blur */}
      <div className="absolute top-[-57px] left-1/2 transform -translate-x-1/2 z-30 w-[95%] max-w-[1255px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] pointer-events-none">
        <img src="/blur.png" alt="cloudy top" className="w-full h-full object-cover" />
      </div>

      {/* Grid container */}
      <div className="relative z-20 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 w-[90%] h-[450px] sm:w-[45%] sm:h-[500px] md:w-[80%] md:h-[800px] lg:w-[95%] lg:h-[1000px] mx-auto justify-items-center">
        {columns.map((colImages, colIndex) => (
          <div key={colIndex} className="overflow-hidden flex flex-col items-center w-full">
            <motion.div
              animate={{
                y: colIndex % 2 === 0 ? ["-50%", "0%"] : ["0%", "-50%"],
              }}
              transition={{
                duration: 12,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-col gap-3 w-full"
            >
              {colImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className="w-full h-36 sm:h-46 md:h-54 lg:h-60 object-cover rounded-2xl"
                  alt={`Gallery ${index}`}
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      
      {/* Sticky/fixed circle down arrow for all devices including mobile 
      <div 
        className="fixed bottom-10 left-1/3 transform -translate-x-1/2 z-50 cursor-pointer lg:block"
        onClick={() => {
          const el = document.getElementById("Testimonial");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <CircleArrowDown className="text-[#C15F3C] text-[26px] " />
        </div>
      </div>
      */}

      {/* Bottom blur */}
      <div className="absolute bottom-[-57px] left-1/2 transform -translate-x-1/2 z-30 w-[95%] max-w-[1255px] h-[180px] sm:h-[280px] md:h-[320px] lg:h-[355px] pointer-events-none">
        <img src="/blur-b.png" alt="cloudy bottom" className="w-full h-full object-cover" />
      </div>

    </div>
  );
};

export default Gallery;
