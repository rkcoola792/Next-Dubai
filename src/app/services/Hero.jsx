import React from 'react'
import HexagonIcon from "@mui/icons-material/Hexagon";
const Hero = ({img,heading1,heading2,subheading,description}) => {
  return (
    <div className="hero-section rounded-lg sm:my-12 my-6 max-w-[1440px] mx-auto">
      <div className="background-image flex flex-col gap-8 items-center justify-center text-center relative">
        <img src="/service.webp" alt='service' className="z-10 h-[450px] xl:h-auto object-cover rounded-3xl my-6 sm:my-0 "></img>
        <div className="headings z-20 absolute sm:w-[70%] top-[25%] flex flex-col gap-8 justify-center items-center">
          <h2 className="capitalize text-white text-2xl flex items-center gap-2 font-semibold ">
            {heading1}
            <span className="rotate-90 ml-2">
              
              <HexagonIcon className=''></HexagonIcon>
            </span>
            {heading2}
          </h2>
          <h1 className="capitalize text-white sm:text-5xl text-3xl font-bold">
            {subheading}
          </h1>
          <p className="capitalize text-white opacity-90 w-[90%] leading-7" > {description}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero
