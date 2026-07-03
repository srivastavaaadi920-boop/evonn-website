import Section from "../../components/common/Section";
import BlogBrief from "../../components/home/BlogBrief";
import { Search } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="pt-20">
      <Section className="bg-white py-24 border-b border-gray-100">
        <div className="section-container text-center max-w-4xl mx-auto">
           <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Knowledge Center</span>
           <h1 className="text-5xl md:text-7xl font-stencil uppercase mt-6 mb-8">EV <span className="text-primary italic underline decoration-primary/20">Insights</span></h1>
           <p className="text-xl text-secondary/60">Expert articles, industry updates, and guides on electric vehicle infrastructure in India.</p>
           
           <div className="max-w-xl mx-auto mt-12 relative">
             <input 
               type="text" 
               placeholder="Search articles..." 
               className="w-full bg-gray-50 border border-gray-200 rounded-full py-5 px-8 outline-none focus:border-primary transition-all pr-16"
             />
             <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
               <Search size={18} />
             </div>
           </div>
        </div>
      </Section>

      <BlogBrief />


    </div>
  );
}
