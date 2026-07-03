import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";
import Section from "../../components/common/Section";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="section-container text-center">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-stencil uppercase mt-6 mb-8">Contact <span className="text-primary italic">EV-ONN</span></h1>
          <p className="max-w-2xl mx-auto text-xl text-secondary/60">
            Have a question or ready to start your EV infrastructure journey? We're here to help.
          </p>
        </div>
      </Section>

      <Section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-stencil uppercase">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Office Address</h4>
                      <p className="text-secondary/60 leading-relaxed">
                        10 Mandir Marg, Mahanagar Extention,<br />
                        Lucknow, Uttar Pradesh - 226006
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Call Support</h4>
                      <div className="flex flex-col gap-2 mt-1">
                        <div className="flex items-center gap-3">
                          <a href="tel:+919889249508" className="text-secondary/60 font-medium hover:text-primary transition-colors">+91 98892 49508</a>
                          <a href="https://wa.me/919889249508" target="_blank" className="bg-primary/10 p-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                            <MessageCircle size={20} />
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <a href="tel:+918081761010" className="text-secondary/60 font-medium hover:text-primary transition-colors">+91 80817 61010</a>
                          <a href="https://wa.me/918081761010" target="_blank" className="bg-primary/10 p-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                            <MessageCircle size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Email Us</h4>
                      <a href="mailto:evonnchargingsolutions@gmail.com" className="text-secondary/60 font-medium hover:text-primary transition-colors underline decoration-primary/20 decoration-2 underline-offset-4">
                        evonnchargingsolutions@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Business Hours</h4>
                      <p className="text-secondary/60 font-medium italic">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-secondary/60 font-medium italic">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <a 
                href="https://www.google.com/maps/dir//EV-ONN+CHARGING+SOLUTIONS,+10,+Mandir+Marg,+Mahanagar+Extension,+Lucknow,+Uttar+Pradesh+226006/@26.86976,80.9336832,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfd4041cd80f7:0x6f097d1e9f74d8c0!2m2!1d80.9506113!2d26.8804051?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all border border-gray-100 h-64 bg-gray-50 relative group cursor-pointer"
              >
                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.455!2d80.948036!3d26.880405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4041cd80f7%3A0x6f097d1e9f74d8c0!2sEV-ONN%20CHARGING%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                   className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
                   style={{ border: 0 }}
                   allowFullScreen={false}
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-2 group-hover:-translate-y-1 transition-transform duration-300">
                     <MapPin className="text-primary" />
                     <span className="font-bold text-secondary">Lucknow, Uttar Pradesh</span>
                   </div>
                </div>
              </a>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
