import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const FreeTrialForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);
  const isInView = useInView(formRef, { triggerOnce: true, threshold: 0.3 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const dataToSend = {
      access_key: "6c74e26a-dbdd-4d3f-a8ad-bfa18521b976",
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(dataToSend)
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Thank you! Your trial request has been received.");
        setFormData({ name: "", phone: "", message: "" }); // Clear form
        setTimeout(() => setSuccessMessage(""), 5000); // Hide message after 5 seconds
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div
      ref={formRef}
      className="pt-10 pb-10 w-full flex items-start justify-center px-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900"
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}
      >
        {/* Left Side Image (Only for Desktop) */}
        <div className="hidden md:block w-1/2">
          <img src="/assets/compressed/trial.webp" alt="Gym Free Trial" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-6">
            1-Day <span className="text-white">Gym Trial for just ₹200!</span>
          </h2>
          <p className="text-gray-300 text-center mb-6 text-lg">
            Sign up now and experience next-level fitness!
          </p>

          {/* Success & Error Messages */}
          {successMessage && <p className="text-green-500 text-center mb-4 font-semibold">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-center mb-4 font-semibold">{errorMessage}</p>}

          <form className="space-y-4" onSubmit={onSubmit}>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-yellow-500 transition-all"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-yellow-500 transition-all"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              name="message"
              placeholder="Why do you want a trial?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 h-24 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-yellow-500 resize-none transition-all"
              whileFocus={{ scale: 1.02 }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-black font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Apply Now
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default FreeTrialForm;
