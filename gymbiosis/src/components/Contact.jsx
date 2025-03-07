import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false); // Track image loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.phone.trim()) validationErrors.phone = "Phone number is required";
    if (!formData.message.trim()) validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900">
      {/* Background Image with Fade-In Effect */}
      <div className="w-full h-[55vh] md:h-[75vh] relative overflow-hidden">
        <motion.img
          src="https://tse4.mm.bing.net/th?id=OIP.5cBhtdgu_71EPWaTuSkSOwHaE7&pid=Api&P=0&h=180"
          alt="Contact Us"
          className="w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Heading Section */}
      <div className="w-full text-center py-8">
        <motion.h1
          className="text-4xl md:text-4xl font-extrabold text-yellow-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let's Build Something Amazing Together!
        </motion.h1>
      </div>

      {/* Contact Form Section */}
      <div className="w-full flex items-center justify-center px-6 py-8">
        <motion.div
          className="max-w-6xl w-full flex flex-col md:flex-row bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-gray-300">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-6 text-center md:text-left">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                <p>Pune, Maharashtra, India</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-yellow-400 text-2xl" />
                <p>+91 XXXXXXXXXX</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-green-400 text-2xl" />
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" className="hover:text-white">Chat on WhatsApp</a>
              </div>

              <div className="flex items-center space-x-4">
                <FaInstagram className="text-pink-500 text-2xl" />
                <a href="https://instagram.com/yourhandle" target="_blank" className="hover:text-white">@yourhandle</a>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-yellow-400 text-2xl" />
                <p>your.email@example.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-6">
              Contact Us
            </h2>
            <p className="text-gray-300 text-center mb-6 text-lg">
              Have questions? Fill out the form and we’ll get back to you.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border ${errors.name ? "border-red-500" : "border-gray-600"} focus:ring-2 focus:ring-yellow-500 transition-all`}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Your Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border ${errors.phone ? "border-red-500" : "border-gray-600"} focus:ring-2 focus:ring-yellow-500 transition-all`}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 h-24 rounded-lg bg-gray-800 text-white placeholder-gray-400 border ${errors.message ? "border-red-500" : "border-gray-600"} focus:ring-2 focus:ring-yellow-500 resize-none transition-all`}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
