import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import TypingText from './TypingText';

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // Track mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown menu state

  const menuItems = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Projects", dropdown: true },
    { name: "Hard Skills", href: "#HardSkills" },
    { name: "Certifications", href: "#Certifications" },
    { name: "Contact", href: "#Contact" },
  ];

  
  return (
    <>
      <header>
        <nav className="bg-light-background dark:bg-dark-background border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="text-gray-800 text-2xl dark:text-white">
              NK
            </a>
            <div className="flex items-center lg:order-2">
              <button
                onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
                aria-controls="mobile-menu-2"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${isOpen ? "block" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative">
                 
                 <a
  href={item.href}
  className={`block py-2 pr-4 pl-3 ${
    activeItem === item.name
      ? "text-blue-700 bg-blue-100 rounded lg:bg-transparent lg:text-blue-700 dark:text-white"
      : "text-gray-800 dark:text-gray-400 lg:bg-transparent bg-white border-b border-gray-100 hover:bg-blue-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
  } lg:p-0 transition-colors duration-300`}
  aria-current={activeItem === item.name ? "page" : undefined}
  onClick={() => {
    setActiveItem(item.name);
    setIsOpen(false); // Close mobile menu on item click
    if (item.dropdown) {
      setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown
    } else {
      setIsDropdownOpen(false); // Close dropdown if it's not a dropdown item
    }
  }}
>
  {item.name}
</a>

                   
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 px-4 py-2 w-full">
          <div className="flex-1 flex justify-center lg:justify-start">
            <ThemeToggle />
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <div className="min-h-[10px]"> 
              <TypingText text='"Hi There"' />
            </div>
            <div className="indent-9 text-center lg:text-left">
              Final-year Computer Science student skilled in Python and Java, with experience in web and mobile
              development. Seeking an entry-level software development role to support business transformation,
              cloud, and AI innovations. Eager to apply problem-solving skills and deliver impactful solutions in diverse
              industries.
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
