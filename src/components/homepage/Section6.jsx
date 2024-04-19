"use client"
import React from 'react'
import Heading from '../Heading/Heading'
import StarIcon  from '../StarIcon/StarIcon';
import BlogWithImage from './BlogWithImage';
import { motion } from 'framer-motion';
import Link from 'next/link';



const Section6 = () => {
  return (
    <div className="section6 blogs  bg-subtleBlue py-8 relative ">
     <div className='max-w-[1440px] mx-auto'>
      <div className="absolute ">
        <StarIcon></StarIcon>
      </div>
      <div className="top sticky lg:top-20 top-20 bg-subtleBlue p-8 z-40 ">
        <div className="w-full bg-subtleBlue ">
          <Heading heading="blogs" subheading="latest post"></Heading>
        </div>
      </div>
      <div className="blogs my-6 flex flex-col gap-8 px-4 sm:px-12  2xl:px-0 ">
        <motion.div
          className="lg:flex-row flex flex-col gap-6 lg:sticky top-64 bg-subtleBlue z-10"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.1 }}
        >
        <Link href="/blog/post1">
          <BlogWithImage
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Take control of your finances and achieve true financial freedom with our expert tips and advice. From budgeting and saving techniques href debt management and retirement planning, empower yourself with the knowledge and tools href secure your financial future. "
            date="17 Feb, 2023"
            author="Janet Fleming"
            img="/blog3.webp"
          />
          </Link>
          {/* <Link href="/blog/post2"> */}
          {/* <Blog
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
            date="17 Feb, 2023"
            author="Janet Fleming"
          ></Blog> */}
          {/* </Link> */}
        </motion.div>
        <motion.div
          className="lg:flex-row flex flex-col gap-6 lg:sticky top-64 bg-subtleBlue z-10"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.1 }}
        > 
        {/* <Link href="/blog/3">
          <Blog
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
            date="17 Feb, 2023"
            author="Janet Fleming"
          ></Blog>
          </Link> */}
          <Link href ="/blog/post2">
          <BlogWithImage
            img="/blog2.webp"
            heading="Financial Services"
            subheading="Mastering Personal Finance: Essential Tips for Financial Freedom"
            description=" Dive into the fundamentals of investing with our comprehensive guide tailored for beginners. Learn about different investment options, risk management strategies, and tips for building a diversified portfolio href achieve your financial goals. "
            date="1 Mar, 2023"
            author="Ryan Gosling"
          />
          </Link>
        </motion.div>

        <motion.div
          className="lg:flex-row flex flex-col gap-6 lg:sticky top-64 bg-subtleBlue z-10"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.1 }}
        > 
        {/* <Link href="/blog/3">
          <Blog
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
            date="17 Feb, 2023"
            author="Janet Fleming"
          ></Blog>
          </Link> */}
          <Link href ="/blog/post3">
          <BlogWithImage
            img="/blog5.webp"
            heading="Banking Services"
            subheading="The Future of Cryptocurrency: Exploring the Latest Trends and Innovations"
            description=" Unravel the mysteries of credit scores and learn how they influence your financial well-being. Our guide breaks down the key factors affecting your credit score, offers tips for improving it, and explores its significance in various aspects of your financial life. "
            date="5 Aug, 2023"
            author="Ryan Gosling"
          />
          </Link>
        </motion.div>
      </div>
      </div>
    </div>
  );
}

export default Section6
