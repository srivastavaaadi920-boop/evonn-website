"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown, 
  Image, 
  Video, 
  Newspaper, 
  Award,
  MapPin,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../common/Logo";

interface SubLink {
  name: string;
  href: string;
  description: string;
  icon: string;
}

interface NavLink {
  name: string;
  href?: string;
  isDropdown?: boolean;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "EV Station Setup", href: "/ev-station-setup" },
  { name: "Projects", href: "/projects" },
  {
    name: "Business",
    isDropdown: true,
    subLinks: [
      { 
        name: "Become a Location Partner", 
        href: "/business/location-partner", 
        description: "Transform your property into a high-demand EV charging destination", 
        icon: "MapPin" 
      },
      { 
        name: "Become a Franchisee", 
        href: "/business/franchisee", 
        description: "Build your own EV infrastructure business with EV-ONN's proven model", 
        icon: "Briefcase" 
      },
    ]
  },
  {
    name: "Media",
    isDropdown: true,
    subLinks: [
      { 
        name: "Gallery", 
        href: "/media/gallery", 
        description: "Explore our installation gallery and project showcases", 
        icon: "Image" 
      },
      { 
        name: "Videos", 
        href: "/media/videos", 
        description: "Watch our latest videos, guides, and walkthroughs", 
        icon: "Video" 
      },
      { 
        name: "Press & Coverage", 
        href: "/media/press-coverage", 
        description: "See what the press and media say about us", 
        icon: "Newspaper" 
      },
      { 
        name: "Certifications & Approvals", 
        href: "/media/certifications", 
        description: "Our quality standards and regulatory compliance", 
        icon: "Award" 
      },
    ]
  },
  { name: "Blogs", href: "/blogs" },
];

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Image,
  Video,
  Newspaper,
  Award,
  MapPin,
  Briefcase
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isMediaHovered, setIsMediaHovered] = useState(false);
  const [isBusinessHovered, setIsBusinessHovered] = useState(false);
  const [isMobileMediaOpen, setIsMobileMediaOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname.startsWith("/media")) {
      setIsMobileMediaOpen(true);
    }
    if (pathname.startsWith("/business")) {
      setIsMobileBusinessOpen(true);
    }
  }, [pathname]);

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
      scrolled 
        ? "top-4 px-4 h-16" 
        : "top-0 px-0 h-20"
    }`}>
      <div className={`glass-nav h-full flex items-center transition-all duration-500 ${
        scrolled 
          ? "w-full max-w-6xl rounded-2xl shadow-xl shadow-primary/5 px-6" 
          : "w-full max-w-full rounded-none border-transparent px-8"
      }`}>
        <div className="flex justify-between items-center w-full">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                const isActive = link.name === "Media" 
                  ? pathname.startsWith("/media")
                  : link.name === "Business"
                  ? pathname.startsWith("/business")
                  : false;
                
                const isHovered = link.name === "Media" 
                  ? isMediaHovered
                  : link.name === "Business"
                  ? isBusinessHovered
                  : false;
                
                const setHovered = link.name === "Media" 
                  ? setIsMediaHovered
                  : link.name === "Business"
                  ? setIsBusinessHovered
                  : () => {};

                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? "text-primary bg-primary/5 font-semibold"
                          : "text-secondary hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isHovered ? "rotate-180 text-primary" : "text-secondary/55"
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`absolute top-full mt-1 bg-white/95 backdrop-blur-xl border border-gray-100/80 shadow-2xl rounded-2xl p-5 z-50 ${
                            link.name === "Media" 
                              ? "right-[-80px] w-[550px] grid grid-cols-2 gap-4"
                              : "right-0 w-[480px] flex flex-col gap-3"
                          }`}
                        >
                          {link.subLinks?.map((subLink) => {
                            const IconComponent = iconMap[subLink.icon];
                            const isSubLinkActive = pathname === subLink.href;
                            return (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                onClick={() => setHovered(false)}
                                className={`flex items-start gap-3.5 p-3 rounded-xl transition-all duration-300 border border-transparent ${
                                  isSubLinkActive
                                    ? "bg-primary/10 border-primary/10 text-primary shadow-sm"
                                    : "hover:bg-primary/5 text-secondary hover:text-primary hover:border-primary/5"
                                }`}
                              >
                                <div
                                  className={`p-2 rounded-lg transition-colors duration-300 ${
                                    isSubLinkActive
                                      ? "bg-primary text-white"
                                      : "bg-primary/5 text-primary"
                                  }`}
                                >
                                  {IconComponent && <IconComponent size={18} />}
                                </div>
                                <div className="text-left">
                                  <div className={`font-semibold text-sm ${isSubLinkActive ? "text-primary" : "text-secondary"}`}>
                                    {subLink.name}
                                  </div>
                                  <div className="text-xs text-secondary/60 mt-0.5 leading-normal">
                                    {subLink.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href || ""}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-secondary hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 btn-primary flex items-center gap-2 !py-2 !px-6"
            >
              <Phone size={16} />
              Inquire Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 right-0 bg-surface border-b border-gray-100 shadow-xl overflow-hidden lg:hidden ${
              scrolled 
                ? "mx-4 mt-2 rounded-2xl border border-gray-100/50 shadow-2xl" 
                : "border-t"
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  const isActive = link.name === "Media" 
                    ? pathname.startsWith("/media")
                    : link.name === "Business"
                    ? pathname.startsWith("/business")
                    : false;
                  
                  const isOpen = link.name === "Media" 
                    ? isMobileMediaOpen
                    : link.name === "Business"
                    ? isMobileBusinessOpen
                    : false;
                  
                  const setOpen = link.name === "Media" 
                    ? setIsMobileMediaOpen
                    : link.name === "Business"
                    ? setIsMobileBusinessOpen
                    : () => {};

                  return (
                    <div key={link.name} className="block">
                      <button
                        onClick={() => setOpen(!isOpen)}
                        className={`w-full flex justify-between items-center px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                          isActive
                            ? "text-primary bg-primary/5 font-semibold"
                            : "text-secondary hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-primary" : "text-secondary/50"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden pl-4 pr-2 space-y-1 mt-1 border-l-2 border-primary/10 ml-3"
                          >
                            {link.subLinks?.map((subLink) => {
                              const IconComponent = iconMap[subLink.icon];
                              const isSubLinkActive = pathname === subLink.href;
                              return (
                                <Link
                                  key={subLink.name}
                                  href={subLink.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                  }}
                                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                    isSubLinkActive
                                      ? "text-primary bg-primary/5 font-semibold"
                                      : "text-secondary/70 hover:text-primary hover:bg-primary/5"
                                  }`}
                                >
                                  {IconComponent && <IconComponent size={16} />}
                                  <span>{subLink.name}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href || ""}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-base font-medium ${
                      pathname === link.href
                        ? "text-primary bg-primary/5 font-semibold"
                        : "text-secondary hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="mt-4 px-3">
                <Link
                  href="/contact"
                  className="w-full btn-primary flex justify-center items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} />
                  Inquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
