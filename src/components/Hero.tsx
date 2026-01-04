import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-brand-light relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between bg-brand-light/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center">
            <span className="font-display font-bold text-brand-black">M</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#pillars"
            className="text-brand-muted hover:text-brand-black transition-colors"
          >
            PILLARS
          </a>
          <a
            href="#features"
            className="text-brand-muted hover:text-brand-black transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#manifesto"
            className="text-brand-muted hover:text-brand-black transition-colors"
          >
            MANIFESTO
          </a>
        </div>
        <a
          href="#"
          className="px-4 py-2 bg-brand-black text-white text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          GET EARLY ACCESS
        </a>
      </nav>

      {/* Main Hero Grid */}
      <div className="pt-20 min-h-screen grid grid-cols-12 gap-0">
        {/* Left Column - Massive Typography */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="headline-massive text-[clamp(3rem,12vw,8rem)] text-brand-black mb-6">
              BE A<br />
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "2px #0A0A0A" }}
              >
                DROP,
              </span>
              <br />
              START A<br />
              RIPPLE
            </h1>
            <p className="text-brand-muted text-lg max-w-md mb-8 leading-relaxed">
              Made for elite humans who refuse to let email control their lives.
              Not a productivity hack—a{" "}
              <span className="text-brand-black font-medium">
                philosophy shift.
              </span>
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="group flex items-center gap-2 px-6 py-3 bg-brand-yellow text-brand-black font-medium hover:bg-yellow-300 transition-colors"
              >
                EXPLORE
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <span className="text-sm text-brand-muted">Chrome Extension</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Bento Image Grid */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 grid-rows-3 gap-1 h-[80vh] lg:h-screen">
          {/* Large top image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-2 row-span-2 relative overflow-hidden image-overlay bento-card"
          >
            <img
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071"
              alt="Focus workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="text-white/60 text-xs uppercase tracking-widest">
                THE INBOX
              </span>
              <h3 className="text-white font-display text-2xl lg:text-4xl font-semibold mt-1">
                Structure you can
                <br />
                live with
              </h3>
            </div>
          </motion.div>

          {/* Bottom left - Yellow card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brand-yellow flex flex-col justify-between p-6 bento-card"
          >
            <span className="text-xs uppercase tracking-widest text-brand-black/60">
              ZEN MODE
            </span>
            <div>
              <span className="font-display text-6xl lg:text-7xl font-bold text-brand-black">
                0
              </span>
              <p className="text-brand-black/70 text-sm mt-1">inbox anxiety</p>
            </div>
          </motion.div>

          {/* Bottom right - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative overflow-hidden image-overlay bento-card"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="text-white text-xs uppercase tracking-widest">
                SIMPLE WORKSPACE
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Text Accent */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2">
        <span className="vertical-text text-xs uppercase tracking-[0.3em] text-brand-muted">
          MINMAILIST • GMAIL EXTENSION • 2026
        </span>
      </div>
    </section>
  );
}
