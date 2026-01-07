import React from "react";
export default function CompareBar({ selected, onCompare, onClear }) {
  if (!selected.length) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-4 rounded-full flex gap-4">
      <span>{selected.length} selected</span>
      <button
        disabled={selected.length !== 2}
        onClick={onCompare}
        className="bg-purple-600 px-4 py-2 rounded-full disabled:opacity-40"
      >
        Compare
      </button>
      <button onClick={onClear} className="underline">Clear</button>
    </div>
  );
}
