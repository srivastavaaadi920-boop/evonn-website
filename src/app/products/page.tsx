"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Section from "../../components/common/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight, PlugZap, Factory, Wind } from "lucide-react";
import Link from "next/link";

const mainCategories = [
  { key: "Chargers", label: "EV Chargers", icon: PlugZap },
  { key: "Transformers", label: "Transformers", icon: Factory },
  { key: "HVLS Fans", label: "HVLS Fans", icon: Wind },
];

const products = [
  // --- AC Chargers ---
  {
    id: 1,
    category: "Chargers",
    subCategory: "AC",
    name: "3.3kW Single Phase",
    desc: "Compact residential charger with smart monitoring.",
    specs: ["Single Phase", "7m Cable", "Bluetooth/Wi-Fi", "IP65 Waterproof"],
    image: "/images/ac-charger-station.webp"
  },
  {
    id: 2,
    category: "Chargers",
    subCategory: "AC",
    name: "7.4kW Smart Wallbox",
    desc: "High-performance wallbox for modern homes and small offices.",
    specs: ["Single Phase", "Dynamic Load", "Type 2 Connect", "Mobile App"],
    image: "/images/ac-charger-station.webp"
  },
  {
    id: 3,
    category: "Chargers",
    subCategory: "AC",
    name: "10kW AC Charger",
    desc: "Versatile charging solution for residential and commercial use.",
    specs: ["Single Phase", "Type 2 Socket", "Smart Control", "Weatherproof"],
    image: "/images/ac-charger-station.webp"
  },
  {
    id: 4,
    category: "Chargers",
    subCategory: "AC",
    name: "11kW AC Charger",
    desc: "Balanced power for efficient daily charging needs.",
    specs: ["Three Phase", "RFID Access", "Load Management", "App Control"],
    image: "/images/ac-charger-station.webp"
  },
  {
    id: 5,
    category: "Chargers",
    subCategory: "AC",
    name: "15kW AC Charger",
    desc: "Enhanced charging speed for commercial applications.",
    specs: ["Three Phase", "Dual Socket", "OCPP Ready", "Remote Monitor"],
    image: "/images/ac-charger-station.webp"
  },
  {
    id: 6,
    category: "Chargers",
    subCategory: "AC",
    name: "22kW Commercial AC",
    desc: "Robust charging for business parks and malls.",
    specs: ["Triple Phase", "Dual Connector", "OCPP 1.6J", "RFID Access"],
    image: "/images/ac-charger-station.webp"
  },
  // --- DC Chargers ---
  {
    id: 7,
    category: "Chargers",
    subCategory: "DC",
    name: "30kW Compact DC",
    desc: "Fast charging in a space-saving design.",
    specs: ["CCS2 / CHAdeMO", "Modular Power", "Indoor/Outdoor", "LCD Display"],
    image: "/images/dc-charger-station.webp"
  },
  {
    id: 8,
    category: "Chargers",
    subCategory: "DC",
    name: "60kW Public DC",
    desc: "The standard for public charging hubs.",
    specs: ["Dual Gun", "90% Efficiency", "Cloud Integrated", "Rugged Built"],
    image: "/images/dc-charger-station.webp"
  },
  {
    id: 9,
    category: "Chargers",
    subCategory: "DC",
    name: "80kW DC Fast Charger",
    desc: "Rapid charging for commercial and fleet operations.",
    specs: ["CCS2 Connector", "High Efficiency", "Smart Cooling", "V2G Ready"],
    image: "/images/dc-charger-station.webp"
  },
  {
    id: 10,
    category: "Chargers",
    subCategory: "DC",
    name: "120kW DC Ultra Fast",
    desc: "Ultra-fast charging for highway corridors.",
    specs: ["Dual Output", "Active Cooling", "Payment Terminal", "Cloud Ready"],
    image: "/images/dc-charger-station.webp"
  },
  {
    id: 11,
    category: "Chargers",
    subCategory: "DC",
    name: "180kW DC Supercharger",
    desc: "High-power charging for rapid turnaround.",
    specs: ["Multi-Standard", "Parallel Charge", "Weather Resistant", "4G Connected"],
    image: "/images/dc-charger-station.webp"
  },
  {
    id: 12,
    category: "Chargers",
    subCategory: "DC",
    name: "240kW DC Power Station",
    desc: "Premium charging solution for commercial hubs.",
    specs: ["Split Power", "Dynamic Load", "Premium Display", "Advanced Safety"],
    image: "/images/dc-charger-station.webp"
  },
  {
    id: 13,
    category: "Chargers",
    subCategory: "DC",
    name: "360kW DC Mega Charger",
    desc: "Maximum power for fleet and heavy-duty vehicles.",
    specs: ["Hyper-Fast", "Liquid Cooled", "Fleet Ready", "Scalable Power"],
    image: "/images/dc-charger-station.webp"
  },
  {
    id: 14,
    category: "Chargers",
    subCategory: "DC",
    name: "760kW DC Ultra Power",
    desc: "Top-tier speed for highways and mega charging stations.",
    specs: ["Ultra Power", "Multi-Vehicle", "V2G Ready", "Advanced Cooling"],
    image: "/images/dc-charger-station.webp"
  },
  // --- Transformers ---
  {
    id: 15,
    category: "Transformers",
    subCategory: "",
    name: "Distribution Transformer",
    desc: "Reliable oil-cooled transformers for EV station power distribution.",
    specs: ["10kVA–50,000 kVA", "Oil Cooled", "BIS Certified", "Low Loss Core"],
    image: "/images/ev-onn-infrastructure.webp"
  },
  {
    id: 16,
    category: "Transformers",
    subCategory: "",
    name: "Dry Type Transformer",
    desc: "Eco-friendly dry transformers for indoor installations.",
    specs: ["Up to 5000 kVA", "Fire Resistant", "Low Noise", "IP23 Enclosure"],
    image: "/images/ev-onn-infrastructure.webp"
  },
  {
    id: 17,
    category: "Transformers",
    subCategory: "",
    name: "Compact Substation (CSS)",
    desc: "Pre-fabricated substation for rapid EV station power setup.",
    specs: ["Modular Design", "IP54 Enclosure", "Low Maintenance", "Plug & Play"],
    image: "/images/ev-onn-infrastructure.webp"
  },
  // --- HVLS Fans ---
  {
    id: 18,
    category: "HVLS Fans",
    subCategory: "",
    name: "Industrial HVLS 24ft",
    desc: "Maximum air coverage for large warehouses and factories.",
    specs: ["PMSM Motor", "Low Noise", "24ft Diameter", "Reversible Airflow"],
    image: "/images/ev-onn-hvls-fan.webp"
  },
  {
    id: 19,
    category: "HVLS Fans",
    subCategory: "",
    name: "Commercial HVLS 16ft",
    desc: "Perfect for showrooms, malls, and commercial venues.",
    specs: ["Energy Efficient", "Smart Control", "IoT Ready", "16ft Diameter"],
    image: "/images/ev-onn-hvls-fan.webp"
  },
  {
    id: 20,
    category: "HVLS Fans",
    subCategory: "",
    name: "HVLS Fan 12ft Compact",
    desc: "Ideal for smaller industrial and gym spaces.",
    specs: ["12ft Diameter", "Variable Speed", "Silent Operation", "Easy Install"],
    image: "/images/ev-onn-hvls-fan.webp"
  },
];

