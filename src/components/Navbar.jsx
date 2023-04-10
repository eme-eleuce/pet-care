import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import MobileNav from './mobile/MobileNav.jsx';
import Link from "next/link";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {

        setNav(!nav)
    }
    
  return (
    <div  className='fixed top-0 left-0 w-full z-10 ease duration-500 bg-teal-400 text-black'>
        <div className=' max-w-[1240px] h-[5rem] items-center w-full flex  p-4 mb-[2px] z-10 '>
            {/*Lado Izquierdo */}
            
            <div className=' flex grow items-center justify-start'>
             
                
                    <h1 className='flex text-2xl md:text-3xl md:ml-10 font-dos text-[#f22b59]'>
                        <Link href='/'>
                       SoftPaws PetCare🐾
                       </Link>
                    </h1>
                    {/*Middle */}
        <div className='hidden md:flex grow-[2] items-center justify-center ml-5'>
                    <ul  className='hidden sm:flex '>
                    <Link href='/#about' scroll={false}>
                <li className='p-3  text-3xl hover:text-[#ef476f] font-bold'>
               
                      About
                
                </li>
                </Link>
            
                <Link href='/#services' scroll={false}>
                <li className='p-3 text-3xl ml-4 hover:text-[#ef476f] font-bold'>
                 Services
                
                </li>
                </Link>
                <Link href='/#mission' scroll={false}>
                <li className='p-3 text-3xl ml-4  hover:text-[#ef476f] font-bold'>
                Mission
                </li>
                </Link>
                
            </ul>
            </div>   
    </div>

            {/* Mobile Menu */}

           <MobileNav />
        </div>
    </div>
  )
}

export default Navbar