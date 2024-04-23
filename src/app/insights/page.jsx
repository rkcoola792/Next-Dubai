// "use client"

import React from 'react'
import OtherInsigts from './Section3';
import Hero from '../services/Hero';
import Section2 from './Section2';
import Section3 from './Section3';
export const metadata = {
  title: "Insights",
  description: "Generated by create next app",
};

const Insights = () => {
  return (
    <div className="insights  px-4 sm:px-12 2xl:px-0 max-w-[1440px] mx-auto">
      
      <div className="hero">
         <Hero
          heading1="Home"
          heading2="Insights"
          subheading="Media & Article"
          description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
        ></Hero> 
      </div>
      <div className="my-12">
        <Section2></Section2>
        <OtherInsigts></OtherInsigts>
      </div> 
    </div>
  );
}

export default Insights
