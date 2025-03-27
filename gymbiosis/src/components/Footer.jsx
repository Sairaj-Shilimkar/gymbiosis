import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] text-white py-6 flex flex-col items-center space-y-4">
      {/* Social Icons */}
      <div className="flex space-x-6">
        <a 
          href="https://www.instagram.com/ayushpimple/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-yellow-400 hover:text-yellow-500"
          aria-label="Instagram"
        >
          <FaInstagram size={30} />
        </a>

        <a 
          href="https://wa.me/9168081066" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-yellow-400 hover:text-yellow-500"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={30} />
        </a>

        <a 
          href="mailto:ayushpimple1@gmail.com" 
          className="text-yellow-400 hover:text-yellow-500" 
          aria-label="Email"
        >
          <FaEnvelope size={30} />
        </a>
      </div>

      {/* Contact Info */}
      <p className="text-gray-400">Gymbiosis © 2025 Gymbiosis Fitness Pvt. Ltd.</p>

      {/* Developer Credit */}
      <p className="text-gray-300 text-sm text-center">
        Developed by 
        <br /> 
        <a 
          href="https://www.linkedin.com/in/sairaj-shilimkar" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-yellow-300 hover:text-yellow-500 font-semibold mx-1"
        >
          Sairaj Shilimkar
        </a> 
        |  
        <a 
          href="https://www.linkedin.com/in/sairaj-shilimkar" 
          className="text-yellow-300 hover:text-yellow-500 font-semibold mx-1"
        >
          Sejal Vairagade
        </a>
      </p>
    </footer>
  );
};

export default Footer;
