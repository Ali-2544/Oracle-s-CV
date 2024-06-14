// components/Dropdown.js

import { useState } from 'react';

const Dropdown = ({child, parent}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left xl:block lg:block flex justify-center ] xl:mt-[0px] lg-mt-[0px] mt-[20px">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className=" justify-center w-[83px] h-[40px] rounded-[40px] border border-gray-300 shadow-sm items-center  flex
         bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {selectedItem || 'AED'}
        <svg
          className="-mr-1 ml-2 mt-[8px] h-5 w-5"
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
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleItemClick('AED')}
            >
              AED
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

export default Dropdown;