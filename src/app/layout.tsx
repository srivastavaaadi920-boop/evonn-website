import type { Metadata } from "next";
import { Inter, Stardos_Stencil } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ScrollProgressBar from "../components/common/ScrollProgressBar";
import LoadingScreen from "../components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const stencil = Stardos_Stencil({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-stencil",
});

export const metadata: Metadata = {
  title: "EV-ONN Charging Solutions | Powering the Future of EV Infrastructure",
  description: "Complete EV Charging Solutions – From Smart Chargers to Full EV Station Setup. Specializing in AC/DC Chargers, Transformers, and HVLS Fans.",
  keywords: "EV Charging, EV Station Setup, AC Chargers, DC Fast Chargers, EV Infrastructure, Transformers, HVLS Fans, EV-ONN",
  icons: {
    icon: "/ev-logo-icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${stencil.variable} font-sans bg-background text-secondary antialiased overflow-x-hidden`}>
        <LoadingScreen />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
