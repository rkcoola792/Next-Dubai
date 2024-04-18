import React from 'react'

// import MutipleBlogs from './MutipleBlogs'

import Heading from '@/components/heading/Heading'
import MutipleBlogs from './MultipleBlogs'

const Section4 = () => {
  return (
    <div className='section4  max-w-[1440px] mx-auto my-12  '>
      <div className="top-heading">
        <Heading heading="featured" subheading="featured blogs" ></Heading>
      </div>
      <div className="bottom-blogs ">
        <MutipleBlogs></MutipleBlogs>
      </div>
    </div>
  )
}

export default Section4
