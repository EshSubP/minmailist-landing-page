import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-light/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-yellow rounded-sm flex items-center justify-center">
              <span className="text-brand-black font-bold text-lg">M</span>
            </div>
            <span className="font-semibold text-brand-black tracking-tight">
              minmailist
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-brand-muted hover:text-brand-black transition-colors"
            >
              Features
            </a>
            <a
              href="#pillars"
              className="text-sm text-brand-muted hover:text-brand-black transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#manifesto"
              className="text-sm text-brand-muted hover:text-brand-black transition-colors"
            >
              Manifesto
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-brand-muted hover:text-brand-black transition-colors"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-brand-black text-white text-sm font-medium rounded-full hover:bg-brand-dark transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-brand-light border-t border-black/5"
        >
          <div className="px-6 py-4 space-y-4">
            <a
              href="#features"
              className="block text-sm text-brand-muted hover:text-brand-black"
            >
              Features
            </a>
            <a
              href="#pillars"
              className="block text-sm text-brand-muted hover:text-brand-black"
            >
              Philosophy
            </a>
            <a
              href="#manifesto"
              className="block text-sm text-brand-muted hover:text-brand-black"
            >
              Manifesto
            </a>
            <hr className="border-black/10" />
            <a href="#" className="block text-sm text-brand-muted">
              Login
            </a>
            <a
              href="#"
              className="block w-full text-center px-4 py-2 bg-brand-black text-white text-sm font-medium rounded-full"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
