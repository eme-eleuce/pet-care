import Image from 'next/image'
import React from 'react'
import Logo1 from '../photos/foto1.jpg';

const About = () => {
  return (
    <div id='about' className=" h-screen w-full">
  <div className=" mx-auto md:mx-[8rem] flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image src={Logo1} className='w-full h-full rounded-full' alt='/'/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-lg md:text-xl">
      {/*<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        
      </h1> */}
      <p className="mb-5 leading-relaxed text-justify">Hi there! My name is Patricia and I am the founder of <a className='text-pink-500 font-extrabold'>Soft Paws</a>🐾. Ever since I was a little girl, I have had a passion for animals, and I always knew that my life&apos;s path would involve them. After years of working in various animal-related fields, I decided to start my own pet sitting company to offer high-quality pet care services to the local community. </p>
      <p className='mb-8 leading-relaxed text-justify'>With over 5 years of experience in pet care, I have learned that every animal is unique and requires personalized attention. That&apos;s why I make sure to get to know each pet and their personality to provide them with the best possible care.</p>
      <div className="flex justify-center">
        {/*<button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</div>
  )
}

export default About