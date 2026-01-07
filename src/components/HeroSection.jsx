import React from "react";
import shopping from "../images/shopping.png";

export default function HeroSection({ onExplore }) {
  return (
    <section className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-16 overflow-hidden">

      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-400 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-400 rounded-full opacity-30 blur-3xl"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold font-[Poppins] text-gray-900 leading-tight">
            Discover Products <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              The Smarter Way
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Hedamo helps you explore stylish products with complete transparency,
            real reviews, and rich visuals — all in one place.
          </p>

          <button
            onClick={onExplore}
            className="mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-9 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Explore Products
          </button>
        </div>

        {/* RIGHT: Image */}
        <div className="relative flex justify-center">
          <img
            src={shopping}
            alt="Shopping Illustration"
            className="w-full max-w-md rounded-3xl shadow-2xl animate-float"
          />
        </div>

      </div>
    </section>
  );
}
