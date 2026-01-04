import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-brand-light py-24 lg:py-32 relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title with Vertical Text */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-1 hidden lg:flex items-start justify-center">
            <span className="vertical-text text-xs uppercase tracking-[0.3em] text-brand-muted">
              READY TO LEAD?
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-11"
          >
            <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-brand-black mb-6">
              JOIN THE REVOLUTION IN
              <br />
              <span className="yellow-mark">EMAIL MANAGEMENT</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl">
              Minmailist transforms your chaotic inbox into a structured,
              peaceful environment. We built this because every email client
              treats you like a machine.
            </p>
          </motion.div>
        </div>

        {/* Bento Features Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-8 relative overflow-hidden bento-card group"
          >
            <div className="aspect-[16/9] lg:aspect-[2/1] relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                alt="Dashboard preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-brand-yellow text-xs uppercase tracking-widest">
                  OVERLAY ARCHITECTURE
                </span>
                <h3 className="text-white font-display text-3xl lg:text-4xl font-semibold mt-2 mb-3">
                  Lives on top of Gmail
                </h3>
                <p className="text-white/60 max-w-md">
                  No DOM hacks. No injection chaos. A clean overlay that
                  respects Gmail's power while giving you the structure you
                  need.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-6 lg:col-span-4 bg-brand-black p-8 bento-card flex flex-col justify-between min-h-[300px]"
          >
            <span className="text-brand-yellow text-xs uppercase tracking-widest">
              DAILY DIGEST
            </span>
            <div>
              <span className="font-display text-7xl lg:text-8xl font-bold text-white">
                AI
              </span>
              <p className="text-white/50 text-sm mt-2">
                Routes, never decides.
                <br />
                You stay in control.
              </p>
            </div>
          </motion.div>

          {/* Yellow Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-6 lg:col-span-4 bg-brand-yellow p-8 bento-card flex flex-col justify-between min-h-[300px]"
          >
            <span className="text-brand-black/60 text-xs uppercase tracking-widest">
              KEYBOARD FIRST
            </span>
            <div>
              <span className="font-display text-5xl lg:text-6xl font-bold text-brand-black">
                ⌘
              </span>
              <p className="text-brand-black/70 text-sm mt-2">
                Full keyboard navigation.
                <br />
                Speed is everything.
              </p>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 lg:col-span-4 relative overflow-hidden bento-card group min-h-[300px]"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
              alt="Team working"
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-white/60 text-xs uppercase tracking-widest">
                PRIVACY FIRST
              </span>
              <p className="text-white font-display text-xl font-semibold mt-1">
                Your data stays yours
              </p>
            </div>
          </motion.div>

          {/* Wide Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-12 lg:col-span-4 bg-white border border-black/5 p-8 bento-card flex flex-col justify-between min-h-[200px]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center">
                <ArrowUpRight size={24} className="text-brand-black" />
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold text-brand-black">
                  Get Early Access
                </h4>
                <p className="text-brand-muted text-sm">Free during beta</p>
              </div>
            </div>
            <a
              href="#"
              className="text-brand-black font-medium text-sm uppercase tracking-widest hover:text-brand-muted transition-colors"
            >
              INSTALL NOW →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
