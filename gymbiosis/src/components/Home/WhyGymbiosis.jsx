import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyGymbiosis = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      ref={ref}
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 md:px-12 pt-10 pb-20"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-12 tracking-wide text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        Why To Choose <span className="text-white">Gymbiosis?</span>
      </motion.h2>

      {/* Image Grid with Alternate Layout */}
      <div className="flex flex-col gap-10">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {[
            { img: "/assets/equipment.jpg", text: "State-of-the-art Equipment" },
            { img: "/assets/trainer.jpg", text: "Certified Professional Trainers" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={feature.img}
                alt={feature.text}
                className="w-72 h-80 object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
              />
              <p className="mt-4 text-lg font-semibold text-yellow-300 px-3">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {[
            { img: "/assets/plan.jpg", text: "Personalized Workout & Diet Plans" },
            { img: "/assets/huygein.jpg", text: "Hygienic & Motivating Environment" },
            { img: "/assets/avail.jpg", text: "24/7 Accessibility for Members" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: index * 0.3 }}
            >
              <img
                src={feature.img}
                alt={feature.text}
                className="w-64 h-72 object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
              />
              <p className="mt-4 text-lg font-semibold text-yellow-300 px-3">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {[
            { img: "/assets/group.jpg", text: "Dynamic Group Fitness Classes" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: index * 0.4 }}
            >
              <img
                src={feature.img}
                alt={feature.text}
                className="w-80 h-84 object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
              />
              <p className="mt-4 text-lg font-semibold text-yellow-300 px-3">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyGymbiosis;
