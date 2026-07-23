"use client";
import { useState } from "react";
import Section from "../../../components/common/Section";
import { Play, Video, Clock, Eye, Calendar, Sparkles, X } from "lucide-react";

export default function VideosPage() {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <Section className="bg-white py-16 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-70 pointer-events-none" />
        <div className="section-container text-center max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-2">
            <Video size={16} /> Video Hub
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-stencil uppercase">
            Videos & <span className="text-primary italic underline decoration-primary/20">Guides</span>
          </h1>
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            Watch our detailed product demonstrations, installation tutorials, and client success interviews to see our charging technology in action.
          </p>
        </div>
      </Section>

      {/* Featured Video Section 1 */}
      <Section className="py-12 pb-6">
        <div className="section-container">
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Video Player Representation */}
            <div className="lg:col-span-7 relative bg-black min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden group">
              <video 
                id="featured-video-1"
                src="/videos/ev-onn-intro.mp4" 
                preload="metadata"
                controls={isPlaying1}
                className="absolute inset-0 w-full h-full object-cover"
                onPlay={() => setIsPlaying1(true)}
                onPause={() => setIsPlaying1(false)}
              />
              
              {!isPlaying1 && (
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-all duration-300">
                  <button 
                    onClick={() => {
                      const videoEl = document.getElementById("featured-video-1") as HTMLVideoElement;
                      if (videoEl) videoEl.play();
                    }}
                    className="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10"
                  >
                    <Play size={32} className="ml-1 fill-current" />
                  </button>
                  <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mt-4 z-10">
                    Featured Video
                  </span>
                </div>
              )}
              
              {!isPlaying1 && (
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded font-mono z-10">
                  0:24
                </div>
              )}
            </div>

            {/* Featured Video Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs text-primary font-bold bg-primary/10 px-3 py-1 rounded-full w-fit">
                <Sparkles size={12} />
                <span>Featured Project</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-stencil uppercase leading-tight text-secondary">
                EV-ONN&apos;s Smart Highway <span className="text-primary italic">Charging Hub</span>
              </h2>
              <p className="text-secondary/70 leading-relaxed">
                Experience a complete walkthrough of EV-ONN&apos;s next-generation highway charging station designed for modern EV travelers. Explore ultra-fast charging bays, premium amenities, dining facilities, and sustainable infrastructure built to make long-distance electric mobility seamless, comfortable, and reliable.
              </p>

            </div>
          </div>
        </div>
      </Section>

      {/* Featured Video Section 2 */}
      <Section className="py-6 pt-0">
        <div className="section-container">
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Video Player Representation */}
            <div className="lg:col-span-7 relative bg-black min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden group">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/jI8TPQoit68" 
                title="The Vision Behind EV-ONN Charging Solutions" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Featured Video Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs text-primary font-bold bg-primary/10 px-3 py-1 rounded-full w-fit">
                <Sparkles size={12} />
                <span>Featured Interview</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-stencil uppercase leading-tight text-secondary">
                The Vision Behind <span className="text-primary italic">EV-ONN Charging Solutions</span>
              </h2>
              <p className="text-secondary/70 leading-relaxed">
                Join an exclusive conversation with the leadership team of EV-ONN Charging Solutions as they share their vision for accelerating India&apos;s EV infrastructure. Learn about the company&apos;s mission, innovative charging solutions, customer-first approach, and roadmap for building a sustainable electric mobility ecosystem.
              </p>

            </div>
          </div>
        </div>
      </Section>

    </div>
  );
}
