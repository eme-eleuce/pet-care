import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MobileNav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {

        setNav(!nav)
    }
   

  return (
    <>
     <div onClick={handleNav} className='block sm:hidden z-10  '>
    {nav ? <AiOutlineClose size={25} />  : <AiOutlineMenu size={25} />}
  </div>
    <div className={nav ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 w-full h-screen flex justify-center items-center bg-rose-400 text-center ease-in duration-300' : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 w-full h-screen flex justify-center items-center bg-black text-center ease-in duration-300'}>
    <ul>
        <li onClick={() => setNav(false)} className='p-4 hover:text-gray-400 text-4xl'>
           About
        </li>
        <li onClick={() => setNav(false)} className='p-4 hover:text-gray-400 text-4xl'>
           Services
        </li>
        <li onClick={() => setNav(false)} className='p-4 hover:text-gray-400 text-4xl'>
           Mission
        </li>
    </ul>

    </div>
    </>
  )
}

export default MobileNav