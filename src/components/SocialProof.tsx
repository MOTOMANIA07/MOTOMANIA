import { motion } from "motion/react";
import { Youtube, Instagram, Eye, Users } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { label: "YouTube Subscribers", value: "520K+", icon: <Youtube className="text-brand-red" /> },
    { label: "Instagram Followers", value: "185K+", icon: <Instagram className="text-brand-blue" /> },
    { label: "Total Channel Views", value: "45M+", icon: <Eye className="text-white/50" /> },
    { label: "Community Members", value: "10K+", icon: <Users className="text-white/50" /> },
  ];

  return (
    <div className="bg-brand-grey/50 border-y border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-3 rounded-none glass-card group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black italic tracking-tighter mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap overflow-hidden">
        <span className="text-[120px] font-black italic uppercase tracking-tighter">
          SPEED CREATIVITY INNOVATION PERFORMANCE ENGINEERING CULTURE SPEED CREATIVITY
        </span>
      </div>
    </div>
  );
}
