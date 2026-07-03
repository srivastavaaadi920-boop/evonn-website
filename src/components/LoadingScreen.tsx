"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./common/Logo";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            <Logo className="scale-150" />
            
            <div className="w-48 h-1 bg-gray-50 rounded-full relative overflow-hidden mt-4">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "linear" }}
                className="absolute inset-0 bg-primary"
              ></motion.div>
            </div>
            
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 animate-pulse">
              Empowering Electromobility
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
