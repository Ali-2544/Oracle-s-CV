"use client"
import React from 'react'
import "../../app/globals.css"
import { CiSettings } from "react-icons/ci";
import { GoBriefcase } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import Heading from '../atoms/Heading';
import { useState } from 'react';

function Cards() {
  const [style, setStyle] = useState({
    transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
  });
  const [styles, setStyles] = useState({
    transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
  });
  
  const [styled, setStyled] = useState({
    transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
  });
  const handleMouseMove = (e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.4) * 10;
    const rotateX = ((y / rect.height) - 0.4) * -10;

    setStyle({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };
  const handleMouseMoves = (e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    setStyles({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };
  const handleMouseMoved = (e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    setStyled({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
    });
    setStyles({
      transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
    });
    setStyled({
      transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
    });
  };

  return (
    <div className='container mb-[50px] relative mt-[50px] flex justify-between w-[100%] ' >
        <div className="box-outer w-[31%] ">
        <div className="box-skill flex flex-col gap-[25px] px-[30px] py-[50px]  rounded-[10px] bg-customGray w-[100%] "
          style={style}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <CiSettings className='w-[50px] h-[50px] text-white ' />
          <Heading level='3' > Deeper Skillset </Heading>
          <Heading level='6' > I build fast Next.js web apps with React for smooth UX, managing state, styling, and deployment for robust solutions.</Heading>
        </div>
        </div>
        <div className="box-outer w-[31%] ">
        <div className="box-skill  flex flex-col gap-[25px] px-[30px] py-[50px]  rounded-[10px] bg-customGray w-[100%] "
          style={styles}
          onMouseMove={handleMouseMoves}
          onMouseLeave={handleMouseLeave}
        >
          <GoBriefcase   className='w-[50px] h-[50px] text-white ' />
          <Heading level='3' > Creaative Work </Heading>
          <Heading level='6' >I craft immersive digital experiences with Next.js, where every pixel tells a story and every interaction sparks delight.</Heading>
        </div>
        </div>
        <div className="box-outer w-[31%] ">
        <div className="box-skill  flex flex-col gap-[25px] px-[30px] py-[50px]  rounded-[10px] bg-customGray w-[100%] " 
          style={styled}
          onMouseMove={handleMouseMoved}
          onMouseLeave={handleMouseLeave}
        >
          <IoDiamondOutline  className='w-[50px] h-[50px] text-white ' />
          <Heading level='3' > Strong Dedication </Heading>
          <Heading level='6' >My dedication is unwavering in crafting user-centric experiences with Next.js that push the boundaries of web development.</Heading>
        </div>
        </div>
    </div>
  )
}

export default Cards