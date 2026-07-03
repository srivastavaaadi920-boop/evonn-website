"use client";

import Section from "../../components/common/Section";
import { MapPin, Calendar, Building2, Zap, Warehouse, CircuitBoard, ChevronRight, Camera, X, ChevronLeft, ChevronRight as ChevronRightIcon, ImageIcon } from "lucide-react";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";

/* ───────────────────────── DATA ───────────────────────── */

interface Project {
  title: string;
  location: string;
  date: string;
  image: string;
  desc: string;
  stats?: { label: string; value: string }[];
}

interface CategoryData {
  id: string;
  label: string;
  tagline: string;
  icon: React.ReactNode;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  projects: Project[];
  photos: string[]; // gallery photos for "See Photos"
}

const categories: CategoryData[] = [
  {
    id: "government",
    label: "Government Projects",
    tagline: "Powering India's green mobility mission through public sector partnerships",
    icon: <Building2 size={28} />,
    accentColor: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    projects: [
      {
        title: "Smart City EV Charging Network",
        location: "Lucknow, Uttar Pradesh",
        date: "February 2024",
        image: "/images/smart-city-charging.png",
        desc: "Installed 25 public EV charging stations across Smart City zones under the Smart Cities Mission, serving 500+ daily users.",
        stats: [{ label: "Chargers", value: "25" }, { label: "Daily Users", value: "500+" }],
      },
      {
        title: "Municipal EV Fleet Infrastructure",
        location: "Shajapur, UP",
        date: "May 2026",
        image: "/images/municipal-fleet-depot.png",
        desc: "Complete charging depot for 30 municipal electric buses including transformer setup, cabling, and grid integration.",
        stats: [{ label: "Buses Served", value: "30" }, { label: "Capacity", value: "2MW" }],
      },
      {
        title: "Highway Charging Corridor",
        location: "Delhi–Agra Expressway",
        date: "May 2025",
        image: "/images/highway-ev-corridor.jpg",
        desc: "Turnkey deployment of fast-charging stations at 6 rest areas along the national expressway under MoRTH guidelines.",
        stats: [{ label: "Stations", value: "6" }, { label: "Coverage", value: "233 km" }],
      },
    ],
    photos: [
      // Add your government project photos here, e.g.:
      // "/images/projects/govt-1.jpg",
      // "/images/projects/govt-2.jpg",
    ],
  },
  {
    id: "public-charger",
    label: "Public Charger Projects",
    tagline: "Making EV charging accessible at malls, offices, and public spaces",
    icon: <Zap size={28} />,
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-200",
    projects: [
      {
        title: "Commercial EV Charging Hub",
        location: "Patna, Bihar",
        date: "March 2024",
        image: "/images/commercial-ev-hub.jpg",
        desc: "Deployment of 10 DC fast chargers (60kW) for a major commercial complex, handling 200+ sessions daily.",
        stats: [{ label: "Chargers", value: "10" }, { label: "Power", value: "60kW each" }],
      },
      {
        title: "Retail Mall Charging Network",
        location: "Dehradun, Uttarakhand",
        date: "August 2024",
        image: "/images/ev-onn-chargers.jpg",
        desc: "AC and DC charger installation across 3 premium malls with integrated payment system and real-time monitoring.",
        stats: [{ label: "Malls", value: "3" }, { label: "Chargers", value: "18" }],
      },
      {
        title: "Corporate Campus Charging",
        location: "Bangalore, Karnataka",
        date: "February 2025",
        image: "/images/corporate-campus-charging.png",
        desc: "Employee EV charging infrastructure for a Fortune 500 IT company campus with 50+ dedicated charging bays.",
        stats: [{ label: "Bays", value: "50+" }, { label: "Type", value: "AC Level 2" }],
      },
    ],
    photos: [
      // Add your public charger project photos here
    ],
  },
  {
    id: "full-station",
    label: "Full Station Setup",
    tagline: "End-to-end EV station infrastructure from ground zero to go-live",
    icon: <Warehouse size={28} />,
    accentColor: "text-amber-600",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    projects: [
      {
        title: "Turnkey Highway EV Station",
        location: "Sidhauli, Uttar Pradesh",
        date: "April 2024",
        image: "/images/turnkey-highway-ev-station.png",
        desc: "Complete station build including canopy, chargers, transformer, food court, car wash, and solar panels.",
        stats: [{ label: "Area", value: "5,000 sqft" }, { label: "Chargers", value: "8" }],
      },
      {
        title: "Fleet Charging Depot",
        location: "Khairabad, Uttar Pradesh",
        date: "November 2025",
        image: "/images/ev-onn-station.jpg",
        desc: "24/7 charging infrastructure for a fleet of 50+ electric delivery vans with power management system.",
        stats: [{ label: "Fleet Size", value: "50+" }, { label: "Uptime", value: "99.5%" }],
      },
      {
        title: "Solar-Powered EV Plaza",
        location: "Haridwar, Uttarakhand",
        date: "March 2026",
        image: "/images/ev-onn-solar.png",
        desc: "Green energy EV station powered by rooftop solar with battery storage, food court, and lounge facilities.",
        stats: [{ label: "Solar", value: "100kW" }, { label: "Storage", value: "200kWh" }],
      },
    ],
    photos: [
      // Add your full station setup photos here
    ],
  },
  {
    id: "transformer-hvls",
    label: "Transformer & HVLS",
    tagline: "Heavy electrical infrastructure and industrial ventilation solutions",
    icon: <CircuitBoard size={28} />,
    accentColor: "text-violet-600",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-200",
    projects: [
      {
        title: "Industrial Transformer & Infra",
        location: "Kanpur, Uttar Pradesh",
        date: "September 2024",
        image: "/images/transformer-hvls.png",
        desc: "Complete electrical infrastructure and transformer setup for a logistics park supporting 500kVA load.",
        stats: [{ label: "Capacity", value: "500kVA" }, { label: "Area", value: "2 Acres" }],
      },
      {
        title: "HVLS Fan Deployment",
        location: "Muzaffarpur, Bihar",
        date: "June 2025",
        image: "/images/ev-onn-hvls-fan.jpg",
        desc: "Installation of 12 industrial HVLS fans (24ft diameter) across a manufacturing facility for optimal airflow.",
        stats: [{ label: "Fans", value: "12" }, { label: "Diameter", value: "24ft" }],
      },
      {
        title: "Compact Substation Setup",
        location: "Greater Noida, UP",
        date: "January 2026",
        image: "/images/ev-onn-substation.png",
        desc: "Designing and commissioning a compact substation for an EV charging park with fire safety & monitoring systems.",
        stats: [{ label: "Rating", value: "1000kVA" }, { label: "Monitoring", value: "24/7" }],
      },
    ],
    photos: [
      // Add your transformer & HVLS photos here
    ],
  },
];

