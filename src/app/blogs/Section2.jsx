import { Search } from '@mui/icons-material'
import React from 'react'

import BlogsPage from './BlogsPage';
import Heading from '@/components/Heading/Heading';

const Section2 = () => {
  return (
    <div className="section2 bg-subtleBlue  flex flex-col gap-8 px-4 sm:px-12 2xl:px-0">
      <div className="top sm:flex-row flex flex-col gap-4 justify-between items-center ">
        <div className="left flex gap-6 ">
          <h1 className="font-semibold">Tags</h1>
          <h1>Articles</h1>
          <h1>Guides</h1>
          <h1>Interview</h1>
          <h1>Recent</h1>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Search"
            className="p-2 px-4 border black "
          />
          <span className="p-2 px-4 bg-mainBlue text-white ">Search</span>
        </div>
      </div>
      <div className="middle_heading">
        <Heading heading="blogs" subheading="latest post"/>
      </div>
      <div className="bottom">
        <BlogsPage/>
      </div>
    </div>
  );
}

export default Section2
