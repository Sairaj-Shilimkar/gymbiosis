import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyGymbiosis = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      ref={ref}
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 md:px-12 pt-10"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-12 tracking-wide text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        Why Choose <span className="text-white">Gymbiosis?</span>
      </motion.h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <motion.div
          className="relative group overflow-hidden rounded-lg shadow-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <img
            src="https://via.placeholder.com/400"
            alt="State-of-the-art Equipment"
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-lg font-semibold text-yellow-300 text-center px-3">
              State-of-the-art Equipment
            </p>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="relative group overflow-hidden rounded-lg shadow-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          <img
            src="https://via.placeholder.com/400"
            alt="Certified Trainers"
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-lg font-semibold text-yellow-300 text-center px-3">
              Certified Professional Trainers
            </p>
          </div>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="relative group overflow-hidden rounded-lg shadow-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.4 }}
        >
          <img
            src="https://via.placeholder.com/400"
            alt="Personalized Plans"
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-lg font-semibold text-yellow-300 text-center px-3">
              Personalized Workout & Diet Plans
            </p>
          </div>
        </motion.div>

        {/* Feature 4 */}
        <motion.div
          className="relative group overflow-hidden rounded-lg shadow-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.6 }}
        >
          <img
            src="https://via.placeholder.com/400"
            alt="Hygienic Environment"
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-lg font-semibold text-yellow-300 text-center px-3">
              Hygienic & Motivating Environment
            </p>
          </div>
        </motion.div>

        {/* Feature 5 */}
        <motion.div
          className="relative group overflow-hidden rounded-lg shadow-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.8 }}
        >
          <img
            src="https://via.placeholder.com/400"
            alt="24/7 Accessibility"
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-lg font-semibold text-yellow-300 text-center px-3">
              24/7 Accessibility for Members
            </p>
          </div>
        </motion.div>

        {/* Feature 6 */}
        <motion.div
          className="relative group overflow-hidden rounded-lg shadow-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 1 }}
        >
          <img
            src="https://via.placeholder.com/400"
            alt="Group Fitness Classes"
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-lg font-semibold text-yellow-300 text-center px-3">
              Dynamic Group Fitness Classes
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyGymbiosis;
