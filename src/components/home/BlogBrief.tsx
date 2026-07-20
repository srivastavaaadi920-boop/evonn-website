"use client";
import Section from "../common/Section";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogs } from "../../data/data";

export default function BlogBrief() {
  return (
    <Section className="bg-gray-50 py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Industry Insights</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-stencil uppercase">Latest from <span className="text-primary">our Blog</span></h2>
          </div>
          <Link href="/blogs" className="btn-outline inline-flex items-center gap-2">
            Read All Articles
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-56 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-secondary/40 uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{blog.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">{blog.title}</h3>
                <p className="text-secondary/60 text-sm leading-relaxed line-clamp-2">{blog.excerpt}</p>
                <Link href={`/blogs/${blog.slug}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
