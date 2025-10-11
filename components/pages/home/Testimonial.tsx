import { Star } from 'lucide-react';
import React from 'react'

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center mt-20 space-y-10">
      
      {/* Heading centered */}
      <div className="flex flex-col items-center text-center max-w-4xl">
        <h1 className="font-bold text-black text-5xl">
          What creators are saying
        </h1>
        <span className="font-bold text-black text-5xl mt-2">
          about <span className="text-[#C15F3C]">SnapReel</span>
        </span>
      </div>

      <div className="bg-[#FFCAD4] w-[1000px] h-80 rounded-r-full shadow-lg p-10 self-start mt-19 relative">
  {/* icon */}
  <div>
      <img src="/icon-t.png" alt="" />
  </div>

  {/* text */}
  <div className='mt-5 max-w-sm'>
      <p className='text-black'>
        "This AI video tool has completely transformed how I create content. What used to take hours now takes minutes, and the quality is incredible."
      </p>
  </div>

  {/* reviewer info and stars */}
  <div className='flex items-center mt-5 gap-4'>
    <div>
      <p className='text-black font-bold text-xl'>Golan Adam</p>
      <p className='text-[#707070]'>Content Creator (YouTuber)</p>
    </div>

    <div className="flex items-center justify-center gap-1 rounded-xl bg-[#FFCAD4] px-2 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#FFCAD4] ml-18">
      <Star className="text-black fill-black w-4 h-4" />
      <Star className="text-black fill-black w-4 h-4" />
      <Star className="text-black fill-black w-4 h-4" />
      <Star className="text-black fill-black w-4 h-4" />
      <Star className="text-black fill-black w-4 h-4" />
    </div>
  </div>

  {/* Reviewer image */}
    <div className="absolute top-15 right-65 bottom-[20px] h-[calc(25%+90px)] w-auto z-0">
    <img
      src="/part.png"
      alt="background part"
      className="h-full w-auto object-contain"
    />
  </div>

  <div className="absolute right-10 top-[-125px] bottom-[-20px] w-auto">
  <img
    src="/reviewer1.png"
    alt="reviewer"
    className="h-full w-auto object-contain"
  />
</div>
</div>

{/* Second Reviewer */}
<div className="bg-[#E9C46A] w-[1000px] h-80 rounded-l-full shadow-lg p-10 self-end mt-39 relative flex">
  
  {/* Left side: Part background + reviewer image */}
 <div className="relative flex-shrink-0 w-1/2 h-[430px]"> {/* Set a larger height for parent */}
  <div className="absolute top-[-230px] left-10 bottom-10 w-auto z-10">
    <img
      src="/reviewer2.png"
      alt="reviewer2"
      className="h-full w-auto object-contain"
    />
  </div>
</div>


  {/* Right side: Text, stars, reviewer info */}
  <div className="flex flex-col justify-between ml-6 w-2/3">
    <div>
      <img src="/icon-t.png" alt="icon" />
      <div className='mt-5 max-w-sm'>
        <p className='text-black'>
"As a marketing agency, this tool has revolutionized how we create video content for clients. The quality is unmatched."        </p>
      </div>
    </div>

    <div className='flex items-center mt-5 gap-4'>
      <div>
        <p className='text-black font-bold text-xl'>Dr. Emily Watson</p>
        <p className='text-[#707070]'>Creative Director</p>
      </div>

      <div className="flex items-center justify-center gap-1 rounded-xl ml-25 bg-[#E9C46A] px-2 py-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#E9C46A]">
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
        <div className="bg-[#98B9F2] w-[1000px] h-80 rounded-r-full shadow-lg p-10 self-start mt-39 relative">
  {/* icon */}
  <div>
      <img src="/icon-t.png" alt="" />
  </div>

  {/* text */}
  <div className='mt-5 max-w-sm'>
      <p className='text-black'>
"I've been using this for educational content. My students love the animated stories, and I can create them so quickly now."      </p>
  </div>

  {/* reviewer info and stars */}
  <div className='flex items-center mt-5 gap-4'>
    <div>
      <p className='text-black font-bold text-xl'>Marcus Rodriguez</p>
      <p className='text-[#707070]'>Educator</p>
    </div>

    <div className="flex items-center justify-center gap-1 rounded-xl bg-[#98B9F2] px-2 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#98B9F2] ml-18">
      <Star className="text-black fill-black w-4 h-4" />
      <Star className="text-black fill-black w-4 h-4" />
      <Star className="text-black fill-black w-4 h-4" />
      <Star className="text-black fill-black w-4 h-4" />
      <Star className="text-black fill-black w-4 h-4" />
    </div>
  </div>

  {/* Reviewer image */}
  <div className="absolute right-10 top-[-125px] bottom-[-20px] w-auto">
  <img
    src="/reviewer3.png"
    alt="reviewer"
    className="h-full w-auto object-contain"
  />
</div>
</div>

{/* Fourth Reviewer */}
<div className="bg-[#CBAAE1] w-[1000px] h-80 rounded-l-full shadow-lg p-10 self-end mt-39 relative flex">
  
  {/* Left side: Part background + reviewer image */}
 <div className="relative flex-shrink-0 w-1/2 h-[430px]"> {/* Set a larger height for parent */}
  <div className="absolute top-[-230px] left-10 bottom-10 w-auto z-10">
    <img
      src="/reviewer4.png"
      alt="reviewer4"
      className="h-full w-auto object-contain"
    />
  </div>
</div>


  {/* Right side: Text, stars, reviewer info */}
  <div className="flex flex-col justify-between ml-6 w-2/3">
    <div>
      <img src="/icon-t.png" alt="icon" />
      <div className='mt-5 max-w-sm'>
        <p className='text-black'>
            "This platform helps me create daily TikToks and Instagram reels for clients without needing a video editor. A game-changer!"
        </p>
      </div>
    </div>

    <div className='flex items-center mt-5 gap-4'>
      <div>
        <p className='text-black font-bold text-xl'>Aisha Khan</p>
        <p className='text-[#707070]'>Freelance Social Media Manager</p>
      </div>

      <div className="flex items-center justify-center gap-1 rounded-xl ml-25 bg-[#CBAAE1] px-2 py-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#CBAAE1]">
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
  )
}

export default Testimonial;
