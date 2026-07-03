"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirementType: 'EV Charger Purchase',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        // Reset form after 3 seconds
        setTimeout(() => {
          setStatus("idle");
          setFormData({
            name: '',
            phone: '',
            email: '',
            requirementType: 'EV Charger Purchase',
            message: ''
          });
        }, 3000);
      } else {
        console.error('Error:', data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-secondary/60">Full Name</label>
            <input 
              required 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-secondary/60">Phone Number</label>
            <input 
              required 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary transition-all"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-secondary/60">Email Address</label>
            <input 
              required 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-secondary/60">Requirement Type</label>
            <select
              name="requirementType"
              value={formData.requirementType}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary transition-all"
            >
              <option>EV Charger Purchase</option>
              <option>Full Station Setup</option>
              <option>Transformer Installation</option>
              <option>HVLS Fan Inquiry</option>
              <option>AMC / Maintenance</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest text-secondary/60">Message</label>
          <textarea 
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary transition-all resize-none"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <button 
          disabled={status !== "idle"}
          type="submit" 
          className="w-full btn-primary !py-5 flex justify-center items-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "idle" && (
            <>
              Send Inquiry
              <Send size={20} />
            </>
          )}
          {status === "sending" && "Sending..."}
          {status === "success" && "✓ Message Sent Successfully!"}
          {status === "error" && "✗ Failed to send. Try again!"}
        </button>
      </form>
    </div>
  );
}
