import React from "react";

export default function Hero4() {
  return (
    <section
      className="relative flex items-start md:items-center justify-start md:justify-center h-screen text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-img2.jpg')" }} 
    >
      {/* Neon Glow Overlay */}
      <div className="absolute inset-0 "></div>

    <div className="relative z-10 px-6 mt-16 md:mt-0">
  <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_#00ffff]">
    Join the Revolution
  </h1>
  <p className="mt-6 text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
    Be a part of the future with innovative solutions powered by AI, cloud,
    and next-gen technology.
  </p>
  <div className="mt-8 flex justify-center gap-6">
    <a
      href="/careers"
      className="px-6 py-3 rounded-md bg-cyan-500 text-black font-semibold hover:bg-cyan-400 shadow-lg transition"
    >
      Careers
    </a>
    <a
      href="/contact"
      className="px-6 py-3 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-md transition"
    >
      Contact Us
    </a>
  </div>
</div>

    </section>
  );
}
