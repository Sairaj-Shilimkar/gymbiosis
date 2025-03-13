import React from "react";
import { motion } from "framer-motion";

const OwnerSection = () => {
  return (
    <div className="w-full py-16 bg-black text-white flex flex-col items-center px-6 md:px-10">
      {/* Owner's Thoughts Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start">
        {/* Owner Image with Animation */}
        <motion.img
          src="/assets/owner.jpg"
          alt="Owner"
          className="w-64 h-64 rounded-full border-4 border-yellow-400 shadow-xl object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Owner's Thoughts */}
        <motion.div
          className="md:ml-10 mt-6 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-yellow-400">
            Words from the Founder
          </h2>
          <p className="text-gray-300 mt-4 text-lg leading-relaxed">
            "Fitness is not about being better than someone else; it's about being 
            better than you used to be. At Gymbiosis, we believe in pushing boundaries, 
            setting new goals, and transforming lives. Your journey starts here."
          </p>

          
          <p className="text-gray-300 mt-4 text-lg leading-relaxed">
            Join us and be a part of a fitness community that values dedication, 
            growth, and perseverance.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerSection;
