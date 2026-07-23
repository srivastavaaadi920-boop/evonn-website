import Section from "../../components/common/Section";
import ServicesBrief from "../../components/home/ServicesBrief";
import ContactPreview from "../../components/home/ContactPreview";
import { PlugZap, Zap, Factory, Wind, Settings, Info, ArrowRight, BatteryCharging, Gauge, Box, UtensilsCrossed, CarFront, Sun } from "lucide-react";
import Link from "next/link";

const detailedServices = [
  {
    id: "chargers",
    title: "EV Chargers (AC & DC)",
    desc: "We provide state-of-the-art charging hardware for every need. Our range includes residential home chargers to high-capacity DC fast chargers for highway hubs.",
    features: ["AC Chargers: 3.3kW, 7.4kW, 10kW, 11kW, 15kW, 22kW", "DC Fast Chargers: 30kW, 60kW, 80kW, 120kW, 180kW, 240kW, 360kW, 760kW", "Smart Connectivity (Wi-Fi/4G)", "OCPP Compliant Cloud Management"],
    icon: PlugZap,
    image: "/images/ev-onn-chargers.webp"
  },
  {
    id: "infrastructure",
    title: "Transformer & Power Infra",
    desc: "Reliable EV charging starts with a robust power grid. We handle the complete electrical infrastructure required to power your stations.",
    features: ["Transformer Supply & Installation", "Electrical Panel Design", "HT/LT Cabling", "Grid Connection Liasoning"],
    icon: Factory,
    image: "/images/ev-onn-infrastructure.webp"
  },
  {
    id: "hvls",
    title: "HVLS Industrial Fans",
    desc: "High-Volume, Low-Speed fans for massive areas. Perfect for cooling warehouses, factories, and commercial spaces with minimal energy consumption.",
    features: ["Up to 24ft Diameter", "PMSM Motor Technology", "Low Noise Operation", "Exceptional Air Coverage"],
    icon: Wind,
    image: "/images/ev-onn-hvls-fan.webp"
  },
  {
    id: "ups",
    title: "UPS Systems",
    desc: "Uninterruptible Power Supply systems that ensure your EV charging stations remain operational during power outages, voltage dips, and grid instability.",
    features: ["Online Double Conversion", "Seamless Switchover", "Battery Backup (1–4 hrs)", "Remote Monitoring & Alerts"],
    icon: BatteryCharging,
    image: "/images/ev-onn-ups.webp"
  },
  {
    id: "voltage-stabilizer",
    title: "Voltage Stabilizers",
    desc: "Industrial-grade voltage stabilizers that protect your charging infrastructure from voltage fluctuations, ensuring consistent and safe power delivery.",
    features: ["Wide Input Range (300V–480V)", "Automatic Voltage Regulation", "Overload & Short Circuit Protection", "Digital Display & Diagnostics"],
    icon: Gauge,
    image: "/images/ev-onn-voltage-stabilizer.webp"
  },
  {
    id: "compact-substation",
    title: "Compact Substations",
    desc: "Pre-fabricated compact substations designed for rapid deployment at EV charging sites. Plug-and-play power infrastructure that minimizes setup time.",
    features: ["Modular & Scalable Design", "IP54 Weatherproof Enclosure", "HT/LT Integration Ready", "Minimal Civil Work Required"],
    icon: Box,
    image: "/images/ev-onn-substation.webp"
  },
  {
    id: "food-court",
    title: "Food Court Amenities",
    desc: "Enhance the customer experience at your EV station with fully equipped food court facilities. Keep customers engaged and comfortable while their vehicles charge.",
    features: ["Modular Kitchen Setup", "Seating & Dining Area", "Vending Machine Integration", "Hygiene & Safety Compliant"],
    icon: UtensilsCrossed,
    image: "/images/ev-onn-food-court.webp"
  },
  {
    id: "car-wash",
    title: "Car Washing Area",
    desc: "Dedicated car washing bays integrated into EV charging stations. Offer a value-added service that increases dwell time and customer satisfaction.",
    features: ["Automated & Manual Wash Bays", "Water Recycling Systems", "Eco-Friendly Cleaning Solutions", "Revenue Generation Model"],
    icon: CarFront,
    image: "/images/ev-onn-car-wash.webp"
  },
  {
    id: "solar-station",
    title: "Solar Powered EV Station",
    desc: "Sustainable EV charging powered by solar energy. Reduce operational costs and carbon footprint with integrated solar panel infrastructure for your stations.",
    features: ["Rooftop & Ground-Mounted Panels", "Net Metering Support", "Battery Storage Integration", "Up to 40% Energy Cost Savings"],
    icon: Sun,
    image: "/images/ev-onn-solar.webp"
  },
  {
    id: "maintenance",
    title: "Maintenance & AMC",
    desc: "Comprehensive Annual Maintenance Contracts and technical support to keep your EV charging infrastructure running at peak performance with minimal downtime.",
    features: ["Preventive Maintenance Schedules", "24/7 Technical Support", "Spare Parts Inventory", "Performance Analytics & Reports"],
    icon: Settings,
    image: "/images/ev-onn-maintenance.webp"
  },
  {
    id: "consultation",
    title: "Consultation & Planning",
    desc: "Expert business consultation for EV station setup — from site assessment and ROI planning to regulatory compliance and go-to-market strategy.",
    features: ["Site Feasibility Analysis", "ROI & Business Modeling", "Regulatory & Subsidy Guidance", "Technology Selection Advisory"],
    icon: Info,
    image: "/images/ev-onn-consultation.webp"
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="section-container text-center max-w-4xl mx-auto space-y-6">
           <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Expertise</span>
           <h1 className="text-3xl sm:text-5xl md:text-7xl font-stencil uppercase">Complete <span className="text-primary italic underline decoration-primary/20">Solutions</span></h1>
           <p className="text-lg sm:text-xl text-secondary/60">From hardware supply to turnkey infrastructure development — we cover the entire spectrum.</p>
        </div>
      </Section>

      <ServicesBrief />

      <div className="bg-white">
        {detailedServices.map((service, i) => (
          <Section key={service.id} id={service.id} className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="section-container">
              <div className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-stencil uppercase leading-tight">{service.title}</h2>
                  <p className="text-lg text-secondary/60 leading-relaxed">{service.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-secondary/80 font-bold">
                        <Zap size={16} className="text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
                    Inquire About {service.title}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="flex-1">
                  <img src={service.image} alt={service.title} className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 h-[280px] sm:h-[380px] lg:h-[500px] w-full object-cover" />
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>

      <ContactPreview />
    </div>
  );
}
