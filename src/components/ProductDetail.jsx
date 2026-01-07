// src/components/ProductDetail.jsx
import React from "react";

export default function ProductDetail({ product, allProducts, onBack }) {
  const recommendations = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl transition-all">
      <button
        onClick={onBack}
        className="underline mb-6 text-gray-700 hover:text-purple-600 transition"
      >
        ← Back to products
      </button>

      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-gray-600 mt-1">{product.producer}</p>

      {/* Status badge with tooltip */}
      <span
        className={`inline-block mt-3 px-3 py-1 text-xs rounded-full status-${product.status.toLowerCase()} bg-gray-200`}
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

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[420px] object-contain rounded-2xl mt-6 bg-gray-50 shadow-sm"
      />

      {/* Disclosure Summary */}
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="font-semibold text-lg mb-3">Disclosure Summary</h3>
        <p>
          <strong>Declared by:</strong> {product.producer}
        </p>
        <p>
          <strong>Date:</strong> {product.disclosure.date}
        </p>
        <p>
          <strong>Evidence attached by producer:</strong> {product.disclosure.evidenceCount}
        </p>
      </div>

      {/* Version History */}
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-3">Version History</h3>
        <ul className="space-y-2">
          {product.versions.map((v, i) => (
            <li key={i} className="text-sm text-gray-600">
              {v.date} — {v.status}
            </li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <p className="mt-10 text-xs text-gray-500 italic">
        Information provided by the producer; Hedamo does not verify accuracy or endorse content.
      </p>

      {/* Recommendations */}
      <h3 className="mt-12 text-xl font-bold">You may also like</h3>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {recommendations.map((item) => (
          <div
            key={item.id}
            className="bg-white/80 backdrop-blur-xl p-4 rounded-xl shadow hover:scale-105 transition"
          >
            <img
              src={item.image}
              className="h-40 w-full object-cover rounded-lg"
              alt={item.name}
            />
            <h4 className="mt-2 font-semibold">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
