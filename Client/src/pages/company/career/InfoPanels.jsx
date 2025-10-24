import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger each child panel by 0.3s
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.12)" },
};

export default function InfoPanels() {
  return (
    <motion.div 
      className="flex flex-col md:flex-row w-full min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Panel */}
      <motion.div
        className="flex-1 bg-gray-100 text-gray-900 flex flex-col justify-center items-start p-12 cursor-pointer"
        variants={panelVariants}
        whileHover="hover"
      >
        <p className="text-sm uppercase mb-2 tracking-wide text-gray-500">For Freshers</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          First Flush – Start Your Journey Here
        </h2>
        <p className="mb-6 max-w-md text-gray-700">
          If you are fresh out of college and want to jumpstart your IT career, our First Flush program can help you explore your flair for innovation in the industry. Come and join the Northsling family, and help us inspire possibilities throughout the world.
        </p>
        <button className="bg-gray-500 text-white font-medium px-6 py-3 rounded-md hover:bg-gray-600 transition">
          Let’s start your journey
        </button>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className="flex-1 bg-white text-gray-900 flex flex-col justify-center items-start p-12 border-l border-gray-200 cursor-pointer"
        variants={panelVariants}
        whileHover="hover"
      >
        <p className="text-sm uppercase mb-2 tracking-wide text-gray-500">Refer</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Refer a Friend & Get Rewarded!
        </h2>
        <p className="mb-6 max-w-md text-gray-700">
          Join our “Refer a Friend and Get Rewarded” program! Invite a friend to our community and enjoy great rewards together. For each successful referral, you’ll get exclusive discounts, and your friend will receive a welcome bonus.
        </p>
        <button className="bg-orange-600 text-white font-medium px-6 py-3 rounded-md hover:bg-orange-700 transition">
          Refer a friend
        </button>
      </motion.div>
    </motion.div>
  );
}
