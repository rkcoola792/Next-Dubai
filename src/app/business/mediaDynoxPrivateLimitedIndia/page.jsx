"use client"
import React from 'react'
import Section2 from '@/app/services/Section2';
import Section4 from '@/app/services/Section4';
import Section3 from '@/app/services/Section3';
import Hero from '@/app/services/Hero';

const page = () => {
  return (
    <div className="mediaDynoxPrivateLimitedIndia  md:px-12 px-4 sm:px-12 2xl:px-0  max-w-[1440px] mx-auto">
        <Hero
        heading1="Home"
        heading2="Business"
        subheading="Media Dynox Private Limited India"
        description="Provide transparent and comprehensive performance reports, detailing portfolio performance, asset allocation, and investment decisions, fostering trust and transparency."
      />
      <Section2 
      para1="Customized Estate Plans: Design comprehensive estate plans tailored to clients' unique family dynamics, wealth distribution goals, and legacy wishes, ensuring efficient wealth transfer and asset protection."
      para2="Trust Administration: Provide professional trustee services, overseeing the administration and management of trusts to fulfill clients' wishes and safeguard beneficiaries' interests"
      para3="Probate Avoidance: Implement strategies to minimize the impact of probate proceedings on estate assets, such as living trusts, beneficiary designations, and joint ownership arrangements."
      para4="Charitable Giving Strategies: Facilitate philanthropic goals through tax-efficient charitable giving strategies, including donor-advised funds, charitable trusts, and private foundations."
      ></Section2>
      <Section3 heading="" subheading="" cta=""></Section3>
      <Section4></Section4>
    </div>
  )
}

export default page
