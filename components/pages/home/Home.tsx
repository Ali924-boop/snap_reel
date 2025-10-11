import React from 'react'
import Hero from './Hero'
import Item from './Item'
import Gallery from './Gallery'
import Testimonial from './Testimonial'
import Cta from './Cta'

const Home = () => {
  return (
    <div className='bg-[#F4F3EE] min-h-screen'>
      <Hero />
      <Item />
      <Gallery />
      <Testimonial />
      <Cta />
    </div>
  )
}

export default Home