import Image from 'next/image'
import React from 'react' 
import Logo1 from '../photos/famproa.jpeg'

const Mission = () => {
  return (
    <div id='mission'>
        <section className="container mx-auto flex  py-24 items-center justify-center">
  <div className="container mx-auto flex md:px-[5rem] px-7 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="text-center text-4xl  mb-10 font-bold ">Mission</h1>
      <p className="mb-8 leading-relaxed text-justify text-xl">At Soft Paws you will find a passion for animals and are committed to making a positive impact in the pet community.I actively support animal shelters and organizations, part of our profit goes to the <a href='https://www.instagram.com/famproa_oficial/?hl=es6'
          target={"_blank"}
          rel={"noreferrer"} 
          className='underline text-rose-400 font-bold'>
             Famproa Fundation </a></p>
      
     
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image src={Logo1} className='w-full h-full border-2 border-black' alt='/'/>
    </div>
  </div>
</section></div>
  )
}

export default Mission