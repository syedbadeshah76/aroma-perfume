import React from "react";
import p4 from "@/assets/p4.avif";
import p5 from "@/assets/p5.webp";

const PerfumeSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10">
      
      {/* Left Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={p4} // ✅ imported image use kiya
          alt="Frango Perfume"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-2xl font-bold">Frango</h2>
            <p className="text-lg">Perfume and Fragrance</p>
          </div>
        </div>
      </div>

      {/* Right Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={p5} // ✅ imported image use kiya
          alt="Devita Store"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-2xl font-bold">Devita store</h2>
            <p className="text-lg">Collection Luxury Perfume</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PerfumeSection;
