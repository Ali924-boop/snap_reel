import React from "react";
import { Play, Video, Rocket, Star, StarHalf } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 lg:py-28 overflow-hidden">
      <img
        src="/item.svg"
        alt="Decorative Element"
        className="absolute top-0 left-0 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] h-auto opacity-90"
      />
      <div className="flex items-center justify-center gap-1 sm:gap-1 lg:h-7 border-1 border-black rounded-sm px-2 py-0.5 mr-80 rotate-[-10deg] shadow-lg">
        <Star className="text-black fill-black w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-3 lg-h-3" />
        <Star className="text-black fill-black w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-3 lg-h-3" />
        <Star className="text-black fill-black w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-3 lg-h-3" />
        <Star className="text-black fill-black w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-3 lg-h-3" />
  
        <div className="relative w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-3 lg-h-3">
          <Star className="absolute text-black w-full h-full" />
          <div className="absolute overflow-hidden w-1/1 h-full">
            <StarHalf className="text-black fill-black w-full h-full" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#C76B46] to-[#EAB07F] rounded-xl shadow-md rotate-[-10deg] w-17 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[90px] lg:h-[50px] flex items-center justify-center mb-6">
        <Video className="text-white w-6 h-6 sm:w-9 sm:h-9 md:w-11 md:h-11" />
      </div>
      
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-1 md:mt-[-5px] sm:mt-[-2px] lg:h-7 lg:mt-[-10px] border-1 border-black rounded-sm px-2 py-[2px] ml-190 rotate-[15deg] shadow-lg ">
        <h4 className="text-black">2000+creators</h4>
      </div>
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">
          <span className="text-black">Create</span>{" "}
          <span className="text-[#C15F3C]">Cinematic Stories</span>
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl text-black font-semibold">
          With AI in Minutes
        </p>
       <div className="flex items-start gap-2 max-w-3xl mx-auto mt-10">

  <div className="flex items-center justify-center w-[90px] sm:w-[100px] lg:w-[150px] border border-black rounded-sm py-1 rotate-[-10deg] shadow-lg bg-white">
    <h4 className="text-black text-xs sm:text-sm">4.9/5 ratings</h4>
  </div>

  <p className="text-black text-sm sm:text-base md:text-lg">
    Transform your ideas into professional 30-second videos. No editing
    skills, no expensive software—just your imagination and our AI.
  </p>
</div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <button className="flex items-center justify-center gap-2 text-white font-medium rounded-md py-2.5 px-6 sm:py-3 sm:px-8 text-sm sm:text-base bg-[#C15F3C] hover:bg-[#a54d2d] transition-all duration-300 shadow-md active:scale-95">
          <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
          START CREATING FREE
        </button>

        <button className="flex items-center justify-center gap-2 text-[#C15F3C] font-medium rounded-md py-2.5 px-6 sm:py-3 sm:px-8 text-sm sm:text-base border border-[#C15F3C] hover:bg-[#C15F3C]/10 transition-all duration-300 shadow-md active:scale-95">
          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
          WATCH DEMO
        </button>
      </div>
    </div>
  );
};

export default Hero;
