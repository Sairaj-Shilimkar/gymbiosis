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
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Background Image Section */}
      <motion.img
          src="https://tse4.mm.bing.net/th?id=OIP.5cBhtdgu_71EPWaTuSkSOwHaE7&pid=Api&P=0&h=180"
          alt="Gym"
          className="w-full h-[75vh] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 , ease:"easeInOut"}}
        />

      {/* About Content */}
      <div className="px-6 md:px-16 py-8 max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-yellow-400">Gymbiosis</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Animated Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
              alt="Fitness Training"
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
            <p className="mb-6 text-xl">
              Welcome to <span className="text-yellow-400 font-semibold">Gymbiosis</span>, where fitness meets community!  
              Our mission is to help you **train smarter, push harder, and achieve peak performance** with **state-of-the-art facilities** and expert trainers.
            </p>

            <p className="mb-6 text-xl">
              Whether you're a **beginner or a pro**, Gymbiosis provides the **ideal environment** 
              to **train, grow, and evolve**. We offer **HIIT zones, functional training areas, strength equipment, and recovery spaces** to enhance your fitness journey.
            </p>

            {/* Facilities Section - Animated List */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md"
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
          </motion.div>
        </div>

        {/* The Gymbiosis Difference */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-extrabold text-yellow-400 mb-6">The Gymbiosis Difference</h3>

          <div className="text-lg text-gray-300 max-w-4xl mx-auto space-y-4">
  <motion.p
    className="text-xl text-center"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    🚀 Elevate Your Fitness. Transform Your Life.
  </motion.p>

  <motion.p
    className="text-xl text-center"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
  >
    🏋️‍♂️ More than just workouts—**a complete lifestyle transformation!**
  </motion.p>

  <motion.p
    className="text-xl text-center"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    viewport={{ once: true }}
  >
    🍏 **Expert Nutrition Coaching** to fuel your progress.
  </motion.p>

  <motion.p
    className="text-xl text-center"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    viewport={{ once: true }}
  >
    💪 **Strength, endurance, and recovery—personalized for YOU.**
  </motion.p>

  <motion.p
    className="text-xl text-center"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
    viewport={{ once: true }}
  >
    🔥 **Join a community that pushes you beyond limits.**
  </motion.p>

  <motion.p
    className="text-2xl font-bold text-yellow-400 text-center"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.2 }}
    viewport={{ once: true }}
  >
   💥 Are you ready to unleash your potential ? 
  </motion.p>
</div>


          {/* Join Us Button */}
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
