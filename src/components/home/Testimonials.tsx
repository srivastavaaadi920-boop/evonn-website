"use client";
import { useState } from "react";
import Section from "../common/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, Fleet Logistics India",
    content: "EV-ONN provided a seamless DC charging setup for our entire fleet. Their technical expertise in transformer integration was key to our project success.",
    rating: 5
  },
  {
    name: "Anita Sharma",
    role: "Proprietor, Heritage Resorts",
    content: "The AC chargers installed by EV-ONN have greatly enhanced our guest experience. The project was delivered on time with perfect finishing.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Manager, Green Earth Warehousing",
    content: "Excellent service and high-quality HVLS fans. The cooling in our warehouse has improved dramatically. Highly recommended for industrial needs.",
    rating: 4
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <Section className="bg-white py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Client Feedback</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-stencil uppercase">What Industry <span className="text-primary">Leaders Say</span></h2>
          </div>

          <div className="relative w-full max-w-4xl px-10 sm:px-12">
            <Quote className="absolute -top-10 -left-4 text-primary/10 w-24 h-24 -z-10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#3D5438" className="text-primary" />
                  ))}
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed italic text-secondary/80">
                  "{testimonials[current].content}"
                </p>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
                  <p className="text-primary text-sm font-bold uppercase tracking-widest">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-gray-50 hover:bg-primary hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-gray-50 hover:bg-primary hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
