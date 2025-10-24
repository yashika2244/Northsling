import React from "react";
import { motion } from "framer-motion";
import PremiumEventCards from "./PremiumEventCards";
import WhoWeAreSection from "../../components/Ui.jsx/WhoWeAre";
import AwardsSection from "./AwardsSection";
import ContactForm from "../success/ContactForm";

function Events() {
    const awardsList = [
    "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-2.png",
    "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-3.png",
    "https://intglobal.com/wp-content/uploads/2025/02/500-1-1.png",
    "https://intglobal.com/wp-content/uploads/2025/02/fast50-1.png",
    "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-3.png",
  ];
  return (
    <div>
      <section
        className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden "
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/012/696/539/non_2x/line-abstract-futuristic-wave-hi-tech-background-vector.jpg')",
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
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-5xl font-semibold text-white mb-3">
            Events
          </h2>

          <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
            Navigate through our policies for a clear understanding of
            Northsling’s <br /> commitment to excellence and compliance.
          </p>

        <div className="relative w-full max-w-2xl mt-8"> 
  <input
    type="text"
    className="bg-white text-black w-full py-3 pl-8 pr-10 rounded-xl border border-gray-300 
    focus:outline-none focus:border-gray-500 text-base"
    placeholder="Search for events"
  />
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  className="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
>
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</svg>

</div>

        </motion.div>
      </section>
      {/* events */}
      <PremiumEventCards/>
      <AwardsSection/>
      <ContactForm/>
    </div>
  );
}

export default Events;
