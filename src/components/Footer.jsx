import Link from 'next/link'
import React from 'react';
import { GrInstagram } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im';

const Footer = () => {
  return (
    <footer className="px-4 md:px-6 mt-8">
  <div className="container md:px-10 px-4 py-8 mx-auto flex items-center sm:flex-row flex-col border-t-4 border-teal-400">
    
    <h1 className='flex text-2xl md:text-3xl md:ml-10 font-dos text-[#ef476f]'>
                        <Link href='/'>
                       SoftPaws PetCare🐾
                       </Link>
    </h1>
    
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a href='https://instagram.com/soffpaws_?igshid=YmMyMTA2M2Y='
          target={"_blank"}
          rel={"noreferrer"} 
            className=" p-1 sm:p-2 inline-flex items-center mr-4 text-teal-400 hover:text-[#ef476f]">
            <GrInstagram size={35} />
          </a>
          <a href='https://api.whatsapp.com/send?phone=17864911836&text=Hi!%20I%20want%20more%20information%20about%20your%20services%2C%20thank%20you%20%F0%9F%90%B6'
          target={"_blank"}
          rel={"noreferrer"} 
            className=" p-1 sm:p-2 inline-flex items-center text-teal-400 hover:text-[#ef476f]">
            <ImWhatsapp size={35} />
          </a>
    </span>
  </div>
</footer>
  )
}

export default Footer