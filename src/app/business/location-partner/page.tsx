"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Building2, MapPin, Zap, Phone, Mail, User, Store, MessageSquare, IndianRupee, Users, TrendingUp, Clock } from "lucide-react";
import Section from "../../../components/common/Section";
import React, { useState } from "react";
import Link from "next/link";

const IDEAL_LOCATIONS = [
  "Petrol Pumps", "Hotels & Resorts", "Restaurants & Cafes", 
  "Shopping Malls", "Highways", "Commercial Buildings", 
  "Warehouses", "Fleet Hubs", "Residential Societies", "Corporate Campuses"
];

const WHY_PARTNER_CARDS = [
  { 
    title: "Generate Recurring Income", 
    desc: "Earn consistently from every charging session. Turn your property into a revenue-generating asset.",
    icon: IndianRupee
  },
  { 
    title: "Increase Customer Footfall", 
    desc: "Attract EV owners who spend time at your location while their vehicles charge.",
    icon: Users
  },
  { 
    title: "Future-Ready Infrastructure", 
    desc: "Stay ahead with modern, sustainable charging facilities that add property value.",
    icon: Zap
  },
  { 
    title: "Zero Maintenance Hassle", 
    desc: "EV-ONN handles installation, maintenance, and technical support end-to-end.",
    icon: Clock
  }
];

const WHAT_WE_PROVIDE = [
  "Complete Site Feasibility Assessment",
  "Charger Supply & Installation",
  "Transformer & Electrical Infrastructure",
  "Civil Works & Site Preparation",
  "Commissioning & Testing",
  "Branding & Signage",
  "24/7 Technical Support",
  "Annual Maintenance Contracts"
];

const PROCESS_STEPS = [
  { step: 1, title: "Submit Inquiry", desc: "Share your property details with our team via the form below." },
  { step: 2, title: "Site Assessment", desc: "Our engineers visit to evaluate electrical capacity and space." },
  { step: 3, title: "Technical Proposal", desc: "We design the optimal charging layout and power infrastructure." },
  { step: 4, title: "Agreement Signing", desc: "Review commercial terms and sign the partnership agreement." },
  { step: 5, title: "Installation", desc: "Complete civil, electrical setup, and charger commissioning." },
  { step: 6, title: "Go Live", desc: "Launch your EV charging station with ongoing 24/7 support." }
];

export default function LocationPartnerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    city: '',
    propertyType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          requirementType: 'Location Partner Inquiry',
          message: `Business/Property Name: ${formData.businessName}
City: ${formData.city}
Property Type: ${formData.propertyType}

Available Space & Message:
${formData.message}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("✓ Your inquiry has been submitted successfully! Our partnerships team will contact you shortly.");
        setFormData({
          name: '',
          phone: '',
          email: '',
          businessName: '',
          city: '',
          propertyType: '',
          message: ''
        });
      } else {
        console.error('Error:', data);
        alert("✗ Failed to submit inquiry. Please try again or call us directly.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("✗ Failed to submit inquiry. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="section-container text-center max-w-4xl mx-auto space-y-6">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Location Partner</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-stencil uppercase leading-tight">
            Turn Your Property Into A <span className="text-primary italic underline decoration-primary/20">Profitable</span> EV Charging Destination
          </h1>
          <p className="text-xl text-secondary/60 leading-relaxed">
            Own a commercial property, petrol pump, hotel, restaurant, mall, highway location, warehouse, or residential society? Partner with EV-ONN and unlock the potential of India's growing EV market.
          </p>
        </div>
      </Section>

      {/* Why Become A Location Partner */}
      <Section className="bg-white py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-stencil uppercase mb-6">
              Why Become A <span className="text-primary italic">Location Partner?</span>
            </h2>
            <p className="text-lg text-secondary/60 leading-relaxed">
              As electric vehicle adoption accelerates across India, the demand for reliable charging infrastructure continues to grow. By becoming an EV-ONN Location Partner, you can generate additional revenue, attract new customers, and future-proof your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_PARTNER_CARDS.map((card, i) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-50 border border-gray-100 p-8 rounded-3xl space-y-4 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold uppercase">{card.title}</h3>
                  <p className="text-secondary/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Ideal Locations & What We Provide */}
      <Section className="bg-gray-50 py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Ideal Locations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={28} />
                </div>
                <h3 className="text-3xl font-stencil uppercase">Ideal Locations</h3>
              </div>
              <ul className="grid grid-cols-2 gap-4">
                {IDEAL_LOCATIONS.map((loc, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary/80">
                    <CheckCircle className="text-primary flex-shrink-0" size={18} />
                    <span className="font-medium">{loc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What We Provide */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="text-primary" size={28} />
                </div>
                <h3 className="text-3xl font-stencil uppercase">What EV-ONN Provides</h3>
              </div>
              <ul className="space-y-4">
                {WHAT_WE_PROVIDE.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-secondary/80">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* Partnership Process */}
      <Section className="bg-white py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-stencil uppercase">
              Partnership <span className="text-primary italic">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-8 rounded-3xl relative hover:shadow-lg transition-all group"
              >
                <div className="text-7xl font-stencil text-gray-100 absolute top-4 right-6 pointer-events-none group-hover:text-primary/10 transition-colors">
                  0{step.step}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-4 text-lg">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3 uppercase">{step.title}</h4>
                  <p className="text-secondary/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Image Section */}
      <Section className="py-0">
        <div className="section-container">
          <img 
            src="/images/ev-onn-banner.webp" 
            alt="EV-ONN Charging Station with Cafe" 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section className="bg-gray-50 py-24" id="inquiry">
        <div className="section-container max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-stencil uppercase mb-4">Request Site Assessment</h2>
              <p className="text-secondary/60">Fill out the form below and our partnerships team will reach out to evaluate your property.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors" 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Business/Property Name *</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <input 
                      required 
                      type="text" 
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors" 
                      placeholder="ABC Hotel" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">City *</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <input 
                      required 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors" 
                      placeholder="Lucknow" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Property Type *</label>
                  <div className="relative">
                    <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <select 
                      required 
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" disabled>Select Property Type</option>
                      {IDEAL_LOCATIONS.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary ml-1">Available Space & Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-secondary/40" size={18} />
                  <textarea 
                    required 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors resize-none" 
                    placeholder="E.g., We have space for 4 vehicles..."
                  ></textarea>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-5 flex items-center justify-center gap-3 text-base">
                {isSubmitting ? "Submitting..." : (<>Request Site Assessment <ArrowRight size={18} /></>)}
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="bg-white py-16">
        <div className="section-container">
          <div className="bg-primary rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-stencil uppercase mb-4">Ready To Get Started?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">Join hundreds of property owners across India who are earning from EV charging infrastructure.</p>
            <Link href="#inquiry" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary inline-flex items-center gap-2">
              Submit Inquiry Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
