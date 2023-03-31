import React from 'react'

const Mission = () => {
  return (
    <div id='mission'>
        <section className="">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      
      <div className="text-center lg:w-2/3 w-full mb-10">
        <h1 className=" md:text-5xl text-3xl md:mb-[5rem] mb-7 ">Mission</h1>
        <p className="mb-8 leading-relaxed md:text-xl text-lg md:text-center text-justify">At Soft Paws you will find a passion for animals and are committed to making a positive impact in the pet community. </p>
        <p className='md:text-xl text-lg md:text-center text-justify'>I actively support animal shelters and organizations, part of our profit goes to the<p> <a href='https://www.instagram.com/famproa_oficial/?hl=es6'
          target={"_blank"}
          rel={"noreferrer"} 
          className='underline text-rose-400 font-bold'>
             Famproa Fundation </a>
             </p> </p>
        
      </div>
      {/*<img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
    </div>
  </section></div>
  )
}

export default Mission