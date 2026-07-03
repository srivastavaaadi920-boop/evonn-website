"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [images, setImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/slideshow-images");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setImages(data);
        }
      } catch (err) {
        console.error("Failed to fetch slideshow images:", err);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-background">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[current]}
              alt="EV-ONN background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 backdrop-blur-md text-primary font-bold text-sm mb-6 tracking-widest uppercase border border-primary/10">
              Leading EV Infrastructure Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-stencil text-secondary leading-tight mb-6 drop-shadow-2xl">
              Powering the <span className="text-primary italic underline decoration-primary/20">Future</span> of EV Infrastructure
            </h1>
            <p className="text-xl text-secondary mb-10 leading-relaxed max-w-2xl font-medium drop-shadow-md">
              Complete EV Charging Solutions – From Smart Chargers to Full EV Station Setup. Building a future-ready energy ecosystem for India's transition to sustainable mobility.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary !px-10 flex items-center gap-2 group">
                Get Free Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/products" className="btn-outline !px-10">
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Trust Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/40"
      >
        <p className="text-xs uppercase tracking-[0.3em] font-medium">Scroll to explore</p>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
}
