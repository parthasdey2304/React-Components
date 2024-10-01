import React from 'react';
import { motion } from 'framer-motion';

const CreditCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <motion.div
        className="relative w-80 h-48 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6"
        whileHover={{ y: 10, rotate: -2, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Card Number"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY"
            />
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="CVV"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreditCard;
