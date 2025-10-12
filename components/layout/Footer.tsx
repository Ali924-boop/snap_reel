import React from 'react'
import { Linkedin, Facebook, Instagram, Twitter  } from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-[#F4F3EE] w-full h-[100px] flex items-center space-between px-20'>
      <div className='flex items-center h-[21px] mt-8 '>
        <p className='text-black font-semibold ml-6'>COPYRIGHT@SNAPREEL</p>
        <div className='flex items-center ml-175 space-x-5'>
        <Linkedin className='text-black' />
        <Facebook className='text-black' />
        <Instagram className='text-black' />
        <Twitter className='text-black' />  
        </div>
      </div>
      </div>
  )
}

export default Footer