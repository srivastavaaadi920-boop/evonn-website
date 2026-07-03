import Section from "../../components/common/Section";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import TrustedBy from "../../components/home/TrustedBy";
import DirectorSection from "../../components/about/DirectorSection";
import { Target, Eye, ShieldCheck, Zap, Download } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section className="bg-gray-50 py-24 relative overflow-hidden">
         <div className="section-container text-center max-w-4xl mx-auto space-y-6">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-stencil uppercase">Driving India's <span className="text-primary italic underline decoration-primary/20">Mobility</span></h1>
            <p className="text-xl text-secondary/60 leading-relaxed italic">
               "EV-ONN Charging Solutions is more than just a provider — we are architects of India's sustainable energy future."
            </p>
            
            <div className="pt-8">
               <a 
                  href="/documents/ev-onn-company-profile.pdf" 
                  download="EV-ONN-Company-Profile.pdf"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
               >
                  <Download size={20} />
                  Download Brochure
               </a>
            </div>
         </div>
      </Section>

      <Section className="bg-white py-24">
         <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl font-stencil uppercase leading-tight">Expertise in Every <span className="text-primary italic">Detail</span></h2>
                  <p className="text-lg text-secondary/70 leading-relaxed">
                     At EV-ONN, we specialize in high-voltage infrastructure and smart charging ecosystems. With years of experience in electrical engineering and power distribution, we bridge the gap between traditional power systems and modern electric mobility.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                     <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                           <Target size={24} />
                        </div>
                        <h4 className="text-xl font-bold uppercase">Our Mission</h4>
                        <p className="text-secondary/60 text-sm">To deploy 10,000+ chargers across India by 2030, ensuring every EV owner has reliable access to power.</p>
                     </div>
                     <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                           <Eye size={24} />
                        </div>
                        <h4 className="text-xl font-bold uppercase">Our Vision</h4>
                        <p className="text-secondary/60 text-sm">To be the undisputed leader in end-to-end EV infrastructure, from smart grids to industrial cooling.</p>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <img 
                     src="/images/about-hero.jpg" 
                     className="rounded-3xl shadow-2xl" 
                     alt="EV Hub" 
                  />
                  <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                     <ShieldCheck className="text-primary mb-4" size={40} />
                     <p className="font-bold text-lg uppercase">Certified Partner</p>
                     <p className="text-xs text-secondary/40 font-bold tracking-widest">ISO 9001</p>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      <DirectorSection />
      <WhyChooseUs />
      <TrustedBy />

      <Section className="bg-white py-24">
         <div className="section-container text-center space-y-12">
            <h2 className="text-4xl font-stencil uppercase">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { t: "Reliability", d: "Uptime guarantee for all our charging assets." },
                  { t: "Innovation", d: "Smart charging technology with IoT integration." },
                  { t: "Sustainability", d: "Promoting carbon-neutral transportation." }
               ].map((v, i) => (
                  <div key={i} className="p-12 rounded-3xl bg-gray-50 border border-gray-100 space-y-4 hover:shadow-lg transition-all">
                     <Zap className="text-primary mx-auto" size={32} />
                     <h3 className="text-2xl font-bold uppercase">{v.t}</h3>
                     <p className="text-secondary/60">{v.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </Section>
    </div>
  );
}
