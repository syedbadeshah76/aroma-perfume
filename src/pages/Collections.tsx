"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { useApp } from "@/contexts/AppContext"; // ✅ Context import

import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.webp";
import p3 from "@/assets/p3.avif";
import p4 from "@/assets/p4.avif";
import p5 from "@/assets/p5.webp";
import p6 from "@/assets/p6.jpg";

const categories = ["All", "Men", "Women", "Unisex"];

const perfumes = [
  { id: "1", name: "Dior Sauvage", price: 9500, category: "Men", img: p1 },
  { id: "2", name: "Bleu de Chanel", price: 10500, category: "Men", img: p2 },
  { id: "3", name: "Gucci Bloom", price: 8700, category: "Women", img: p3 },
  { id: "4", name: "YSL Black Opium", price: 9300, category: "Women", img: p4 },
  { id: "5", name: "Tom Ford Oud Wood", price: 12500, category: "Unisex", img: p5 },
  { id: "6", name: "Creed Aventus", price: 18500, category: "Unisex", img: p6 },
];

function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { dispatch } = useApp(); // ✅ context se dispatch le liya

  const filteredPerfumes =
    selectedCategory === "All"
      ? perfumes
      : perfumes.filter((p) => p.category === selectedCategory);

// const {dispatch} = useApp();

const handleAddToCart = (product: Product, size?: string) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: { product, size },
  });
  toast.success(`${product.name} added to cart! 🛒`);
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />

      <h1 className="text-4xl font-bold text-center mb-10 pt-24">
        Explore Our Perfume Collection
      </h1>

      <div className="flex justify-center space-x-4 mb-10">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full text-lg transition-all ${
              selectedCategory === cat
                ? "bg-black text-white shadow-lg"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredPerfumes.map((perfume) => (
          <Card
            key={perfume.id}
            className="rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <CardContent className="p-6 flex flex-col items-center">
              <img
                src={perfume.img.src ?? perfume.img}
                alt={perfume.name}
                className="w-40 h-40 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold">{perfume.name}</h2>
              <p className="text-gray-600 mt-2">₹{perfume.price}</p>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              <Button
                className="w-full bg-black text-white hover:bg-gray-800"
                onClick={() => handleAddToCart(perfume)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CollectionsPage;
