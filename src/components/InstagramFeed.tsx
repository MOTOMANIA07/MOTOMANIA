import { motion } from "motion/react";
import { Instagram, Heart, MessageCircle, ArrowRight } from "lucide-react";

export default function InstagramFeed() {
  const posts = [
    { id: "p1", image: "https://picsum.photos/seed/insta1/600/600", likes: "12.4K", comments: "452" },
    { id: "p2", image: "https://picsum.photos/seed/insta2/600/600", likes: "8.2K", comments: "210" },
    { id: "p3", image: "https://picsum.photos/seed/insta3/600/600", likes: "15.1K", comments: "890" },
    { id: "p4", image: "https://picsum.photos/seed/insta4/600/600", likes: "9.5K", comments: "320" },
    { id: "p5", image: "https://picsum.photos/seed/insta5/600/600", likes: "11.2K", comments: "540" },
    { id: "p6", image: "https://picsum.photos/seed/insta6/600/600", likes: "7.8K", comments: "180" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-black italic mb-4">
              Instagram <span className="text-brand-blue">Feed</span>
            </h2>
            <p className="text-white/50 max-w-md font-medium">
              Daily insights, behind-the-scenes, and car culture updates.
            </p>
          </div>
          <a
            href="https://www.instagram.com/creative___jon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-brand-blue font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group"
          >
            <span>Follow @creative___jon</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-square glass-card overflow-hidden cursor-pointer"
            >
              <img
                src={post.image}
                alt="Instagram Post"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1 text-white font-bold text-sm">
                  <Heart size={16} fill="white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1 text-white font-bold text-sm">
                  <MessageCircle size={16} fill="white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
