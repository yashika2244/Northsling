import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false); // theme toggle state
  const [activeLink, setActiveLink] = useState("Home");
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#cases" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl shadow-lg border-b transition-all duration-500 ${
        isLight ? "bg-white border-gray-200" : "border-white/10"
      }`}
      style={{
        background: isLight
          ? "white"
          : "radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          {/* Logo Box */}
          <div className="relative group w-12 h-12">
            <div
              className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 pointer-events-none ${
                isLight
                  ? "border-teal-500"
                  : "border-teal-400 group-hover:border-cyan-400"
              }`}
            ></div>
            <div className="relative group w-12 h-12 rounded-2xl p-[2px] transition-all duration-300">
              <div
                className={`w-full h-full rounded-2xl flex items-center justify-center font-extrabold shadow-lg transition-all
                ${
                  isLight
                    ? "bg-gradient-to-br from-white to-gray-100 text-teal-600"
                    : "bg-gradient-to-br from-[#0d1d31] to-[#0c0d13] text-teal-300 group-hover:text-white group-hover:shadow-teal-400/40"
                }`}
              >
                N
              </div>
            </div>
          </div>

          {/* Brand Text */}
          <span
            className={`font-extrabold text-2xl tracking-wide transition-all duration-300 ${
              isLight
                ? "text-gray-800"
                : "bg-clip-text hover:tracking-wider"
            }`}
          >
            Northsling
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              onClick={() => setActiveLink(link.name)} // update active link on click
              className={`relative group transition-all duration-300 ${
                activeLink === link.name
                  ? "text-teal-400 font-bold" // active link style
                  : isLight
                  ? "text-gray-800"
                  : "text-white"
              }`}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {link.name}
              {activeLink === link.name && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-full"></span>
              )}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Contact Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(45, 212, 191, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-md border text-sm font-semibold transition-all ${
              isLight
                ? "border-teal-500 text-teal-600 hover:text-white hover:bg-teal-500"
                : "border-teal-400 text-teal-300 hover:text-white hover:bg-teal-500/20"
            }`}
          >
            Contact us
          </motion.button>

          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 15px rgba(34,211,238,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLight(!isLight)}
            className="px-4 py-2 rounded-md border border-cyan-400 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-all"
          >
            {isLight ? "Dark Mode" : "Light Mode"}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="relative group p-3 rounded-2xl border border-white/20 
               bg-white/5 backdrop-blur-xl 
               text-white shadow-lg 
               hover:border-teal-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] 
               transition-all duration-500 ease-in-out"
          >
            <Menu
              size={26}
              className="transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110 
                 text-white group-hover:text-cyan-300"
            />
            <span
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 
                     blur-xl opacity-0 group-hover:opacity-40 transition duration-700"
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed inset-0 h-screen w-screen z-50 flex flex-col shadow-xl backdrop-blur-2xl transition-all duration-500
        ${
          isLight
            ? "bg-gradient-to-br from-white via-gray-50 to-gray-200"
            : "bg-gradient-to-br from-[#0d1d31]/95 to-[#0c0d13]/95"
        }`}
          >
            {/* Top bar with Close button */}
            <div
              className={`flex items-center justify-between px-6 py-4 border-b shadow-lg
          ${
            isLight
              ? "bg-gray-100 border-gray-200"
              : "bg-white/5 border-white/10"
          }
        `}
            >
              <span
                className={`text-2xl font-extrabold tracking-wide drop-shadow ${
                  isLight
                    ? "text-gray-800"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400"
                }`}
              >
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className={`relative group p-2 rounded-full backdrop-blur-xl transition-all duration-500 shadow-lg
            ${
              isLight
                ? "border border-gray-300 text-gray-700 hover:border-teal-500 hover:bg-teal-50"
                : "border border-white/20 bg-white/10 text-white hover:border-cyan-400/70 hover:bg-cyan-400/10"
            }
          `}
              >
                <X
                  size={26}
                  className={`transition-transform duration-500 group-hover:rotate-90 ${
                    isLight
                      ? "text-gray-700"
                      : "text-white group-hover:text-cyan-300"
                  }`}
                />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                  className={`relative text-xl font-extrabold tracking-wider group ${
                    isLight ? "text-gray-800" : "text-white"
                  }`}
                >
                  <span
                    className={`bg-clip-text text-transparent transition-all duration-500 ${
                      isLight
                        ? "bg-gradient-to-r from-gray-800 to-gray-800 group-hover:from-teal-500 group-hover:to-cyan-500"
                        : "bg-gradient-to-r from-white to-gray-300 group-hover:from-teal-400 group-hover:to-cyan-400"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_20px_rgba(34,211,238,0.9)]"></span>
                </motion.a>
              ))}

              {/* Theme Toggle Button (Mobile) */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 15px rgba(34,211,238,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLight(!isLight)}
                className={`px-6 py-3 rounded-xl border text-base font-semibold transition-all
            ${
              isLight
                ? "border-teal-500 text-teal-600 hover:bg-teal-50"
                : "border-cyan-400 text-cyan-400 hover:bg-cyan-500/20"
            }
          `}
              >
                {isLight ? "Dark Mode" : "Light Mode"}
              </motion.button>

              {/* CTA Button */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 25px rgba(34,211,238,0.8)",
                }}
                whileTap={{ scale: 0.92 }}
                className={`px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg backdrop-blur-lg transition-all duration-300
            ${
              isLight
                ? "border border-teal-500 text-teal-600 hover:text-white hover:bg-teal-500"
                : "border border-teal-400/60 text-teal-300 hover:text-white hover:bg-gradient-to-r hover:from-teal-500/30 hover:to-cyan-500/30"
            }
          `}
              >
                Contact us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
