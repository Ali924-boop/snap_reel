{"use client"}
import React from "react";

const Pricing = () => {


  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 lg:py-28">
      {/* Decorative background image */}
      <img
        src="/item.svg"
        alt="Decorative Element"
        className="absolute top-0 left-0 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] opacity-90"
      />

     {/* Heading + Hero Image Row */}
<div className="flex flex-col items-center justify-center md:flex-row w-full lg:ml-50 max-w-6xl mx-auto">
  {/* Left: Heading Text */}
  <div className="flex flex-col items-center text-center lg:mt-10 lg:w-[500px] lg:gap-7 md:text-left">
    <h1 className="text-black lg:text-5xl lg:font-extrabold">
      Simple pricing for
    </h1>
    <span className="text-[#C76B46] lg:text-5xl lg:font-extrabold">
      everyone
    </span>
    {/* Bottom Description */}
    <span className="text-black lg:text-lg text-center">
      Start free, upgrade when you need more. No hidden fees, cancel anytime.
    </span>
  </div>

  {/* Right: Hero Image */}
  <div className=" flex md:ml-6 md:mt-[-2px] lg:mb-15 lg:w-[310px] lg:h-[310px]">
    <img
      src="/pricing-hero.png"
      alt="Hero"
      className="w-full h-full object-contain"
    />
  </div>
</div>

{/*Cards Section*/}
<div className="w-full max-w-6xl mx-auto flex flex-row gap-5 flex-wrap justify-center">
  
  {/*card 1*/}
   <div className="bg-[#EDCF89] shadow-lg p-[15px] rounded-xl w-[256.25px] h-[336px] hover:shadow-xl transition-shadow duration-300">
      {/* Top Section */}
      <div className="text-left ml-2">
        <h2 className="text-black text-lg font-semibold">
          LITE PLAN
        </h2>
        <p className="text-black text-sm mt-2"><span className="font-semibold">5</span>/month</p>
      </div>

      {/* Button */}
      <div className="items-center justify-center mt-4">
      <button className="bg-[#EDCF89] text-[#C76B46] text-sm py-2 px-15 border-[1.5px] rounded-lg">
        GET STARTED
      </button>
      </div>
      <div className="mt-4 space-y-1">
  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">500 credits</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Basic Character Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Basic Scene Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Standard Video Quality (720p)</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Email Support</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">1 Project at a time</p>
  </div>
</div>
    </div>

    {/*Card 2*/}
<div className="bg-[#FFCAD4] shadow-lg p-4 rounded-xl w-[256.25px] h-[336px] hover:shadow-xl transition-shadow duration-300 relative">
  
  {/* Badge in top-right corner */}
  <img
    src="/card2-bdg.png"
    alt="Badge"
    className="absolute top-0 right-0 w-16 h-16"
  />

  {/* Top Section */}
  <div className="text-left mt-4 ml-2">
    <h2 className="text-black text-lg font-semibold">
      Creator plan
    </h2>
    <p className="text-black text-sm mt-2"><span className="font-semibold">22</span>/month</p>
  </div>

  {/* Features List */}
  <div className="mt-4 space-y-1">
    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
      <p className="text-black text-xs">2,500 credits</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
      <p className="text-black text-xs">HD Character Images</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
      <p className="text-black text-xs">HD Scene Images</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
      <p className="text-black text-xs">High Quality Videos (1080p)</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
      <p className="text-black text-xs">Priority Support</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
      <p className="text-black text-xs">5 Projects simultaneously</p>
    </div>
  </div>

  {/* Button */}
  <div className="flex items-center justify-center mt-1">
    <button className="bg-[#F85C79] text-white text-sm py-2 px-15 border-[1.5px] border-[#F85C79] rounded-lg">
      GET STARTED
    </button>
  </div>
</div>

    {/*Card 3*/}
    <div className="bg-[#B7CBED] shadow-lg p-[15px] rounded-xl w-[256.25px] h-[336px] hover:shadow-xl transition-shadow duration-300">
      {/* Top Section */}
      <div className="text-left ml-2">
        <h2 className="text-black text-lg font-semibold">
          Professional plan
        </h2>
        <p className="text-black text-sm mt-2"><span className="font-semibold">50</span>/month</p>
      </div>

      {/* Button */}
      <div className="items-center justify-center mt-4">
      <button className="bg-[#B7CBED] text-[#C76B46] text-sm py-2 px-15 border-[1.5px] rounded-lg">
        GET STARTED
      </button>
      </div>
      <div className="mt-4 space-y-1">
  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">5,500 credits</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Premium Character Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Premium Scene Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Ultra HD Video Quality (1080p)</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Premium Support</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Unlimited Projects</p>
  </div>
</div>
    </div>

    {/*Card 4*/}
    <div className="bg-[#B7F295] shadow-lg p-[15px] rounded-xl w-[256.25px] h-[336px] hover:shadow-xl transition-shadow duration-300">
      {/* Top Section */}
      <div className="text-left ml-2">
        <h2 className="text-black text-lg font-semibold">
          Content Pro
        </h2>
        <p className="text-black text-sm mt-2"><span className="font-semibold">100</span>/month</p>
      </div>

      {/* Button */}
      <div className="items-center justify-center mt-4">
      <button className="bg-[#B7F295] text-[#C76B46] text-sm py-2 px-15 border-[1.5px] rounded-lg">
        GET STARTED
      </button>
      </div>
      <div className="mt-4 space-y-1">
  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">10,000 Credits</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Studio Quality Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Cinematic Scene Quality</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">4K Video Generation</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Dedicated Support</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[18px] h-[18px] mr-2" />
    <p className="text-black text-xs">Advanced AI Features</p>
  </div>
</div>
    </div>
</div>

    </div>

  );
};

export default Pricing;
