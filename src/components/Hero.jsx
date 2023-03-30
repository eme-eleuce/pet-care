import React, { useState } from "react";
import {IoIosArrowDown} from 'react-icons/io';
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Fotos } from './fotos'





const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='flex items-center justify-center md:h-screen h-[40rem]  bg-cover bg-center bg-fixed '>
      <div className='relative flex justify-center md:mt-[3rem] mt-10'>

      {Fotos?.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }
          >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt='/'
                  className='md:w-[1120px] md:h-screen w-[520px] h-[370px]'
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
        );
    })}
    </div>
    </div>
  );
};

export default Hero;