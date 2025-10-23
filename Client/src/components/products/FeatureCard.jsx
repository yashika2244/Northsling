import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-start gap-3 p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-lg hover:border-blue-500/60 hover:shadow-blue-500/20 transition-all duration-300"
      whileHover={{ scale: 1.04 }}
    >
      <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
