import React from 'react'
import { motion } from "framer-motion";
import ContactForm from '../success/ContactForm';
function Awards() {
  const awards = [
    {
      img: "https://intglobal.com/wp-content/uploads/2021/09/National-PRSI-Award-for-Best-Online-Marketing-2015.jpg",
      title: "National PRSI Award for “Best Online Marketing”, 2015",
      desc: "Northsling bagged the first prize in the category of “Best Online Campaign”.",
    },
    {
      img: "https://intglobal.com/wp-content/uploads/2021/09/BCCI-MSME-Excellence-Award-in-the-Service-Category-2016.jpg",
      title: "BCC&I MSME Excellence Award in the Service Category, 2016",
      desc: "Northsling bagged the ‘BCC&I MSME Excellence Award’ in the service category in 2016.",
    },
    {
      img: "https://intglobal.com/wp-content/uploads/2021/09/Dun-Bradstreet-SME-Business-Excellence-Awards-2008.jpg",
      title: "Dun & Bradstreet – SME Business Excellence Awards 2008",
      desc: "Northsling was acknowledged at the Dun & Bradstreet “SME Business Excellence Awards” in 2008, a platform”.",
    },
    {
      img: "https://intglobal.com/wp-content/uploads/2021/09/Silicon-Valley-Business-Application-Award-for-Nasscom-conclave-mobile-app-2015.jpg",
      title: "Silicon Valley Business Application Award for Nasscom conclave mobile app 2015",
      desc: "Northsling bagged the SVBA (Silicon Valley Business App) Awards in 2015. The event recognizes",
    },
  ];
  return (
    <div>
          <section
               className="relative w-full min-h-[580px] flex items-center justify-center text-center overflow-hidden "
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
                 Awards
                 </h2>
               
         
                 <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
                Prestigious acknowledgement of our new age solutions
                 </p>
         
                
               </motion.div>
             </section>
       <section className="px-6 md:px-16 py-14 bg-[#fafafa]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-gray-900 mb-10"
      >
        Awards & Recognition
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer p-6 border border-gray-100"
          >
            <div className="w-full h-56 flex justify-center items-center overflow-hidden">
              <motion.img
                src={award.img}
                alt={award.title}
                className="h-full object-contain"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 leading-snug">
              {award.title}
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {award.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
    <ContactForm/>
    </div>
  )
}

export default Awards
