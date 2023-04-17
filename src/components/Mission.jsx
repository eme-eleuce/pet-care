import Image from 'next/image'
import React from 'react' 
import Logo1 from '../photos/famproa.jpeg'

const Mission = () => {
  return (
    <div id='mission'>
        <section className="container mx-auto flex  md:py-10 py-0 items-center justify-center">
  <div className="container mx-auto flex md:px-[5.5rem] px-7 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="text-center text-4xl  mb-10 font-bold ">Mission</h1>
      <p className="mb-8 leading-relaxed text-justify text-xl">At Soft Paws you will find a passion for animals and are committed to making a positive impact in the pet community.I actively support animal shelters and organizations, part of our profit goes to the <a href='https://www.instagram.com/famproa_oficial/?hl=es6'
          target={"_blank"}
          rel={"noreferrer"} 
          className='underline text-[#ef476f] font-bold'>
             Famproa Fundation </a></p>
      
     
    </div>
    
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image src={Logo1} className='w-full h-full border-2 border-black' alt='/'/>
    </div>
  </div>
</section>
<div className="container  py-6 mx-auto items-center justify-center">
<div className="flex text-center mb-16 items-center justify-center">
<a href="#_" className="relative   inline-block  md:px-[7rem] px-20 md:py-8 py-6 overflow-hidden text-rose-600 rounded-lg  group">
<span className="absolute top-0 left-0 w-[16rem] h-[16rem] -mt-10 -ml-6 transition-all duration-700 bg-[#e95d7b] rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-[16rem] h-[16rem] -ml-7 bg-teal-400 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-[16rem] h-[16rem] -mr-20 bg-[#fada73] rounded-full blur-md"></span>
</span>
<span className="relative text-white font-bold text-2xl"><a href='https://softpaws-104715.square.site/'
          target={"_blank"}
          rel={"noreferrer"} 
          className=''>
             Book Here </a></span>
</a>
    </div>
    </div>
  </div>
  )
}

export default Mission