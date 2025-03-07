import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const Section = ({ title, description, image, onViewMore }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto py-20 px-6">
      {/* Left Side - Animated Image */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl shadow-lg object-cover transform hover:scale-105 transition-all duration-300"
        />
      </motion.div>

      {/* Right Side - Animated Text */}
      <motion.div
        className="w-full md:w-1/2 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-6"
          variants={textVariants}
          custom={0}
        >
          {title}
        </motion.h2>
        
        {description.map((line, i) => (
          <motion.p
            key={i}
            className="text-lg text-gray-300 mb-4 leading-relaxed"
            variants={textVariants}
            custom={i + 1}
          >
            {line}
          </motion.p>
        ))}

        <motion.button
          onClick={onViewMore}
          className="bg-yellow-400 text-black px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 transition-all duration-300 mt-4"
          whileHover={{ scale: 1.1 }}
          variants={textVariants}
          custom={description.length + 1}
        >
          View More Images
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Section;
