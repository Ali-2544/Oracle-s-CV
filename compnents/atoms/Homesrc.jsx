import PropTypes from "prop-types";
import { useState } from 'react';

const Filterdrop = ({ parent, child }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="main ">
      <div>
        <select className="w-full bg-white py-[15px] px-[15px] rounded-[20px] shadow-sm text-[15px] font-normal text-gray-400 text-opacity-50 ">
          <option value="">Type or Select</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

Filterdrop.propTypes = {
  parent: PropTypes.string.isRequired,
  child: PropTypes.string.isRequired,
};

export default Filterdrop;