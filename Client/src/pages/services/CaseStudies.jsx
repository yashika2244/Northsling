import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Case Studies</p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-12 max-w-4xl"
        >
          Focusing on customer experience brought great results to our clients across industries
        </motion.h1>

        {/* Case Study Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 rounded-2xl overflow-hidden shadow-lg border border-blue-100"
          >
            <img
              src="sbi1.webp"
              alt="SBI General Case Study"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-4"
          >
            <img src="sbi2.jpeg" alt="SBI General" className="h-10" />

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
              INT. built multilingual, offline-ready portals for SBIG, digitizing rural claims and agent journeys with real-time tracking and faster rollouts.
            </h3>

            <div className="grid grid-cols-2 gap-6 py-4">
              <div>
                <h4 className="text-3xl font-bold text-blue-700 mb-1">62%</h4>
                <p className="text-gray-600 text-base leading-snug">
                  fewer support requests, driven by streamlined self-service and backend sync
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-700 mb-1">3X</h4>
                <p className="text-gray-600 text-base leading-snug">
                  rise in claim tracker adoption, enhancing transparency and reducing escalations
                </p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center text-blue-700 font-semibold hover:underline mt-2"
            >
              Read more <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>


      

       
      </div>
    </section>
  );
}
