import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import "./Philosophy.css";

const philosophyPoints = [
  {
    title: "AI routes, never decides",
    description: "Automation handles sorting. You keep the judgment.",
  },
  {
    title: "Views are visual, not structural",
    description:
      "Your emails stay where they are. Only how you see them changes.",
  },
  {
    title: "Action is human",
    description:
      "No AI-assigned tasks. No false urgency. You own your obligations.",
  },
  {
    title: "Closure, not Inbox Zero",
    description:
      "End the day at peace, not at zero. Different goal, better outcome.",
  },
];

const notThis = [
  "Productivity porn",
  "Feature bloat",
  "AI anxiety",
  "Dashboard overload",
  "Another task manager",
];

export function Philosophy() {
  return (
    <section id="philosophy" className="philosophy section">
      <div className="container">
        <div className="philosophy__grid">
          {/* Left - What we believe */}
          <motion.div
            className="philosophy__beliefs"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="philosophy__label">Philosophy</span>
            <h2 className="philosophy__title heading-3">What We Believe</h2>

            <div className="philosophy__points">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="philosophy__point"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="philosophy__point-icon">
                    <Check size={20} />
                  </div>
                  <div className="philosophy__point-content">
                    <h4 className="philosophy__point-title">{point.title}</h4>
                    <p className="philosophy__point-desc text-muted">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - What we're not */}
          <motion.div
            className="philosophy__not"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="philosophy__not-card">
              <h3 className="philosophy__not-title">Not This.</h3>
              <ul className="philosophy__not-list">
                {notThis.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <X size={18} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="philosophy__not-footer">
                <p>
                  We built one coherent system.
                  <br />
                  Not 4 features fighting each other.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
