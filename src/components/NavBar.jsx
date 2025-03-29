import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md"; // Icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="bg-gradient-to-r from-orange-600 to-green-700 p-4 shadow-lg z-50 fixed w-full top-0 left-0 min-h-[70px]">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            {/* Logo Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRwrl18cSaUjMiasTtomJxr0KrxAcoKewSvigbMn6TdmBU0ehNDobykANgrnzlgyli44&usqp=CAU"
              alt="Fruit Shop Logo"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-md"
            />
            {/* Store Name */}
            <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
              Fruit Shop
            </span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* Navigation Links */}
          <div
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-green-700 md:bg-transparent md:flex md:space-x-6 items-center p-5 md:p-0 shadow-xl md:shadow-none rounded-md transition-opacity duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible md:opacity-100 md:visible"
            }`}
          >
            <NavLink
              to="/"
              onClick={closeMenu} // Close menu when clicked
              className={({ isActive }) =>
                `block md:inline-block px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-yellow-300 font-bold border-b-2 border-yellow-400"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/fruits"
              onClick={closeMenu} // Close menu when clicked
              className={({ isActive }) =>
                `block md:inline-block px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-lime-300 font-bold border-b-2 border-lime-400"
                    : "text-white hover:text-lime-300"
                }`
              }
            >
              Fruits
            </NavLink>
            <NavLink
              to="/cart"
              onClick={closeMenu} // Close menu when clicked
              className={({ isActive }) =>
                `block md:inline-block px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-orange-300 font-bold border-b-2 border-orange-400"
                    : "text-white hover:text-orange-300"
                }`
              }
            >
              Cart 🛒
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Page Content Padding to Avoid Overlapping */}
      <div className="pt-[90px]"></div>
    </>
  );
};

export default NavBar;
