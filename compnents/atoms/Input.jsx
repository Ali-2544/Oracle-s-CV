import PropTypes from "prop-types";
import "../../app/globals.css";
import React from "react";

function Input({ variant, type, placeholder }) {
  let inputStyle = "";
  switch (variant) {
    case "primary":
      inputStyle =
        "w-[360px] h-[41px] rounded-[10px] p-[10px] outline-none border-2 border-opacity-10 border-gray-500  ";
      break;
    case "secondary":
      inputStyle =
        "h-[41px] w-full rounded-[40px] p-[10px]  outline-none border-2 border-opacity-10 border-gray-500  ";
      break;
    case "third":
      inputStyle =
        "w-[780px] h-[41px] rounded-[40px] outline-none p-[10px]  border-2 border-opacity-10 border-gray-500  ";
      break;
    case "buy":
      inputStyle =
        "w-full h-[41px] rounded-[40px] outline-none p-[10px]  border-2 border-opacity-10 border-gray-500  ";
      break;
    case "four":
      inputStyle =
        "w-[630px] h-[41px] rounded-[40px] outline-none border-2 p-[10px]  border-opacity-10 border-gray-500  ";
      break;
    case "five":
      inputStyle =
        "w-[418px] h-[25px] outline-none border-[2px] bg-black border-none p-[10px]  ";
      break;
    case "five2":
      inputStyle =
        "w-[418px] h-[25px] outline-none border-[2px] bg-black bg-opacity-[90px] border-none pb-[10px]  ";
      break;
    case "six":
      inputStyle =
        "w-[455px] h-[41px] rounded-[40px] outline-none border-2 border-opacity-10 p-[10px]  border-gray-500  ";
      break;
    case "seven":
      inputStyle =
        "w-[483px] h-[40px] rounded-[20px] outline-none border-2 border-opacity-10 border-gray-500 p-[10px]   ";
      break;
    case "eight":
      inputStyle =
        "w-[360px] h-[40px] rounded-[20px] p-[10px] outline-none border-2 border-opacity-10 border-gray-500  ";
      break;
  }

  return <input type={type} placeholder={placeholder} className={inputStyle} />;
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Input;