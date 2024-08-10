import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clothesDropdownOpen, setClothesDropdownOpen] = useState(false);
  const [footwearsDropdownOpen, setFootwearsDropdownOpen] = useState(false);

  const clothesDropdownRef = useRef(null);
  const footwearsDropdownRef = useRef(null);

  const handleClothesDropdownToggle = () => {
    setClothesDropdownOpen(!clothesDropdownOpen);
    setFootwearsDropdownOpen(false);
  };

  const handleFootwearsDropdownToggle = () => {
    setFootwearsDropdownOpen(!footwearsDropdownOpen);
    setClothesDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      clothesDropdownRef.current &&
      !clothesDropdownRef.current.contains(event.target)
    ) {
      setClothesDropdownOpen(false);
    }
    if (
      footwearsDropdownRef.current &&
      !footwearsDropdownRef.current.contains(event.target)
    ) {
      setFootwearsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="static">
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link
              to="/home"
              className="text-white text-2xl font-extrabold "
            >
              BuyEasy
            </Link>
            <a
              href="/Electronics"
              className="text-white font-medium hover:text-blue-400 transition-colors duration-300"
            >
              Electronics
            </a>

            <div className="relative" ref={clothesDropdownRef}>
              <button
                onClick={handleClothesDropdownToggle}
                className="text-white font-medium focus:outline-none flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
              >
                <span>Clothes</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-200 ${
                    clothesDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {clothesDropdownOpen && (
                <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-48 z-10 transition-opacity duration-300 opacity-100">
                  <Link
                    to="/MensClothing"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                  >
                    Men's Clothing
                  </Link>
                  <Link
                    to="/WomensClothing"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                  >
                    Ladies' Clothing
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" ref={footwearsDropdownRef}>
              <button
                onClick={handleFootwearsDropdownToggle}
                className="text-white font-medium focus:outline-none flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
              >
                <span>Footwears</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-200 ${
                    footwearsDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {footwearsDropdownOpen && (
                <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-48 z-10 transition-opacity duration-300 opacity-100">
                  <Link
                    to="/MensFootwears"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                  >
                    Men's Footwears
                  </Link>
                  <Link
                    to="/WomensFootwears"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                  >
                    Ladies' Footwears
                  </Link>
                </div>
              )}
            </div>

            <a
              href="/Grocery"
              className="text-white font-medium hover:text-blue-400 transition-colors duration-300"
            >
              Grocery
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 ml-60 w-96 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 transition-colors duration-300"
            />
            <Link to="/cart" className="text-white hover:text-blue-400 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
