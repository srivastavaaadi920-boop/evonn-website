import Link from "next/link";
import { Instagram, Youtube, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Company Bio */}
          <div className="space-y-6">
            <Logo />
            <p className="text-secondary/70 leading-relaxed max-w-xs">
              EV-ONN Charging Solutions delivers complete electric vehicle charging infrastructure across India. Building future-ready energy ecosystems.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/evonnchargingsolutions" },
                { Icon: Youtube, href: "https://www.youtube.com/@EV-ONNCHARGINGSOLUTIONS" }
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-secondary/70">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <span>10 Mandir Marg, Mahanagar Extention, Lucknow, UP - 226006</span>
              </li>
              <li className="flex gap-3 text-secondary/70">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <a href="tel:+919889249508" className="hover:text-primary transition-colors">+91 98892 49508</a>
                    <a href="https://wa.me/919889249508" target="_blank" className="text-primary hover:scale-110 transition-transform flex items-center">
                      <MessageCircle size={16} />
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+918081761010" className="hover:text-primary transition-colors">+91 80817 61010</a>
                    <a href="https://wa.me/918081761010" target="_blank" className="text-primary hover:scale-110 transition-transform flex items-center">
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-3 text-secondary/70">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <a href="mailto:evonnchargingsolutions@gmail.com" className="hover:text-primary transition-colors break-all">evonnchargingsolutions@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Newsletter</h4>
            <p className="text-secondary/70">Subscribe to get latest updates on EV infrastructure.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-50 border border-gray-100 rounded-full px-6 py-4 outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary/50 text-sm">
          <p>© {new Date().getFullYear()} EV-ONN Charging Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
