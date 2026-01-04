import { motion } from "framer-motion";
import { ArrowUpRight, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* CTA Section */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-12 gap-8 items-end"
        >
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.9] tracking-tight">
              BE A DROP,
              <br />
              <span className="text-brand-yellow">START A RIPPLE</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow text-brand-black font-semibold hover:bg-yellow-300 transition-colors w-full justify-center"
            >
              GET EARLY ACCESS
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
            <p className="text-white/40 text-sm mt-4 text-center">
              Free during beta • Chrome Extension
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center">
                <span className="font-display font-bold text-brand-black">
                  M
                </span>
              </div>
              <span className="font-display font-medium">minmailist</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-yellow hover:text-brand-yellow transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-yellow hover:text-brand-yellow transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © 2026 Minmailist. All rights reserved.
            </p>
            <p className="text-white/30 text-sm">
              Made with intention, not just code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
