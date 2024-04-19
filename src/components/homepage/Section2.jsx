"use client"
import React, { useEffect, useState } from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from 'framer-motion';
import "./Section2.scss"
import Link from 'next/link';
import Heading from '../Heading/Heading';


const Section2 = () => {

  const journalArray=[ {
    id:"1",
    heading:"the funding mogul empowering business needs",
    date:"19 Jan,2021 05:13:03 PM IST",
    paragraph1:"In 2010, Bajpai decided href start his own investment firm with the aim of providing investment opportunities href businesses and individuals. Since then, he has developed a strong grip on the investment market of India.",
    paragraph2:"He has an excellent understanding of the trends and patterns of the market and can predict the behavior of the market with remarkable accuracy. Bajpai is known for his ability href identify businesses."
},
{id:"2",
  heading:"Secure Your Future: Trusted Financial Services Solutions",
  date:"12 March,2022 05:13:03 PM IST",
  paragraph1:"Description: Our trusted financial services solutions are designed href safeguard your future and provide peace of mind. With a focus on security and reliability, we offer a range of services tailored href meet your unique.",
    paragraph2:"Let our team of experts guide you through the complexities of finance with our comprehensive range of financial services. From budgeting and investment planning href retirement strategies, we provide the expertise."

},
{id:"3",
heading:"Navigate Your Finances with Expert Financial Services",
date:"15 April,2022 05:13:03 PM IST",
paragraph1:"Our tailored financial services are crafted href help you maximize your wealth and optimize your financial potential. With personalized solutions and strategic advice, we empower you href grow your assets and build.",
paragraph2:"Take control of your financial future with our comprehensive range of services designed href empower your journey towards financial success. From wealth management href estate planning, our holistic approach ensures."


},
{id:"4",
heading:"Maximize Your Wealth: Tailored Financial Services",
date:"15 June,2022 05:13:03 PM IST",
paragraph1:"Discover a suite of comprehensive financial services designed href meet your diverse needs and goals. Take charge of your financial future with confidence and peace of mind.",
paragraph2:"Invest with confidence with our premier financial services, backed by years of industry expertise and a commitment href excellence. Whether you're a seasoned investor."


},
{id:"5",
heading:"Invest Confidently: Premier Financial Services",
date:"15 Feb,2022 05:13:03 PM IST",
paragraph1:"From wealth management and investment planning href retirement strategies and estate planning, our expert advisors offer personalized solutions tailored.",
paragraph2:"Transform your wealth and unlock your financial potential with our strategic financial services tailored href your unique goals and objectives."


},
{id:"6",
heading:"Achieve Your Financial Goals: Personalized Services",
date:"15 Jan,2022 05:13:03 PM IST",
paragraph1:" Let us help you achieve your financial goals with our personalized services tailored href your individual needs and aspirations.",
paragraph2:"Partner with us on your journey href prosperity with our proven financial services backed by a track record of success."


},
{id:"7",
heading:"Elevate Your Finances: Premium Financial Service",
date:"21 Auguts,2022 05:13:03 PM IST",
paragraph1:"Elevate your finances href new heights with our premium financial services designed for discerning clients like you.",
paragraph2:"Experience true financial freedom with our innovative range of services designed href revolutionize the way you manage your money."



},]

const arr=["rajeev", "kumar"]
  const [journal,setJournal]=useState(0)

  useEffect(()=>{
    const iconLinks=document.querySelectorAll(".icon-news")
    iconLinks.forEach(ele=>{
      ele?.addEventListener("click",()=>{
        document.querySelector(".active")?.classList.remove("active");
        ele.classList.add("active");
      })
      // console.log(ele)
      // ele.addEventListener
    })
  },)


  return (
    <div className="section2 my-12 py-12 pb-4 bg-[#F8FCFF]  relative   ">
      <div className='max-w-[1440px] mx-auto'>
      <motion.div className="heading">
        <Heading
          heading="journal"
          subheading="featured in international "
        ></Heading>
      </motion.div>
      <motion.div
        className="bottom-content   mt-6 sm:mx-12 2xl:mx-0 sm:my-12 flex flex-col bg-white shadow-lg sm:p-12 p-4 rounded-lg  "
        initial={{ scale: 0.75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div className="top-descriptions lg:h-[15rem] flex flex-col lg:flex lg:flex-row gap-6 items-start"
        
        >
          <div className="left-headings lg:w-[40%] flex flex-col gap-4  lg:gap-8 justify-center   lg:text-left">
            <h3 style={{lineHeight:"50px"}} className ="uppercase sm:text-3xl 2xl:text-4xl  lg:text-left text-2xl text-center font-medium opacity-90 my-6 sm:my-0">
              {journalArray[journal]?.heading}
            </h3>
            <p className="opacity-70 text-center lg:text-left mb-4">
            {journalArray[journal]?.date}
            </p>
          </div>
          <div className="right-descriptions lg:w-[60%] flex text-center lg:text-left flex-col">
            <div className="descriptions flex flex-col gap-6 leading-7 text-gray-700 text-sm">
              <p className='2xl:text-lg 2xl:leading-8'>
              {journalArray[journal]?.paragraph1}
              </p>
              <p className='2xl:text-lg 2xl:leading-8'>
              {journalArray[journal]?.paragraph2}
              </p>
            </div>
            <div className="read more mt-4">
              <Link href ="/insights">

              
              <p className="text-mainBlue font-semibold 2xl:text-lg">
                Read More <ArrowRightAltIcon></ArrowRightAltIcon>
              </p>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="bottom-icons flex flex-col gap-8 mt-8 py-4">
          <hr />
          <div className="bottom-icons flex gap-4 justify-between items-center ">
            <div className="icon-news cursor-pointer opacity-30 active " onClick={()=>setJournal(0)}>
              <img src="/Forbes.webp" alt="forbes"  height="fit"
          width="fit"/>
            </div>
            <div className="icon-news cursor-pointer opacity-30"  onClick={()=>setJournal(1)}>
              <img src="/mint.webp" alt="mint"  height="fit"
          width="fit"/>
            </div>
            <div className="icon-news cursor-pointer opacity-30"  onClick={()=>setJournal(2)}>
              <img src="/money.webp" alt="moneycontrol"  height="fit"
          width="fit" />
            </div>
            <div className="icon-news cursor-pointer opacity-30" onClick={()=>setJournal(3)}>
              <img src="/fortune.webp" alt="fortune"   height="fit"
          width="fit"/>
            </div>
            <div className="icon-news cursor-pointer opacity-30" onClick={()=>setJournal(4)}>
              <img src="/abp.webp" alt="abp"  height="fit"
          width="fit" />
            </div>
            <div className="icon-news cursor-pointer opacity-30" onClick={()=>setJournal(5)}>
              <img src="/zee.webp" alt="zee news"  height="fit"
          width="fit" />
            </div>
            <div className="icon-news cursor-pointer opacity-30" onClick={()=>setJournal(6)}>
              <img src="/aajtak.webp" alt="aajtak"  height="fit"
          width="fit" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-4 left-8  z-[45] max-w-[1440px] mx-auto "
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {/* <StarIcon></StarIcon> */}
      </motion.div>
      </div>
   
    </div>
  );
}

export default Section2
