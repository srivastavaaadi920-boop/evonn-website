"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck, Map, Users, Lightbulb, Building2, Phone, Mail, Briefcase, MessageSquare, IndianRupee, Award, Target } from "lucide-react";
import Section from "../../../components/common/Section";
import React, { useState } from "react";
import Link from "next/link";

const BENEFITS = [
  "Established Brand Recognition",
  "Complete Technical Assistance",
  "Marketing & Sales Support",
  "Business Development Guidance",
  "Comprehensive Training Programs",
  "Installation & Setup Support",
  "Ongoing Operational Assistance"
];

const SUPPORT_OFFERED = [
  { title: "Business Setup Assistance", desc: "End-to-end guidance for establishing your franchise", icon: Building2 },
  { title: "Site Selection Guidance", desc: "Expert advice on optimal location selection", icon: Map },
  { title: "Technical Training", desc: "Comprehensive training on products and services", icon: Lightbulb },
  { title: "Marketing Support", desc: "Branding, marketing materials, and campaign support", icon: TrendingUp },
  { title: "Operational Assistance", desc: "Day-to-day operational guidance and best practices", icon: ShieldCheck },
  { title: "Expansion Planning", desc: "Strategic planning for growth and scalability", icon: Users }
];

const JOURNEY_STEPS = [
  { step: 1, title: "Application", desc: "Submit your franchise inquiry through our online form." },
  { step: 2, title: "Initial Discussion", desc: "Connect with our franchise development team for preliminary assessment." },
  { step: 3, title: "Business Evaluation", desc: "Comprehensive financial and territorial feasibility analysis." },
  { step: 4, title: "Approval", desc: "Formal approval of your franchise application by our management." },
  { step: 5, title: "Agreement", desc: "Review and sign the franchise partnership agreement." },
  { step: 6, title: "Training", desc: "Attend comprehensive technical and operational training programs." },
  { step: 7, title: "Launch", desc: "Inaugurate your EV-ONN franchise with full marketing support." }
];

const MODELS = [
  { name: "City Partner", desc: "Manage EV-ONN operations within a specific city or municipality limits.", icon: Building2 },
  { name: "District Partner", desc: "Exclusive rights to develop EV infrastructure across an entire district.", icon: Map },
  { name: "State Partner", desc: "Master franchise rights for large-scale state-wide expansion.", icon: Target }
];

