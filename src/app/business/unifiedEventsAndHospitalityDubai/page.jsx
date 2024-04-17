"use client"
import React from 'react'
import Section2 from '@/app/services/Section2';
import Section4 from '@/app/services/Section4';
import Section3 from '@/app/services/Section3';
import Hero from '@/app/services/Hero';

const page = () => {
  return (
    <div className="unifiedEventsAndHospitalityDubai md:px-12 px-4 sm:px-12 2xl:px-0  max-w-[1440px] mx-auto">
       <Hero
        heading1="Home"
        heading2="Business"
        subheading="Unified Events And Hospitality Dubai "
        description=" Provide transparent and comprehensive performance reports, detailing portfolio performance, asset allocation, and investment decisions, fostering trust and transparency."
      />
     <Section2 
      para1="Strategic Asset Allocation: Develop asset allocation strategies tailored to clients' retirement goals, time horizon, and risk tolerance, balancing growth and preservation objectives."
      para2="Income Planning: Design sustainable retirement income streams, incorporating sources such as pensions, Social Security, annuities, and systematic withdrawals from investment accounts."
      para3="Healthcare Cost Management: Address healthcare expenses in retirement through strategies such as Medicare planning, long-term care insurance, and health savings accounts (HSAs)."
      para4="Legacy Planning: Implement estate planning measures to preserve wealth for heirs, minimize estate taxes, and ensure a smooth transfer of assets according to clients' wishes."
      ></Section2>
      <Section3 heading="" subheading="" cta=""></Section3>
      <Section4></Section4>
    </div>
  )
}

export default page
