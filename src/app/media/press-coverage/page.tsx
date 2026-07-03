"use client";
import Image from "next/image";
import Link from "next/link";
import Section from "../../../components/common/Section";
import { Newspaper, ArrowUpRight, ImageIcon } from "lucide-react";

const pressClippings = [
  {
    id: 1,
    src: "/images/press/ev-sales-growth.jpg",
    headline: "जुलाई में ईवी की बिक्री 55.2 प्रतिशत बढ़ी",
    source: "National Daily",
    topic: "EV Sales Growth",
  },
  {
    id: 2,
    src: "/images/press/fast-charger-target.jpg",
    headline: "2030 तक 10 लाख ईवी फास्ट चार्जर की जरूरत होगी",
    source: "News Agency",
    topic: "Fast Charger Targets",
  },
  {
    id: 3,
    src: "/images/press/electric-car-sales.jpg",
    headline: "पांच वर्षों में 50 गुणा बढ़ी इलेक्ट्रिक कारों की बिक्री",
    source: "Jagran",
    topic: "Electric Car Sales Surge",
  },
  {
    id: 4,
    src: "/images/press/ev-tourism.jpg",
    headline: "पर्यटन स्थलों पर चलाए जाएंगे सिर्फ इलेक्ट्रिक वाहन",
    source: "Jagran",
    topic: "EV-Only Tourism Sites",
  },
  {
    id: 5,
    src: "/images/press/charging-stations.jpg",
    headline: "ई-चार्जिंग स्टेशन का जाल बिछाएगी सरकार",
    source: "National Daily",
    topic: "Govt Charging Network",
  },
  {
    id: 6,
    src: "/images/press/sustainable-transportation.jpg",
    headline: "Electric vehicles are the future of sustainable transportation",
    source: "iNext",
    topic: "Sustainable Transportation",
  },
  {
    id: 7,
    src: "/images/press/ev-onn-charging-solutions.jpg",
    headline: "EV - Charging Station देश का भविष्य है",
    source: "EV-ONN",
    topic: "EV Charging Solutions & Franchises",
  },
  {
    id: 8,
    src: "/images/press/press-ev-promotion.jpg",
    headline: "ई-वाहनों को बढ़ावा देने की तैयारी, बड़े दफ्तरों के लिए विशेष बसें",
    source: "Jagran",
    topic: "EV Promotion Plan",
  },
  {
    id: 9,
    src: "/images/press/press-ev-fleet-subsidy.jpg",
    headline: "ईवी में सब्सिडी चाहिए तो वाहनों की फ्लीट जरूरी",
    source: "Dainik Jagran",
    topic: "EV Subsidy Guidelines",
  },
  {
    id: 10,
    src: "/images/press/press-up-ev-sales.jpg",
    headline: "उत्तर प्रदेश में हो रही है सबसे ज्यादा ईवी की बिक्री",
    source: "Jagran",
    topic: "UP Leading EV Sales",
  },
  {
    id: 11,
    src: "/images/press/press-reliable-ev.jpg",
    headline: "भरोसेमंद बनती ईवी - स्मार्ट मोबिलिटी",
    source: "National Media",
    topic: "EV Smart Mobility Insights",
  },
  {
    id: 12,
    src: "/images/press/press-municipal-ev-charging.jpg",
    headline: "नगर पालिकाओं में बनाए जाएंगे गौरव पथ, शहरी सुविधा केंद्र व ईवी चार्जिंग स्टेशन",
    source: "Jagran",
    topic: "Municipal EV Infrastructure",
  },
  {
    id: 13,
    src: "/images/press/press-ev-bus-stations.jpg",
    headline: "ईवी बसों के लिए हर 25 किमी पर चार्जिंग स्टेशन बनेंगे",
    source: "Jagran",
    topic: "Highway EV Bus Charging Networks",
  },
  {
    id: 14,
    src: "/images/press/press-entrepreneur-loans.jpg",
    headline: "बैंक को बताना होगा, युवा उद्यमी को लोन क्यों नहीं दिया?",
    source: "Jagran",
    topic: "Young Entrepreneur Loan Policies",
  },
  {
    id: 15,
    src: "/images/press/press-charging-station-profit.jpg",
    headline: "ईवी चार्जिंग स्टेशन लगाना है फायदे का सौदा",
    source: "iNext",
    topic: "EV Charging Business Profitability",
  },
];

