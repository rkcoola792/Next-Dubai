import React from 'react'
import AboutMe from './AboutMe'
import Script from 'next/script';

export const metadata = {
  title: "About me",
  description: "Generated by create next app",
  alternates:{
    canonical:"abc",
    languages:{
      "en-US":"English"
    }
  },
  twitter:{
    card:"sumarry",
    title:"twitter",
    description:"twitter description",
    siteId:"123",
    creator:"adam",
    creatorId:"123124",
    images:[""]
  },
  robots:{
    index:false,
    follow:false,
    nocache:true,
    googleBot:{
      index:false,
      follow:false,
      noimageindex:true
    }
  },
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: '/Header Logo.webp', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/service.webp', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/Star.webp',
    shortcut: '/Star.webp',
    apple: '/Star.webp',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/Star.webp',
    },
  },

};
const page = () => {
  return (
    <div>
   
      <AboutMe></AboutMe>
    </div>
  )
}

export default page
