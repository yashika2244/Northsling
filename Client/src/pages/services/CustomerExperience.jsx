import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users } from 'lucide-react';

export default function CustomerExperience() {
  return (
    <section className="min-h-screen pt-30 bg-gradient-to-br  from-white via-blue-50 to-blue-100 text-gray-800 px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Overview Tag */}
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Overview</p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
        >
          Customer Experience isn’t a choice — it’s <br />
          <span className="text-blue-700">the growth engine you can’t ignore</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-600 mb-10 max-w-3xl"
        >
          At <span className="font-semibold text-gray-800">Indus Net Technologies (INT.)</span>, we engineer experiences that go beyond interaction — creating ecosystems that serve, scale, and sustain business growth.
        </motion.p>

        {/* Feature List */}
        <ul className="space-y-4 text-gray-700 text-lg mb-16">
          <li>• Unified digital touchpoints that strengthen trust across customers, partners, and employees</li>
          <li>• Frictionless interfaces and journeys that boost adoption and engagement</li>
          <li>• Tailored solutions aligned with unique business models and pain points</li>
          <li>• Intelligent automation and integrations that cut costs and kill silos</li>
          <li>• Scalable, future-ready platforms that grow with your ambition</li>
        </ul>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4 border border-blue-100"
          >
            <TrendingUp className="text-blue-700 w-10 h-10" />
            <div>
              <h3 className="text-4xl font-bold text-blue-700 mb-1">80%</h3>
              <p className="text-gray-600 leading-snug">
                revenue growth advantage for CX leaders compared to competitors <span className="text-pink-500 font-medium">(SuperOffice)</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4 border border-blue-100"
          >
            <BarChart3 className="text-blue-700 w-10 h-10" />
            <div>
              <h3 className="text-4xl font-bold text-blue-700 mb-1">41%</h3>
              <p className="text-gray-600 leading-snug">
                of CX-driven companies achieved over 10% annual revenue growth <span className="text-pink-500 font-medium">(Forrester)</span>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing Line */}
        <p className="text-lg md:text-xl font-semibold text-gray-900 border-t border-gray-200 pt-6">
          Customer Experience isn’t part of your business — <span className="text-blue-700">it is your business.</span>
        </p>
      </div>
    </section>
  );
}
