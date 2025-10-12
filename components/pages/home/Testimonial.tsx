import { Star } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <div
      id="Testimonial"
      className="flex flex-col items-center mt-20 space-y-10 md:space-y-16 md:mt-28"
    >
      {/* Heading centered */}
      <div className="flex flex-col items-center text-center max-w-4xl">
        <h1 className="font-bold text-black text-4xl">
          What creators are saying
        </h1>
        <span className="font-bold text-black text-4xl mt-2">
          about <span className="text-[#C15F3C]">SnapReel</span>
        </span>
      </div>

      {/* First Reviewer */}
      <div className="bg-[#FFCAD4] w-[900px] h-50 rounded-r-full shadow-lg p-5 self-start mt-10 relative">
        {/* icon */}
        <div className="top-0">
          <img src="/icon-t.png" alt="icon-t" className="w-8 h-8" />
        </div>

        {/* text */}
        <div className="mt-2 w-[470px]">
          <p className="text-black text-sm">
            "This AI video tool has completely transformed how I create content.
            What used to take hours now takes minutes, and the quality is
            incredible."
          </p>
        </div>

        {/* reviewer info and stars */}
        <div className="flex items-center mt-8 gap-8">
          <div className="mr-10">
            <p className="text-black font-bold text-lg">Golan Adam</p>
            <p className="text-[#707070] text-sm">Content Creator (YouTuber)</p>
          </div>

          <div className="flex items-center justify-center mb-3 gap-1 rounded-xl bg-[#FFCAD4] px-2 py-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#FFCAD4] ml-10">
            <Star className="text-black fill-black w-4 h-4" />
            <Star className="text-black fill-black w-4 h-4" />
            <Star className="text-black fill-black w-4 h-4" />
            <Star className="text-black fill-black w-4 h-4" />
            <Star className="text-black fill-black w-4 h-4" />
          </div>
        </div>

        {/* Reviewer image */}
        <div className="absolute right-2 top-[-70px] bottom-[-7px] w-auto">
          <img
            src="/reviewer1.png"
            alt="reviewer"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      {/* Second Reviewer */}
      <div className="bg-[#E9C46A] w-[900px] h-50 rounded-l-full shadow-lg p-5 self-end mt-15 relative flex">
        {/* Left side: Part background + reviewer image */}
        <div className="relative flex-shrink-0 w-1/3 h-[330px]">
          {/* Set a larger height for parent */}
          <div className="absolute top-[-220px] left-10 bottom-5 w-auto z-10">
            <img
              src="/reviewer2.png"
              alt="reviewer2"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Right side: Text, stars, reviewer info */}
        <div className="flex flex-col justify-between ml-15 w-2/3">
          <div>
            <img src="/icon-t.png" alt="icon" className="w-8 h-8 top-0" />
            <div className="mt-2 w-[470px]">
              <p className="text-black text-sm">
                "As a marketing agency, this tool has revolutionized how we
                create video content for clients. The quality is unmatched."{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center mt-3 gap-8">
            <div className="w-auto max-w-[150px] mr-20 flex flex-col">
              <p className="text-black font-bold text-lg truncate">
                Dr. Emily Watson
              </p>
              <p className="text-[#707070] text-sm truncate">
                Creative Director
              </p>
            </div>

            <div className="flex items-center justify-center gap-1 mb-2 rounded-xl bg-[#E9C46A] px-2 py-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#E9C46A]">
              <Star className="text-black fill-black w-4 h-4" />
              <Star className="text-black fill-black w-4 h-4" />
              <Star className="text-black fill-black w-4 h-4" />
              <Star className="text-black fill-black w-4 h-4" />
              <Star className="text-black fill-black w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      {/* Third Reviewer */}
      <div className="bg-[#98B9F2] w-[900px] h-50 rounded-r-full shadow-lg p-5 self-start mt-15 relative">
        {/* icon */}
        <div className="top-0">
          <img src="/icon-t.png" alt="icon-t" className="w-8 h-8" />
        </div>

        {/* text */}
        <div className="mt-2 w-[470px]">
          <p className="text-black text-sm">
            "I've been using this for educational content. My students love the
            animated stories, and I can create them so quickly now."
          </p>
        </div>

        {/* reviewer info and stars */}
        <div className="flex items-center mt-6 gap-8">
          <div className="mr-10">
            <p className="text-black font-bold text-lg">Marcus Rodriguez</p>
            <p className="text-[#707070] text-sm">Educator</p>
          </div>

          <div className="flex items-center justify-center gap-1 rounded-xl bg-[#98B9F2] px-2 py-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#98B9F2] ml-10">
            <Star className="text-black fill-black w-4 h-4" />
            <Star className="text-black fill-black w-4 h-4" />
            <Star className="text-black fill-black w-4 h-4" />
            <Star className="text-black fill-black w-4 h-4" />
            <Star className="text-black fill-black w-4 h-4" />
          </div>
        </div>

        {/* Reviewer image */}
        <div className="absolute right-4 top-[-70px] bottom-[-7px] w-auto">
          <img
            src="/reviewer3.png"
            alt="reviewer"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      {/* Fourth Reviewer */}
      <div className="bg-[#CBAAE1] w-[900px] h-50 rounded-l-full shadow-lg p-5 self-end mt-15 mb-10 relative flex">
        {/* Left side: Part background + reviewer image */}
        <div className="relative flex-shrink-0 mr-10 w-1/3 h-[430px]">
          {/* Set a larger height for parent */}
          <div className="absolute top-[-290px] left-10 bottom-5 w-auto z-10">
            <img
              src="/reviewer4.png"
              alt="reviewer4"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Right side: Text, stars, reviewer info */}
        <div className="flex flex-col justify-between ml-3 w-2/3">
          <div>
            <img src="/icon-t.png" alt="icon" className="w-8 h-8 top-0" />
            <div className="mt-2 w-[470px]">
              <p className="text-black text-sm">
                "This platform helps me create daily TikToks and Instagram reels
                for clients without needing a video editor. A game-changer!"
              </p>
            </div>
          </div>

          <div className="flex items-center mb-2 mt-3 gap-8">
            <div className="w-auto max-w-[210px] mr-8 flex flex-col">
              <p className="text-black font-bold text-lg truncate">
                Aisha Khan
              </p>
              <p className="text-[#707070] text-sm truncate">
                Freelance Social Media Manager
              </p>
            </div>

            <div className="flex items-center justify-center gap-1 rounded-xl mr-10 bg-[#CBAAE1] px-2 py-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#CBAAE1]">
              <Star className="text-black fill-black w-4 h-4" />
              <Star className="text-black fill-black w-4 h-4" />
              <Star className="text-black fill-black w-4 h-4" />
              <Star className="text-black fill-black w-4 h-4" />
              <Star className="text-black fill-black w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
