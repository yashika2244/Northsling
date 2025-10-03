import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(true); // theme toggle state
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
        background: isLight ? "white" : "radial-gradient(black)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:py-4  py-2 flex items-center justify-between">
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
                  ? "border-orange-500"
                  : "border-orange-400 group-hover:border-orange-500"
              }`}
            ></div>
            <div className="relative group w-12 h-12 rounded-2xl p-[2px] transition-all duration-300">
              <div
                className={`w-full h-full rounded-2xl flex items-center justify-center font-extrabold shadow-lg transition-all
                ${
                  isLight
                    ? "bg-gradient-to-br from-white to-orange-50 text-orange-600"
                    : "bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] text-orange-500 group-hover:text-orange-600 group-hover:shadow-orange-400/40"
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
                : "bg-clip-text hover:tracking-wider text-orange-600"
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
              onClick={() => setActiveLink(link.name)}
              className={`relative group transition-all duration-300 ${
                activeLink === link.name
                  ? "text-orange-500 font-bold"
                  : isLight
                  ? "text-gray-800"
                  : "text-orange-600"
              }`}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {link.name}
              {activeLink === link.name && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 rounded-full"></span>
              )}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Buttons */}
    <div className="hidden md:flex items-center gap-4">
  <motion.button
    whileHover={{ scale: 1.05 }} // only scale, no shadow
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-2 rounded-md border text-sm font-semibold transition-all ${
      isLight
        ? "border-orange-500 text-orange-600 hover:text-white hover:bg-orange-500"
        : "border-orange-400 text-orange-500 hover:text-white hover:bg-orange-200/20"
    }`}
  >
    Contact us
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }} // only scale, no shadow
    whileTap={{ scale: 0.95 }}
    onClick={() => setIsLight(!isLight)}
    className="px-4 py-2 rounded-md border border-orange-400 text-orange-400 text-sm font-semibold hover:bg-orange-500/20 transition-all"
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
               hover:border-orange-400/60 hover:shadow-[0_0_25px_rgba(255,165,0,0.7)] 
               transition-all duration-500 ease-in-out"
          >
            <Menu
              size={26}
              className="transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110 
                 text-black "
            />
            <span
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 
                     blur-xl opacity-0 group-hover:opacity-40 transition duration-700"
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
     <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed inset-0 h-screen w-screen z-50 flex flex-col shadow-xl backdrop-blur-2xl transition-all duration-500
        ${isLight
          ? "bg-gradient-to-br from-white via-orange-50 to-orange-100"
          : "bg-black/95"} // Dark mode background
      `}
    >
      {/* Top bar with Close button */}
      <div
        className={`flex items-center justify-between px-6 py-4 border-b shadow-lg
          ${isLight
            ? "bg-orange-50 border-orange-200"
            : "bg-gray-900 border-gray-800"} // Dark mode top bar
        `}
      >
        <span
          className={`text-2xl font-extrabold tracking-wide drop-shadow
            ${isLight
              ? "text-gray-800"
              : "text-white bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500"} // Dark mode text gradient
          `}
        >
          Menu
        </span>
        <button
          onClick={() => setMenuOpen(false)}
          className={`relative group p-2 rounded-full backdrop-blur-xl transition-all duration-500 shadow-lg
            ${isLight
              ? "border border-orange-300 text-orange-700 hover:border-orange-500 hover:bg-orange-50"
              : "border border-white/20 bg-gray-800/30 text-white hover:border-orange-400/70 hover:bg-gray-700/40"} // Dark mode close button
          `}
        >
          <X
            size={26}
            className={`transition-transform duration-500 group-hover:rotate-90
              ${isLight
                ? "text-black"
                : "text-white group-hover:text-orange-300"}
            `}
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
            className={`relative text-xl font-extrabold tracking-wider group
              ${isLight ? "text-orange-700" : "text-orange-400"} // Dark mode nav color
            `}
          >
            <span
              className={`bg-clip-text text-transparent transition-all duration-500
                ${isLight
                  ? "bg-gradient-to-r from-orange-700 to-orange-700 group-hover:from-orange-500 group-hover:to-yellow-400"
                  : "bg-gradient-to-r from-orange-400 to-orange-500 group-hover:from-orange-500 group-hover:to-yellow-400"}
              `}
            >
              {link.name}
            </span>
            <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_20px_rgba(255,165,0,0.9)]"></span>
          </motion.a>
        ))}

        {/* Theme Toggle Button (Mobile) */}
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 15px rgba(255,165,0,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsLight(!isLight)}
          className={`px-6 py-3 rounded-xl border text-base font-semibold transition-all
            ${isLight
              ? "border-orange-500 text-orange-600 hover:bg-orange-50"
              : "border-orange-400 text-orange-400 hover:bg-gray-700/30"}
          `}
        >
          {isLight ? "Dark Mode" : "Light Mode"}
        </motion.button>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(255,165,0,0.8)",
          }}
          whileTap={{ scale: 0.92 }}
          className={`px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg backdrop-blur-lg transition-all duration-300
            ${isLight
              ? "border border-orange-500 text-orange-600 hover:text-white hover:bg-orange-500"
              : "border border-orange-400/60 text-orange-400 hover:text-white hover:bg-orange-500/30"}
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
