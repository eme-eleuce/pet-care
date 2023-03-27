import React from "react";

import {IoIosArrowDown} from 'react-icons/io';
import Link from "next/link";
import Image from "next/image";


const Hero = () => {

    return(
      <div className='flex items-center justify-center h-screen  bg-cover bg-center bg-fixed '>
           
            
            <div className='flex top-0 left-0 right-0 bottom-0 z-[2]'/>
           {/*  <Image src={Foto } className='absolute h-screen object-cover'alt="/" /> */}
            <div className='p-5 text-[#000000] z-[2] md:ml-[1rem] ml-0 mt-[1rem]'>
           
             {/* <Image src={Logo} className='h-[15rem] w-[15rem]' alt="/"/> */}
              <div className='flex justify-center items-center pt-[6rem]'>

              </div>
              
              
            </div>
            <div className='absolute justify-center mt-[36rem] lg:mt-[34.5rem] md:mt-[34rem] text-[#E9E9EB] cursor-pointer'>
            <Link href='/#about' scroll={false}>
               <IoIosArrowDown size={42}/>
            </Link>
              </div>
        </div>
        

    )
}

export default Hero;