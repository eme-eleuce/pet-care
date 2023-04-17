import Image from 'next/image'
import React from 'react'
import Logo1 from '../photos/foto1.jpg';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className="relative w-full  pb-7 md:pt-10 md:pb-4 mt-10 ">
      -{/*<h1 className='font-bold text-4xl mb-4 py-10 mt-6 text-center font-dos text-[#ef476f]'>
    The best for your bestfriends
  </h1> */}
  <div className="container  py-6 mx-auto items-center justify-center">
<div className="flex text-center mb-16 items-center justify-center">
<a  className="relative   inline-block  md:px-[7rem] px-20 md:py-8 py-6 overflow-hidden text-rose-600 rounded-lg  group">
<span className="absolute top-0 left-0 w-[16rem] h-[16rem] -mt-10 -ml-6 transition-all duration-700 bg-[#e95d7b] rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-[16rem] h-[16rem] -ml-7 bg-teal-400 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-[16rem] h-[16rem] -mr-20 bg-[#fada73] rounded-full blur-md"></span>
</span>

<span className="relative text-white font-bold text-2xl">
<a href='https://softpaws-104715.square.site/'
          target={"_blank"}
          rel={"noreferrer"} 
          className=''>
             Book Here </a>
</span>

</a>
    </div>
    </div>
  <div>

 
  <div className=" relative mx-auto md:mx-[8rem] flex px-7 md:py-24 py-[1rem] md:flex-row flex-col items-center rounded-xl border-4 border-teal-400">
  
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image src={Logo1} className='w-full h-full rounded-full' alt='/'/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-xl md:text-xl ">
      {/*<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        
      </h1> */}
      <p className="mb-5 leading-relaxed text-justify  "> <a className='font-bold'>Hi there !</a>, my name is Patricia, I am the founder of <a className='text-[#ef476f] font-extrabold'>Soft Paws</a>🐾. Ever since I was a little girl, I have had a passion for animals, and I always knew that my life&apos;s path would involve them. After years of working in various animal-related fields, I decided to start my own pet sitting company to offer high-quality pet care services to the local community. </p>
      <p className='mb-8 leading-relaxed text-justify'>With over 5 years of experience in pet care, I have learned that every animal is unique and requires personalized attention. That&apos;s why I make sure to get to know each pet and their personality to provide them with the best possible care.</p>
      <div className="flex justify-center">
        {/*<button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default About