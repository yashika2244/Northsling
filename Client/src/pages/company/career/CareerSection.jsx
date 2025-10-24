import React from 'react'
import { motion } from "framer-motion";

const CareerSection = () => {
  return (
     <section
        className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden "
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/012/696/539/non_2x/line-abstract-futuristic-wave-hi-tech-background-vector.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
  
        {/* Content */}
        <motion.div
          className="relative z-10 px-6 sm:px-10 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-3">
           Careers
          </h2>
        
  
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
          Navigate through our policies for a clear understanding of Northsling’s <br/> commitment to excellence and compliance.
          </p>
  
         <button className=' bg-orange-500 px-4 py-3 mt-6 rounded-2xl hover:bg-orange-600  text-white  transition-all'> See our Current Openings </button>
        </motion.div>
      </section>
  )
}

export default CareerSection
