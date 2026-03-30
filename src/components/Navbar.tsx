import { motion } from "motion/react";
import { Youtube, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Videos", href: "#videos" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" },
    { name: "Shop", href: "#monetization" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card border-none bg-brand-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-display font-black tracking-tighter text-brand-red italic">
              CREATIVE JON
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-brand-red transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://youtube.com/@creative_jon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-4 py-2 rounded-none font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all duration-300 neon-glow-red"
              >
                Subscribe
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-red transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card border-x-0 border-t-0"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:text-brand-red"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://youtube.com/@creative_jon"
              className="block px-3 py-2 text-base font-bold text-brand-red"
            >
              SUBSCRIBE NOW
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
