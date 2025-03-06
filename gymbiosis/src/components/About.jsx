import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const facilities = [
  "Elite Trainers with Proven Expertise",
  "High-End Training Equipment & Machines",
  "Customized Workout Programs",
  "Specialized Group Classes & Bootcamps",
  "24/7 Access for All Members",
  "Supportive & Motivating Fitness Community",
];

const AboutSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-15 px-6 md:px-16">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className="text-yellow-400">Gymbiosis</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Side - Animated Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://up.yimg.com/ib/th?id=OIP.aCODBm1wpCYX6ssitzJK9gHaEo&pid=Api&rs=1&c=1&qlt=95&w=191&h=119"
            alt="Gym Workout"
            className="rounded-3xl shadow-2xl w-full md:w-[550px] object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2 text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="mb-8 text-xl">
            Welcome to <span className="text-yellow-400 font-semibold">Gymbiosis</span>, where fitness meets community!  
            Our mission is to help you **train smarter, push harder, and achieve your peak performance** with **state-of-the-art facilities** and expert trainers.
          </p>
		  {/* <p className="mb-8 text-xl">
            Whether you're a **beginner or a pro**, Gymbiosis provides the **ideal environment** 
            to **train, grow, and evolve**. Our state-of-the-art gym includes **HIIT zones, 
            functional training areas, strength equipment, and recovery spaces** to enhance your fitness journey.
          </p> */}

          <p className="mb-8 text-xl">
            Join the **Gymbiosis movement** and be part of a **revolutionary fitness culture** that prioritizes 
            **progress, community, and motivation**. Your transformation starts **now**!
          </p>

          {/* Facilities Section - Animated List */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="text-yellow-400 text-2xl" />
                <span className="text-lg">{facility}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Join Us Button with WhatsApp Link */}
          <motion.a
            href="https://wa.me/91XXXXXXXXXX" // Replace with your WhatsApp number
            className="inline-block mt-8 px-8 py-4 bg-yellow-400 text-black font-semibold text-xl rounded-2xl shadow-lg hover:bg-yellow-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Join The Gymbiosis Family
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
