import { motion } from "motion/react";
import { Youtube, Instagram, Mail, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-red to-brand-blue rounded-none blur opacity-10" />
            <div className="relative aspect-square glass-card overflow-hidden">
              <img
                src="https://picsum.photos/seed/jon/800/800"
                alt="Creative Jon"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l-8 border-b-8 border-brand-red opacity-30" />
            <div className="absolute -top-10 -right-10 w-40 h-40 border-r-8 border-t-8 border-brand-blue opacity-30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black italic mb-8">
              The <span className="text-brand-red">Story</span> Behind The <span className="text-brand-blue">Speed</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg font-medium leading-relaxed">
              <p>
                Hey, I'm <span className="text-white font-bold">Jon</span>. My life has always been at the intersection of motorsports, engineering, and storytelling. From the roar of a V10 engine to the intricate aerodynamics of a modern F1 car, I've been obsessed with how things work and why they move us.
              </p>
              <p>
                What started as a passion project in my garage has grown into a global community of over half a million enthusiasts. My goal is simple: to break down the most complex machines and the most thrilling stories in a way that's as exciting as the race itself.
              </p>
              <p>
                Whether you're an aspiring engineer, a hardcore F1 fan, or just someone who loves a good car review, there's a place for you here. Let's explore the future of speed together.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <div className="flex items-center space-x-4">
                <a
                  href="https://youtube.com/@creative_jon"
                  className="p-3 glass-card rounded-none hover:text-brand-red transition-colors"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="https://www.instagram.com/creative___jon"
                  className="p-3 glass-card rounded-none hover:text-brand-blue transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="mailto:contact@creativejon.com"
                  className="p-3 glass-card rounded-none hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
              
              <div className="h-px w-12 bg-white/10 hidden md:block" />
              
              <a
                href="mailto:contact@creativejon.com"
                className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center space-x-2"
              >
                <span>For Brand Collaborations</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
