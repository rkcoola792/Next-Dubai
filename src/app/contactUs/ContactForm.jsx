import { Email, Map, Phone } from '@mui/icons-material';
import React from 'react'

const ContactForm = () => {
  return (
    <div className="Contact-form rounded-lg  overflow-hidden md:flex shadow-md my-12 ">
      <div className="left relative md:w-[40%] bg-mainBlue text-white  flex flex-col sm:p-12 p-8 rounded-lg gap-16 ">
        <div className="top-heading flex flex-col gap-4">
          <h2 className="text-2xl ">Contact Information</h2>
          <p className="opacity-75">Say something to start a live chat!</p>
        </div>
        <div className="middle-details flex flex-col gap-8">
          <div className="flex sm:gap-6 gap-2">
            <div className='sm:hidden lg:block'><Phone></Phone></div>
            <p> 971 543119922</p>
          </div>
          <div className="flex sm:gap-6 gap-2">
            <div className='sm:hidden lg:block'><Email></Email></div>
            <p> connect@unifiedinvestments.ae</p>
          </div>
          <div className="flex sm:gap-6 gap-2">
            <div className='sm:hidden lg:block'><Map></Map>
</div>         
   <p>
       AI Amal St, Business Bay - Dubai - United Arab Emirates
            </p>
          </div>
        </div>
        <div className="bottom-links flex gap-6 sm:mt-12">
          <div className="icon">
            <img src="twitter.webp" alt="twitter"  height="fit"
          width="fit" />
          </div>
          <div className="icon">
            <img src="reddit.webp" alt="reddit"  height="fit"
          width="fit" />
          </div>
          <div className="icon">
            <img src="twitter.webp" alt="twitter"  height="fit"
          width="fit" />
          </div>
        </div>
      </div>
      <div className="right sm:w-[80%] sm:p-12 p-8 ">
        <div className="top-inputs grid grid-cols-2 sm:gap-12 gap-4">
          <div className="first-name ">
            <p className="text-gray-500">First Name</p>
            <input type="text" className="border-b border-gray-400  w-[80%]" />
          </div>
          <div className="first-name">
            <p className="text-gray-500">Last Name</p>
            <input type="text" className="border-b border-gray-400 w-[80%]" />
          </div>
          <div className="first-name">
            <p className="text-gray-500">Email</p>
            <input type="text" className="border-b border-gray-400  w-[80%]" />
          </div>
          <div className="first-name">
            <p className="text-gray-500">Phone Number</p>
            <input type="text" className="border-b border-gray-400 w-[80%]" />
          </div>
        </div>

        <div className="middle-container flex flex-col mt-12">
          <h3 className="text-mainBlue font-semibold text-xl">
            Select Subject ?
          </h3>
          <div className=" sm:flex-row flex flex-col flex-wrap sm:gap-12">
            <div class="options inline-flex items-center mt-4   ">
              <input
                type="radio"
                class="form-radio h-5 w-5 text-blue-600"
                name="option"
                value="option1"
              />
              <span class="ml-2 text-mainBlue sm:text-sm text-base">
                General Enquiry
              </span>
            </div>
            <p class="inline-flex items-center mt-3">
              <input
                type="radio"
                class="form-radio h-5 w-5 text-blue-600"
                name="option"
                value="option2"
              />
              <span class="ml-2 text-mainBlue sm:text-sm text-base">
              General Enquiry
              </span>
            </p>
            <p class="inline-flex items-center mt-3 text-sm">
              <input
                type="radio"
                class="form-radio h-5 w-5"
                name="option"
                value="option2"
              />
              <span class="ml-2 text-mainBlue sm:text-sm text-base">
                General Enquiry
              </span>
            </p>
            <p class="inline-flex items-center mt-3">
              <input
                type="radio"
                class="form-radio h-5 w-5 text-mainBlue"
                name="option"
                value="option2"
              />
              <span class="ml-2 text-mainBlue sm:text-sm text-base">
              General Enquiry
              </span>
            </p>
          </div>
        </div>
        <div className="bottom-conatiner mt-12 relative">
          <div className="Message">
            <p className="text-gray-500 text-xl sm:text-base">Message</p>
            <input
              type="text"
              placeholder="Write your message"
              className="border-b py-2 border-gray-400 w-full"
            />
          </div>
          <div className="contact-us-button bg-mainBlue text-white p-2 px-8 rounded-full cursor-pointer w-fit text-center mt-12  py-3 ">
            Send Message
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm
