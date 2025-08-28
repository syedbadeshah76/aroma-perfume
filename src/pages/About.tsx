"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900">
      {/* ✅ Navbar same as theme */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent"
        >
          Who We Are
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-3xl text-lg md:text-xl text-gray-600"
        >
          Aroma Scribe is more than just a perfume brand — we’re storytellers of fragrance.  
          Our passion is to craft luxury perfumes that embody elegance, confidence, and timeless beauty.
        </motion.p>
      </section>

      {/* Vision / Mission / Promise Cards */}
      <section className="grid md:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto pb-28">
        {[
          {
            title: "Our Vision",
            desc: "To redefine luxury by blending timeless scents with modern elegance, making perfumes a lifestyle statement.",
          },
          {
            title: "Our Mission",
            desc: "To provide premium perfumes that are affordable, sustainable, and unforgettable in every way.",
          },
          {
            title: "Our Promise",
            desc: "Quality, authenticity, and a fragrance that lasts – because you deserve nothing but the best.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-xl border border-pink-100 hover:shadow-2xl transition-all"
          >
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Animated Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-100">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600"
        >
          Fragrance Beyond Limits
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-4xl mx-auto text-center text-lg text-gray-700"
        >
          From luxury designers to exclusive niche collections, our perfumes are crafted to elevate your style and personality.  
          Step into a world where every scent tells a story.
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500">
        © {new Date().getFullYear()} Aroma Scribe. All Rights Reserved.
      </footer>
    </div>
  );
}
