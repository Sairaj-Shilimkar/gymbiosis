import React from "react";

const Card = ({ image, name, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
      {/* Owner Image */}
      <div className="w-40 h-40 md:w-60 md:h-60 flex-shrink-0 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Owner Details */}
      <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
        <h2 className="text-2xl font-bold text-yellow-400">{name}</h2>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
