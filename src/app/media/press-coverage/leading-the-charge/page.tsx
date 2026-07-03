"use client";
import Link from "next/link";
import Section from "../../../../components/common/Section";
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from "lucide-react";

export default function LeadingTheChargeArticle() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      {/* Article Hero */}
      <Section className="bg-white py-12 md:py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-60 pointer-events-none" />
        <div className="section-container max-w-4xl mx-auto relative z-10 space-y-6">
          {/* Back Link */}
          <Link
            href="/media/press-coverage"
            className="inline-flex items-center gap-2 text-sm text-secondary/50 hover:text-primary transition-colors font-medium group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Press Coverage
          </Link>

          {/* Meta Tags */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Spotlight Story
            </span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Feature Profile
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-stencil uppercase leading-tight text-secondary">
            Leading the Charge: EV-ONN Featured in{" "}
            <span className="text-primary italic">India&apos;s Tech Innovators</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-secondary/60 leading-relaxed max-w-3xl">
            An extensive profile on EV-ONN&apos;s co-founders detailing their journey from electrical grid engineers to building a full-stack EV infrastructure powerhouse — and how they&apos;re reshaping India&apos;s clean mobility landscape.
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 text-sm text-secondary/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> June 2, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} /> Business Standard
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> 8 min read
            </span>
          </div>
        </div>
      </Section>

      {/* Article Body */}
      <Section className="py-12 md:py-16">
        <div className="section-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8 space-y-8">
              {/* Lead Paragraph */}
              <p className="text-lg text-secondary/80 leading-relaxed font-medium border-l-4 border-primary pl-6">
                When Kamal Kant Srivastava and his team first envisioned EV-ONN, the Indian electric vehicle ecosystem was in its infancy. Charging stations were sparse, grid infrastructure was ill-equipped for high-voltage demands, and most businesses saw EV adoption as a distant dream. Today, EV-ONN stands as one of India&apos;s fastest-growing EV infrastructure companies, bridging the gap between ambition and reality.
              </p>

              <div className="prose prose-lg max-w-none space-y-6 text-secondary/75 leading-relaxed">
                <h2 className="text-2xl font-stencil uppercase text-secondary mt-8 mb-4">
                  From Grid Engineers to <span className="text-primary italic">Industry Pioneers</span>
                </h2>
                <p>
                  The EV-ONN story begins not in a boardroom, but on the field — amid electrical substations, transformer yards, and high-tension corridors. The founding team, composed of experienced electrical engineers with deep expertise in grid-level power distribution, recognized a critical bottleneck early on: India&apos;s existing electrical infrastructure simply wasn&apos;t designed to handle the surge of EV charging loads.
                </p>
                <p>
                  &ldquo;We spent years building and maintaining the backbone of India&apos;s power grid,&rdquo; recalls the founding team. &ldquo;When the EV revolution started gaining momentum, we saw firsthand how unprepared the infrastructure was. Transformers overloading, voltage drops at charging points, cables not rated for fast-charge currents — these weren&apos;t hypothetical problems. We were living them.&rdquo;
                </p>
                <p>
                  That first-hand understanding became EV-ONN&apos;s competitive edge. Rather than approaching EV infrastructure as a software or automotive challenge, they tackled it as what it fundamentally is: an electrical engineering problem that demands robust, grid-compatible hardware solutions.
                </p>

                <h2 className="text-2xl font-stencil uppercase text-secondary mt-10 mb-4">
                  Custom Hardware, <span className="text-primary italic">Real-World Impact</span>
                </h2>
                <p>
                  At the heart of EV-ONN&apos;s offering is a suite of purpose-built electrical infrastructure products. Their custom step-down transformers — designed specifically for the high-frequency load patterns of DC fast chargers — have become a hallmark innovation. Unlike off-the-shelf transformers that degrade under the pulsating loads typical of EV charging, EV-ONN&apos;s units are engineered with reinforced core materials and advanced cooling systems that maintain efficiency even under continuous operation.
                </p>
                <p>
                  Complementing the transformers is their smart distribution gear — intelligent switchgear panels that dynamically balance loads across multiple charging points. These panels integrate real-time monitoring, automated load shedding, and predictive maintenance alerts, ensuring that a charging hub with 10 or 20 stalls never overwhelms the local grid.
                </p>
                <p>
                  The numbers speak for themselves: EV-ONN&apos;s integrated approach has cut client deployment timelines by 35%. Where a conventional setup might take 4–6 months from site survey to commissioning, EV-ONN&apos;s turnkey model compresses this to under 10 weeks — including civil work, electrical infrastructure, charger installation, and grid tie-in.
                </p>

                <h2 className="text-2xl font-stencil uppercase text-secondary mt-10 mb-4">
                  A Full-Stack <span className="text-primary italic">Approach</span>
                </h2>
                <p>
                  What sets EV-ONN apart from the crowded field of charging point operators (CPOs) is its vertically integrated model. While most companies in the space either manufacture chargers or operate charging stations, EV-ONN does everything in between — and that &ldquo;in between&rdquo; is where most projects stall.
                </p>
                <p>
                  Their service portfolio covers the entire value chain: initial site assessment and feasibility studies, power sanctioning and DISCOM coordination, civil and electrical infrastructure construction, charger procurement and installation, software integration for payment and fleet management, and ongoing maintenance with guaranteed uptime SLAs.
                </p>
                <p>
                  &ldquo;The biggest pain point for businesses wanting to adopt EV charging is not the charger itself — it&apos;s everything around it,&rdquo; the team explains. &ldquo;Getting adequate power supply, ensuring the right transformer capacity, proper earthing, cable sizing, ventilation — these are the unsexy but critical elements that determine whether a charging station works reliably or becomes a maintenance nightmare.&rdquo;
                </p>

                <h2 className="text-2xl font-stencil uppercase text-secondary mt-10 mb-4">
                  Scaling Across <span className="text-primary italic">Segments</span>
                </h2>
                <p>
                  EV-ONN&apos;s client base spans multiple segments: corporate tech parks looking to add employee charging amenities, highway fuel station operators diversifying into EV, municipal fleet depots transitioning bus and auto-rickshaw fleets, and real estate developers integrating charging infrastructure into new residential and commercial projects.
                </p>
                <p>
                  The company has already deployed infrastructure across major corridors in Uttar Pradesh, Madhya Pradesh, and Rajasthan, with expansion plans covering the Delhi-Mumbai and Delhi-Kolkata expressway belts. Their highway charging hubs, designed to handle the simultaneous fast-charging of multiple vehicles, incorporate solar canopies and battery energy storage systems — making them partially grid-independent and reducing operational costs.
                </p>

                <h2 className="text-2xl font-stencil uppercase text-secondary mt-10 mb-4">
                  The Road <span className="text-primary italic">Ahead</span>
                </h2>
                <p>
                  With India targeting 30% EV penetration by 2030 and the government&apos;s recent push to deploy 10 lakh fast chargers nationwide, the opportunity ahead is massive. EV-ONN is positioning itself not just as a participant in this growth, but as the infrastructure backbone that makes it possible.
                </p>
                <p>
                  The company&apos;s upcoming product line includes integrated compact substations — pre-fabricated, containerized power units that can be transported and commissioned at remote locations within 48 hours. They&apos;re also developing a software platform for predictive grid load management, enabling utility companies and DISCOMs to plan for EV charging demand at scale.
                </p>
                <p>
                  &ldquo;We believe that the company that solves the infrastructure bottleneck will define the next decade of Indian mobility,&rdquo; the team states with conviction. &ldquo;Chargers are commoditizing. The real moat is in the power infrastructure that feeds them — and that&apos;s where EV-ONN lives.&rdquo;
                </p>
              </div>

              {/* Share Bar */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 text-sm text-secondary/60 hover:text-primary transition-colors bg-gray-100 hover:bg-primary/10 px-4 py-2 rounded-full">
                    <Share2 size={14} /> Share Article
                  </button>
                  <button className="flex items-center gap-2 text-sm text-secondary/60 hover:text-primary transition-colors bg-gray-100 hover:bg-primary/10 px-4 py-2 rounded-full">
                    <Bookmark size={14} /> Save
                  </button>
                </div>
                <Link
                  href="/media/press-coverage"
                  className="text-primary hover:text-primary-dark font-bold text-sm flex items-center gap-1 group"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  All Press Coverage
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Key Highlights Card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6">
                <h4 className="font-stencil uppercase text-lg text-secondary border-b border-gray-100 pb-3">
                  Key <span className="text-primary italic">Highlights</span>
                </h4>
                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-3xl font-bold text-primary">35%</span>
                    <p className="text-sm text-secondary/60">Faster deployment timelines vs. industry average</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl font-bold text-primary">&lt;10 weeks</span>
                    <p className="text-sm text-secondary/60">Site survey to full commissioning</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl font-bold text-primary">48 hrs</span>
                    <p className="text-sm text-secondary/60">Compact substation deployment time</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl font-bold text-primary">Full-Stack</span>
                    <p className="text-sm text-secondary/60">End-to-end infrastructure &mdash; from grid to charger</p>
                  </div>
                </div>
              </div>


              {/* Publication Info */}
              <div className="bg-primary text-white rounded-2xl p-6 shadow-sm space-y-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-80" />
                <div className="relative z-10 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60">Originally Published In</p>
                  <p className="text-2xl font-stencil uppercase">Business Standard</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    India&apos;s leading business daily, covering markets, finance, industry, and technology.
                  </p>
                  <p className="text-xs text-white/50 font-mono">June 2, 2026 &bull; Print &amp; Digital Edition</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>
    </div>
  );
}
