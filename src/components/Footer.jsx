import React, { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer className="relative bg-black/70 backdrop-blur-lg text-white mt-20">
      
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">Hedamo</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            A smart product discovery platform helping users make confident
            purchasing decisions with transparency and innovation.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} Hedamo. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 font-medium">
            <li className="hover:text-pink-400 cursor-pointer">Home</li>
            <li className="hover:text-pink-400 cursor-pointer">Products</li>
            <li className="hover:text-pink-400 cursor-pointer">About Us</li>
            <li className="hover:text-pink-400 cursor-pointer">Login / Signup</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Us</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
