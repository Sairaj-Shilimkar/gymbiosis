import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaDumbbell, FaMedal, FaTrophy, FaChartLine } from "react-icons/fa";

const stats = [
  { icon: <FaMedal size={40} className="text-yellow-400" />, count: 10, label: "Certified Trainers" },
  { icon: <FaTrophy size={40} className="text-yellow-400" />, count: 50, label: "Competition Wins" },
  { icon: <FaDumbbell size={40} className="text-yellow-400" />, count: 50, label: "Top-Class Equipment" },
  { icon: <FaUsers size={40} className="text-yellow-400" />, count: 750, label: "Active Members" },
  { icon: <FaChartLine size={40} className="text-yellow-400" />, count: 2500, label: "Successful Transformations" },
];

const GymStats = () => {
  return (
    <div className="w-full bg-gray-900 py-16 text-white flex flex-col items-center">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        Gym <span className="text-yellow-400">Achievements</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 max-w-7xl">
        {stats.map((stat, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="flex flex-col items-center bg-gray-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
            >
              {stat.icon}
              <h3 className="text-5xl font-bold mt-4">
                {inView ? <CountUp end={stat.count} duration={1.5} /> : "0"}+
              </h3>
              <p className="text-lg text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GymStats;
