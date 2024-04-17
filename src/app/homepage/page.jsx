import Hero from '@/components/homepage/Hero'
import Section2 from '@/components/homepage/Section2'
import Section3 from '@/components/homepage/Section3'
import Section4 from '@/components/homepage/Section4'
import Section5 from '@/components/homepage/Section5'
import Section6 from '@/components/homepage/Section6'
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
       <Section5/>
       <Section6/>
    </div>
  )
}

export default Homepage
