"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get in <span className="text-pink-500">Touch</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          We’d love to hear from you! Fill out the form below and we’ll get back
          to you soon.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <motion.section
        className="max-w-3xl mx-auto bg-gray-900/60 p-8 rounded-2xl shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <Input
              type="text"
              placeholder="Enter your name"
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <Textarea
              placeholder="Write your message here..."
              className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
            />
          </div>

          {/* Button */}
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-lg py-6 rounded-xl transition-all duration-300">
            Send Message
          </Button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm mt-16">
        © {new Date().getFullYear()} Badeshah All Right Reserved
      </footer>
    </div>
  );
}
