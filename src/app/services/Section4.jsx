import React from 'react'



import Section5 from '@/components/homepage/Section5';
import Heading from '@/components/heading/Heading';
import { StarIcon } from '@/components/starIcon/StarIcon';

const Section4 = () => {
  return (
    <div className="section4 my-12 relative ">
      <div className=" absolute w-12">
        <StarIcon></StarIcon>
      </div>
      <div className="heading">
        <Heading
          heading="process"
          subheading="few easy steps and done"
        ></Heading>
      </div>
      <div className="bottom sm:flex-row sm:flex-wrap flex flex-col justify-between my-12 ">
        <Section5Component
          icon=""
          heading="Renewable Energy"
          subheading="We offer investments in innovative renewable energy projects, focusing on wind, solar, geothermal, and other clean technologies."
        ></Section5Component>
        <Section5Component
          icon=""
          heading="Infrastructure"
          subheading="We specialize in infrastructure investments, providing capital for projects that build a better tomorrow. "
        ></Section5Component>
        <Section5Component
          icon=""
          heading="Business Set up"
          subheading="We offer strategic investments specifically designed to help you navigate the crucial setup phase."
        ></Section5Component>
        <Section5Component
          icon=""
          heading="Tourism & Hospitality"
          subheading="We provide several targeted investments to boost the industry’s growth   and launching a disruptive travel platform "
        ></Section5Component>
      </div>
    </div>
  );
}

export default Section4
