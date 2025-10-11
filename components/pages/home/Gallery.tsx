"use client";

import React from "react";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {

  const columns: string[][] = [
      ["/Col4-d.png", "/Col4-c.png", "/Col4-d.png", "/Col4-a.png","/Col4-d.png", "/Col4-c.png", "/Col4-d.png", "/Col4-a.png"], // Column 1
      ["/Col3-d.png", "/Col3-c.png", "/Col3-d.png", "/Col3-a.png","/Col3-d.png", "/Col3-c.png", "/Col3-d.png", "/Col3-a.png"], // Column 2
      ["/Col2-d.png", "/Col2-c.png", "/Col2-b.png", "/Col2-a.png","/Col2-d.png", "/Col2-c.png", "/Col2-b.png", "/Col2-a.png"], // Column 3
      ["/Col1-d.png", "/Col1-c.png", "/Col1-b.png", "/Col1-a.png","/Col1-d.png", "/Col1-c.png", "/Col1-b.png", "/Col1-a.png"], // Column 4
];

  const speed = 14; // motion speed

  return (
    <div className="relative min-h-screen bg-[#F4F3EE] flex items-center justify-center overflow-hidden lg:h-200">
      
      {/* 🔹 Top cloudy/blur overlay */}
      <div className="absolute top-[-57px] left-1/2 transform -translate-x-1/2 z-30 w-[1055px] h-[312px] pointer-events-none">
        <img src="/blur.png" alt="cloudy top" className="w-full h-full object-cover" />
      </div>

      {/* Grid container */}
      <div className="relative z-20 grid grid-cols-4 gap-3 w-[80%] mx-auto h-[100vh] overflow-hidden">
        {columns.map((colImages, colIndex) => (
          <div key={colIndex} className="overflow-hidden h-full">
            <motion.div
              animate={{
                y:
                  colIndex % 2 === 0
                  ? ["-50%", "0%"] // Column 1 & 3 → up
                  : ["0%", "-50%"], // Column 2 & 4 → down
              }}
              transition={{
                duration: speed,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-col gap-3"
            >
              {colImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className="w-full h-80 object-cover rounded-2xl"
                  alt={`Gallery ${index}`}
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* 🔹 Bottom cloudy/blur overlay */}
      <div className="absolute bottom-[-57px] left-1/2 transform -translate-x-1/2 z-30 w-[1055px] h-[312px] pointer-events-none">
        <img src="/blur-b.png" alt="cloudy bottom" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Gallery;
