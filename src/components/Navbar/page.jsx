import React from 'react'
import CenterHeader from '../CenterHeader/page';
import Link from 'next/link';


const Header = () => {
  return (
    <div className="Header sticky top-0 z-[150] bg-white w-full shadow-md h-[100px] flex justify-center   items-center  mx-auto border border-gray-200 ">
      <div className='header flex justify-between items-center w-[1440px] md:mx-12 lg:px-0'>
        
    
      <Link href="/">
        <div className="logo cursor-pointer">
          <img src="/Header Logo.webp" alt="logo" className="w-36"  height="fit"
          width="fit" />
        </div>
      </Link>
      <CenterHeader />
      <Link href="/contactUs">
        <div className="contact-us-button bg-mainBlue text-white p-3 px-6 rounded-full cursor-pointer">
         <p>Contact Us</p>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Header


