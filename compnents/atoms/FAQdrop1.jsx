import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const FAQdrop = ({ parent, child }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleDropdown} className='cursor-pointer pt-[20px] flex justify-between' >
      <div><p className='xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] font-medium text-border '>{parent}  </p>
        <div className='xl:my-4 lg:mt-4 md:mt-2 sm:mt-2 mt-2'>
          {isOpen && <span className='text-Faqchild xl:text-[15px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] font-light ' >{child}</span>}
        </div>
      </div>
      <div className='w-[17.43px] h-[9.85px]'>
        {isOpen ? <MdExpandLess className='ml-[10px] text-[25px] text-gray-600  cursor-pointer' onClick={toggleDropdown} /> : <MdExpandMore className='ml-[10px] text-[25px] text-gray-600 cursor-pointer' onClick={toggleDropdown} />}
      </div>
    </div>
  );
};

FAQdrop.propTypes = {
  parent: PropTypes.string.isRequired,
  child: PropTypes.string.isRequired,
};

export default FAQdrop;