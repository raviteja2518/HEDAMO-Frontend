import React from "react";

export default function CompareModal({ products, onClose }) {
  if (products.length !== 2) return null;

  const [a, b] = products;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-extrabold mb-6 text-center">
          Product Comparison
        </h2>

        <div className="grid grid-cols-3 gap-6 text-sm">
          <div className="font-semibold">Attribute</div>
          <div className="font-semibold">{a.name}</div>
          <div className="font-semibold">{b.name}</div>

          <div>Category</div>
          <div>{a.category}</div>
          <div>{b.category}</div>

          <div>Producer</div>
          <div>{a.producer}</div>
          <div>{b.producer}</div>

          <div>Status</div>
          <div>{a.status}</div>
          <div>{b.status}</div>

          <div>Last Updated</div>
          <div>{a.lastUpdated}</div>
          <div>{b.lastUpdated}</div>

          <div>Rating</div>
          <div>⭐ {a.rating}</div>
          <div>⭐ {b.rating}</div>
        </div>
      </div>
    </div>
  );
}
