"use client"
import React from 'react'

import Section3 from '@/components/homepage/Section3';
import Project from '../services/Section3';
import Hero from '../services/Hero';
import Section4 from '@/components/homepage/Section4';
const AboutMe = () => {
  return (
    <div className="Business   ">
     <div className='max-w-[1440px] mx-auto px-4 sm:px-12 2xl:px-0'>
     <Hero
      heading1="Home"
      heading2="Business"
      subheading="Unified Capital And Investment"
      description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
    />
      </div>
  <div className='max-w-[1440px] mx-auto '>

    <Section3></Section3>
  </div>
  <div className=''>

    <Section4/>
  </div>
  <div className='max-w-[1440px] mx-auto my-12 px-4 sm:px-12 2xl:px-0'>

    <Project></Project>
  </div>
  </div>
  )
}

export default AboutMe
