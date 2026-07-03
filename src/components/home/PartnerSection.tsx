"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Briefcase, Zap } from "lucide-react";

const CARDS = [
  {
    id: "location-partner",
    icon: MapPin,
    heading: "BECOME A LOCATION PARTNER",
    shortDesc: "Transform your property into a high-demand EV charging destination.",
    longDesc: "Partner with EV-ONN to install EV charging infrastructure at your location and generate additional revenue while supporting India's transition toward electric mobility.",
    benefits: [
      "Generate recurring income",
      "Increase customer footfall",
      "Future-ready infrastructure",
      "End-to-end EV-ONN support",
      "Installation and maintenance included"
    ],
    buttonText: "HOST A CHARGING STATION",
    href: "/business/location-partner"
  },
  {
    id: "franchisee",
    icon: Briefcase,
    heading: "BECOME A FRANCHISEE",
    shortDesc: "Build your own EV infrastructure business with EV-ONN's proven model.",
    longDesc: "Build your own EV infrastructure business with EV-ONN's technology, expertise, brand support, and proven business model in a fast-growing market.",
    benefits: [
      "High-growth sector opportunity",
      "Comprehensive technical support",
      "Marketing and branding support",
      "Powerful brand association",
      "Long-term growth potential"
    ],
    buttonText: "START YOUR FRANCHISE JOURNEY",
    href: "/business/franchisee"
  }
];

export default function PartnerSection() {
  return (
    <section className="relative overflow-hidden py-[72px] md:py-[56px] sm:py-[48px]">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F3F7F4 45%, #EEF7F1 100%)'
        }}
      />

      {/* Green Wave Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/green-wave.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.08
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-5">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block py-2 px-6 rounded-full text-sm font-semibold uppercase"
              style={{
                backgroundColor: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.25)',
                color: '#22C55E',
                letterSpacing: '2px'
              }}
            >
              GROW WITH US
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 
              className="font-serif leading-[1.1] text-[52px] lg:text-[52px] md:text-[42px] sm:text-[36px]"
              style={{
                fontWeight: 700,
                color: '#0F172A'
              }}
            >
              PARTNER WITH <span className="font-stencil italic whitespace-nowrap" style={{ color: '#166534' }}>EV-ONN</span>
            </h2>
          </motion.div>

          {/* Lightning Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <div style={{ width: '120px', height: '2px', backgroundColor: '#22C55E' }} />
            <Zap size={18} style={{ color: '#22C55E' }} />
            <div style={{ width: '120px', height: '2px', backgroundColor: '#22C55E' }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#475569'
            }}
          >
            Join India&apos;s EV Infrastructure Revolution and grow with one of the fastest-growing EV charging solution providers.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {CARDS.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  boxShadow: '0 8px 32px 0 rgba(34, 197, 94, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
                  y: -5,
                  background: 'rgba(255, 255, 255, 0.5)'
                }}
                className="rounded-[28px] md:rounded-[20px] p-7 md:p-5 transition-all duration-500 flex flex-col"
                style={{
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
                  maxWidth: '620px',
                  margin: '0 auto',
                  width: '100%'
                }}
              >
                {/* Icon */}
                <div 
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#ECFDF5',
                    borderRadius: '12px'
                  }}
                >
                  <IconComponent size={22} style={{ color: '#22C55E' }} />
                </div>

                {/* Heading */}
                <h3 
                  className="font-stencil mb-4 text-[30px] md:text-[30px] sm:text-[24px] uppercase"
                  style={{
                    fontWeight: 700,
                    color: '#0F172A',
                    lineHeight: 1.2
                  }}
                >
                  BECOME A <span style={{ color: '#166534' }}>
                    {card.id === 'location-partner' ? 'LOCATION PARTNER' : 'FRANCHISEE'}
                  </span>
                </h3>

                {/* Short Description (Bold) */}
                <p 
                  className="mb-3 text-[17px] md:text-[17px] sm:text-[15px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: '#0F172A'
                  }}
                >
                  {card.shortDesc}
                </p>

                {/* Long Description */}
                <p 
                  className="mb-4 text-[14px] md:text-[14px] sm:text-[13px]"
                  style={{
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: '#475569',
                    minHeight: 'auto'
                  }}
                >
                  {card.longDesc}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2.5 mb-5 flex-grow">
                  {card.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div 
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: '#ECFDF5',
                          borderRadius: '50%',
                          marginTop: '2px'
                        }}
                      >
                        <Check size={14} strokeWidth={3} style={{ color: '#22C55E' }} />
                      </div>
                      <span 
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#0F172A',
                          lineHeight: 1.5
                        }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link 
                  href={card.href}
                  className="group/btn flex items-center justify-between w-full transition-all duration-300"
                  style={{
                    height: '52px',
                    padding: '0 18px',
                    borderRadius: '999px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #22C55E'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#22C55E';
                    const span = e.currentTarget.querySelector('span');
                    const circle = e.currentTarget.querySelector('.arrow-circle');
                    if (span) span.style.color = '#FFFFFF';
                    if (circle) {
                      circle.style.backgroundColor = '#FFFFFF';
                      const arrow = circle.querySelector('svg');
                      if (arrow) arrow.style.color = '#22C55E';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    const span = e.currentTarget.querySelector('span');
                    const circle = e.currentTarget.querySelector('.arrow-circle');
                    if (span) span.style.color = '#22C55E';
                    if (circle) {
                      circle.style.backgroundColor = '#22C55E';
                      const arrow = circle.querySelector('svg');
                      if (arrow) arrow.style.color = '#FFFFFF';
                    }
                  }}
                >
                  <span 
                    className="uppercase font-bold transition-colors"
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.5px',
                      color: '#22C55E'
                    }}
                  >
                    {card.buttonText}
                  </span>
                  <div 
                    className="arrow-circle flex items-center justify-center transition-all"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#22C55E'
                    }}
                  >
                    <ArrowRight size={20} style={{ color: '#FFFFFF' }} />
                  </div>
                </Link>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
