"use client";
import Image from "next/image";
import Section from "../../../components/common/Section";
import { Image as ImageIcon } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "State-of-the-Art Charging Station",
    category: "Charging Stations",
    location: "Highway Plaza, Uttar Pradesh",
    date: "June 2026",
    description: "Advanced EV-ONN fast-charging setup illuminated at night, featuring multiple heavy-duty charging points and dynamic canopy lighting.",
    src: "/images/gallery-station-night.jpg",
  },
  {
    id: 2,
    title: "Premium On-Site Installation",
    category: "Client Deployments",
    location: "Commercial Office Park, Noida",
    date: "May 2026",
    description: "Fleet charging setup integrated seamlessly with a compact substation and smart distribution panel to supply high-reliability power.",
    src: "/images/gallery-ev-charging.jpg",
  },
  {
    id: 3,
    title: "EV Super Charging Station",
    category: "Superchargers",
    location: "Metro Parking Complex, Delhi",
    date: "June 2026",
    description: "Multi-vehicle supercharging wing featuring custom overhead branding, floor lane markings, and premium smart charger panels.",
    src: "/images/gallery-super-charging.jpg",
  },
  {
    id: 4,
    title: "Corporate EV Fleet Hub",
    category: "Client Deployments",
    location: "Tech Park Underground Parking, Delhi NCR",
    date: "April 2026",
    description: "Dedicated multi-charger bay supporting rapid charging for company EV vehicles under intelligent load management.",
    src: "/images/gallery-charging-station.jpg",
  },
  {
    id: 5,
    title: "J.D. Green Charging Station",
    category: "Charging Stations",
    location: "Expressway Transit Hub, Haryana",
    date: "May 2026",
    description: "High-power highway charging bay equipped with dual-gun DC fast chargers, serving travelers on key highway corridors.",
    src: "/images/gallery-jd-green-station.jpg",
  },
  {
    id: 6,
    title: "Axonify Dual Charger Hub",
    category: "Charging Stations",
    location: "Commercial Fleet Depot, Uttar Pradesh",
    date: "June 2026",
    description: "30kW and 60kW EV fast chargers standing side by side, offering efficient power distribution for multi-sized electric vehicles.",
    src: "/images/gallery-axonify-chargers.jpg",
  },
  {
    id: 7,
    title: "HP eCharge Highway Station",
    category: "Charging Stations",
    location: "Highway HP Pump, Tamil Nadu",
    date: "May 2026",
    description: "A premium blue EV charging at a state-of-the-art HP eCharge fast-charging bay surrounded by scenic landscaping.",
    src: "/images/gallery-hp-echarge.jpg",
  },
  {
    id: 8,
    title: "Premium Vehicle Charging Bay",
    category: "Superchargers",
    location: "Public Transit Hub, Karnataka",
    date: "June 2026",
    description: "Red luxury EV charging at the smart high-speed charging point illuminated under bright overhead lights.",
    src: "/images/gallery-red-car-charging.jpg",
  },
  {
    id: 9,
    title: "EV-ONN 60kW DC Fast Charger",
    category: "Superchargers",
    location: "Manufacturing Assembly Facility",
    date: "April 2026",
    description: "Close-up of EV-ONN's custom designed 60kW dual-gun DC Fast Charger unit, ready for final deployment.",
    src: "/images/gallery-evonn-unit.jpg",
  },
  {
    id: 10,
    title: "J.D. Green Station Wide Angle",
    category: "Charging Stations",
    location: "National Highway Hub, Haryana",
    date: "May 2026",
    description: "Wide-angle view of J.D. Green Charging Station under bright daylight, highlighting spacious EV parking and charger slots.",
    src: "/images/gallery-jd-green-wide.jpg",
  },
  {
    id: 11,
    title: "EV-ONN Smart RFID Charger",
    category: "Superchargers",
    location: "Development Lab, India",
    date: "June 2026",
    description: "Detailed view of the EV-ONN smart charging solution unit, showcasing dual socket integrations, digital LCD status screen, and RFID secure scan interface.",
    src: "/images/gallery-evonn-rfid-unit.jpg",
  },
  {
    id: 12,
    title: "EV-ONN Expo & Promotional Booth",
    category: "Client Deployments",
    location: "Infrastructure Expo, Lucknow",
    date: "May 2026",
    description: "Representatives at the EV-ONN charging solutions exhibit showcase, introducing our latest smart AC chargers and custom distribution solutions.",
    src: "/images/gallery-evonn-booth.jpg",
  },
  {
    id: 13,
    title: "Tata Nexon EV Charging Station",
    category: "Charging Stations",
    location: "J.D. Green Station, Sitapur Road",
    date: "June 2026",
    description: "Tata Nexon EV vehicle plugged into a high-voltage 60kW DC fast charging point at J.D. Green Charging Station.",
    src: "/images/gallery-nexon-charging.jpg",
  },
  {
    id: 14,
    title: "E-Rickshaw Charging Station",
    category: "Charging Stations",
    location: "Public Transit Point, Lucknow",
    date: "June 2026",
    description: "An e-rickshaw connected to an Axonify-powered EV-ONN fast-charging point.",
    src: "/images/gallery-e-rickshaw-charger.jpg",
  },
  {
    id: 15,
    title: "EV-ONN 3.3kW Smart AC Charger",
    category: "Client Deployments",
    location: "Corporate Campus, Noida",
    date: "June 2026",
    description: "Wall-mounted 3.3kW smart AC charger powered by Tobor app, featuring app integration and step-by-step QR guide.",
    src: "/images/gallery-tobor-charger.jpg",
  },
  {
    id: 16,
    title: "EV-ONN Expressway Charging Station Canopy",
    category: "Charging Stations",
    location: "Highway Corridor, Uttar Pradesh",
    date: "June 2026",
    description: "A premium night render of EV-ONN Expressway Charging Station canopy equipped with solar panels and restaurant facility.",
    src: "/images/gallery-ev-onn-canopy.jpg",
  },
  {
    id: 17,
    title: "Make In India Manufacturing Plant",
    category: "Manufacturing",
    location: "Industrial Area, Uttar Pradesh",
    date: "June 2026",
    description: "High-angle view of the massive state-of-the-art EV-ONN manufacturing facility under the Make in India initiative.",
    src: "/images/gallery-manufacturing-plant.jpg",
  },
  {
    id: 18,
    title: "Assembly Line & Development Lab",
    category: "Manufacturing",
    location: "R&D Facility, India",
    date: "June 2026",
    description: "Engineers assembly and testing EV charging control units and power modules at our advanced development lab.",
    src: "/images/gallery-engineers-assembly.jpg",
  },
  {
    id: 19,
    title: "State-of-the-Art Factory Assembly Line",
    category: "Manufacturing",
    location: "Industrial Area, Uttar Pradesh",
    date: "June 2026",
    description: "Workers assembling EV-ONN charging components on a modern conveyor belt assembly line.",
    src: "/images/gallery-factory-assembly.jpg",
  },
  {
    id: 20,
    title: "HP eCharge Station Integration",
    category: "Charging Stations",
    location: "Highway HP Pump, India",
    date: "June 2026",
    description: "Axonify-powered EV-ONN charging point installed at an HP eCharge outlet on the highway corridor.",
    src: "/images/gallery-hp-charge-station.jpg",
  }
];
export default function GalleryPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <Section className="bg-white py-16 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-70 pointer-events-none" />
        <div className="section-container text-center max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-2">
            <ImageIcon size={16} /> Showcase
          </span>
          <h1 className="text-4xl md:text-6xl font-stencil uppercase">
            Installation <span className="text-primary italic underline decoration-primary/20">Gallery</span>
          </h1>
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            A visual documentation of EV-ONN&apos;s nationwide charging footprint. Explore our smart chargers, custom high-voltage setups, and industrial manufacturing operations.
          </p>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="py-16">
        <div className="section-container">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative aspect-[4/3] w-full"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

    </div>
  );
}


