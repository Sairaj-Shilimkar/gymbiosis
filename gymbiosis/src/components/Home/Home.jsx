import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import OwnerSection from "./OwnerSection";
import WhyGymbiosis from "./WhyGymbiosis";
import LocationSection from "./LocationSection";
import FreeTrialForm from "./FreeTrialForm";
import GymStats from "./GymStats";


const images = [
  "https://tse2.mm.bing.net/th?id=OIP.H-A4Wmqn7dJ3IRgG4PeRHgHaE7&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.H-A4Wmqn7dJ3IRgG4PeRHgHaE7&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.H-A4Wmqn7dJ3IRgG4PeRHgHaE7&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.H-A4Wmqn7dJ3IRgG4PeRHgHaE7&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.H-A4Wmqn7dJ3IRgG4PeRHgHaE7&pid=Api&P=0&h=180",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
      {/* Image Slider */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
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
      </div>

      {/* Other components */}
          <OwnerSection/>
          <GymStats/>
          <WhyGymbiosis/>
          <FreeTrialForm/>
          <LocationSection/>
    </div>
	</>
  );
};

export default Home;
