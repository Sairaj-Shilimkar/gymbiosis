import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Section from "./Section"; 

const sections = [
  {
    title: "🏃 Cardio Zone",
    description: [
      "Push your limits with top-tier treadmills, ellipticals, and cycling machines.",
      "High-intensity workouts designed to torch calories and boost endurance.",
      "Step into the energy-packed Cardio Zone and elevate your heart rate!"
    ],
    image: "https://tse4.mm.bing.net/th?id=OIP.5cBhtdgu_71EPWaTuSkSOwHaE7&pid=Api&P=0&h=180",
    images: [
      "https://source.unsplash.com/800x600/?running,gym",
      "https://source.unsplash.com/800x600/?cardio,exercise",
      "https://source.unsplash.com/800x600/?gym,workout",
    ],
  },
  {
    title: "💪 Strength Training",
    description: [
      "Build raw power with our premium free weights and resistance machines.",
      "Target every muscle group with expert-designed strength programs.",
      "Lift, grow, repeat – become the strongest version of yourself!"
    ],
    image: "https://tse4.mm.bing.net/th?id=OIP.5cBhtdgu_71EPWaTuSkSOwHaE7&pid=Api&P=0&h=180",
    images: [
      "https://source.unsplash.com/800x600/?bodybuilding,weights",
      "https://source.unsplash.com/800x600/?powerlifting,gym",
      "https://source.unsplash.com/800x600/?dumbbells,exercise",
    ],
  },
  {
    title: "🧘 Yoga & Recovery",
    description: [
      "Unwind and recharge in our serene yoga and stretching zones.",
      "From deep stretches to guided meditation, achieve total relaxation.",
      "Breathe, stretch, and find your inner balance!"
    ],
    image: "https://tse4.mm.bing.net/th?id=OIP.5cBhtdgu_71EPWaTuSkSOwHaE7&pid=Api&P=0&h=180",
    images: [
      "https://source.unsplash.com/800x600/?yoga,meditation",
      "https://source.unsplash.com/800x600/?stretching,relaxation",
      "https://source.unsplash.com/800x600/?mindfulness,gym",
    ],
  },
];

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
<div className="w-full">
  {/* Full-width Image */}
  <motion.img
    src="https://tse4.mm.bing.net/th?id=OIP.5cBhtdgu_71EPWaTuSkSOwHaE7&pid=Api&P=0&h=180"
    alt="Gym"
    className="w-full h-[75vh] object-cover"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 , ease:"easeInOut"}}
  />

  {/* Heading & Description Below the Image */}
  <div className="flex flex-col items-center text-center py-8 bg-gray-900">
    <motion.h1
      className="text-4xl font-extrabold text-yellow-400"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Welcome to <span className="text-white">Gymbiosis</span> Gallery
    </motion.h1>

    <motion.p
      className="text-xl text-gray-300 mt-2 max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Explore our state-of-the-art facilities!
    </motion.p>
  </div>
</div>


      {/* Sections */}
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          onViewMore={() => setSelectedImages(section.images)}
        />
      ))}

      {/* Modal for Viewing More Images */}
      {selectedImages && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-gray-900 p-6 rounded-lg max-w-3xl w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-yellow-400 text-2xl"
              onClick={() => setSelectedImages(null)}
            >
              <FaTimes />
            </button>
            <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
              More Photos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedImages.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Gallery Image"
                  className="w-full h-40 object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
