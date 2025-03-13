import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import OwnerSection from "./OwnerSection";
import WhyGymbiosis from "./WhyGymbiosis";
import LocationSection from "./LocationSection";
import FreeTrialForm from "./TrialForm";
import GymStats from "./GymStats";

const images = [
  "https://tse2.mm.bing.net/th?id=OIP.H-A4Wmqn7dJ3IRgG4PeRHgHaE7&pid=Api&P=0&h=180",
  "/assets/slider2.jpg",
  "/assets/slider3.jpg",
  "/assets/slider4.jpg",
  "/assets/slider5.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);

    // Auto slider
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Image Slider with Fade-in Effect */}
        <motion.div
          className="relative w-full h-[75vh] md:h-[75vh] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={imageLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          ))}

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
            onClick={() =>
              setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
            }
          >
            <FiChevronLeft size={30} />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
            onClick={() =>
              setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
            }
          >
            <FiChevronRight size={30} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-yellow-400" : "bg-gray-500"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </motion.div>

        {/* Gym Name and Tagline (Animated on Page Load) */}
        <div className="w-full py-8 bg-black text-white flex flex-col items-center justify-start px-6 md:px-10">
          <motion.h1
            className="text-5xl md:text-5xl font-extrabold text-yellow-400"
            initial={{ opacity: 0, y: 50 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            Gymbiosis
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-300 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            We start where your imagination ends...🚀
          </motion.p>
        </div>

        {/* Other components */}
        <OwnerSection />
        <GymStats />
        <WhyGymbiosis />
        <FreeTrialForm />
        <LocationSection />
      </div>
    </>
  );
};

export default Home;
