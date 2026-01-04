import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container container">
        {/* Left side - Text */}
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">
              <Sparkles size={14} />
              Coming Soon
            </span>
          </motion.div>

          <motion.h1
            className="hero__title heading-giant"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            BE MINIMAL,
            <br />
            <span className="hero__title-accent">START CLARITY</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle text-body-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            An inbox that doesn't collapse under volume. Structure you can live
            with. Email peace, finally.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#waitlist" className="btn btn-accent btn-lg">
              Get Early Access
              <ArrowRight size={20} />
            </a>
            <a href="#features" className="btn btn-outline btn-lg">
              See Features
            </a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-number">4</span>
              <span className="hero__stat-label">Core Pillars</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">0</span>
              <span className="hero__stat-label">AI Anxiety</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">∞</span>
              <span className="hero__stat-label">Email Peace</span>
            </div>
          </motion.div>
        </div>

        {/* Right side - Visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero__inbox-preview">
            {/* Minimalist inbox mockup */}
            <div className="hero__inbox-header">
              <Mail size={20} />
              <span>Inbox</span>
              <span className="hero__inbox-count">3 unread</span>
            </div>
            <div className="hero__inbox-emails">
              <div className="hero__email hero__email--unread">
                <div className="hero__email-avatar">S</div>
                <div className="hero__email-content">
                  <div className="hero__email-sender">Stripe</div>
                  <div className="hero__email-subject">
                    Your invoice is ready
                  </div>
                </div>
                <div className="hero__email-time">2m</div>
              </div>
              <div className="hero__email hero__email--unread">
                <div className="hero__email-avatar">G</div>
                <div className="hero__email-content">
                  <div className="hero__email-sender">GitHub</div>
                  <div className="hero__email-subject">Pull request merged</div>
                </div>
                <div className="hero__email-time">15m</div>
              </div>
              <div className="hero__email hero__email--unread">
                <div className="hero__email-avatar">T</div>
                <div className="hero__email-content">
                  <div className="hero__email-sender">Team</div>
                  <div className="hero__email-subject">Weekly sync notes</div>
                </div>
                <div className="hero__email-time">1h</div>
              </div>
              <div className="hero__email">
                <div className="hero__email-avatar">A</div>
                <div className="hero__email-content">
                  <div className="hero__email-sender">AWS</div>
                  <div className="hero__email-subject">Monthly report</div>
                </div>
                <div className="hero__email-time">3h</div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="hero__floating hero__floating--1">
            <span>Splits</span>
          </div>
          <div className="hero__floating hero__floating--2">
            <span>Zen Mode</span>
          </div>
        </motion.div>
      </div>

      {/* Vertical text decoration */}
      <div className="hero__vertical-text vertical-text">Email Reimagined</div>
    </section>
  );
}
