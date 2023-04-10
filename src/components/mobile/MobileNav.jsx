import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';

const MobileNav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {

        setNav(!nav)
    }
   

  return (
    <>
     <div onClick={handleNav} className='block sm:hidden z-10  '>
    {nav ? <AiOutlineClose size={30} />  : <AiOutlineMenu size={30} />}
  </div>
    <div className={nav ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 w-full h-screen flex justify-center items-center bg-teal-400 text-center ease-in duration-300' : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 w-full h-screen flex justify-center items-center bg-teal-400 text-center ease-in duration-300'}>
    <ul>
        <li onClick={() => setNav(false)} className='p-4 hover:text-[#ef476f] text-5xl mb-5'>
        <Link href='/#about' scroll={false}> About</Link>
        </li>
        <li onClick={() => setNav(false)} className='p-4 hover:text-[#ef476f] text-5xl mb-5'>
        <Link href='/#services' scroll={false}> Services</Link>
        </li>
        <li onClick={() => setNav(false)} className='p-4 hover:text-[#ef476f] text-5xl mb-5'>
        <Link href='/#mission' scroll={false}> Mission</Link>
        </li>
        <li onClick={() => setNav(false)} className='p-4 hover:text-[#ef476f] text-5xl mb-3'>
        <a href='https://instagram.com/soffpaws_?igshid=YmMyMTA2M2Y='
          target={"_blank"}
          rel={"noreferrer"} 
            className=" p-1 sm:p-2 inline-flex items-center">
            <GrInstagram size={40} />
          </a>
        </li>
        <li onClick={() => setNav(false)} className='p-4 hover:text-[#ef476f] text-5xl mb-5'>
        <a href='https://api.whatsapp.com/send?phone=17864911836&text=Hi!%20I%20want%20more%20information%20about%20your%20services%2C%20thank%20you%20%F0%9F%90%B6'
          target={"_blank"}
          rel={"noreferrer"} 
            className=" p-1 sm:p-2 inline-flex items-center">
            <ImWhatsapp size={40} />
          </a>
        </li>
    </ul>

    </div>
    </>
  )
}

export default MobileNav