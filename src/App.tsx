import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import FeaturedContent from "./components/FeaturedContent";
import Categories from "./components/Categories";
import About from "./components/About";
import InstagramFeed from "./components/InstagramFeed";
import EmailCapture from "./components/EmailCapture";
import Monetization from "./components/Monetization";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-brand-black min-h-screen">
      {/* Custom Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <FeaturedContent />
        <Categories />
        <About />
        <InstagramFeed />
        <EmailCapture />
        <Monetization />
      </main>

      <Footer />
      
      <FloatingCTA />

      {/* Global Speed Lines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}
