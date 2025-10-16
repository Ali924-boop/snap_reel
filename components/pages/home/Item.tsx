"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Item = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleToggle = () => {
    setShowVideo((prev) => !prev);
  };

  return (
<div className="lg:mt-[20px] bg-[#F4F3EE] w-full lg:w-[1050px] mx-auto">

      <div className="flex flex-col items-center justify-center text-center py-10 px-4 sm:px-6 lg:px-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
          See How <span className="text-[#C76B46]">Easy</span> It Really Is
        </h1>
        <p className="text-black mt-6 sm:mt-8 max-w-xl sm:max-w-2xl lg:max-w-4xl text-sm sm:text-base lg:text-lg">
          From your first idea to a finished video in minutes. Watch the magic
          happen step by step.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8 px-4 sm:px-6 lg:px-20 mt-6 sm:mt-10">
        <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-1/2">
          {/* Step 1 */}
          <div className="bg-[#BB9457] text-white shadow-xl rounded-xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">Step 1</h4>
              <span title="Click to play video">
                <ArrowUpRight
                  className="w-4 h-4 cursor-pointer hover:scale-125 transition-transform duration-200"
                  onClick={() => setShowVideo(!showVideo)}
                />
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-2">Type Your Story Idea</h3>
            <p className="mt-1 text-sm sm:text-base text-white/90">
              Simply describe what you want to create. "A brave knight saves a
              village from a dragon" or any story you can imagine.
            </p>
            <div className="mt-4 flex justify-center items-center">
              {showVideo ? (
                <video
                  src="/step1video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg w-full h-auto sm:h-60 lg:h-72"
                />
              ) : (
                <img
                  src="/step1.png"
                  alt="Step1"
                  className="rounded-lg w-full h-auto sm:h-60 lg:h-72"
                />
              )}
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-[#B0C4B1] text-white shadow-xl rounded-xl p-4 sm:p-6 lg:p-8 lg:h-[220px] hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-between">
  
  <div className="flex items-center justify-between w-full px-2">
    <h4 className="font-semibold text-sm sm:text-base md:text-lg">Step 6</h4>
    <span title="Click to play video">
      <ArrowUpRight
        className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:scale-125 transition-transform duration-200"
        onClick={() => setShowVideo(!showVideo)}
      />
    </span>
  </div>

  <div className="font-bold mt-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-2">
    <h3>Your Video is Ready!</h3>
  </div>
</div>
        </div>

        {/* RIGHT COLUMN (Step 2–5) */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-1/2 mt-4 lg:mt-0">
          {/* Step 2 */}
          <div className="bg-[#98B9F2] text-white shadow-xl rounded-xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">Step 2</h4>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <h4 className="font-bold mt-2 text-base sm:text-lg">AI Creates Your Script</h4>
            <p className="mt-1 text-sm sm:text-base text-white/90">
              Watch as intelligent AI transform your idea into professional
              screenplay with perfect pacing and visual storytelling.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#CBAAE1] text-white shadow-xl rounded-xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">Step 3</h4>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-2">Characters Come to Life</h3>
            <p className="mt-2 text-sm sm:text-base text-white/90">
              AI generates consistent, beautiful characters that match your
              story perfectly across multiple art styles.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#60D394] text-white shadow-xl rounded-xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">Step 4</h4>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-2">
              Scenes Generated Automatically
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/90">
              Every scene is crafted with stunning visuals that bring your story
              to life with seamless transitions.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-[#E9C46A] text-white shadow-xl rounded-xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">Step 5</h4>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-2">Professional Voice Added</h3>
            <p className="mt-2 text-sm sm:text-base text-white/90">
              High-quality AI narration brings emotion and personality with
              natural-sounding voices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
