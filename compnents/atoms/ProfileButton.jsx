import PropTypes from "prop-types";
import { useState } from "react";
import Profilegenrel from "../organisms/account/Profilegenrel";
const ProfileButton = ({ href, children, isActive, onClick, icon }) => {
  let buttonStyle = `h-[70px] cursor-pointer  px-[30px] py-[10px]  text-center  flex items-center gap-[20px] text-[20px] font-medium text-gray-900 text-opacity-60`;

  if (isActive) {
    buttonStyle += " bg-gray-600 bg-opacity-10 text-black hover:bg-gray-600 hover:bg-opacity-10";
  }

  const handleClick = () => {
    onClick();
  };

  return (
    <a className={buttonStyle} onClick={handleClick} href={href}>
      {icon && <span className="mr-2 ">{icon}</span>}
      {children}
    </a>
  );
};

ProfileButton.propTypes = {
  href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
};

export default ProfileButton;