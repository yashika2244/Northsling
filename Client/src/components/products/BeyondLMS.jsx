import { Zap, Monitor, Settings, Sparkles, Globe } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const BeyondLMS = () => {
  const features = [
    {
      icon: <Zap />,
      title: "Fast Deployment",
      description: "Go live in days, not quarters — deploy and scale effortlessly.",
    },
    {
      icon: <Monitor />,
      title: "Designed for Deskless",
      description: "Optimized for mobile and offline learning, anywhere and anytime.",
    },
    {
      icon: <Settings />,
      title: "Easy to Manage",
      description: "Admin dashboards for instant content uploads, quizzes, and updates.",
    },
    {
      icon: <Sparkles />,
      title: "Engaging by Design",
      description: "Built to motivate — not mandate — learning through experience.",
    },
    {
      icon: <Globe />,
      title: "Industry Versatility",
      description: "From factory floors to retail counters to healthcare networks.",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why MobiLearn Goes Beyond LMS
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          MobiLearn delivers learning that moves with your workforce —
          <br className="hidden md:block" /> fast, simple, and built for impact.
        </motion.p>
      </div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <FeatureCard
              icon={f.icon}
              title={f.title}
              description={f.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BeyondLMS;
