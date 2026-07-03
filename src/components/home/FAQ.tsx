"use client";
import { useState } from "react";
import Section from "../common/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of EV chargers do you provide?",
    a: "We provide a comprehensive range of AC chargers (3.3kW, 7.4kW, 10kW, 11kW, 15kW, 22kW) and DC fast chargers (30kW, 60kW, 80kW, 120kW, 180kW, 240kW, 360kW, 760kW) suitable for residential, commercial, and highway use."
  },
  {
    q: "Do you provide complete EV station setup?",
    a: "Yes, we offer turnkey solutions covering site planning, electrical infrastructure, charger installation, grid integration, and commissioning."
  },
  {
    q: "Do you install transformers?",
    a: "Absolutely. We specialize in transformer supply and installation as part of our end-to-end electrical infrastructure services for charging stations."
  },
  {
    q: "What industries do you serve?",
    a: "We serve a wide variety of sectors including petrol pumps, hotels, malls, highways, fleet operators, and housing societies."
  },
  {
    q: "Do you provide maintenance services?",
    a: "Yes, we provide Annual Maintenance Contracts (AMC), preventive maintenance, and quick-response technical support for all our installations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-white py-24">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-stencil uppercase">Frequently Asked <span className="text-primary">Questions</span></h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIndex === i ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-secondary/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
