import React from 'react'

const Features = () => {
  return (
     <div className="relative flex flex-col items-center justify-center text-center px-4 py-10 md:py-24 lg:py-4">
      {/* Decorative background image */}
      <img
        src="/item.svg"
        alt="Decorative Element"
        className="absolute top-0 left-0 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] opacity-90"
      />
    </div>
  )
}

export default Features