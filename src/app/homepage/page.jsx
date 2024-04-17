import Hero from '@/components/homepage/Hero'
import Section2 from '@/components/homepage/Section2'
import Section3 from '@/components/homepage/Section3'
import Section4 from '@/components/homepage/Section4'
import React from 'react'

const Homepage = () => {
  return (
    <div className='homepage my-6'>
      <div className='max-w-[1440px] mx-auto'>
      <Hero/>
      </div>
      <Section2/>

      <div className='max-w-[1440px] mx-auto'>
      <Section3 />
       </div>
       <Section4/>
    </div>
  )
}

export default Homepage
