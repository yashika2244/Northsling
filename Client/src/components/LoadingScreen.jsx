// components/LoadingScreen.jsx
import React from "react";

export default function LoadingScreen({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black">
      {/* Gold circular spinner */}
      <div className="w-16 h-16 border-4 border-white border-t-transparent border-solid rounded-full animate-spin"></div>

      <p className="mt-4 text-lg text-white font-medium">{message}</p>
    </div>
  );
}
