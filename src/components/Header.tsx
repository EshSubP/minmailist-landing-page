import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Header.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${isScrolled ? "header--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header__container container">
        {/* Logo */}
        <a href="/" className="header__logo">
          <span className="header__logo-icon">M</span>
          <span className="header__logo-text">minmailist</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <a href="#features" className="header__nav-link">
            Features
          </a>
          <a href="#philosophy" className="header__nav-link">
            Philosophy
          </a>
          <a href="#waitlist" className="header__nav-link">
            Get Early Access
          </a>
        </nav>

        {/* CTA Button */}
        <a href="#waitlist" className="header__cta btn btn-accent">
          Join Waitlist
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="header__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="header__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#philosophy" onClick={() => setIsMobileMenuOpen(false)}>
              Philosophy
            </a>
            <a
              href="#waitlist"
              className="btn btn-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
