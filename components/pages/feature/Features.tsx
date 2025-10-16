"use client";

import React, { useState, useEffect } from "react";
import {
  CircleArrowLeft,
  CircleArrowRight,
  Video,
  Sparkles,
  Users,
  Film,
  Clock,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

interface Card {
  id: number;
  icon: React.ReactNode;
  title: string;
  sub: string;
  img: string;
  bg: string;
}

const Features = () => {
  const cardSets: Card[][] = [
    [
      {
        id: 1,
        icon: <Film />,
        title: "CINEMATIC QUALITY OUTPUT",
        sub: "Professional-grade videos with smooth transitions and perfect pacing",
        img: "/F-Card3.png",
        bg: "bg-[#E9C46A]",
      },
      {
        id: 2,
        icon: <Sparkles />,
        title: "MULTIPLE STYLES",
        sub: "Choose from anime, cartoon, realistic, 3D, watercolor, and cyberpunk",
        img: "/F-Card2.png",
        bg: "bg-[#FFC2B4]",
      },
      {
        id: 3,
        icon: <Users />,
        title: "CHARACTER AUTO-GENERATION",
        sub: "AI creates consistent characters that perfectly match your story",
        img: "/F-Card1.png",
        bg: "bg-[#CAE7B9]",
      },
    ],
    [
      {
        id: 4,
        icon: <Video />,
        title: "SMART EDITING",
        sub: "Automatic scene planning and narrative flow optimization",
        img: "/F-Card6.png",
        bg: "bg-[#CBAAE1]",
      },
      {
        id: 5,
        icon: <Clock />,
        title: "STORY SYNC",
        sub: "Generate complete story videos in minutes, not hours",
        img: "/F-Card5.png",
        bg: "bg-[#98B9F2]",
      },
      {
        id: 6,
        icon: <Globe />,
        title: "AUDIO ENHANCER",
        sub: "Create content for any audience with multi-language support",
        img: "/F-Card4.png",
        bg: "bg-[#DAF599]",
      },
    ],
  ];

  const bottomGradients = [
    "linear-gradient(to bottom, #E9C46A, #FFFFFF)",
    "linear-gradient(to bottom, #AEB8FE, #FFFFFF)",
  ];

  const [setIndex, setSetIndex] = useState(0);
  const [flipDirection, setFlipDirection] = useState<"left" | "right">("right");
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => setMounted(true), []);

  // ✅ Add delay before updating card data
  const handleNext = () => {
    if (setIndex < cardSets.length - 1) {
      setFlipDirection("right");
      setRotation((prev) => prev + 360);

      setTimeout(() => {
        setSetIndex((prev) => prev + 1);
      }, 200); // Delay card update by 0.5s
    }
  };

  const handlePrev = () => {
    if (setIndex > 0) {
      setFlipDirection("left");
      setRotation((prev) => prev - 360);

      setTimeout(() => {
        setSetIndex((prev) => prev - 1);
      }, 200); // Delay card update by 0.4s
    }
  };

  if (!mounted) return null;

  const currentCards = cardSets[setIndex];
  const currentGradient = bottomGradients[setIndex];
  const arrowColor = setIndex === 0 ? "#E9C46A" : "#AEB8FE";

  const rotations = [
    "rotate-[-15deg] translate-y-15 scale-95",
    "scale-95",
    "rotate-[15deg] translate-y-15 scale-95",
  ];

  return (
    <section className="relative flex flex-col items-center text-center px-6 py-24 overflow-hidden bg-gradient-to-b from-white to-[#FFF6E9]">
      <img
        src="/item.svg"
        alt="Decorative Element"
        className="absolute top-0 left-0 w-[100px] sm:w-[140px] md:w-[190px] lg:w-[220px] xl:w-[260px] opacity-90 object-contain"
      />

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-end gap-20 relative z-10">
        {currentCards.map((card, i) => (
          <div
            key={card.id}
            className={`${card.bg} w-[260px] h-[340px] p-4 rounded-2xl shadow-xl flex flex-col justify-between ${rotations[i]}`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="text-[#C76B46] text-3xl flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-bold text-sm text-gray-800">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 text-xs leading-snug">{card.sub}</p>
            </div>
            <div className="rounded-xl overflow-hidden border-2 border-transparent mt-2">
              <img
                src={card.img}
                alt={card.title}
                className="object-cover w-full h-48"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex items-center justify-center gap-6 mt-8 z-20">
        <button
          onClick={handlePrev}
          className={`rounded-full transition p-3 ${
            setIndex > 0 ? "shadow-md" : "opacity-50 cursor-not-allowed"
          }`}
          style={{ backgroundColor: arrowColor }}
        >
          <CircleArrowLeft strokeWidth={1} size={40} className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className={`rounded-full transition p-3 ${
            setIndex < cardSets.length - 1
              ? "shadow-md"
              : "opacity-50 cursor-not-allowed"
          }`}
          style={{ backgroundColor: arrowColor }}
        >
          <CircleArrowRight strokeWidth={1} size={40} className="text-white" />
        </button>
      </div>

      {/* Headings */}
      <div className="flex flex-col w-full justify-center self-center md:w-[300px] lg:text-center lg:w-[640px] z-10 mt-5">
        <h2 className="text-black mb-1 text-[18px] md:text-[32px] md:font-bold lg:text-[46px] lg:font-extrabold">
          Everything you need to
          <p className="text-[#C76B46] text-[20px] md:text-[32px] md:font-bold lg:text-[40px] lg:font-extrabold">
            <span className="text-black">create</span> amazing videos
          </p>
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Our AI handles the technical complexity while you focus on storytelling
        </p>
      </div>

      {/* Bottom Curved Div */}
      <motion.div
        key={`bottom-div-${setIndex}`}
        animate={{ rotateY: flipDirection === "right" ? 180 : -180 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full flex justify-center z-0"
        style={{
          transformOrigin: "center bottom",
          perspective: "1000px",
        }}
      >
        <motion.div
          className="w-full h-[500px] sm:h-[400px] md:h-[300px] lg:h-[500px]"
          style={{
            borderTopLeftRadius: "50% 500px",
            borderTopRightRadius: "50% 500px",
            background: currentGradient,
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Features;
