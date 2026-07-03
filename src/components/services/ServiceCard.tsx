import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="premium-card group h-full flex flex-col"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-secondary/70 mb-8 flex-grow leading-relaxed">
        {description}
      </p>
      <Link href={href} className="text-primary font-bold inline-flex items-center gap-2 group-hover:underline">
        Learn More
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </motion.div>
  );
}
