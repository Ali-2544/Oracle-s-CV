// components/Dropdown.js

import { useState } from 'react';

const Weekdrop = ({child, parent}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="px-[10px] w-[139px] h-[30px] rounded-[40px] border justify-between  border-gray-700 shadow-sm items-center  flex text-sm font-medium bg-gray-700 bg-opacity-30 text-gray-700  "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {selectedItem || 'Last week'}
        <div className='flex justify-center items-center'>
        <svg
          className="-mr-1 py-[2px] mt-[5px] h-5 w-5 flex justify-center items-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-8-8 1.5-1.5L10 9.25l6.5-6.75L18 4z"
            clipRule="evenodd"
          />
        </svg>
        </div>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 w-[139px] mt-[5px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-[15px] text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleItemClick('Last week')}
            >
            Last week
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleItemClick('PKR')}
            >
              PKR
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleItemClick('US Dollar')}
            >
              US Dollar
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weekdrop;