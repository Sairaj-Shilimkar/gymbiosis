import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations

const Membership = () => {
  const memberships = [
    {
      title: "Monthly Plan",
      image: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
      services: [
        "Unlimited Gym Access",
        "Personalized Workout Plan",
        "Cardio & Strength Training",
      ],
      cost: "₹999",
      gpayLink: "upi://pay?pa=your-gpay-id@upi&pn=Gymbiosis&am=999",
    },
    {
      title: "3-Month Plan",
      image: "/3months-plan.jpg",
      services: [
        "All Monthly Plan Benefits",
        "Diet Consultation",
        "Group Training Sessions",
      ],
      cost: "₹2499",
      gpayLink: "upi://pay?pa=your-gpay-id@upi&pn=Gymbiosis&am=2499",
    },
    {
      title: "6-Month Plan",
      image: "/6months-plan.jpg",
      services: [
        "All 3-Month Plan Benefits",
        "Personal Trainer (Limited Sessions)",
        "Yoga & Flexibility Sessions",
      ],
      cost: "₹4499",
      gpayLink: "upi://pay?pa=your-gpay-id@upi&pn=Gymbiosis&am=4499",
    },
    {
      title: "Annual Plan",
      image: "/annual-plan.jpg",
      services: [
        "All 6-Month Plan Benefits",
        "Full-Time Personal Trainer",
        "Exclusive Gym Merchandise",
      ],
      cost: "₹7999",
      gpayLink: "upi://pay?pa=your-gpay-id@upi&pn=Gymbiosis&am=7999",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Background Image Section */}
      <motion.img
          src="https://tse4.mm.bing.net/th?id=OIP.5cBhtdgu_71EPWaTuSkSOwHaE7&pid=Api&P=0&h=180"
          alt="Gym"
          className="w-full h-[75vh] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 , ease:"easeInOut"}}
        />

      {/* Caption Section with Animation */}
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
          Find the perfect plan that suits your fitness goals!
        </p>
      </motion.div>

      {/* Membership Options with Pop-in Animation */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-8">
          {memberships.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
              className="flex flex-col md:flex-row bg-gray-900 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 object-cover transition-transform duration-300 hover:scale-110"
              />

              {/* Membership Details */}
              <div className="flex-1 px-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  {plan.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {plan.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>

                {/* Cost & Payment Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
                  <p className="text-lg font-semibold text-white">{plan.cost}</p>
                  <Link
                    to={plan.gpayLink}
                    className="bg-yellow-400 text-black px-6 py-2 mt-2 sm:mt-0 rounded-lg font-bold hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
                    target="_blank"
                  >
                    Become a Member
                  </Link>
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
