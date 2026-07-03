"use client";
import { CheckCircle2 } from "lucide-react";
import Section from "../common/Section";
import { motion } from "framer-motion";

const features = [
  "End-to-End EV Station Setup",
  "All Types of EV Chargers",
  "Transformer Integration",
  "Solar Powered EV Stations",
  "HVLS Fan Solutions",
  "AMC & Maintenance"
];

export default function AboutOverview() {
  return (
    <Section className="bg-white py-24 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-stencil leading-tight">
                Driving India's <span className="text-primary">EV Revolution</span>
              </h2>
            </div>
            
            <p className="text-lg text-secondary/70 leading-relaxed">
              At EV-ONN Charging Solutions, we are committed to accelerating India’s transition toward sustainable mobility through intelligent and reliable EV charging infrastructure.
            </p>
            
            <p className="text-lg text-secondary/70 leading-relaxed">
              We specialize in end-to-end EV charging solutions including AC & DC fast chargers, complete charging station setup, transformers, electrical infrastructure, and HVLS fan solutions for industrial and commercial facilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="font-bold text-secondary/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/ev-onn-station.jpg" 
                alt="EV Charging Station" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <p className="text-4xl font-stencil mb-1">500+</p>
              <p className="text-xs uppercase font-bold tracking-widest opacity-80">Projects Delivered</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
