import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white py-4 shadow-lg border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
          {/* Logo & Name (Shifted Left in Desktop Mode) */}
          <Link to="/" className="flex items-center gap-3 md:ml-[-40px]">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.4-q49gVQArO0sAy7W9l7SAHaHa&pid=Api&P=0&h=180"
              alt="Gymbiosis Logo"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-yellow-400"
            />
            <span className="text-3xl font-extrabold text-yellow-400 tracking-wider hidden md:inline">
              Gymbiosis
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-50" onClick={toggleMenu}>
            {isOpen ? (
              <FiX size={32} className="text-yellow-400 transition transform rotate-180" />
            ) : (
              <FiMenu size={32} className="text-yellow-400 transition transform rotate-0" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Membership", path: "/membership" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative py-2 px-3 hover:text-yellow-400 transition ${
                    location.pathname === item.path ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-lg animate-pulse"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu (Fully Black & All Menus Visible) */}
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-40">
              {/* Close Button */}
              <button className="absolute top-6 right-6 text-yellow-400" onClick={toggleMenu}>
                <FiX size={32} />
              </button>

              {/* Full-Screen Menu Items (All Visible) */}
              <ul className="text-white text-2xl font-semibold space-y-6 text-center w-full">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Membership", path: "/membership" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name} className="w-full">
                    <Link
                      to={item.path}
                      onClick={toggleMenu}
                      className={`px-6 py-3 block transition transform hover:scale-105 ${
                        location.pathname === item.path ? "text-yellow-400 font-bold" : "text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* 🛠 Fix Background Image Overlap Issue */}
      <div className="pt-20"></div> {/* Adjust this padding based on navbar height */}
    </>
  );
};

export default Navbar;
