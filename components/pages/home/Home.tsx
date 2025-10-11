import React from 'react'
import Hero from './Hero'
import Item from './Item'
import Gallery from './Gallery'

const Home = () => {
  return (
    <div className='bg-[#F4F3EE] min-h-screen'>
      <Hero />
      <Item />
      <Gallery />
    </div>
  )
}

export default Home