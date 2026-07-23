"use client";
import Image from "next/image";
import Section from "../../../components/common/Section";
import { Award, CheckCircle2 } from "lucide-react";


export default function CertificationsPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <Section className="bg-white py-16 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-70 pointer-events-none" />
        <div className="section-container text-center max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-2">
            <Award size={16} /> Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-stencil uppercase">
            Certifications & <span className="text-primary italic underline decoration-primary/20">Approvals</span>
          </h1>
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            Our hardware and systems undergo rigorous validation, complying with top national and international grid integration, safety, and manufacturing quality standards.
          </p>
        </div>
      </Section>


      {/* Certificate Images Section */}
      <Section className="py-16 bg-white border-t border-gray-100">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">
              Official Documents
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-stencil uppercase mt-4">
              Certificate <span className="text-primary italic underline decoration-primary/20">Gallery</span>
            </h2>
            <p className="text-lg text-secondary/60 mt-4">
              Official certification documents validating EV-ONN&apos;s quality, safety, and compliance standards.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative aspect-[4/3] w-full">
              <Image
                src="/images/certificate-1.webp"
                alt="EV-ONN Certificate 1"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative aspect-[4/3] w-full">
              <Image
                src="/images/certificate-2.webp"
                alt="EV-ONN Certificate 2"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative aspect-[4/3] w-full">
              <Image
                src="/images/certificate-3.webp"
                alt="EV-ONN Certificate 3"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Quality Standards Framework Summary */}
      <Section className="py-8 pb-24 bg-white border-t border-gray-100">
        <div className="section-container max-w-4xl mx-auto space-y-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-stencil uppercase">Our Quality <span className="text-primary italic">Framework</span></h3>
          <p className="text-secondary/70 leading-relaxed">
            Every charger manufactured at our facilities undergoes a 42-point quality check including thermal imaging, electrical load cycle stress tests, insulation resistance checks, and firmware validation. We ensure that our systems are fail-proof under extreme Indian grid and environmental conditions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {[
              "Grid Compatibility (CEA)",
              "Thermal runaway protection",
              "IP54 & IK08 Ingress Ratings"
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
                <span className="font-semibold text-sm text-secondary/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
