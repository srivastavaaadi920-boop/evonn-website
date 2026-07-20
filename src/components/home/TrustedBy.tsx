"use client";
import { motion } from "framer-motion";

export default function TrustedBy() {
  const categories = ["Commercial Spaces", "Fleet Operators", "Industrial Projects", "Business Parks", "Hotels & Resorts"];

  return (
    <div className="bg-white py-12 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-16">
        <p className="text-secondary/50 font-bold uppercase tracking-widest text-xs sm:text-sm whitespace-nowrap text-center sm:text-left">
          Trusted by Industry Leaders
        </p>
        
        <div className="flex-1 overflow-hidden relative">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {[...categories, ...categories, ...categories].map((cat, i) => (
              <span key={i} className="text-2xl font-stencil text-secondary/20 hover:text-primary/40 transition-colors cursor-default">
                {cat}
              </span>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
