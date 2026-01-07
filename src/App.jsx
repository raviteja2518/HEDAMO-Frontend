// src/App.jsx
import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import CompareBar from "./components/CompareBar";
import CompareModal from "./components/CompareModal";
import { products } from "./data/products";
import "./index.css"; // Tailwind + animations

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const productSectionRef = useRef(null);

  const toggleCompare = (product) => {
    setCompareList((prev) =>
      prev.find((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : prev.length < 2
        ? [...prev, product]
        : prev
    );
  };

  const handleExplore = () => {
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Animated background blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400 rounded-full opacity-20 blur-3xl animate-float-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-400 rounded-full opacity-20 blur-3xl animate-float-slow animate-delay-2s"></div>
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-10 rounded-full blur-3xl animate-gradient-background"></div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* HeroSection only when no product selected */}
        {!selectedProduct && <HeroSection onExplore={handleExplore} />}

        {/* Product Section */}
        <div ref={productSectionRef} className="mt-10">
          {!selectedProduct ? (
            <ProductList
              products={products}
              onSelect={setSelectedProduct}
              compareList={compareList}
              onCompareToggle={toggleCompare}
            />
          ) : (
            <ProductDetail
              product={selectedProduct}
              allProducts={products}
              onBack={() => setSelectedProduct(null)}
            />
          )}
        </div>
      </main>

      {/* CompareBar */}
      {compareList.length > 0 && (
        <CompareBar
          selected={compareList}
          onCompare={() => setShowCompare(true)}
          onClear={() => setCompareList([])}
        />
      )}

      {/* CompareModal */}
      {showCompare && (
        <CompareModal
          products={compareList}
          onClose={() => setShowCompare(false)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
