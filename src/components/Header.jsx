import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Glassmorphic navbar with animated gradient */}
      <div className="backdrop-blur-md bg-gradient-to-r from-purple-600 via-pink-500 to-red-500/80 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <h1 className="text-4xl font-extrabold text-white tracking-tight font-[Poppins] animate-pulse">
              🛍️ Hedamo
            </h1>
            <p className="text-white/80 font-semibold hidden md:block">
              Product Disclosure Platform
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 md:mt-0 flex items-center space-x-6 font-semibold text-white text-lg">
            {["Home", "Products", "About Us", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                className="relative group transition-colors duration-300 hover:text-yellow-300"
              >
                {link}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Login / Signup Buttons */}
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button className="bg-white/90 text-purple-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
              Login
            </button>
            <button className="bg-white/90 text-purple-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
              Signup
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
