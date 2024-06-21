import React from 'react'
import "../../app/globals.css"
import AnchorTag from '../atoms/AnchorTag'
import { LiaFacebookF } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Header() {
  return (
    <div data-aos="fade-down" className=' bg-white z-20 border-b-[1px] pt-[9px] pb-[9px] shadow-top ' >
      <div className=" container flex w-[100%]  justify-between items-center ">
        <div className="image w-[6.5%]">
          <img src="/assits/images/1.png" alt="" />
        </div>
        <div className="flex items-center divide-x gap-[10px] ">
          <div className="nav flex gap-[20px] ">
            <AnchorTag href='#card' >Experience</AnchorTag>
            <AnchorTag href='#about_me' >About</AnchorTag>
            <AnchorTag href='#skill' >Skills</AnchorTag>
            <AnchorTag href='#Portfolio' >Portfolio</AnchorTag>
          </div>
          <div className="icons gap-[10px] pl-[10px] flex">
            <a href='https://www.facebook.com/profile.php?id=61551259444727' ><LiaFacebookF className='hover:text-gray-500 hover:cursor-pointer ease-in duration-300 h-[20px] w-[20px] '  /></a>
            <a href='#' ><FaTwitter className='hover:text-gray-500 hover:cursor-pointer ease-in duration-300 h-[20px] w-[20px] ' /></a>
            <a href='https://www.instagram.com/codewithpassion4/#' ><RiInstagramFill className='hover:text-gray-500 hover:cursor-pointer ease-in duration-300 h-[20px] w-[20px] '  /></a>
            <a href='https://www.linkedin.com/in/ali-mehtab-8352b22b0/' ><FaLinkedin className='hover:text-gray-500 hover:cursor-pointer ease-in duration-300 h-[20px] w-[20px] ' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header