import { motion } from "motion/react";
import { ShoppingBag, BookOpen, Briefcase, ArrowRight, Star } from "lucide-react";

export default function Monetization() {
  const products = [
    {
      id: "course",
      title: "Motorsport Engineering Basics",
      description: "A comprehensive course for aspiring engineers and hardcore F1 fans.",
      icon: <BookOpen className="text-brand-red" />,
      tag: "Coming Soon",
      price: "$149",
      image: "https://picsum.photos/seed/course/600/400"
    },
    {
      id: "merch",
      title: "Limited Edition Apparel",
      description: "High-performance gear designed for the community of speed.",
      icon: <ShoppingBag className="text-brand-blue" />,
      tag: "Pre-order",
      price: "$45+",
      image: "https://picsum.photos/seed/merch/600/400"
    },
    {
      id: "collab",
      title: "Brand Collaborations",
      description: "Partner with Creative Jon to reach a global audience of enthusiasts.",
      icon: <Briefcase className="text-white/50" />,
      tag: "Open",
      price: "Inquire",
      image: "https://picsum.photos/seed/collab/600/400"
    }
  ];

  return (
    <section id="monetization" className="py-24 relative overflow-hidden bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic mb-4">
            Future <span className="text-brand-red">Monetization</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-medium">
            Exclusive courses, premium merchandise, and strategic brand partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card p-8 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 bg-brand-red px-4 py-1 text-[8px] font-black uppercase tracking-widest">
                {product.tag}
              </div>
              
              <div className="mb-6 p-4 w-fit glass-card rounded-none group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              
              <h3 className="text-2xl font-black italic mb-4 group-hover:text-brand-red transition-colors">
                {product.title}
              </h3>
              
              <p className="text-sm text-white/60 mb-8 font-medium leading-relaxed flex-grow">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="text-xl font-black italic">{product.price}</div>
                <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer group/link">
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Background image hover effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonial Placeholder */}
        <div className="mt-24 glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-brand-red" />
          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#FF0000" className="text-brand-red" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-black italic mb-8 max-w-3xl mx-auto leading-tight">
            "Jon's technical breakdowns are the best in the game. He makes complex engineering feel like a thriller movie."
          </p>
          <div className="text-xs font-bold uppercase tracking-widest text-white/40">
            — Alex R., F1 Engineering Student
          </div>
        </div>
      </div>
    </section>
  );
}
