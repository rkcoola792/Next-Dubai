import React from 'react'

import ContactForm from './ContactForm';
import Hero from '../services/Hero';

const ContactUs = () => {
  return (
    <div className="px-4 sm:px-12 2xl:px-0 max-w-[1440px] mx-auto">
      <Hero
        heading1="Home"
        heading2="contact us"
        subheading="Get In Touch With Us"
        description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
        // img="/Rectangle 4406.webp"
      ></Hero>
      <ContactForm></ContactForm>
    </div>
  );
}

export default ContactUs
