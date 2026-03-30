import { motion, AnimatePresence } from "motion/react";
import { Youtube, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a
            href="https://youtube.com/@creative_jon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-brand-red text-white px-6 py-4 rounded-none font-black text-xs uppercase tracking-widest hover:scale-105 transition-all duration-300 neon-glow-red group"
          >
            <Youtube size={20} />
            <span>Subscribe Now</span>
            <div className="absolute -top-2 -right-2 bg-white text-brand-red text-[8px] font-black px-2 py-1 rounded-none animate-bounce">
              520K+
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
