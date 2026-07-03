"use client";
import { Zap, PlugZap, Factory, Wind, Settings, Info, BatteryCharging, Gauge, Box, UtensilsCrossed, CarFront, Sun } from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import Section from "../common/Section";

const briefServices = [
  {
    title: "EV Chargers",
    description: "Wide range of AC and DC fast chargers for residential and commercial use cases.",
    icon: PlugZap,
    href: "/services#chargers"
  },
  {
    title: "Station Setup",
    description: "End-to-end turnkey solutions for setting up your own EV charging station business.",
    icon: Zap,
    href: "/ev-station-setup"
  },
  {
    title: "Infrastructure",
    description: "Transformer supply, installation, and complete electrical grid integration services.",
    icon: Factory,
    href: "/services#infrastructure"
  },
  {
    title: "HVLS Fans",
    description: "High-volume, low-speed fans for industrial cooling and ventilation solutions.",
    icon: Wind,
    href: "/services#hvls"
  },
  {
    title: "UPS",
    description: "Uninterruptible power supply systems ensuring seamless charging during grid outages.",
    icon: BatteryCharging,
    href: "/services#ups"
  },
  {
    title: "Voltage Stabilizer",
    description: "Industrial-grade voltage stabilizers for consistent and safe power delivery to EV stations.",
    icon: Gauge,
    href: "/services#voltage-stabilizer"
  },
  {
    title: "Compact Substation",
    description: "Pre-fabricated compact substations for rapid deployment and plug-and-play power infrastructure.",
    icon: Box,
    href: "/services#compact-substation"
  },
  {
    title: "Food Court",
    description: "On-site food court facilities to keep customers engaged while their EVs charge.",
    icon: UtensilsCrossed,
    href: "/services#food-court"
  },
  {
    title: "Car Washing Area",
    description: "Dedicated car washing bays integrated into EV charging stations for added convenience.",
    icon: CarFront,
    href: "/services#car-wash"
  },
  {
    title: "Solar Powered EV Station",
    description: "Green energy-powered EV charging stations with integrated solar panel infrastructure.",
    icon: Sun,
    href: "/services#solar-station"
  },
  {
    title: "Maintenance",
    description: "Comprehensive AMC services, technical support, and periodic maintenance.",
    icon: Settings,
    href: "/services#maintenance"
  },
  {
    title: "Consultation",
    description: "Expert business consultation, ROI planning, and site assessment for EV projects.",
    icon: Info,
    href: "/services#consultation"
  }
];

export default function ServicesBrief() {
  return (
    <Section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl mb-6 uppercase">Our Core <span className="text-primary underline decoration-primary/20">Services</span></h2>
          <p className="text-lg text-secondary/70 italic font-medium">
            "Driving India's EV Revolution with intelligent and reliable infrastructure"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {briefServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </Section>
  );
}
