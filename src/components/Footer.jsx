import Link from 'next/link'
import React from 'react';
import { GrInstagram } from 'react-icons/gr'
import { BsWhatsapp  } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className=" mt-8">
  <div className="container px-10 py-8 mx-auto flex items-center sm:flex-row flex-col md:border-t-4 border-teal-500">
    
    <h1 className='flex text-2xl md:text-3xl md:ml-10 font-dos'>
                        <Link href='/'>
                       SoftPaws PetCare🐾
                       </Link>
    </h1>
    
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a href='https://instagram.com/soffpaws_?igshid=YmMyMTA2M2Y='
          target={"_blank"}
          rel={"noreferrer"} 
            className=" p-1 sm:p-2 inline-flex items-center md:mr-4">
            <GrInstagram size={30} />
          </a>
          <a href='https://api.whatsapp.com/send?phone=17864911836&text=Hi!%20I%20want%20more%20information%20about%20your%20services%2C%20thank%20you%20%F0%9F%90%B6'
          target={"_blank"}
          rel={"noreferrer"} 
            className=" p-1 sm:p-2 inline-flex items-center">
            <BsWhatsapp size={30} />
          </a>
    </span>
  </div>
</footer>
  )
}

export default Footer