import { motion } from "motion/react";
import { Youtube, Instagram, Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/f1/1920/1080?blur=10')] bg-cover bg-center opacity-10 grayscale" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-red">New Video Out Now</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 italic">
              Where <span className="text-brand-red">Speed</span> Meets <span className="text-brand-blue">Creativity</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg font-medium leading-relaxed">
              Breaking down the engineering of F1, the soul of car culture, and the science of innovation. Join the community of 500K+ enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://youtube.com/@creative_jon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-brand-red text-white px-8 py-4 rounded-none font-black text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 neon-glow-red group"
              >
                <Youtube size={20} />
                <span>Subscribe on YouTube</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="https://www.instagram.com/creative___jon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-none font-black text-sm uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all duration-300 group"
              >
                <Instagram size={20} />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-blue rounded-none blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative aspect-video glass-card overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder for latest video
                title="Latest Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 pointer-events-none border-[10px] border-brand-black/20" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-brand-red opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-brand-blue opacity-50" />
          </motion.div>
        </div>
      </div>
      
      {/* Speed lines animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-brand-red to-transparent animate-speed-line" />
      </div>
    </section>
  );
}
