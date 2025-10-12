import React from 'react'
import { CircleArrowUp,Video  } from 'lucide-react';

const Cta = () => {
  return (
    <div className="relative bg-[#B0C4B1] w-full h-[423px] overflow-hidden">
  {/* Background image covering the div */}
  <img 
    src="/Cta-pic.png" 
    alt="background" 
    className="absolute w-[1350px] h-[645px] py-16 mt-7 pb-8 left-[-5px]"
  />

  {/* Content over the image */}
  <div className="relative z-10 py-8 flex flex-col gap-2 items-center justify-center">
    <h1 className="text-white font-bold text-5xl text-center">Ready to create your</h1>
    <span className="text-white font-bold text-5xl text-center">
      first <span className="text-[#C76B46]">AI video</span>?
    </span>
    <p className="text-center mx-auto w-[420px]">
      Join thousands of creators who are already using AI to tell 
better stories faster.
    </p>
   
  {/* Input container with icon */}
  <div className="relative justify-center flex items-center">
    {/* Icon inside input */}
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
      <img src="/input-icon.png" alt="icon" className='pb-12 pl-3' />
    </span>
   <input
  type="text"
  placeholder="Start creating an AI video"
  className="w-[300px] h-[100px] lg:w-[555px] lg:h-[114px] md:w-[400px] pl-4 pr-4 rounded-lg text-black bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-[#B0C4B1]"
  style={{
    textAlign: "left",
    paddingBottom: "50px", // thoda aur upar
    paddingLeft: "50px", // thoda aur upar
    textDecorationColor: "black",
  }}
/>
<CircleArrowUp className="absolute text-gray-700 right-6 shadow-2xl top-21 transform -translate-y-1/6 cursor-pointer w-6 h-6" />
</div>

<div className="flex items-center justify-center -mt-1">
  <button className="flex items-center gap-2 bg-[#C76B46] rounded-lg py-2 px-2 text-sm text-white hover:bg-[#B45D3F] transition">
    <Video className="w-5 h-5" />
    START CREATING FREE
  </button>
</div>


  </div>
</div>

  )
}

export default Cta