import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  "🏋️ We are the biggest gym in Mohan Nagar",
  "💃 We have multiple group activities",
  "👨‍🏫 We have experienced trainers",
  "⏰ We are 24/7 accessible",
  "🔥 We provide a steam room",
  "💪 We focus on transformation",
  "🚀 We deliver results",
  "🔩 We have the latest equipment",
  "🏆 We are Gymbiosis",
];

const AboutSection = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <motion.img
        src="https://tse4.mm.bing.net/th?id=OIP.5cBhtdgu_71EPWaTuSkSOwHaE7&pid=Api&P=0&h=180"
        alt="Gym"
        className="w-full h-[75vh] object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
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
              src="/assets/Logo2.jpg"
              alt="Fitness Training"
              className="rounded-3xl shadow-2xl w-full md:w-[550px] object-cover"
            />
          </motion.div>

          {/* Right Side - Updated Content */}
          <motion.div
            className="w-full md:w-1/2 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-xl">
              Welcome to{" "}
              <span className="text-yellow-400 font-semibold">Gymbiosis</span>,
              the biggest gym in Mohan Nagar, Dhankawdi, spread across a
              massive 8000+ sq. ft.! Our mission is simple yet powerful—to
              transform every individual who joins us.
            </p>

            <p className="mb-6 text-xl">
              We are more than just a fitness club; we are a family that
              grows together, supporting each other in the journey to better
              health and strength. Whether you’re a beginner or an athlete,
              Gymbiosis provides the perfect environment to push your limits
              and achieve your fitness goals.
            </p>

            <p className="mb-6 text-xl">
              With 10+ highly experienced trainers, we offer personalized
              guidance and group activities like Zumba, Abs, Kickboxing,
              Yoga, and more! Plus, our steam room helps you recover &
              relax after intense workouts.
            </p>
          </motion.div>
        </div>

        {/* Why Gymbiosis? */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-extrabold text-yellow-400 mb-6">
            Why <span className="text-white">Gymbiosis?</span>
          </h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="text-yellow-400 text-2xl" />
                <span className="text-lg">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Join Us Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://wa.me/9168081066" target="_blank"
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