export default function FranchiseePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    city: '',
    territoryModel: '',
    investmentRange: '',
    experience: '',
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
          requirementType: 'Franchisee Partnership Application',
          message: `Company/Firm Name: ${formData.companyName}
City/Region: ${formData.city}
Preferred Territory Model: ${formData.territoryModel}
Investment Range: ${formData.investmentRange}
Industry Experience: ${formData.experience}

Additional Message:
${formData.message}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("✓ Your application has been received successfully! Our franchise team will contact you shortly.");
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          city: '',
          territoryModel: '',
          investmentRange: '',
          experience: '',
          message: ''
        });
      } else {
        console.error('Error:', data);
        alert("✗ Failed to submit application. Please try again or call us directly.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("✗ Failed to submit application. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="section-container text-center max-w-4xl mx-auto space-y-6">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Franchise Partner</span>
          <h1 className="text-5xl md:text-7xl font-stencil uppercase leading-tight">
            Build The Future Of <span className="text-primary italic underline decoration-primary/20">Electric Mobility</span> With EV-ONN
          </h1>
          <p className="text-xl text-secondary/60 leading-relaxed">
            Join the EV revolution and establish a scalable, future-ready business with complete support from EV-ONN Charging Solutions.
          </p>
        </div>
      </Section>

      {/* Why EV-ONN Franchise */}
      <Section className="bg-white py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-stencil uppercase">
                Why Choose <span className="text-primary italic">EV-ONN Franchise?</span>
              </h2>
              <p className="text-lg text-secondary/60 leading-relaxed">
                The EV charging industry is one of the fastest-growing sectors in India. EV-ONN provides franchise partners with technical expertise, infrastructure support, branding, and operational guidance to build a successful business in the electric mobility ecosystem.
              </p>
              
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-6 uppercase flex items-center gap-2">
                  <Award className="text-primary" size={24} /> Franchise Benefits
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BENEFITS.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary/80">
                      <CheckCircle className="text-primary flex-shrink-0" size={18} />
                      <span className="text-sm font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Franchise Models */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-stencil uppercase">Partnership Models</h3>
              <div className="space-y-4">
                {MODELS.map((model, i) => {
                  const IconComponent = model.icon;
                  return (
                    <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-lg transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2 uppercase">{model.name}</h4>
                          <p className="text-secondary/60 text-sm leading-relaxed">{model.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Support We Offer */}
      <Section className="bg-gray-50 py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-stencil uppercase">
              Support We <span className="text-primary italic">Offer</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SUPPORT_OFFERED.map((support, i) => {
              const IconComponent = support.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="text-primary" size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 uppercase">{support.title}</h4>
                  <p className="text-secondary/60 text-sm leading-relaxed">{support.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Franchise Journey */}
      <Section className="bg-white py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-stencil uppercase">
              Franchise <span className="text-primary italic">Journey</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
            {JOURNEY_STEPS.slice(0, 4).map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center hover:shadow-lg transition-all group relative"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-secondary mb-2 uppercase">{step.title}</h4>
                <p className="text-xs text-secondary/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {JOURNEY_STEPS.slice(4).map((step, i) => (
              <motion.div 
                key={i+4}
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: (i+4) * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center hover:shadow-lg transition-all group relative"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-secondary mb-2 uppercase">{step.title}</h4>
                <p className="text-xs text-secondary/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Image Section */}
      <Section className="py-0">
        <div className="section-container">
          <img 
            src="/images/franchisee-banner.webp" 
            alt="BE AN EV-ONN FRANCHISEE - Power the future. Build your business with EV-ONN." 
            className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section className="bg-gray-50 py-24" id="inquiry">
        <div className="section-container max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-stencil uppercase mb-4">Apply For Franchise Partnership</h2>
              <p className="text-secondary/60">Take the first step towards owning a future-ready EV infrastructure business.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Full Name *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
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
                  <label className="text-sm font-bold text-secondary ml-1">Company / Firm Name *</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <input 
                      required 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors" 
                      placeholder="XYZ Enterprises" 
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
                  <label className="text-sm font-bold text-secondary ml-1">City / Region *</label>
                  <div className="relative">
                    <Map className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
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
                  <label className="text-sm font-bold text-secondary ml-1">Preferred Territory Model *</label>
                  <div className="relative">
                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <select 
                      required 
                      name="territoryModel"
                      value={formData.territoryModel}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" disabled>Select Model</option>
                      {MODELS.map((model) => <option key={model.name} value={model.name}>{model.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Investment Range *</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <select 
                      required 
                      name="investmentRange"
                      value={formData.investmentRange}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" disabled>Select Range</option>
                      <option value="10L - 25L">₹10 Lakhs - ₹25 Lakhs</option>
                      <option value="25L - 50L">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="50L - 1Cr">₹50 Lakhs - ₹1 Crore</option>
                      <option value="1Cr+">₹1 Crore +</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Industry Experience *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40" size={18} />
                    <input 
                      required 
                      type="text" 
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors" 
                      placeholder="E.g., 5 years in retail..." 
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary ml-1">Additional Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-secondary/40" size={18} />
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-secondary focus:outline-none focus:border-primary transition-colors resize-none" 
                    placeholder="Tell us about your background and why you want to partner with EV-ONN..."
                  ></textarea>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-5 flex items-center justify-center gap-3 text-base">
                {isSubmitting ? "Submitting..." : (<>Apply For Franchise Partnership <ArrowRight size={18} /></>)}
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="bg-white py-16">
        <div className="section-container">
          <div className="bg-primary rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-stencil uppercase mb-4">Ready To Join The EV Revolution?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">Partner with India's leading EV charging infrastructure provider and build a scalable business for the future.</p>
            <Link href="#inquiry" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary inline-flex items-center gap-2">
              Apply For Franchise <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
