import React, { useState } from "react";
import { motion } from "framer-motion";

const FreeTrialForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert form data to CSV format
    const csvContent = `Name,Phone,Message\n"${formData.name}","${formData.phone}","${formData.message}"`;
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    // Trigger file download
    const a = document.createElement("a");
    a.href = url;
    a.download = "free-trial-request.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 flex items-center justify-center px-6 py-16">
      <motion.div
        className="max-w-4xl w-full relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Form */}
        <div className="bg-gray-950 bg-opacity-90 backdrop-blur-md p-10 md:p-14 rounded-tl-[50px] rounded-br-[50px] shadow-xl border border-gray-700 relative">
          {/* Glow Effect */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400 blur-[100px] opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-500 blur-[100px] opacity-30"></div>

          {/* Header */}
          <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-6">
            Try <span className="text-white">Gymbiosis</span> for Free!
          </h2>
          <p className="text-gray-300 text-center mb-8 text-lg">
            Join us for **1 day free** and **experience next-level fitness!**
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              whileFocus={{ scale: 1.05 }}
            />

            <motion.input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              whileFocus={{ scale: 1.05 }}
            />

            <motion.textarea
              name="message"
              placeholder="Why do you want a trial?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 h-28 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none transition-all"
              whileFocus={{ scale: 1.05 }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-4 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Apply & Download
            </motion.button>
          </form>

          {/* Success Message */}
          {submitted && (
            <motion.p
              className="mt-6 text-center text-green-400 font-semibold text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Your request has been downloaded!
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FreeTrialForm;
