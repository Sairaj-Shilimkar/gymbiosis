import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.phone.trim()) validationErrors.phone = "Phone number is required";
    if (!formData.message.trim()) validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "6c74e26a-dbdd-4d3f-a8ad-bfa18521b976");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });
      const result = await res.json();

      if (result.success) {
        setSuccessMessage("Thank you! Your message has been received.");
        setFormData({ name: "", phone: "", message: "" }); // Clear the form
        setTimeout(() => setSuccessMessage(""), 5000); // Hide message after 5 seconds
      } else {
        setSuccessMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900">
      <div className="w-full h-[75vh] md:h-[75vh] relative overflow-hidden">
        <motion.img
          src="/assets/compressed/slider2.webp"
          alt="Contact Us"
          className="w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

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

      <div className="w-full flex items-center justify-center px-6 py-8">
        <motion.div
          className="max-w-6xl w-full flex flex-col md:flex-row bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-gray-300">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-6 text-center md:text-left">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                <p>Sr. No. 34/4, below Goodluck Resto Bar, Dhankawadi, Pune, Maharashtra 411043</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-yellow-400 text-2xl" />
                <p>+91 9168081066</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-green-400 text-2xl" />
                <a href="https://wa.me/9168081066" target="_blank" className="hover:text-white">Chat on WhatsApp</a>
              </div>

              <div className="flex items-center space-x-4">
                <FaInstagram className="text-pink-500 text-2xl" />
                <a href="https://www.instagram.com/ayushpimple/" target="_blank" className="hover:text-white">@ayushpimple</a>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-yellow-400 text-2xl" />
                <p>ayushpimple1@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-6">
              Contact Us
            </h2>
            <p className="text-gray-300 text-center mb-6 text-lg">
              Have questions? Fill out the form and we’ll get back to you.
            </p>

            {successMessage && (
              <p className="text-green-500 text-center mb-4 font-semibold">{successMessage}</p>
            )}

            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${errors.name ? "border-red-500" : "border-gray-600"} focus:ring-2 focus:ring-yellow-500`}
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
                  className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${errors.phone ? "border-red-500" : "border-gray-600"} focus:ring-2 focus:ring-yellow-500`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 h-24 rounded-lg bg-gray-800 text-white border ${errors.message ? "border-red-500" : "border-gray-600"} focus:ring-2 focus:ring-yellow-500`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
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
