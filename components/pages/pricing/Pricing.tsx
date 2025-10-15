"use client";
import React, { useState } from "react";

const Pricing = () => {
  
  const [activeCards, setActiveCards] = useState([false, false, false, false]);

   const handleClick = (index: number) => {
    const newActive = [...activeCards];
    newActive[index] = !newActive[index]; // sirf clicked card toggle ho
    setActiveCards(newActive);
  };


  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 py-10 md:py-24 lg:py-4">
      {/* Decorative background image */}
      <img
        src="/item.svg"
        alt="Decorative Element"
        className="absolute top-0 left-0 w-[100px] sm:w-[140px] md:w-[190px] lg:w-[220px] xl:w-[260px] opacity-90 object-contain"
      />

     {/* Heading + Hero Image Row */}
<div className="flex flex-row justify-center ml-9 mb-5 md:ml-40 md:flex-row lg:flex-row lg:mt-19 lg:ml-50 max-w-6xl">
  {/* Left: Heading Text */}
  <div className="flex flex-col w-[180px] mr-[-16px] ml-15 justify-center self-center md:w-[300px] lg:mt-10 lg:text-center lg:w-[500px] lg:gap-4">
    <h1 className="text-black mb-1 mt-8 self-center text-[18px] md:text-[32px] md:font-bold lg:text-[46px] lg:font-bold">
      Simple pricing for
    </h1>
    <span className="text-[#C76B46] text-[18px] mb-1 md:self-center md:text-[32px] md:font-bold lg:mb-2 lg:text-[46px] lg:font-bold">
      everyone
    </span>
    {/* Bottom Description */}
    <span className="text-black self-center text-[10px] md:text-[11px] lg:w-[400px] lg:text-[15px]">
      Start free, upgrade when you need more. No hidden fees, cancel anytime.
    </span>
  </div>

  {/* Right: Hero Image */}
  <div className=" flex w-[100px] h-[130px] ml-2 md:mt-[-2px] md:w-[250px] md:h-[210px] lg:ml-2 lg:w-[350px] lg:h-[300px]">
    <img
      src="/pricing-hero.png"
      alt="Hero"
      className="object-contain"
    />
  </div>
</div>

{/* Cards Section */}
<div className="flex flex-wrap justify-center gap-5 mt-10 px-3 w-full md:gap-6 max-w-6xl mx-auto relative">
  
  {/*card 1*/}
   <div
   onClick={() => handleClick(0)}
    className="bg-[#EDCF89] shadow-lg p-[10px] rounded-xl md:w-[35%] lg:p-[15px] lg:w-[256.25px] lg:h-[336px] hover:shadow-xl transition-shadow cursor-pointer duration-300 relative"
   style={{
  transition: "all 0.35s ease", // smooth animation
  transform: activeCards[0] ? "translateY(-12px)" : "translateY(0)", // smooth lift
  boxShadow: activeCards[0]
    ? "0 12px 25px rgba(0,0,0,0.25)"
    : "0 4px 10px rgba(0,0,0,0.1)", // soft glow
  border: activeCards[0]
    ? "2px solid #D6B75F"
    : "1px solid transparent", // elegant border
  scale: activeCards[0] ? "1.03" : "1", // slight zoom-in
  zIndex: activeCards[0] ? 10 : 1, // bring to front
}}
    >
      {/* Top Section */}
      <div className="text-left ml-2">
        <h2 className="text-black text-sm lg:text-lg font-semibold">
          LITE PLAN
        </h2>
        <p className="text-black text-[10px] lg:text-xs"><span className="font-semibold">5</span>/month</p>
      </div>

      {/* Button */}
      <div className="items-center justify-center mt-4">
      <button className="bg-[#EDCF89] text-[#C76B46] text-xs md:px-15 lg:text-sm p-1 px-10 lg:py-2 lg:px-15 border-[1.5px] rounded-lg">
        GET STARTED
      </button>
      </div>
      
      {/*Feature List*/}
      
      <div className="mt-4 space-y-1">
  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">500 credits</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Basic Character Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Basic Scene Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Standard Video Quality (720p)</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Email Support</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">1 Project at a time</p>
  </div>
</div>
    </div>

    {/*Card 2*/}
<div
onClick={() => handleClick(1)}
 className="bg-[#FFCAD4] shadow-lg p-[10px] rounded-xl md:w-[35%] lg:p-[15px] lg:max-w-[260px] lg:max-h-[340px] hover:shadow-xl transition-shadow cursor-pointer duration-300 relative"
 style={{
  transition: "all 0.35s ease", // smooth animation
  transform: activeCards[1] ? "translateY(-12px)" : "translateY(0)", // smooth lift
  boxShadow: activeCards[1]
    ? "0 12px 25px rgba(0,0,0,0.25)"
    : "0 4px 10px rgba(0,0,0,0.1)", // soft glow
  border: activeCards[1]
    ? "2px solid #F85C79"
    : "1px solid transparent", // elegant border
  scale: activeCards[1] ? "1.03" : "1", // slight zoom-in
  zIndex: activeCards[1] ? 10 : 1, // bring to front
}}
 >
 
  
  {/* Badge in top-right corner */}
  <img
    src="/card2-bdg.png"
    alt="Badge"
    className="absolute top-0 right-0 w-16 h-16"
  />

  {/* Top Section */}
  <div className="text-left mt-1 ml-2">
    <h2 className="text-black text-sm lg:text-lg font-semibold">
      Creator plan
    </h2>
    <p className="text-black text-[10px] lg:text-xs"><span className="font-semibold">22</span>/month</p>
  </div>

  {/* Features List */}
  <div className="mt-4 space-y-1">
    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
      <p className="text-black text-[10px] lg:text-xs">2,500 credits</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
      <p className="text-black text-[10px] lg:text-xs">HD Character Images</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
      <p className="text-black text-[10px] lg:text-xs">HD Scene Images</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
      <p className="text-black text-[10px] lg:text-xs">High Quality Videos (1080p)</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
      <p className="text-black text-[10px] lg:text-xs">Priority Support</p>
    </div>

    <div className="flex flex-row py-1 mx-2">
      <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
      <p className="text-black text-[10px] lg:text-xs">5 Projects simultaneously</p>
    </div>
  </div>

  {/* Button */}
  <div className="flex items-center justify-center mt-1">
    <button className="bg-[#F85C79] text-white text-xs md:px-15 lg:text-sm p-1 px-10 lg:py-2 lg:px-15 border-[#F85C79] border-[1.5px] rounded-lg">
      GET STARTED
    </button>
  </div>
</div>

    {/*Card 3*/}
    <div
    onClick={() => handleClick(2)}
     className="bg-[#B7CBED] shadow-lg p-[10px] md:w-[35%] lg:p-[15px] rounded-xl lg:w-[256.25px] hover:shadow-xl transition-shadow cursor-pointer duration-300 relative"
    style={{
  transition: "all 0.35s ease", // smooth animation
  transform: activeCards[2] ? "translateY(-12px)" : "translateY(0)", // smooth lift
  boxShadow: activeCards[2]
    ? "0 12px 25px rgba(0,0,0,0.25)"
    : "0 4px 10px rgba(0,0,0,0.1)", // soft glow
  border: activeCards[2]
    ? "2px solid rgba(0,0,0,0.15)"
    : "1px solid transparent", // elegant border
  scale: activeCards[2] ? "1.03" : "1", // slight zoom-in
  zIndex: activeCards[2] ? 10 : 1, // bring to front
}}
     >
      {/* Top Section */}
      <div className="text-left ml-2">
        <h2 className="text-black text-sm lg:text-lg font-semibold">
          Professional plan
        </h2>
        <p className="text-black text-xs mt-2"><span className="font-semibold">50</span>/month</p>
      </div>

      {/* Button */}
      <div className="items-center justify-center mt-4">
      <button className="bg-[#B7CBED] text-[#C76B46] text-xs md:px-15 lg:text-sm p-1 px-10 lg:py-2 lg:px-15 border-[1.5px] rounded-lg">
        GET STARTED
      </button>
      </div>
      <div className="mt-4 space-y-1">
  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">5,500 credits</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Premium Character Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Premium Scene Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Ultra HD Video Quality (1080p)</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Premium Support</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Unlimited Projects</p>
  </div>
</div>
    </div>

    {/*Card 4*/}
    <div
    onClick={() => handleClick(3)}
     className="bg-[#B7F295] shadow-lg p-[10px] md:w-[35%] lg:p-[15px] rounded-xl lg:w-[256.25px] lg:h-[336px] hover:shadow-xl transition-shadow cursor-pointer duration-300 relative"
    style={{
  transition: "all 0.35s ease", // smooth animation
  transform: activeCards[3] ? "translateY(-12px)" : "translateY(0)", // smooth lift
  boxShadow: activeCards[3]
    ? "0 12px 25px rgba(0,0,0,0.25)"
    : "0 4px 10px rgba(0,0,0,0.1)", // soft glow
  border: activeCards[3]
    ? "2px solid rgba(0,0,0,0.15)"
    : "1px solid transparent", // elegant border
  scale: activeCards[3] ? "1.03" : "1", // slight zoom-in
  zIndex: activeCards[3] ? 10 : 1, // bring to front
}}
     >
      
      {/* Top Section */}
      <div className="text-left ml-2">
        <h2 className="text-black text-sm lg:text-lg font-semibold">
          Content Pro
        </h2>
        <p className="text-black text-xs mt-2"><span className="font-semibold">100</span>/month</p>
      </div>

      {/* Button */}
      <div className="items-center justify-center mt-4">
      <button className="bg-[#B7F295] text-[#C76B46] text-xs md:px-15 lg:text-sm p-1 px-10 lg:py-2 lg:px-15 border-[1.5px] rounded-lg">
        GET STARTED
      </button>
      </div>
      <div className="mt-4 space-y-1">
  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">10,000 Credits</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Studio Quality Images</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Cinematic Scene Quality</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">4K Video Generation</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Dedicated Support</p>
  </div>

  <div className="flex flex-row py-1 mx-2">
    <img src="/card-tick.png" alt="card-icon" className="w-[10px] h-[10px] mr-2 md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px] lg:mr-2" />
    <p className="text-black text-[10px] lg:text-xs">Advanced AI Features</p>
  </div>
</div>
    </div>
</div>

    </div>

  );
};

export default Pricing;
