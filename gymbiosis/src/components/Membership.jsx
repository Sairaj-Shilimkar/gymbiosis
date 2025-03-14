import React from "react";
import { motion } from "framer-motion";

const memberships = [
  {
    title: "Monthly Plan",
    originalCost: "₹3000",
    discountedCost: "₹1750",
    amount: "1750",
  },
  {
    title: "3-Month Plan",
    originalCost: "₹5000",
    discountedCost: "₹3500",
    amount: "3500",
  },
  {
    title: "6-Month Plan",
    originalCost: "₹7500",
    discountedCost: "₹5000",
    amount: "5000",
  },
  {
    title: "Annual Plan",
    originalCost: "₹10000",
    discountedCost: "₹7000",
    amount: "7000",
  },
];

const handlePayment = (amount) => {
  const upiLink = `upi://pay?pa=ayushpimple1-1@okhdfcbank&pn=Gymbiosis&am=${amount}`;
  window.open(upiLink, "_blank");
};

const Membership = () => {
  return (
    <div className="bg-black text-white">
      {/* Background Image Section */}
      <motion.img
        src="/assets/compressed/slider2.webp"
        alt="Gym"
        className="w-full h-[75vh] object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Gym Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-10 text-center"
      >
        <h3 className="text-4xl font-bold text-yellow-400 mb-4">
          What Gymbiosis Provides
        </h3>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto">
          Gymbiosis is more than just a gym. Our members enjoy a wide range of benefits, including:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6 md:px-16">
          {[
            "Group Activities - Zumba, Bollywood Dance, Kickboxing, Abs",
            "BMI & Diet Consultation under a Doctor's Guidance",
            "Strength & Conditioning Zones with High-Tech Equipment",
            "Expert Trainers to Guide Your Fitness Journey",
            "Steam Room for Post-Workout Recovery",
            "24/7 Accessibility for Members",
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md flex items-center justify-center text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Caption Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-8"
      >
        <h2 className="text-4xl font-extrabold text-yellow-400">
          Choose Your Membership Plan
        </h2>
        <p className="text-lg text-gray-300 mt-2">
          Find the perfect plan that suits your fitness goals
        </p>
      </motion.div>

      {/* Membership Cards */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-8">
          {memberships.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-yellow-400 transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {/* Animated Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-40 pointer-events-none"></div>

              {/* Membership Details */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3 flex items-center">
                  {plan.title}
                  <span className="ml-2 text-gray-400 text-sm border border-yellow-500 px-2 py-1 rounded-full">
                    🔥 Best Value
                  </span>
                </h3>

                {/* Pricing Section */}
                <div className="flex items-center space-x-4">
                  <p className="text-lg text-gray-400 line-through">{plan.originalCost}</p>
                  <motion.p
                    className="text-2xl font-semibold text-yellow-400 glow-effect"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1.1 }}
                    transition={{ yoyo: Infinity, duration: 0.5 }}
                  >
                    {plan.discountedCost}
                  </motion.p>
                </div>

                {/* Unique Perks */}
                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  <li>✅ Access to High-Tech Equipment</li>
                  <li>✅ Personalized Training Plan</li>
                  <li>✅ Monthly Strength Challenge Entry</li>
                </ul>

                {/* Payment Button */}
                <div className="mt-4">
                  <button
                    onClick={() => handlePayment(plan.amount)}
                    className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 transition duration-300 transform hover:scale-105 inline-block"
                  >
                    Become a Member
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
