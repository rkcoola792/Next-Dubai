"use client"
import React from 'react'
import Section3 from '../Section3';
import Section4 from '../Section4';
import Hero from '../Hero';
import Section2 from '../Section2';
const RealEstate = () => {
  return (
    <div className="service  px-4 sm:px-12 2xl:px-0   max-w-[1440px] mx-auto">
      
    <Hero
      heading1="Home"
      heading2="Real Estate"
      subheading="Tourism & Hospitality"
      description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
    ></Hero>
    
    <Section2></Section2>
    <Section3></Section3>
    <Section4></Section4>
  </div>
  )
}

export default RealEstate
