import { motion } from "framer-motion";

export default function JoinTeam() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-white px-6 sm:px-12 py-20 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-orange-200 group"
        >
          <img
            src="/teamImg.jpeg"
            alt="Join Our Team"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Light overlay for hover */}
          <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-800 md:pl-8"
        >
          <p className="uppercase tracking-[6px] text-sm text-orange-500 mb-3">
            Apply
          </p>

          <h2 className="relative text-4xl sm:text-5xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Join Our <br /> Team Today
            {/* Underline Accent */}
            <span className="absolute left-0 -bottom-3 w-16 h-[3px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
          </h2>

          <p className="text-lg text-gray-700 mb-10 max-w-md">
            Work with the best minds in the business. Collaborate, grow, and
            create impact globally.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-lg font-semibold bg-orange-400 text-white hover:bg-yellow-400 transition-all shadow-lg hover:shadow-orange-300/40 hover:scale-105"
            >
              Apply Now
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-lg font-semibold text-orange-500 hover:text-yellow-500 transition-all group"
            >
              Learn More
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
