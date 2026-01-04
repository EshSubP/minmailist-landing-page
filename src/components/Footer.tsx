import { Twitter, Github, Mail } from "lucide-react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      {/* Marquee Banner */}
      <div className="footer__marquee marquee-container">
        <div className="marquee-content">
          <span>Email Peace</span>
          <span>•</span>
          <span>Four Pillars</span>
          <span>•</span>
          <span>Inbox Clarity</span>
          <span>•</span>
          <span>Zen Mode</span>
          <span>•</span>
          <span>No Anxiety</span>
          <span>•</span>
          <span>Email Peace</span>
          <span>•</span>
          <span>Four Pillars</span>
          <span>•</span>
          <span>Inbox Clarity</span>
          <span>•</span>
          <span>Zen Mode</span>
          <span>•</span>
          <span>No Anxiety</span>
          <span>•</span>
        </div>
      </div>

      <div className="footer__main container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <span className="footer__logo-icon">M</span>
              <span className="footer__logo-text">minmailist</span>
            </a>
            <p className="footer__tagline text-muted">
              Your inbox, finally at peace.
            </p>
            <div className="footer__social">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a href="mailto:hello@minmailist.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__links">
            <div className="footer__link-group">
              <h4 className="footer__link-title">Product</h4>
              <a href="#features">Features</a>
              <a href="#philosophy">Philosophy</a>
              <a href="#waitlist">Waitlist</a>
            </div>

            <div className="footer__link-group">
              <h4 className="footer__link-title">Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>

            <div className="footer__link-group">
              <h4 className="footer__link-title">Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="text-small text-muted">
            © {new Date().getFullYear()} Minmailist. All rights reserved.
          </p>
          <p className="text-small text-muted">
            Made with intention, not noise.
          </p>
        </div>
      </div>
    </footer>
  );
}
