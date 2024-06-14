import React from "react";
import PropTypes from "prop-types";

function SourceSpan({ variant, children }) {
  let spanStyle = "";

  switch (variant) {
    case "primary":
      spanStyle = "text-15px font-medium text-gray-500 ";
      break;
    case "secondry":
      spanStyle = "text-15px font-normal text-gray-400 ";
      break;
  }

  return <span className={spanStyle}>{children}</span>;
}

SourceSpan.propTypes = {
    children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default SourceSpan;