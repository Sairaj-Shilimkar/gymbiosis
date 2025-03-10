import React from "react";
import { motion } from "framer-motion";

const OwnerSection = () => {
  return (
    <div className="w-full py-8 bg-black text-white flex flex-col items-center justify-start px-6 md:px-10">
      {/* Owner's Thoughts Section */}
      <div className="mt-10 w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start">
        {/* Owner Image */}
        <motion.img
          src="https://tse4.mm.bing.net/th?id=OIP.J15OVIwJoTGzBtO0Ko3JUgHaGF&pid=Api&P=0&h=180"
          alt="Owner"
          className="w-64 h-64 rounded-full border-5 border-yellow-400 shadow-lg object-cover rounded-lg shadow-lg object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
        />
        
        {/* Owner's Thoughts */}
        <motion.div
          className="md:ml-10 mt-6 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-3xl font-bold text-yellow-400">Words from the Founder</h2>
          <p className="text-gray-300 mt-4 text-lg">
            "Fitness is not about being better than someone else, it's about being better than you used to be. At Gymbiosis, we believe in
            pushing boundaries, setting new goals, and transforming lives. Your journey starts here."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerSection;