const newsArticles = [
  {
    id: 1,
    publisher: "Economic Times",
    title: "EV-ONN Secures Series-A Funding to Expand Highway EV Infrastructure",
    date: "May 12, 2026",
    excerpt: "EV-ONN announced a fresh round of funding aimed at deploying 500+ ultra-fast DC charging hubs across major national highways over the next 18 months.",
    category: "Funding",
    linkText: "Read Article"
  },
  {
    id: 2,
    publisher: "AutoCar Professional",
    title: "EV-ONN Launches Indigenous High-Voltage Distribution Panels",
    date: "April 28, 2026",
    excerpt: "Strengthening the 'Make in India' initiative, EV-ONN launches a state-of-the-art range of integrated HV distribution panels specifically designed for multi-point fast chargers.",
    category: "Product Launch",
    linkText: "Read Coverage"
  },
  {
    id: 3,
    publisher: "CleanTechnica India",
    title: "How EV-ONN is Resolving Grid Overloads at Corporate Park Charging Stations",
    date: "March 15, 2026",
    excerpt: "Through smart load scheduling and integrated energy storage cabinets, EV-ONN showcases how commercial spaces can adopt EV infrastructure without costly grid upgrades.",
    category: "Innovation",
    linkText: "Read Feature"
  },
  {
    id: 4,
    publisher: "The Financial Express",
    title: "Corporate ESG Integration: EV-ONN Partners with 50+ Tech Parks",
    date: "February 04, 2026",
    excerpt: "EV-ONN enters a strategic partnership to set up charging stations and high-volume ventilation fans across commercial real estate portfolios, boosting tenant ESG metrics.",
    category: "Partnership",
    linkText: "Read Article"
  }
];

export default function PressCoveragePage() {

  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <Section className="bg-white py-16 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-70 pointer-events-none" />
        <div className="section-container text-center max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-2">
            <Newspaper size={16} /> Newsroom
          </span>
          <h1 className="text-4xl md:text-6xl font-stencil uppercase">
            Press & <span className="text-primary italic underline decoration-primary/20">Coverage</span>
          </h1>
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            Stay updated with EV-ONN&apos;s latest company announcements, product rollouts, funding details, and feature analyses across major media publications.
          </p>
        </div>
      </Section>

      {/* Main Spotlight */}
      <Section className="py-16">
        <div className="section-container">
          {/* Spotlight Story */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-lg flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Spotlight Story
                </span>
                <span className="text-xs text-secondary/40 font-mono">June 2026</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-stencil uppercase leading-tight text-secondary">
                Leading the Charge: EV-ONN Featured in <span className="text-primary italic">India&apos;s Tech Innovators</span>
              </h2>
              <p className="text-secondary/70 leading-relaxed text-base">
                An extensive profile on our co-founders detailing their journey from electrical grid engineers to building a full-stack EV infrastructure powerhouse. The article outlines how EV-ONN&apos;s custom step-down transformers and smart distribution gear have cut client deployment timelines by 35%.
              </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              <span className="font-bold text-sm text-secondary uppercase tracking-widest">Business Standard</span>
              <Link 
                href="/media/press-coverage/leading-the-charge" 
                className="text-primary hover:text-primary-dark font-bold text-sm flex items-center gap-1 group"
              >
                Read Full Story 
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Press Clippings Gallery */}
      <Section className="py-12">
        <div className="section-container space-y-8">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
            <ImageIcon size={22} className="text-primary" />
            <h3 className="text-2xl font-stencil uppercase">
              Press <span className="text-primary italic">Clippings</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressClippings.map((clip) => (
              <div
                key={clip.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Fixed-height frame — object-contain shows the full clipping */}
                <div className="relative w-full h-[520px] bg-gray-50 flex items-center justify-center p-3">
                  <Image
                    src={clip.src}
                    alt={clip.topic}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 border-t border-gray-100 space-y-1">
                  <span className="text-[11px] font-bold text-primary/70 uppercase tracking-wider">{clip.source}</span>
                  <p className="text-sm font-semibold text-secondary leading-snug">{clip.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
