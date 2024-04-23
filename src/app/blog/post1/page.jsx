"use client"
import React from 'react'
import Section2 from '../Section2'
import Section3 from '../../services/Section3'
import Section4 from '../../blogs/Section4'
import { Helmet } from 'react-helmet'

const BlogPost = () => {
  return (
    <div className=" max-w-[1440px]  mx-auto px-4 sm:px-12 2xl:px-0">
     
      <div className="section1 hero-image my-12 w- ">
        <img
          src="/Blog Post.webp"
          alt=""
          className="h-72 sm:h-auto w-full"
          height="fit"
          width="fit"
        />
      </div>
      <div className="px-2">
        <Section2></Section2>
        <div className="">
          <Section3></Section3>
        </div>
      </div>
      <div className='mx-2'>

      <Section4></Section4>
      </div>
    </div>
  );
}

export default BlogPost
