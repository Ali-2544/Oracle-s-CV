import PropTypes from "prop-types";

import React from "react";

function ProfileInput({ variant, type, children }) {
  let inputStyle = "";
  switch (variant) {
    case "primary":
      inputStyle =
        "w-[455px] h-[41px] rounded-[20px] p-[10px] text-[15px] font-regular outline-none border-2 border-opacity-10 bg-profiletext bg-opacity-10  ";
      break;
  }

  return <input type={type} placeholder={children} className={inputStyle} />;
}

ProfileInput.propTypes = {
  type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired, 
};

export default ProfileInput;