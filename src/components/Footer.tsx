import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-background via-background/95 to-background/90 text-muted-foreground py-16 px-6 relative overflow-hidden">
      {/* Floating background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-28 h-28 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-accent/30 pt-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 border-b-2 border-primary inline-block pb-1">
            About
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition">Global Corporate Offices</a></li>
            <li><a href="#" className="hover:text-primary transition">Product Catalogue</a></li>
            <li><a href="#" className="hover:text-primary transition">Your Favourites</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 border-b-2 border-primary inline-block pb-1">
            Customer Care
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary transition">Franchise Program</a></li>
            <li><a href="#" className="hover:text-primary transition">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* News */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 border-b-2 border-primary inline-block pb-1">
            News
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition">News</a></li>
            <li><a href="#" className="hover:text-primary transition">Events</a></li>
          </ul>
        </div>

        {/* Follow Section */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 border-b-2 border-primary inline-block pb-1">
            Follow
          </h3>
          <p className="mb-4">#AromaScribe</p>
          <div className="flex space-x-4">
            <a href="#"><FaFacebookF className="text-xl hover:text-primary transition-transform transform hover:scale-110" /></a>
            <a href="#"><FaInstagram className="text-xl hover:text-primary transition-transform transform hover:scale-110" /></a>
            <a href="#"><FaYoutube className="text-xl hover:text-primary transition-transform transform hover:scale-110" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 mt-10 text-center text-xs text-muted-foreground/70 border-t border-accent/20 pt-6">
        © {new Date().getFullYear()} Aroma Scribe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
