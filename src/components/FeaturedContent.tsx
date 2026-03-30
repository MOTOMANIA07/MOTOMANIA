import { motion } from "motion/react";
import { Play, Eye, Clock, ArrowRight } from "lucide-react";

export default function FeaturedContent() {
  const videos = [
    {
      id: "v1",
      title: "How F1 Engines Work: The Science of 1000HP",
      thumbnail: "https://picsum.photos/seed/f1engine/800/450",
      views: "1.2M",
      duration: "15:42",
      category: "Engineering",
      link: "https://youtube.com/@creative_jon"
    },
    {
      id: "v2",
      title: "The Most Underrated Supercars of 2024",
      thumbnail: "https://picsum.photos/seed/supercar/800/450",
      views: "850K",
      duration: "12:15",
      category: "Car Culture",
      link: "https://youtube.com/@creative_jon"
    },
    {
      id: "v3",
      title: "Why Red Bull is Dominating F1 Aerodynamics",
      thumbnail: "https://picsum.photos/seed/redbull/800/450",
      views: "2.1M",
      duration: "18:30",
      category: "F1 Insights",
      link: "https://youtube.com/@creative_jon"
    },
    {
      id: "v4",
      title: "The Future of Electric Motorsports",
      thumbnail: "https://picsum.photos/seed/ev/800/450",
      views: "420K",
      duration: "10:55",
      category: "Innovation",
      link: "https://youtube.com/@creative_jon"
    }
  ];

  return (
    <section id="videos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-black italic mb-4">
              Featured <span className="text-brand-red">Content</span>
            </h2>
            <p className="text-white/50 max-w-md font-medium">
              The latest breakdowns, reviews, and insights from the world of speed and technology.
            </p>
          </div>
          <a
            href="https://youtube.com/@creative_jon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-brand-red font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group"
          >
            <span>View All Videos</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video glass-card overflow-hidden mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center neon-glow-red">
                    <Play size={20} fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-brand-black/80 px-2 py-1 text-[10px] font-bold">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-brand-red px-2 py-1 text-[8px] font-black uppercase tracking-widest">
                  {video.category}
                </div>
              </div>
              
              <h3 className="text-sm font-bold leading-tight mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
                {video.title}
              </h3>
              
              <div className="flex items-center space-x-4 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                <div className="flex items-center space-x-1">
                  <Eye size={12} />
                  <span>{video.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={12} />
                  <span>2 days ago</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
