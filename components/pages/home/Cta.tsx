import React from 'react'
import { CircleArrowUp,Video  } from 'lucide-react';

const Cta = () => {
  return (
    <div className="relative bg-[#B0C4B1] w-full h-[200px] md:w-full md:h-[265px] lg:w-full lg:h-[452px] overflow-hidden">
      {/* Background Image */}
<img
  src="/Cta-pic.png"
  alt="background"
  className="absolute top-10 h-[230px] left-1/2 transform -translate-x-1/2 md:top-13 md:w-full md:h-[295px] lg:w-full lg:h-[500px] lg:top-26 "
/>

  <div className="relative z-10 py-2 flex flex-col lg:py-8 lg:gap-2 items-center justify-center">
    <h1 className="text-white font-bold md:text-2xl lg:text-5xl">Ready to create your</h1>
    <span className="text-white font-bold md:text-2xl lg:text-5xl">
      first <span className="text-[#C76B46]">AI video</span>?
    </span>
    <p className="text-center mb-1 text-[8px] w-[210px] md:text-xs md:w-[240px] lg:text-[16px] lg:mx-auto lg:w-[420px]">
      Join thousands of creators who are already using AI to tell 
better stories faster.
    </p>
   
  {/* Input container with icon */}
  <div className="relative justify-center flex items-center">
    <span className="absolute w-4 h-4 left-3 top-4 md:top-5 lg:w-8 lg:h-8 lg:left-3 lg:top-1/3 transform -translate-y-1/2">
      <img src="/input-icon.png" alt="icon" className='pb-13 lg:pl-3' />
    </span>
   <input
  type="text"
  placeholder="Start creating an AI video"
  className="decoration-black placeholder:text-[8px] w-[200px] h-[47px] text-left pb-5 pl-8 md:w-[330px] md:h-[60px] md:placeholder:text-xs  lg:pb-13 lg:placeholder:pl-4 lg:placeholder:text-sm lg:w-[555px] lg:h-[114px] pr-4 rounded-lg text-black bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-[#B0C4B1]"
/>
<CircleArrowUp className="absolute w-3 h-3 ml-40 top-8 text-gray-700 shadow-2xl  transform -translate-y-1/6 cursor-pointer md:ml-[280px] md:w-4 md:h:4 lg:top-21 lg:right-6 lg:w-6 lg:h-6" />
</div>

<div className="flex items-center justify-center lg:-mt-1">
  <button className="flex items-center mt-1 gap-1 py-1 px-1 bg-[#C76B46] rounded-lg md:gap-1.5 md:px-1.5 md:py-1.5 lg:gap-2 lg:py-2 lg:px-2 text-white hover:bg-[#B45D3F] transition">
    <Video className="w-2 h-2 md:w-4 md:h-4 lg:w-5 lg:h-5" />
    <span className='text-[8px] lg:text-sm'>START CREATING FREE</span>
  </button>
</div>


  </div>
</div>

  )
}

export default Cta