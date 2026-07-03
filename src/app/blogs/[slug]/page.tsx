"use client";
import { useParams, useRouter } from "next/navigation";
import { blogs } from "../../../data/data";
import Section from "../../../components/common/Section";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import ContactPreview from "../../../components/home/ContactPreview";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="pt-32 text-center py-24">
        <h1 className="text-4xl font-stencil uppercase mb-8">Article Not Found</h1>
        <Link href="/blogs" className="btn-primary">Return to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Section className="bg-white py-16">
        <div className="section-container max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => router.back()} 
            className="flex items-center gap-2 text-secondary/40 hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs mb-12"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </button>

          {/* Header */}
          <div className="space-y-6 mb-12">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-stencil uppercase leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-secondary/60">
                <User size={18} className="text-primary" />
                <span className="font-bold">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary/60">
                <Calendar size={18} className="text-primary" />
                <span className="font-bold">{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary/60">
                <Clock size={18} className="text-primary" />
                <span className="font-bold">5 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 grayscale hover:grayscale-0 transition-all duration-1000 h-[500px]">
             <img 
               src={blog.image} 
               alt={blog.title} 
               className="w-full h-full object-cover"
             />
          </div>

          {/* Content */}
          <div 
            className="blog-content prose prose-lg max-w-none prose-headings:font-stencil prose-headings:uppercase prose-p:text-secondary/70 prose-p:leading-relaxed prose-strong:text-secondary prose-li:text-secondary/70"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          >
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-center">
            <Link href="/blogs" className="btn-outline">
              Discover More Insights
            </Link>
          </div>
        </div>
      </Section>

      <ContactPreview />
    </div>
  );
}
