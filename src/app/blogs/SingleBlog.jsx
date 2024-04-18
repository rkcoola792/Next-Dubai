import React from 'react'

const Singleblog = ({heading,subheading, author, designation,img,authorImage}) => {
  return (
    <div className="flex px-0 sm:px-0 flex-col w-[350px]  sm:w-[100%]">
      <div className="image">
        <img
          src="/blog.webp"
          alt="blog"
          className="w-full sm:h-[300px] md:h-[200px] lg:h-[250px]  2xl:w-[400px] 2xl:h-[300px] rounded-lg object-cover"
        />
      </div>
      <div className="content flex flex-col gap-4 mt-4">
        <div className="heading font-bold text-xl  md:text-lg lg:text-xl ">{heading}</div>
        <div className="subheading text-gray-600 text-sm ">{subheading}</div>
        <div className="author-designation flex gap-2">
          <div className="author-img">
            <img src="/Avatar.webp" alt='avatar'></img>
          </div>
          <div className='name-designation'>
            <p className='font-semibold text-sm'> {author}</p>
          <p className='text-gray-600 text-sm'> {designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleblog
