import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import "./Waitlist.css";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call - replace with actual waitlist service
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section id="waitlist" className="waitlist section">
      <div className="container">
        <motion.div
          className="waitlist__card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="waitlist__decoration waitlist__decoration--1" />
          <div className="waitlist__decoration waitlist__decoration--2" />

          <div className="waitlist__content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Mail className="waitlist__icon" size={48} />
            </motion.div>

            <motion.h2
              className="waitlist__title heading-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready for
              <br />
              <span className="text-accent">Email Peace?</span>
            </motion.h2>

            <motion.p
              className="waitlist__subtitle text-body-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join the waitlist for early access. Be among the first to
              experience inbox clarity.
            </motion.p>

            {!isSubmitted ? (
              <motion.form
                className="waitlist__form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="waitlist__input-group">
                  <input
                    type="email"
                    className="waitlist__input input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="waitlist__button btn btn-accent btn-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Joining..."
                    ) : (
                      <>
                        Get Early Access
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
                <p className="waitlist__note text-small text-muted">
                  No spam. Unsubscribe anytime. We respect your inbox.
                </p>
              </motion.form>
            ) : (
              <motion.div
                className="waitlist__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle size={48} className="waitlist__success-icon" />
                <h3 className="waitlist__success-title">You're on the list!</h3>
                <p className="waitlist__success-text text-muted">
                  We'll notify you when Minmailist is ready. Check your inbox
                  for confirmation.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
