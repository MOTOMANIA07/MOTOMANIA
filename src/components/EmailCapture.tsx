import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-brand-grey/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black italic mb-6">
              Get Exclusive <span className="text-brand-red">F1 Insights</span>
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed mb-8">
              Join the inner circle. Receive weekly breakdowns of race strategy, technical innovations, and creator tips that I don't share anywhere else.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white/40">
                <CheckCircle size={16} className="text-brand-red" />
                <span>No Spam</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white/40">
                <CheckCircle size={16} className="text-brand-red" />
                <span>Exclusive Content</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white/40">
                <CheckCircle size={16} className="text-brand-red" />
                <span>Weekly Updates</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-4">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jon@example.com"
                    required
                    className="w-full bg-brand-black/50 border border-white/10 px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 bg-brand-red text-white px-8 py-4 rounded-none font-black text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 neon-glow-red"
                >
                  <span>Join the Inner Circle</span>
                  <Send size={18} />
                </button>
                <p className="text-[10px] text-center text-white/30 font-medium italic">
                  By subscribing, you agree to our privacy policy and terms of service.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-brand-red" />
                </div>
                <h3 className="text-2xl font-black italic mb-2">Welcome to the Team!</h3>
                <p className="text-white/60 font-medium">Check your inbox for your first exclusive insight.</p>
              </motion.div>
            )}
            
            {/* Decorative speed lines */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-brand-red opacity-50" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-brand-red opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
