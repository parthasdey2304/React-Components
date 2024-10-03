import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
<div className="h-full flex flex-col ">
  {/* Hero Section */}
  <section className="flex flex-col justify-center items-center text-center py-20 text-white px-6  bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 mb-2">
    <motion.h1
      className="text-3xl sm:text-4xl font-bold mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to React Components
    </motion.h1>
    <motion.p
      className="max-w-lg text-base sm:text-lg mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Explore the best React components, styled with Tailwind CSS and powered by Framer Motion for smooth animations.
    </motion.p>
    <motion.a
      href="#features"
      className="bg-white text-indigo-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-700 hover:text-white transition-colors "
      whileHover={{ scale: 1.1 }}
    >
      Get Started
    </motion.a>
  </section>

  {/* Features Section */}
  <section id="features" className="py-16 text-center text-white px-6 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 mb-2">
    <motion.h2
      className="text-2xl sm:text-3xl font-semibold mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Key Technologies
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-gray-900">
      <motion.div
        className="p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-indigo-500 w-72 sm:w-64"
        whileHover={{ scale: 1.05 }}
      >
        <img src="../public/Images/react-2.svg" alt="React" className="h-16 mb-4 mx-auto" />
        <h3 className="text-lg font-bold">React</h3>
        <p>Build dynamic user interfaces efficiently.</p>
      </motion.div>
      <motion.div
        className="p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-indigo-500 w-72 sm:w-64"
        whileHover={{ scale: 1.05 }}
      >
        <img src="../public/Images/tailwind-css-2.svg" alt="Tailwind CSS" className="h-16 mb-4 mx-auto" />
        <h3 className="text-lg font-bold">Tailwind CSS</h3>
        <p>Utilize utility-first styling for custom designs.</p>
      </motion.div>
      <motion.div
        className="p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-indigo-500 w-72 sm:w-64"
        whileHover={{ scale: 1.05 }}
      >
        <img src="../public/Images/framer-motion.svg" alt="Framer Motion" className="h-16 mb-4 mx-auto" />
        <h3 className="text-lg font-bold">Framer Motion</h3>
        <p>Animate your components with ease and fluidity.</p>
      </motion.div>
    </div>
  </section>

  {/* Components Preview Section */}
  <section className="py-16 text-white bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 mb-2">
    <motion.h2
      className="text-2xl sm:text-3xl font-semibold text-center mb-12 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Preview Our Components
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 text-gray-900">
      <motion.div
        className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-indigo-500"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-lg font-semibold">Credit Card Component</h3>
        <p>Enter card details with real-time formatting.</p>
      </motion.div>
      {/* Add more component previews as needed */}
    </div>
  </section>

  {/* Call-to-Action Section */}
  <section className="py-16 text-center text-white px-6 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900">
    <motion.h2
      className="text-2xl sm:text-3xl font-semibold mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Ready to Explore?
    </motion.h2>
    <motion.a
      href="#"
      className="bg-white text-indigo-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-700 hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
    >
      Explore Components
    </motion.a>
  </section>

  {/* Footer */}
  <footer className="py-6 text-white text-center">
    <div className="flex justify-center gap-6 mb-4">
      <a href="https://github.com/parthasdey2304/React-Components" className="hover:text-gray-400" target='_blank'>GitHub</a>
      <a href="" className="hover:text-gray-400">Documentation</a>
    </div>
    <p className="text-sm">&copy; 2024 React Components. All rights reserved.</p>
  </footer>
</div>
  );
};

export default LandingPage;
