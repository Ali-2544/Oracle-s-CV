"use client"
import React from 'react';
import "../../app/globals.css"
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Header from './Header';

function Banner() {
  return (
    <div className='flex  justify-between pt-[50px] items-center' >
      <div  data-aos="fade-up-right" className=" flex flex-col gap-[10px]">
        <Heading level='1' >ALI MEHTAB</Heading>
        <Heading level='2' >FrontEnd Developer</Heading>
        <button className='new-button w-[45%] ' >Get Connected</button>
      </div>
      <div data-aos="fade-up-left" className="">
        <img src="/assits/images/PROFILE.png" alt="" />
      </div>
    </div>
  )
}

export default Banner