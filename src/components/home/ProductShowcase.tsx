"use client";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { ArrowRight, PlugZap, Factory, Wind } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "EV Chargers",
    subtitle: "AC & DC Fast Chargers",
    description: "Complete range of smart AC and DC fast chargers for residential, commercial, and highway applications.",
    icon: PlugZap,
    image: "/images/ev-onn-chargers.jpg",
    href: "/products?category=Chargers",
    highlights: ["3.3kW – 720kW Range", "CCS2 & Type 2", "OCPP Cloud Ready"],
  },
  {
    title: "Transformers",
    subtitle: "Power Infrastructure",
    description: "Distribution transformers and compact substations powering reliable EV charging infrastructure.",
    icon: Factory,
    image: "/images/ev-onn-infrastructure.jpg",
    href: "/products?category=Transformers",
    highlights: ["10kVA – 50,000 kVA", "Oil & Dry Type", "BIS Certified"],
  },
  {
    title: "HVLS Fans",
    subtitle: "Industrial Cooling",
    description: "High-volume, low-speed fans for warehouses, factories, and commercial spaces with maximum air coverage.",
    icon: Wind,
    image: "/images/ev-onn-hvls-fan.jpg",
    href: "/products?category=HVLS+Fans",
    highlights: ["Up to 24ft Diameter", "PMSM Motor", "IoT Enabled"],
  },
];

export default function ProductShowcase() {
  return (
    <Section className="bg-gray-50 py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Catalog</span>
          <h2 className="text-4xl md:text-5xl font-stencil uppercase">Premium <span className="text-primary">Products</span></h2>
          <p className="text-lg text-secondary/60">End-to-end product solutions for India&apos;s EV charging ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link href={cat.href} className="block group h-full">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-6 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-lg">
                        <cat.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-stencil uppercase text-white drop-shadow-lg">{cat.title}</h3>
                        <p className="text-white/70 text-xs font-bold uppercase tracking-wider">{cat.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-5 flex-grow flex flex-col">
                    <p className="text-secondary/60 leading-relaxed text-sm">{cat.description}</p>

                    <div className="space-y-2.5 flex-grow">
                      {cat.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2.5 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="font-bold text-secondary/70">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider pt-2 group-hover:gap-3 transition-all">
                      Explore Products
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/products" className="btn-outline inline-flex items-center gap-2">
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
