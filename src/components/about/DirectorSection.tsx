"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Quote, ArrowRight } from "lucide-react";
import Section from "../common/Section";

const directors = [
  {
    name: "Savita Srivastava",
    role: "Founding Director",
    image: "/images/team/savita.jpg",
    quote: "Foundation for a sustainable future starts with a clear vision and unwavering commitment.",
    message: [
      "Our journey began with a simple but powerful idea: to transform how India moves. As the founding director, I have seen EV-ONN grow from a vision into a leader in green infrastructure, driven by our passion for environmental stewardship and technological excellence.",
      "We are building more than just charging stations; we are building trust and reliability in the electric vehicle ecosystem, ensuring that the transition to clean energy is seamless for everyone."
    ],
    highlights: ["Corporate Visionary", "Sustainability Expert", "Project Governance", "Growth Architect"]
  },
  {
    name: "Kamal Kant Srivastava",
    role: "Managing Director (MD)",
    image: "/images/team/kamal.jpg",
    quote: "The future of mobility begins with reliable infrastructure.",
    message: [
      "At EV-ONN Charging Solutions, our vision is to contribute towards India’s growing electric mobility ecosystem by delivering reliable, future-ready, and technology-driven EV charging infrastructure.",
      "We believe that the future belongs to sustainable energy and intelligent mobility. Our commitment is to provide businesses, industries, and communities with dependable EV charging solutions, complete station setup, transformers, and infrastructure systems that enable long-term growth."
    ],
    highlights: ["Industry-Focused Vision", "Sustainable Growth", "Customer leadership", "Infra Innovation"]
  },
  {
    name: "Aadi Srivastava",
    role: "Technical Support Executive",
    image: "/images/team/aadi.jpg",
    quote: "Empowering the next generation of smart energy through innovation.",
    message: [
      "As Technical Support Executive, my focus is on the convergence of technology and infrastructure. We are not just building charging stations; we are building a digital energy network that is responsive, efficient, and user-friendly for every Indian citizen.",
      "By integrating IoT and smart-grid technologies, we are ensuring that India's EV infrastructure is not just functional, but intelligent and future-proof."
    ],
    highlights: ["Tech Integration", "Operational Excellence", "Digital Transformation", "Smart City Strategy"]
  },
  {
    name: "Aditi Srivastava",
    role: "Legal Head",
    image: "/images/team/aditi.jpg",
    quote: "Ethics and compliance are the backbone of sustainable corporate growth.",
    message: [
      "Navigating the legal framework of the renewable energy sector requires precision and foresight. My goal is to ensure that EV-ONN operates at the highest standards of transparency and compliance.",
      "We are dedicated to building a trustworthy and sustainable corporate foundation that adheres to the best legal practices, protecting our stakeholders and the environment alike."
    ],
    highlights: ["Compliance Strategy", "Risk Management", "Corporate Governance", "Legal Innovation"]
  }
];

const DirectorSection = () => {
  return (
    <Section className="bg-[#0f110f] text-white py-24 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">
              Leadership That Powers Innovation
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-stencil uppercase leading-tight"
          >
            Driven by vision, <span className="text-primary italic">innovation</span>, and commitment to sustainable infrastructure.
          </motion.h2>
        </div>

        <div className="space-y-40">
          {directors.map((person, idx) => (
            <div 
              key={idx} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start`}
            >
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`lg:col-span-5 relative group ${idx % 2 === 1 ? 'lg:order-last' : ''}`}
              >
                {/* Premium Image Frame */}
                <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f110f] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity duration-700" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className={`absolute -bottom-8 ${idx % 2 === 1 ? '-left-8 border-l-2' : '-right-8 border-r-2'} w-40 h-40 border-b-2 border-primary/30 rounded-b-[3rem] -z-10`} />
                <div className={`absolute -top-8 ${idx % 2 === 1 ? '-right-8 border-r-2' : '-left-8 border-l-2'} w-40 h-40 border-t-2 border-white/10 rounded-t-[3rem] -z-10`} />
                

              </motion.div>

              {/* Content Column */}
              <div className={`lg:col-span-7 space-y-12 ${idx % 2 === 1 ? 'lg:pr-10' : ''}`}>
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-xs font-bold uppercase tracking-widest">Leadership Insight</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold">{person.name}</h3>
                    <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{person.role}</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6 text-gray-300 leading-relaxed text-lg font-light"
                  >
                    <p className="text-white font-medium text-xl leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                      “{person.quote}”
                    </p>
                    {person.message.map((msg, pIdx) => (
                      <p key={pIdx}>{msg}</p>
                    ))}
                  </motion.div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {person.highlights.map((item, hIdx) => (
                    <motion.div 
                      key={hIdx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: hIdx * 0.1 }}
                      className="flex items-center gap-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wider text-gray-200">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action (Only for last person maybe? Or all? User wanted "same style") */}
                {idx === directors.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <a 
                      href="/contact"
                      className="inline-flex items-center gap-4 bg-primary hover:bg-white text-[#111] font-bold py-5 px-12 rounded-full transition-all duration-500 group shadow-[0_10px_30px_rgba(var(--primary-rgb),0.3)] hover:shadow-white/20"
                    >
                      <span className="uppercase tracking-widest text-sm">Consult With Us</span>
                      <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#111] transition-all">
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default DirectorSection;
