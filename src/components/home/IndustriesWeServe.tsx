"use client";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { Building2, Fuel, Hotel, Utensils, ShoppingBag, Truck, Warehouse, Home, Factory, Landmark } from "lucide-react";

const industries = [
  { name: "Petrol Pumps", icon: Fuel },
  { name: "Hotels & Resorts", icon: Hotel },
  { name: "Restaurants", icon: Utensils },
  { name: "Shopping Malls", icon: ShoppingBag },
  { name: "Highways", icon: Landmark },
  { name: "Fleet Operators", icon: Truck },
  { name: "Warehouses", icon: Warehouse },
  { name: "Commercial Office", icon: Building2 },
  { name: "Housing Society", icon: Home },
  { name: "Factories", icon: Factory },
];

export default function IndustriesWeServe() {
  return (
    <Section className="bg-white py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Targeted Solutions</span>
          <h2 className="text-4xl md:text-5xl font-stencil uppercase mt-4">Industries We <span className="text-primary">Serve</span></h2>
          <p className="text-secondary/60 mt-6">Tailored EV charging infrastructure for every business sector.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(61, 84, 56, 0.05)" }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl border border-gray-100 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-secondary/40 group-hover:bg-primary group-hover:text-white transition-all mb-4">
                <industry.icon size={32} />
              </div>
              <p className="font-bold text-center text-sm md:text-base group-hover:text-primary transition-colors">{industry.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
