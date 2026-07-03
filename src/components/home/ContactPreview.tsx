"use client";
import Section from "../common/Section";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function ContactPreview() {
  return (
    <Section className="bg-primary text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-20 -mb-20 blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-stencil uppercase leading-tight">Ready to start your <br /><span className="text-secondary italic">EV Infrastructure</span> project?</h2>
            <p className="text-white/80 text-lg">Contact our experts today for a free site assessment and customized quotation.</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase font-bold tracking-widest opacity-60">Call Us</p>
                  <a href="tel:+919889249508" className="font-bold hover:text-secondary transition-colors">+91 98892 49508</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase font-bold tracking-widest opacity-60">Email Us</p>
                  <a href="mailto:evonnchargingsolutions@gmail.com" className="font-bold hover:text-secondary transition-colors text-sm break-all">evonnchargingsolutions@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/contact" className="bg-secondary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-black transition-all shadow-2xl flex items-center gap-3 group">
              Get Free Consultation
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/ev-station-setup" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full font-bold text-center hover:bg-white/20 transition-all">
              Request Site Survey
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
