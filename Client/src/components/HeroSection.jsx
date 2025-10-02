import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 px-6 sm:px-16 py-24">
      {/* Background Glow Effects (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full z-10 text-center lg:text-left">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
        >
          Let’s start{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            engineering impact
          </span>{" "}
          together.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0"
        >
          We provide expertise at the intersection of{" "}
          <span className="text-cyan-500 dark:text-cyan-400 font-medium">data</span>,{" "}
          <span className="text-cyan-500 dark:text-cyan-400 font-medium">design</span>, and{" "}
          <span className="text-cyan-500 dark:text-cyan-400 font-medium">engineering</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            href="#"
            className="px-6 py-3 rounded-md bg-cyan-500 text-white font-medium text-center 
                       hover:bg-cyan-400 transition duration-300"
          >
            Get in touch →
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-md text-gray-800 dark:text-gray-300 font-medium text-center
                       hover:text-cyan-500 transition duration-300"
          >
            Learn More →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
