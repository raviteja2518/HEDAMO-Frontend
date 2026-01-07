// src/components/ProductList.jsx
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import CompareModal from "./CompareModal";

export default function ProductList({
  products,
  onSelect,
  compareList = [],
  onCompareToggle,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [showCompare, setShowCompare] = useState(false);

  const filteredProducts = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.producer.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) => category === "All" || p.category === category)
    .filter((p) => status === "All" || p.status === status)
    .sort((a, b) =>
      sortBy === "date"
        ? new Date(b.lastUpdated) - new Date(a.lastUpdated)
        : a.name.localeCompare(b.name)
    );

  return (
    <>
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <input
          className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          placeholder="Search products or producer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-full border"
        >
          <option>All</option>
          <option>Apparel</option>
          <option>Footwear</option>
          <option>Outerwear</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 rounded-full border"
        >
          <option>All</option>
          <option>Draft</option>
          <option>Submitted</option>
          <option>Published</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-full border"
        >
          <option value="date">Last Updated</option>
          <option value="name">Name</option>
        </select>

        {compareList.length === 2 && (
          <button
            onClick={() => setShowCompare(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition duration-200"
          >
            Compare
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 py-20">
          No products match your filters. Only producer-declared information is displayed.
        </div>
      )}

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onSelect(product)}
            onCompareToggle={onCompareToggle}
            isSelected={compareList.some((p) => p.id === product.id)}
          />
        ))}
      </div>

      {/* Compare Modal */}
      {showCompare && (
        <CompareModal
          products={compareList}
          onClose={() => setShowCompare(false)}
        />
      )}
    </>
  );
}
