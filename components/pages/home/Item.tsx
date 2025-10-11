    "use client";
    import React, { useState } from "react";
    import { ArrowUpRight } from "lucide-react";

    const Item = () => {
    const [showVideo, setShowVideo] = useState(false);

        const handleToggle = () => {
        setShowVideo((prev) => !prev);
    };

    return (
        <div className="lg:mt-[20px] bg-[#F4F3EE]">
        <div className="flex flex-col items-center justify-center text-center py-10">
            <h1 className="text-4xl font-bold text-black">
            See How <span className="text-[#C76B46]">Easy</span> It Really Is
            </h1>
            <p className="text-black mt-8 max-w-120">
            From your first idea to a finished video in minutes. Watch the magic
            happen step by step.
            </p>
        </div>
        {/* Steps Section */}
        <div className="flex flex-col sm:flex-row justify-center items-start gap-8 mt-10 px-6 ">
            {/* LEFT COLUMN (Step 1 + Step 6) */}
            <div className="flex flex-col gap-3.5">
            {/* Step 1 */}
            <div className="bg-[#BB9457] text-white shadow-xl rounded-xl p-6 w-100 h-105 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Step 1</h4>
                  <span title="Click to play video">
    <ArrowUpRight
      className="w-4 h-4 cursor-pointer hover:scale-125 transition-transform duration-200"
      onClick={() => setShowVideo(!showVideo)}
    />
  </span>
                </div>
                <h3 className="text-lg font-bold mt-2">Type Your Story Idea</h3>
                <p className="mt-1 text-sm text-white/90">
                Simply describe what you want to create. "A brave knight saves a
                village from a dragon" or any story you can imagine.
                </p>
                <div className="p-16 mt-[-10px] flex justify-center items-center">
                {showVideo ? (
                    <video
                    src="/step1video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg w-full h-auto lg:w-30"
                    />
                ) : (
                    <img
                    src="/step1.png"
                    alt="Step1"
                    className="rounded-lg w-full h-auto"
                    />
                )}
                </div>
            </div>

            {/* Step 6 */}
            <div className="bg-[#B0C4B1] text-white shadow-xl rounded-xl p-6 w-100 h-43 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Step 6</h4>
                <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="font-bold mt-2 text-5xl px-10 justify-center">
                <h3>Your Video is Ready!</h3>
                </div>
            </div>
            </div>

            {/* RIGHT COLUMN (Step 2–5 with different colors) */}
            <div className="flex flex-col gap-3.5 ml-[-15px]">
            {/* Step 2 */}
            <div className="bg-[#98B9F2] text-white shadow-xl rounded-xl p-6 w-100 h-36 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Step 2</h4>
                <ArrowUpRight className="w-4 h-4" />
                </div>
                <h4 className="align-text-top font-bold mt-2">
                AI Creates Your Script
                </h4>
                <p className="mt-1 text-sm text-white/90">
                Watch as intelligent AI transform your idea into professional
                screenplay with perfect pacing and visual storytelling.
                </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#CBAAE1] text-white shadow-xl rounded-xl p-6 w-100 h-35 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Step 3</h4>
                <ArrowUpRight className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold mt-2">Characters Come to Life</h3>
                <p className="mt-2 text-sm text-white/90">
                AI generates consistent, beautiful characters that match your
                story perfectly across multiple art styles.{" "}
                </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#60D394] text-white shadow-xl rounded-xl p-6 w-100 h-35 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Step 4</h4>
                <ArrowUpRight className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold mt-2">
                Scenes Generated Automatically
                </h3>
                <p className="mt-2 text-sm text-white/90">
                Every scene is crafted with stunning visuals that bring your story
                to life with seamless transitions.{" "}
                </p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#E9C46A] text-white shadow-xl rounded-xl p-6 w-100 h-35 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Step 5</h4>
                <ArrowUpRight className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold mt-2">Professional Voice Added</h3>
                <p className="mt-2 text-sm text-white/90">
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
