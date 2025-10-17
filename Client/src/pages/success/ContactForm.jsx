import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, User } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    helpType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("✅ Your message has been sent!");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-end px-4 py-10"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl bg-white/10 p-10 text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-1"
        >
          Let’s <span className="text-orange-500">connect!</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-black mb-6">
          Have a project, idea, or collaboration in mind? Fill out the form below and we’ll reach out quickly.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={containerVariants}
        >
          {/* Name */}
          <motion.div variants={itemVariants} className="relative">
            <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="w-full bg-gray-900/70 text-white px-10 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400 text-sm hover:border-orange-400 transition"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full bg-gray-900/70 text-white px-10 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400 text-sm hover:border-orange-400 transition"
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants} className="relative">
            <Phone className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number*"
              required
              className="w-full bg-gray-900/70 text-white px-10 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400 text-sm hover:border-orange-400 transition"
            />
          </motion.div>

          {/* Help Type */}
          <motion.div variants={itemVariants}>
            <select
              name="helpType"
              value={formData.helpType}
              onChange={handleChange}
              required
              className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm hover:border-orange-400 transition"
            >
              <option value="">What Can Our Experts Help You With?</option>
              <option value="project">Start a new project</option>
              <option value="support">Product support</option>
              <option value="partnership">Partnership opportunity</option>
              <option value="other">Something else</option>
            </select>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Anything that you would like to add about the project?"
              className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400 text-sm resize-none hover:border-orange-400 transition"
            ></textarea>
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            variants={itemVariants}
            className="w-full flex items-center justify-center gap-2 bg-orange-500/80 hover:bg-orange-600/80 py-3 rounded-xl font-semibold text-white text-sm transition"
          >
            <Send size={18} /> Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