/* ─────────────────── LIGHTBOX MODAL ───────────────────── */

function Lightbox({
  photos,
  initialIndex,
  onClose,
  categoryLabel,
  accentColor,
}: {
  photos: string[];
  initialIndex: number;
  onClose: () => void;
  categoryLabel: string;
  accentColor: string;
}) {
  const [index, setIndex] = useState(initialIndex);

  const goNext = useCallback(() => setIndex((i) => (i + 1) % photos.length), [photos.length]);
  const goPrev = useCallback(() => setIndex((i) => (i - 1 + photos.length) % photos.length), [photos.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Camera size={20} className="text-white/70" />
            <span className="text-white/90 font-bold text-sm uppercase tracking-widest">{categoryLabel}</span>
            <span className="text-white/40 text-sm">
              {index + 1} / {photos.length}
            </span>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
            <X size={24} />
          </button>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden bg-black/50 aspect-video">
          <img
            src={photos[index]}
            alt={`${categoryLabel} photo ${index + 1}`}
            className="w-full h-full object-contain"
          />

          {/* Navigation arrows */}
          {photos.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
              >
                <ChevronRightIcon size={24} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {photos.length > 1 && (
          <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  i === index ? "border-white shadow-lg scale-105" : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img src={photo} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────────── PHOTO GALLERY ──────────────────── */

function PhotoGallery({ category }: { category: CategoryData }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (category.photos.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-12 pt-10 border-t border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Camera size={22} className={category.accentColor} />
            <h3 className="text-xl font-stencil uppercase text-secondary">Project Photos</h3>
            <span className="text-secondary/40 text-sm font-medium">({category.photos.length})</span>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {category.photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="aspect-square rounded-xl overflow-hidden group relative border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg"
            >
              <img src={photo} alt={`${category.label} photo ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Camera size={16} className={category.accentColor} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={category.photos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          categoryLabel={category.label}
          accentColor={category.accentColor}
        />
      )}
    </>
  );
}

/* ───────────────────── PROJECT CARD ───────────────────── */

function ProjectCard({ project, accentColor }: { project: Project; accentColor: string }) {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="h-60 overflow-hidden relative">
        <img
          src={project.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-secondary shadow-sm">
            <MapPin size={12} className={accentColor} />
            {project.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1 space-y-4">
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <span className={accentColor}>Case Study</span>
          <div className={`flex items-center gap-1 ${accentColor}`}>
            <Calendar size={11} />
            <span>{project.date}</span>
          </div>
        </div>

        <h3 className="text-xl font-stencil uppercase text-secondary group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="text-secondary/60 text-sm leading-relaxed flex-1">
          {project.desc}
        </p>

        {/* Stats row */}
        {project.stats && (
          <div className="flex gap-4 pt-2">
            {project.stats.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl px-4 py-2 flex-1 text-center">
                <div className={`text-lg font-bold ${accentColor}`}>{s.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-secondary/50 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────── CATEGORY SECTION ──────────────────── */

function CategorySection({ category }: { category: CategoryData }) {
  return (
    <Section className="py-20 border-b border-gray-100 last:border-b-0" id={category.id}>
      <div className="section-container !py-0">
        {/* Category Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="flex items-start gap-5">
            <div className={`${category.accentBg} ${category.accentColor} ${category.accentBorder} border rounded-2xl p-4 shrink-0`}>
              {category.icon}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-stencil uppercase text-secondary">
                {category.label}
              </h2>
              <p className="text-secondary/50 mt-2 text-base max-w-lg">
                {category.tagline}
              </p>
            </div>
          </div>

        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {category.projects.map((project, i) => (
            <ProjectCard key={i} project={project} accentColor={category.accentColor} />
          ))}
        </div>

        {/* Photo Gallery */}
        <PhotoGallery category={category} />
      </div>
    </Section>
  );
}



/* ──────────────────────── MAIN PAGE ────────────────────── */

export default function ProjectsPage() {

  return (
    <div className="pt-20">
      {/* ── Hero Banner ── */}
      <Section className="bg-white py-24 border-b border-gray-100">
        <div className="section-container text-center max-w-4xl mx-auto !py-0 space-y-8">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-stencil uppercase mt-6 mb-4">
            Featured <span className="text-primary italic underline decoration-primary/20">Projects</span>
          </h1>
          <p className="text-xl text-secondary/60 max-w-2xl mx-auto">
            Exploring our impact on India&apos;s EV landscape through successful turnkey deployments across government, commercial, and industrial sectors.
          </p>


        </div>
      </Section>

      {/* ── Project Category Sections ── */}
      <div className="bg-gray-50">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>

      {/* ── CTA Section ── */}
      <Section className="bg-primary text-white py-24">
        <div className="section-container text-center space-y-8 !py-0">
          <h2 className="text-4xl font-stencil uppercase">Have a project in mind?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Let&apos;s build a future-ready charging infrastructure for your business.
          </p>
          <Link href="/contact" className="btn-primary !bg-secondary !text-white !px-12 inline-block">
            Start Consultation
          </Link>
        </div>
      </Section>
    </div>
  );
}
