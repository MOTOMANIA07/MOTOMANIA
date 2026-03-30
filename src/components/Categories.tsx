import { motion } from "motion/react";
import { Zap, Car, Cpu, Film, Music, ArrowRight } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: "f1",
      title: "Formula 1 Insights",
      description: "Deep dives into race strategy, technical regulations, and driver performance.",
      icon: <Zap className="text-brand-red" />,
      image: "https://picsum.photos/seed/f1race/600/400",
      link: "https://youtube.com/@creative_jon"
    },
    {
      id: "car",
      title: "Car Culture & Reviews",
      description: "Exploring the soul of automotive design, from classics to modern supercars.",
      icon: <Car className="text-brand-blue" />,
      image: "https://picsum.photos/seed/carculture/600/400",
      link: "https://youtube.com/@creative_jon"
    },
    {
      id: "eng",
      title: "Engineering Explained",
      description: "Complex mechanics made simple. Understanding the machines that move us.",
      icon: <Cpu className="text-white/50" />,
      image: "https://picsum.photos/seed/engineering/600/400",
      link: "https://youtube.com/@creative_jon"
    },
    {
      id: "pop",
      title: "Movies & Music",
      description: "The intersection of pop culture and the automotive world.",
      icon: <Film className="text-white/50" />,
      image: "https://picsum.photos/seed/movies/600/400",
      link: "https://youtube.com/@creative_jon"
    }
  ];

  return (
    <section id="categories" className="py-24 bg-brand-grey/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic mb-4">
            Content <span className="text-brand-blue">Categories</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-medium">
            Explore the different facets of speed, creativity, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 glass-card overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 p-3 w-fit glass-card rounded-none group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black italic mb-2 group-hover:text-brand-blue transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-white/60 mb-6 max-w-sm font-medium leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-blue group-hover:text-white transition-colors">
                  <span>Explore Playlist</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
