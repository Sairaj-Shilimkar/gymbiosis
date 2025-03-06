import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-lg relative">
      {/* Logo and Gymbiosis Text */}
      <Link to="/" className="flex items-center">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.4-q49gVQArO0sAy7W9l7SAHaHa&pid=Api&P=0&h=180https://tse1.mm.bing.net/th?id=OIP.VRG6uvpnQRYP45wj1D33xAHaHa&pid=Api&P=0&h=180"
          alt="Gymbiosis Logo"
          className="w-16 h-16 md:w-12 md:h-12"
        />
        <span className="ml-2  text-2xl font-bold tracking-wide text-yellow-400 hidden md:inline">
          Gymbiosis
        </span>
      </Link>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-20" onClick={toggleMenu}>
        {isOpen ? <FiX size={30} className="text-yellow-400" /> : <FiMenu size={30} className="text-yellow-400" />}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
        <li><Link to="/membership" className="hover:text-yellow-400 transition">Membership</Link></li>
        <li><Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center transition-transform duration-300 z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button className="absolute top-6 right-6 text-yellow-400" onClick={toggleMenu}>
          <FiX size={30} />
        </button>
        <ul className="text-white space-y-6 text-xl">
          <li><Link to="/" className="hover:text-yellow-400" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/membership" className="hover:text-yellow-400" onClick={toggleMenu}>Membership</Link></li>
          <li><Link to="/gallery" className="hover:text-yellow-400" onClick={toggleMenu}>Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
