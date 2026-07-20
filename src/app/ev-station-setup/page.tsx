"use client";
import Section from "../../components/common/Section";
import { motion } from "framer-motion";
import { Search, ClipboardList, Zap, Factory, Construction, ShieldCheck, HeartHandshake, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const steps = [
  { title: "Consultation", desc: "Expert guidance on market trends, regulations, and feasibility.", icon: Search },
  { title: "Site Survey", desc: "Physical assessment of location for optimal charger placement.", icon: ClipboardList },
  { title: "Power Analysis", desc: "Detailed load requirement and transformer capacity analysis.", icon: Zap },
  { title: "Transformer Setup", desc: "Installation of required electrical infrastructure and grid tie-ups.", icon: Factory },
  { title: "Installation", desc: "Professional deployment of AC/DC chargers by certified engineers.", icon: Construction },
  { title: "Commissioning", desc: "Rigorous testing and activation of the charging infrastructure.", icon: ShieldCheck },
  { title: "Maintenance", desc: "Post-setup support, regular health checks, and AMC services.", icon: HeartHandshake },
];

export default function EVStationSetup() {
  return (
    <div className="pt-20">
      <Section className="bg-primary text-white py-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-1/4"></div>
         <div className="section-container relative z-10">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-stencil uppercase mb-6">EV Station <br/> <span className="text-secondary italic underline decoration-secondary/30">Turnkey Setup</span></h1>
            <p className="max-w-2xl text-xl text-white/80 leading-relaxed mb-10">
               Looking to start an EV charging business? We provide complete end-to-end development — from planning and transformer setup to charger deployment.
            </p>
            <Link href="#steps" className="btn-primary !bg-secondary !text-white !px-10">
               View our Process
            </Link>
         </div>
      </Section>

      <section id="steps" className="py-24 bg-white relative overflow-hidden">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-50 -translate-x-1/2 hidden lg:block"></div>

        <div className="section-container">
           <div className="space-y-24 lg:space-y-32">
             {steps.map((step, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                   <div className="flex-1 w-full text-center lg:text-left space-y-4">
                      <span className="text-5xl sm:text-6xl font-stencil text-primary/10">0{i + 1}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold uppercase">{step.title}</h3>
                      <p className="text-secondary/60 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                         {step.desc}
                      </p>
                   </div>
                   
                   <div className="relative z-10">
                      <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl border-8 border-white">
                         <step.icon size={36} />
                      </div>
                   </div>

                   <div className="flex-1 hidden lg:block"></div>
                </div>
             ))}
           </div>
        </div>
      </section>

      <Section className="bg-gray-50 py-24">
         <div className="section-container text-center max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-stencil uppercase">Start Your Journey Today</h2>
            <p className="text-xl text-secondary/60">
               Request a free site survey and feasibility report for your location. Our team will contact you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
               <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 !px-12">
                  Request Free Site Survey
                  <ArrowRight size={20} />
               </Link>
               <a 
                  href="/documents/ev-onn-company-profile.pdf" 
                  download="EV-ONN-Company-Profile.pdf"
                  className="btn-outline flex items-center justify-center gap-2 !px-12 bg-white"
               >
                  <Download size={20} />
                  Download Brochure
               </a>
            </div>
         </div>
      </Section>
    </div>
  );
}
