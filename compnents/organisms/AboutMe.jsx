"use client";
import React, { useState } from 'react';
import { CiMedal } from "react-icons/ci";
import "../../app/globals.css";
import DownloadButton from '../atoms/DownloadButton';

function AboutMe() {
  const [style1, setStyle1] = useState({
    transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
  });
  const [style2, setStyle2] = useState({
    transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
  });

  const handleMouseMove = (e, setStyleFn) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    setStyleFn({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = (setStyleFn) => {
    setStyleFn({
      transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
    });
  };

  return (
    <div className=' pt-[70px] border-box '>
      <div className="inner  w-[100%] ">
        <div className="main1 w-[100%] text-center flex flex-col gap-[10px] pl-[80px]">
          <h2 data-aos="fade-left" className='text-[21px] font-medium text-customGray'>About Me</h2>
          <h2 data-aos="fade-right" className='text-[40px] font-medium text-customGray leading-11'>
            A Passionate Developer <br /> Who Loves to Code
          </h2>
        </div>
        <div className="outer flex pt-[80px]  w-[100%] ">
          <div className="main2 w-[50%]">
            <div className="box absolute flex w-[65%]">
              <div data-aos="fade-left" className="h-[60px] w-[60px] relative top-[140px] right-[5%] rounded-[10px] bg-customGray flex items-center justify-center">
                <CiMedal className='text-[38px] font-medium text-white' />
              </div>
              <div  className="image w-[40%] relative rounded-[20px]">
                <div className="w-[100%]"
                  style={style1}
                  onMouseMove={(e) => handleMouseMove(e, setStyle1)}
                  onMouseLeave={() => handleMouseLeave(setStyle1)}
                >
                  <img data-aos="fade-right" src="/assits/images/profile2.png" className='rounded-[15px]' alt="ali" />
                </div>
                <div className="image2  absolute top-[290px] left-[-130px]"
                  style={style2}
                  onMouseMove={(e) => handleMouseMove(e, setStyle2)}
                  onMouseLeave={() => handleMouseLeave(setStyle2)}
                >
                  <img data-aos="fade-right" src="/assits/images/Capture.png" className='rounded-[10px]' alt="" />
                </div>
              </div>
              <div data-aos="fade-up" className="year mb-[10px] absolute flex items-center gap-[5px] bottom-[-90px] right-[490px]">
                <div className="w-[8px] h-[50px] bg-customGray"></div>
                <h2 className='text-[45px] font-medium text-gray-600'>3</h2>
                <p className='text-[16px] font-medium text-gray-600'>Successful Years</p>
              </div>
            </div>
          </div>
          <div className="main3 w-[50%] gap-[30px] flex flex-col ml-[510px] mx-0 ">
            <h2 className='text-[21px] font-medium text-customGray'>About Me</h2>
            <h2 className='text-[16px] font-medium text-gray-600'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat.</h2>
            <div data-aos="fade-left" className=" flex border-[1px] border-customGray w- rounded-[10px] divide-x ">
              <div className=" flex flex-col gap-[10px] py-[20px]  w-[58%] px-[30px]  ">
                <h1 className='text-[16px] font-medium text-customGray ' >Name</h1>
                <h1 className='text-[16px] font-normal text-gray-600 ' >Ali Mehtab</h1>
                <h1 className='text-[16px] font-medium text-customGray ' >Email</h1>
                <h1 className='text-[16px] font-normal text-gray-600 ' >codewithpassion4@gmail.com</h1>
                <h1 className='text-[16px] font-medium text-customGray ' >Phone</h1>
                <h1 className='text-[16px] font-normal text-gray-600 ' >+92 311 6229 099</h1>
              </div>
              <div className=" flex flex-col gap-[10px] py-[20px] pl-[30px] pr-[40px] w-[400px]  ">
                <h1 className='text-[16px] font-medium text-customGray ' >Address</h1>
                <h1 className='text-[16px] font-normal text-gray-600 ' >Chiniot,Pakistan</h1>
                <h1 className='text-[16px] font-medium text-customGray ' >Degree</h1>
                <h1 className='text-[16px] font-normal text-gray-600 ' >BsCs</h1>
                <h1 className='text-[16px] font-medium text-customGray ' >Freelance</h1>
                <h1 className='text-[16px] font-normal text-gray-600 ' >Available</h1>
              </div>
            </div>
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
