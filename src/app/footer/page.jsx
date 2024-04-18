
import Link from 'next/link';
import React from 'react'


const Footer = () => {
  // const currentYear = new Date().getFullYear();
  return (
    <div className="footer bg-mainBlue px-4 sm:px-12 md:py-6 py-12 w-full" id="partners">
      <div className="lg:flex-row mx-auto max-w-[1440px] flex flex-col lg:justify-between lg:items-center gap-4">
        <div className="left-logo ">
          <img src="/logo-white.webp" alt="logo" className="w-36"  height="fit"
          width="fit" />
        </div>
        <div className="center-links md:flex-row flex flex-col gap-4  lg:justify-center lg:items-center lg:gap-8 px-2 text-2xl md:text-base   md:mt-0">
          <Link href="/">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Home
            </p>
          </Link>
          <Link href="/#services">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Services
            </p>
          </Link>
          <Link href="/aboutMe">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              About
            </p>
          </Link>
          <Link href="/#partners">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Our Partners
            </p>
          </Link>
          <Link href="blogs">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Blog
            </p>
          </Link>
          <Link href="/termsCondition">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Terms & Condition
            </p>
          </Link>
        </div>
        <Link href="/contactUs">
          <div className="contact-us-button bg-white text-mainBlue p-3  font-semibold rounded-full cursor-pointer w-fit px-6 text-xl sm:text-base mt-4 sm:mt-0">
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer
