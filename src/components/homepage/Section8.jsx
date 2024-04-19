"use client"
import React from 'react'
import Heading from '../Heading/page'
import DoubleScroll from './DoubleScroll';

const Section8 = () => {
  return (
    <div className="section8 py-8 bg-subtleBlue sm:py-12 sm:my-12  px-4 sm:px-8   flex flex-col gap-6">

    
      <div className="headings">
        <Heading heading="partners" subheading="our partners"></Heading>
      </div>
      
      <div className='double-scroll max-w-[1440px] 2xl:mx-auto mx-6'>
        <DoubleScroll/>
      </div>
    </div>
  );
}

export default Section8
