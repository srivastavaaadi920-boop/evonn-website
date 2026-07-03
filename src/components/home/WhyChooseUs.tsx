"use client";
import Section from "../common/Section";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShieldCheck, Zap, Award, Headphones } from "lucide-react";
import Image from "next/image";

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function WhyChooseUs() {
  const benefits = [
    { 
      title: "Certified Installation", 
      icon: ShieldCheck, 
      desc: "Safety-first approach with certified engineers, quality standards, and professional deployment practices." 
    },
    { 
      title: "Fast Deployment", 
      icon: Zap, 
      desc: "Turnkey EV infrastructure solutions delivered efficiently with minimal downtime and maximum reliability." 
    },
    { 
      title: "Technical Expertise", 
      icon: Award, 
      desc: "Industry experience and engineering excellence to design, implement, and support advanced charging ecosystems." 
    },
    { 
      title: "24/7 Support", 
      icon: Headphones, 
      desc: "Dedicated assistance, maintenance support, and rapid response whenever your business needs us." 
    },
  ];

  return (
    <Section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F3F7F4 40%, #EEF7F1 100%)'
        }}
      />
      
      {/* Wave Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: 'url(/images/green-wave.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          mixBlendMode: 'multiply'
        }}
      />

      {/* EV Charging Station Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 z-0 opacity-20 pointer-events-none">
        <Image 
          src="/images/ev-onn-station.jpg" 
          alt="EV Charging Station"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side - Stats and Heading */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[#22C55E] font-bold uppercase tracking-widest text-sm">Our Edge</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#1E293B]">
                Why Businesses <br/> Trust <span className="text-[#22C55E] italic">EV-ONN</span>
              </h2>
              <p className="text-[#475569] leading-relaxed text-base max-w-xl">
                We combine advanced technology, expert engineering, and reliable support to deliver future-ready EV infrastructure solutions that businesses can depend on.
              </p>
              <p className="text-[#475569] leading-relaxed text-base max-w-xl">
                From charging station deployment to complete electrical infrastructure integration, EV-ONN provides end-to-end solutions designed for performance, scalability, and long-term success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-8">
              <div className="space-y-2">
                <p className="text-5xl font-bold text-[#22C55E]"><Counter value={500} suffix="+" /></p>
                <p className="text-[#64748B] uppercase tracking-widest text-xs font-semibold">Charging Sessions Supported</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-[#22C55E]"><Counter value={150} suffix="+" /></p>
                <p className="text-[#64748B] uppercase tracking-widest text-xs font-semibold">Projects Delivered</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-[#22C55E]"><Counter value={25} suffix="+" /></p>
                <p className="text-[#64748B] uppercase tracking-widest text-xs font-semibold">Cities Served</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-[#22C55E]"><Counter value={5} suffix="+" /></p>
                <p className="text-[#64748B] uppercase tracking-widest text-xs font-semibold">Years Combined Experience</p>
              </div>
            </div>
          </div>

          {/* Right Side - Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl space-y-4"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center">
                  <benefit.icon className="text-[#22C55E]" size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#1E293B]">{benefit.title}</h4>
                <p className="text-[#475569] text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
