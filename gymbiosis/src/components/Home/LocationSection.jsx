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
      {/* Google Map Section */}
      <motion.div
        className="w-full md:w-1/2 h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          title="Gymbiosis Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.539645432848!2d73.84904259999999!3d18.459199599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebfc09f829fd%3A0x4c73d8e246fd4759!2sGymbiosis!5e0!3m2!1sen!2sin!4v1741863295629!5m2!1sen!2sin" 
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
          Sr. No. 34/4, below goodluck resto bar, Adarsh Society, Mohan Nagar, Dhankawadi, Pune, Maharashtra 411043
        </p>
        <p className="text-lg text-gray-700 mb-4 flex items-center justify-center md:justify-start">
          <FaPhone className="text-yellow-400 mr-3" size={24} />
          +91 91680 81066
        </p>
        <p className="text-lg text-gray-700 flex items-center justify-center md:justify-start">
          <FaEnvelope className="text-yellow-400 mr-3" size={24} />
          ayushpimple1@gmail.com
        </p>

        {/* Call to Action */}
        <motion.a
          href="https://maps.app.goo.gl/XPeLmAh5Qw2ugAWW6"
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