import { Suspense } from "react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("Chargers");
  const [chargerType, setChargerType] = useState<"All" | "AC" | "DC">("All");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && mainCategories.some(c => c.key === cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filtered = products.filter(p => {
    if (p.category !== activeCategory) return false;
    if (activeCategory === "Chargers" && chargerType !== "All") {
      return p.subCategory === chargerType;
    }
    return true;
  });

  return (
    <div className="pt-20">
      {/* Page Header */}
      <Section className="bg-white py-24 border-b border-gray-100">
        <div className="section-container text-center max-w-4xl mx-auto space-y-6">
           <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Product Catalog</span>
           <h1 className="text-3xl sm:text-5xl md:text-7xl font-stencil uppercase">Advanced <span className="text-primary italic underline decoration-primary/20">Solutions</span></h1>
           <p className="text-lg sm:text-xl text-secondary/60">Explore our complete product range — from smart EV chargers to power infrastructure and industrial cooling.</p>
        </div>
      </Section>

      {/* Main Category Tabs */}
      <Section className="bg-gradient-to-b from-white to-gray-50 py-12 backdrop-blur-lg bg-white/80 border-b border-gray-200/50">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {mainCategories.map(cat => (
              <button
                key={cat.key}
                onClick={() => { setActiveCategory(cat.key); setChargerType("All"); }}
                className={`group relative px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 sm:gap-3 overflow-hidden ${
                  activeCategory === cat.key
                    ? "bg-primary text-white shadow-xl shadow-primary/30 scale-105"
                    : "bg-white text-secondary/60 hover:bg-gray-50 hover:text-secondary shadow-md hover:shadow-lg border border-gray-200/50"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeCategory === cat.key ? 'opacity-100' : ''
                }`}></div>
                <cat.icon size={20} className="relative z-10" />
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* AC / DC sub-tabs for Chargers */}
          {activeCategory === "Chargers" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center gap-3"
            >
              {(["All", "AC", "DC"] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setChargerType(type)}
                  className={`relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    chargerType === type
                      ? "bg-secondary text-white shadow-lg shadow-secondary/30 scale-105"
                      : "bg-white text-secondary/50 hover:bg-gray-50 hover:text-secondary border border-gray-200/70 hover:border-secondary/30"
                  }`}
                >
                  <span className="relative z-10">
                    {type === "All" ? "All Chargers" : `${type} Chargers`}
                  </span>
                  {chargerType === type && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-secondary rounded-xl"
                      style={{ zIndex: 0 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </Section>

      {/* Product Grid */}
      <Section className="bg-gray-50 py-24">
         <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               <AnimatePresence mode="popLayout">
                  {filtered.map((p) => (
                     <motion.div 
                        key={p.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full border border-gray-100"
                     >
                        <div className="h-64 relative overflow-hidden bg-gray-50">
                           <img src={p.image} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt={p.name} />
                           <div className="absolute bottom-6 left-6 flex gap-2">
                              <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm border border-primary/10">
                                 {p.category}
                              </span>
                              {p.subCategory && (
                                <span className="px-4 py-2 bg-secondary/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-sm">
                                   {p.subCategory}
                                </span>
                              )}
                           </div>
                        </div>
                        <div className="p-6 sm:p-10 space-y-4 sm:space-y-6 flex-grow">
                           <div className="space-y-2">
                              <h3 className="text-2xl sm:text-3xl font-stencil uppercase text-secondary group-hover:text-primary transition-colors leading-tight">{p.name}</h3>
                              <p className="text-secondary/60 line-clamp-2 leading-relaxed text-sm">{p.desc}</p>
                           </div>
                           
                           <div className="grid grid-cols-2 gap-4">
                              {p.specs.map(spec => (
                                 <div key={spec} className="flex items-center gap-2 text-xs font-bold text-secondary/40 uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                    {spec}
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className="p-6 sm:p-10 pt-0 border-t border-gray-50 mt-auto">
                           <Link href="/contact" className="w-full btn-primary !py-3.5 text-center text-sm flex justify-center items-center gap-2 mt-6">
                              Inquiry
                              <ArrowRight size={18} />
                           </Link>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </Section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen flex justify-center items-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
