"use client"
import React from 'react'
import Section2 from '@/app/services/Section2';
import Section4 from '@/app/services/Section4';
import Section3 from '@/app/services/Section3';
import Hero from '@/app/services/Hero';

const page = () => {
  return (
    <div className="unifiedChelseaPlazaHotel md:px-12 px-4 sm:px-12 2xl:px-0  max-w-[1440px] mx-auto">
           <Hero
        heading1="Home"
        heading2="Business"
        subheading="Unified Chelsea Plaza Hotel"
        description="Offer access to exclusive investment opportunities such as private equity, hedge funds, and venture capital, providing clients with diversified investment options."
      />
     <Section2 
      para1="Strategic Tax Planning: Develop tax-efficient strategies to minimize tax liabilities, optimize deductions, and maximize credits, tailored to clients' unique financial situations and goals."
      para2="Year-Round Support: Provide ongoing tax planning and consultation services beyond tax season, ensuring proactive tax management and compliance with changing tax laws."
      para3="Complex Tax Filings: Assist clients with complex tax situations, including small business owners, freelancers, investors, and high-net-worth individuals, navigating intricate tax codes and regulations."
      para4="Audit Support: Offer audit representation and assistance in responding to IRS inquiries, providing peace of mind and expert guidance throughout the audit process."
      ></Section2>
      <Section3 heading="" subheading="" cta=""></Section3>
      <Section4></Section4>
    </div>
  )
}

export default page
