import { Star } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <div
      id="Testimonial"
      className="flex flex-col items-center mt-20 space-y-10 md:space-y-16 md:mt-28"
    >
      {/* Heading centered */}
      <div
        className="flex flex-col items-center text-center
    w-[90%] sm:w-[85%] md:w-[80%] lg:max-w-4xl 
    mx-auto
    space-y-1 sm:space-y-2 md:space-y-3"
      >
        <h1 className="font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          What creators are saying
        </h1>
        <span className="font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          about <span className="text-[#C15F3C]">SnapReel</span>
        </span>
      </div>

      {/* First Reviewer */}
      <div
        className="bg-[#FFCAD4] w-[330px] h-[120px] p-3 md:w-[600px] md:h-[160px] md:p-4 lg:w-[900px] lg:h-[200px] lg:mt-10 lg:p-5
 rounded-r-full shadow-lg self-start mt-10 relative"
      >
        {/* icon */}
        <div className="relative top-0 mb-1 sm:justify-start sm:mt-0">
          <img
            src="/icon-t.png"
            alt="icon-t"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-6 lg:h-6"
          />
        </div>

        {/* Text */}
        <div className="w-[180px] sm:w-[350px] md:w-[360px] lg:w-[380px]">
          <p
            className="text-black text-[8px] sm:text-sm md:mb-0 md:text-sm lg:text-sm"
          >
            "This AI video tool has completely transformed how I create content.
            What used to take hours now takes minutes, and the quality is
            incredible."
          </p>
        </div>

        <div className="flex flex-row items-center mt-2 md:items-start sm:mt-6 md:mt-2 gap-2 sm:gap-8 lg:mb-19">
          {/* Reviewer info (left side fixed) */}
          <div className="flex flex-col text-left lg:ml-10px">
            <p className="text-black text-xs font-bold sm:text-sm md:text-sm lg:text-xl">
              Golan Adam
            </p>
            <p className="text-[#707070] text-[8px] sm:text-xs md:text-xs lg:text-sm">
              Content Creator (YouTuber)
            </p>
          </div>

          {/* Stars box */}
          <div className="flex items-center justify-center gap-1 rounded-lg lg:ml-30 bg-[#FFCAD4] px-1.5 py-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#FFCAD4]">
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
          </div>
        </div>

        {/* Reviewer image */}
        <div className="absolute right-1 bottom-[-5px] w-auto sm:right-4 md:right-2 top-[-40px] sm:top-[-60px] md:top-[-80px lg:top-[-120px] lg:right-2">
          <img
            src="/reviewer1.png"
            alt="reviewer"
            className="h-[160px] sm:h-[140px] md:h-[220px] lg:h-[340px] w-auto"
          />
        </div>
      </div>

    {/* Second Reviewer */}
<div
  className="bg-[#E9C46A] w-[330px] h-[120px] p-2 md:w-[600px] md:h-[160px] md:p-4 lg:w-[900px] lg:h-[200px] lg:p-5
  rounded-l-full shadow-lg self-end mt-10 relative"
>
  {/* Icon */}
  <div className="relative ml-38 top-0 mb-1 sm:justify-start md:ml-58 sm:mt-0">
    <img
      src="/icon-t.png"
      alt="icon-t"
      className="w-3 h-3 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-7 lg:h-7 lg:ml-[70px]"
    />
  </div>

  {/* Text */}
  <div className="w-[175px] ml-38 sm:w-[400px] md:w-[360] lg:w-[490px]">
    <p
      className="text-black text-[8px] sm:text-sm md:text-sm sm:ml-20 lg:text-sm lg:ml-[150px]"
    >
      "As a marketing agency, this tool has revolutionized how we create
      video content for clients. The quality is unmatched."
    </p>
  </div>

  <div className="flex flex-row flex-wrap items-center ml-38 justify-start mt-2 sm:mt-3 gap-4 sm:gap-10 md:mr-2 lg:ml-55">
    {/* Reviewer info */} 
    <div className="flex flex-col md:ml-[80px] ">  
      <p className="text-black text-[8px] font-bold sm:text-sm md:text-lg lg:text-xl">
        Dr. Emily Watson
      </p>
      <p className="text-[#707070] text-[8px] sm:text-xs md:text-sm lg:text-sm">
        Creative Director
      </p>
    </div>

    {/* Stars box */}
    <div className="flex items-center mr-2 justify-center sm:mr-10 gap-1 rounded-lg bg-[#E9C46A] px-1.5 py-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#E9C46A]">
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
    </div>
  </div>

  {/* Reviewer image */}
  <div className="absolute left-4 sm:left-4 md:left-6 top-[-30px] sm:top-[-60px] md:top-[-70px] bottom-[-5px] w-auto">
    <img
      src="/reviewer2.png"
      alt="reviewer2"
      className="h-[150px] sm:h-[140px] md:h-[230px] lg:h-[290px] w-auto"
    />
  </div>
</div>

      {/* Third Reviewer */}
      <div
        className="bg-[#98B9F2] w-[330px] h-[120px] p-3 md:w-[600px] md:h-[160px] md:p-4 lg:w-[900px] lg:h-[200px] lg:mt-10 lg:p-5
 rounded-r-full shadow-lg self-start mt-10 relative"
      >
        {/* icon */}
        <div className="relative top-0 mb-1 sm:justify-start sm:mt-0">
          <img
            src="/icon-t.png"
            alt="icon-t"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-6 lg:h-6"
          />
        </div>

        {/* Text */}
        <div className="w-[180px] sm:w-[350px] md:w-[360px] lg:w-[380px]">
          <p
            className="text-black text-[8px] sm:text-sm md:mb-0 md:text-sm lg:text-sm"
          >
            "I've been using this for educational content. My students love the animated stories, and I can create them so quickly now."
          </p>
        </div>

        <div className="flex flex-row items-center mt-2 md:items-start sm:mt-6 md:mt-2 gap-2 sm:gap-8 lg:mb-19">
          {/* Reviewer info (left side fixed) */}
          <div className="flex flex-col text-left lg:ml-10px">
            <p className="text-black text-xs font-bold sm:text-sm md:text-sm lg:text-xl">
              Marcus Rodriguez
            </p>
            <p className="text-[#707070] text-[8px] sm:text-xs md:text-xs lg:text-sm">
              Educator
            </p>
          </div>

          {/* Stars box */}
          <div className="flex items-center justify-center gap-1 rounded-lg lg:ml-30 bg-[#98B9F2] px-1.5 py-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#98B9F2]">
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
          </div>
        </div>

        {/* Reviewer image */}
        <div className="absolute right-1 bottom-[-5px] w-auto sm:right-4 md:right-2 top-[-40px] sm:top-[-60px] md:top-[-80px lg:top-[-120px] lg:right-2">
          <img
            src="/reviewer3.png"
            alt="reviewer3"
            className="h-[160px] sm:h-[140px] md:h-[220px] lg:h-[340px] w-auto"
          />
        </div>
      </div>

      {/* Fourth Reviewer */}
     <div
  className="bg-[#CBAAE1] w-[330px] h-[120px] p-2 mb-15 md:mb- md:w-[600px] md:h-[160px] md:p-4 lg:w-[900px] lg:h-[200px] lg:p-5
  rounded-l-full shadow-lg self-end mt-10 relative"
>
  {/* Icon */}
  <div className="relative ml-35 top-0 mb-1 sm:justify-start md:ml-58 sm:mt-0">
    <img
      src="/icon-t.png"
      alt="icon-t"
      className="w-3 h-3 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-7 lg:h-7 lg:ml-[70px]"
    />
  </div>

  {/* Text */}
  <div className="w-[175px] ml-35 sm:w-[400px] md:w-[360] lg:w-[490px]">
    <p
      className="text-black text-[8px] sm:text-sm md:text-sm sm:ml-20 lg:text-sm lg:ml-[150px]"
    >
      "This platform helps me create daily TikToks and Instagram reels for clients without needing a video editor. A game-changer!"
    </p>
  </div>

  <div className="flex flex-row items-center ml-35 justify-start mt-2 sm:mt-3 gap- sm:gap-10 md:ml-1 md:gap-1 lg:ml-16">
    {/* Reviewer info */}
    <div className="flex flex-col md:ml-[225px] ">  
      <p className="text-black text-[8px] font-bold sm:text-sm md:text-lg lg:text-xl">
        Aisha Khan
      </p>
      <p className="text-[#707070] text-[7px] sm:text-xs md:text-sm lg:text-sm">
        Freelance Social Media Manager
      </p>
    </div>

    {/* Stars box */}
    <div className="flex items-center justify-center ml-5 sm:mr-10 gap-1 rounded-lg bg-[#CBAAE1] px-1 py-1 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#CBAAE1]">
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      <Star className="text-black fill-black w-2 h-2 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
    </div>
  </div>

  {/* Reviewer image */}
  <div className="absolute left-4 sm:left-4 md:left-6 top-[-30px] sm:top-[-60px] md:top-[-70px] bottom-[-5px] w-auto">
    <img
      src="/reviewer4.png"
      alt="reviewer4"
      className="h-[150px] sm:h-[140px] md:h-[230px] lg:h-[290px] w-auto"
    />
  </div>
</div>
    </div>
  );
};

export default Testimonial;
