import { motion } from "motion/react";
import { Youtube, Instagram, Mail, ArrowUp, Send } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background speed lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="text-3xl font-display font-black tracking-tighter text-brand-red italic mb-6 block">
              CREATIVE JON
            </a>
            <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">
              Where speed meets creativity. Breaking down the engineering of F1, the soul of car culture, and the science of innovation.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://youtube.com/@creative_jon"
                className="p-3 glass-card rounded-none hover:text-brand-red transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/creative___jon"
                className="p-3 glass-card rounded-none hover:text-brand-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@creativejon.com"
                className="p-3 glass-card rounded-none hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Videos", "Categories", "About", "Shop", "Community"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-bold uppercase tracking-widest text-white/60 hover:text-brand-red transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-8">Resources</h4>
            <ul className="space-y-4">
              {["F1 Explainers", "Car Reviews", "Engineering 101", "Creator Tips", "Sponsorships"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-bold uppercase tracking-widest text-white/60 hover:text-brand-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-8">Newsletter</h4>
            <p className="text-white/40 text-xs font-medium mb-6">
              Get the latest insights delivered to your inbox.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-brand-grey border border-white/10 px-4 py-3 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors font-medium"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-red hover:text-white transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">
            © 2026 Creative Jon. All Rights Reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-brand-red transition-colors group"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Decorative large text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.02] whitespace-nowrap">
        <span className="text-[180px] font-black italic uppercase tracking-tighter leading-none translate-y-1/4 inline-block">
          CREATIVE JON
        </span>
      </div>
    </footer>
  );
}
