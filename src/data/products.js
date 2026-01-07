// src/data/products.js
import RedTshirt from "../images/redshirt.png";
import BlueJeans from "../images/jeans.png";
import Sneakers from "../images/sneakers.png";
import GreenJacket from "../images/greenJacket.png";

export const products = [
  {
    id: 1,
    name: "Red T-shirt",
    category: "Apparel",
    producer: "Hedamo Textiles Pvt Ltd",
    status: "Published",
    lastUpdated: "2025-01-05",

    description: "Comfortable cotton t-shirt made from sustainable fabric.",
    price: 25,
    image: RedTshirt,
    rating: 4.5,

    disclosure: {
      declaredBy: "Hedamo Textiles Pvt Ltd",
      declaredOn: "2025-01-01",
      evidenceCount: 2,
    },

    versions: [
      { version: "v1.0", date: "2024-12-10", status: "Draft" },
      { version: "v2.0", date: "2025-01-01", status: "Published" },
    ],

    reviews: [
      { id: 1, user: "Alice", text: "Very comfortable and fits well!", rating: 5 },
      { id: 2, user: "Bob", text: "Nice fabric, but color fades slightly.", rating: 4 },
    ],
  },

  {
    id: 2,
    name: "Blue Jeans",
    category: "Apparel",
    producer: "Urban Denim Co",
    status: "Submitted",
    lastUpdated: "2025-01-03",

    description: "Stylish slim-fit denim jeans for daily wear.",
    price: 50,
    image: BlueJeans,
    rating: 4,

    disclosure: {
      declaredBy: "Urban Denim Co",
      declaredOn: "2024-12-28",
      evidenceCount: 1,
    },

    versions: [
      { version: "v1.0", date: "2024-12-15", status: "Draft" },
      { version: "v1.1", date: "2024-12-28", status: "Submitted" },
    ],

    reviews: [
      { id: 1, user: "Charlie", text: "Perfect fit and style.", rating: 4 },
      { id: 2, user: "Diana", text: "Comfortable but a bit tight.", rating: 4 },
    ],
  },

  {
    id: 3,
    name: "Sneakers",
    category: "Footwear",
    producer: "Sprint Sportswear",
    status: "Published",
    lastUpdated: "2025-01-02",

    description: "High-performance sneakers for sports and casual use.",
    price: 75,
    image: Sneakers,
    rating: 5,

    disclosure: {
      declaredBy: "Sprint Sportswear",
      declaredOn: "2024-12-20",
      evidenceCount: 3,
    },

    versions: [
      { version: "v1.0", date: "2024-11-30", status: "Draft" },
      { version: "v2.0", date: "2024-12-20", status: "Published" },
    ],

    reviews: [
      { id: 1, user: "Eve", text: "Super comfortable and trendy!", rating: 5 },
    ],
  },

  {
    id: 4,
    name: "Green Jacket",
    category: "Outerwear",
    producer: "EcoWear Industries",
    status: "Draft",
    lastUpdated: "2024-12-29",

    description: "Lightweight eco-friendly jacket for outdoor activities.",
    price: 120,
    image: GreenJacket,
    rating: 4.2,

    disclosure: {
      declaredBy: "EcoWear Industries",
      declaredOn: "2024-12-18",
      evidenceCount: 0,
    },

    versions: [
      { version: "v0.9", date: "2024-12-10", status: "Draft" },
      { version: "v1.0", date: "2024-12-18", status: "Draft" },
    ],

    reviews: [
      { id: 1, user: "Frank", text: "Warm and stylish!", rating: 4 },
    ],
  },
];
