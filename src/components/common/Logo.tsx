"use client";
import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 group transition-opacity hover:opacity-90 ${className}`}>
      {/* EV icon */}
      <Image
        src="/ev-logo-icon.webp"
        alt="EV-ONN Icon"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
        priority
      />
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-stencil text-2xl md:text-3xl text-primary font-bold tracking-tighter">
          EV-ONN
        </span>
        <span className="font-stencil text-[8px] md:text-[10px] text-secondary/60 tracking-[0.2em] font-medium">
          CHARGING SOLUTIONS
        </span>
      </div>
    </Link>
  );
}
