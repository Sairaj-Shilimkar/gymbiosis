import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500); // Preloader stays for 2.5 seconds
  }, [setLoading]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
    >
      {/* Logo with Bounce Effect */}
      <motion.img
        src="/assets/Logo.jpg"
        alt="Gym Logo"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [0, 0, 0], opacity: 1 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Gym Name with Fade In Effect */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-yellow-400 mt-4 custom-font"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [0, 0, 0], opacity: 1 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Gymbiosis
      </motion.h1>

      {/* Circular Loading Spinner */}
      <motion.div
        className="w-12 h-12 mt-6 border-4 border-t-yellow-400 border-gray-600 rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2}}
      />
    </motion.div>
  );
};

export default Preloader;
