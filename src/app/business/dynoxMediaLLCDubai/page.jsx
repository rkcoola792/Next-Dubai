"use client"
import React from 'react'
import Section2 from '@/app/services/Section2';
import Section4 from '@/app/services/Section4';
import Section3 from '@/app/services/Section3';
import Hero from '@/app/services/Hero';

const page = () => {
  return (
    <div className="CatsClubAndBarDubai  md:px-12 px-4 sm:px-12 2xl:px-0  max-w-[1440px] mx-auto">
      <Hero
        heading1="Home"
        heading2="Business"
        subheading="Dynox Media LLC Dubai"
        description="Employ sophisticated risk analysis techniques to mitigate downside risks while maximizing returns, ensuring a balanced approach to investing."
      />
    <Section2 
      para1="Risk Assessment: Conduct comprehensive risk assessments to identify clients' insurance needs, including life insurance, disability insurance, long-term care insurance, and liability coverage."
      para2="Policy Review: Analyze existing insurance policies to ensure they align with clients' current needs and objectives, recommending adjustments or enhancements as necessary."
      para3="Specialized Coverage: Offer specialized insurance solutions tailored to unique risks, such as key person insurance, cyber liability insurance, and directors and officers (D&O) insurance."
      para4="Capital Structure Optimization: Develop tailored financing strategies to optimize capital structure, balancing debt and equity to support business growth and maximize shareholder value."
      ></Section2>
    <Section3 heading="" subheading="" cta=""></Section3>
    <Section4></Section4>
  </div>
  )
}

export default page