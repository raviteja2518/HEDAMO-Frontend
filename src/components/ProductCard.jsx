// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({
  product,
  onClick,
  onCompareToggle,
  isSelected,
}) {
  return (
    <div
      onClick={() => onClick(product)}
      className={`bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-4 transition cursor-pointer
      ${isSelected ? "ring-4 ring-purple-500" : "hover:scale-105"}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl"
      />

      <h3 className="mt-3 font-bold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-sm">
        Producer states: {product.producer}
      </p>

      <span
        className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-gray-200"
        title={
          product.status === "Draft"
            ? "Disclosure is in draft stage"
            : product.status === "Submitted"
            ? "Disclosure submitted by producer"
            : "Disclosure made publicly available by producer"
        }
      >
        {product.status}
      </span>

      <p className="text-xs text-gray-400 mt-2">
        Last updated: {new Date(product.lastUpdated).toLocaleDateString()}
      </p>

      {/* Compare checkbox */}
      <label
        onClick={(e) => e.stopPropagation()}
        className="mt-3 flex items-center gap-2 text-sm font-semibold"
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onCompareToggle(product)}
        />
        Compare
      </label>
    </div>
  );
}
