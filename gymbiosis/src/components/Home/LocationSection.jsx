import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const LocationSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      ref={ref}
      className="w-full bg-white flex flex-col md:flex-row items-center justify-center px-6 mt-0 md:px-12 py-10"
    >
      {/* Google Map Section */}
      <motion.div
        className="w-full md:w-1/2 h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <iframe
          title="Gymbiosis Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126919.37182884652!2d73.7276251!3d18.5248706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbf5b4d58a3%3A0x89dc5949ed52a067!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1642163430491!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* Address Section */}
      <motion.div
        className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Visit <span className="text-yellow-400">Gymbiosis</span></h2>
        <p className="text-lg text-gray-700 mb-4 flex items-center justify-center md:justify-start">
          <FaMapMarkerAlt className="text-yellow-400 mr-3" size={24} />
          123 Gym Street, Fitness City, Pune, Maharashtra - 411001
        </p>
        <p className="text-lg text-gray-700 mb-4 flex items-center justify-center md:justify-start">
          <FaPhone className="text-yellow-400 mr-3" size={24} />
          +91 98765 43210
        </p>
        <p className="text-lg text-gray-700 flex items-center justify-center md:justify-start">
          <FaEnvelope className="text-yellow-400 mr-3" size={24} />
          contact@gymbiosis.com
        </p>

        {/* Call to Action */}
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=123+Gym+Street+Fitness+City+Pune"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Get Directions
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LocationSection;
