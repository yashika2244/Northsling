import React from 'react'
import { motion } from "framer-motion";
import ContactForm from '../success/ContactForm';

function Board() {
  const directors = [
  {
    name: "Raghunath Prasad Rungta",
    title: "MANAGING DIRECTOR",
    img: "https://www.bing.com/th/id/OIP.XwQl1fgL8Sj_byE6Ca2xNQHaJQ?w=164&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    name: "Abhishek Rungta",
    title: "WHOLE TIME DIRECTOR & CEO",
    img: "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
  },
  {
    name: "Bharat Hari Berlia",
    title: "WHOLE TIME DIRECTOR",
    img: "https://th.bing.com/th/id/OIP.LtLk-vQkLJGggWTN032pPwHaLH?w=184&h=276&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    name: "Shradha Rungta",
    title: "NON EXECUTIVE DIRECTOR",
    img: "https://th.bing.com/th/id/OIP.so5s5QgNUgKSgouiR2R1zQHaHa?w=178&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    name: "Anurag Singal",
    title: "INDEPENDENT DIRECTOR",
    img: "https://www.bing.com/th/id/OIP.TOdWH7V3u50DE2O8sxXv8gHaE8?w=248&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    name: "Rashmi Bihani",
    title: "INDEPENDENT DIRECTOR",
    img: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg",
  },
  {
    name: "Swati Singhania",
    title: "INDEPENDENT DIRECTOR",
    img: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg",
  },
];
  return (
    <div>
         <section
            className="relative w-full min-h-[580px] flex items-center justify-center text-center overflow-hidden "
            style={{
              backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/013/087/516/non_2x/diagonal-golden-line-glass-cube-on-black-background-illustration-of-website-banner-poster-sign-corporate-business-social-media-post-billboard-agency-advertising-media-motion-video-animation-wave-vector.jpg')", 
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
              Investors
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Board of Directors
                </span>
              </h1>
      
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
             Welcome to our Board of Directors page, where you can learn about the visionary leaders steering our organization towards success.
              </p>
      
             
            </motion.div>
          </section>
        
  <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== Heading ===== */}
    

        {/* ===== Directors Grid ===== */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
  {directors.map((dir, index) => (
    <div
      key={index}
      className="relative group overflow-hidden rounded-2xl w-64 h-80 shadow-md hover:shadow-xl transition-all duration-500 "
    >
      {/* Image */}
      <img
        src={dir.img}
        alt={dir.name}
        className="w-full h-full object-cover opacity-100  group-hover:opacity-100 transition duration-500 transform group-hover:scale-105"
      />

      {/* Soft Blue Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Text Container */}
      <div className="absolute bottom-5 left-5 right-5 text-left">
        <h3 className="text-lg font-semibold text-white drop-shadow-md leading-tight">
          {dir.name}
        </h3>
        <p className="text-[11px] text-gray-200 mt-1 uppercase tracking-wide">
          {dir.title}
        </p>
      </div>

      {/* Subtle hover border-glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00aaff]/50 rounded-2xl transition-all duration-500"></div>
    </div>
  ))}
</div>

      </div>
    </section>
    {/* Contact form */}
    <ContactForm/>
    </div>
  )
}

export default Board
