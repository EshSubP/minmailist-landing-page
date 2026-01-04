import { motion } from "framer-motion";
import { Inbox, Home, Briefcase, Users } from "lucide-react";
import "./Features.css";

const features = [
  {
    id: "inbox",
    number: "01",
    icon: Inbox,
    title: "Superior Inbox",
    subtitle: "Your spine.",
    description:
      "An inbox that doesn't collapse under volume. Overlay-first architecture with splits that feel like diary tabs.",
    highlights: [
      "Sidebar-first navigation",
      "Splits > Labels",
      "AI routes, never decides",
    ],
    color: "#E8DD1D",
  },
  {
    id: "home",
    number: "02",
    icon: Home,
    title: "Superior Home",
    subtitle: "Your emotional differentiator.",
    description:
      "A place where email ends. Not analytics. Not productivity porn. Start with clarity, end without guilt.",
    highlights: [
      "Zen Mode experience",
      "Replace Inbox Zero",
      "Daily closure ritual",
    ],
    color: "#A3E635",
  },
  {
    id: "workspace",
    number: "03",
    icon: Briefcase,
    title: "Simple Workspace",
    subtitle: "Action is human.",
    description:
      "A place to think after you've seen the email. Planning needs context. AI does not assign obligation.",
    highlights: [
      "No false urgency",
      "Respects responsibility",
      "Not Jira, not Todoist",
    ],
    color: "#60A5FA",
  },
  {
    id: "sender",
    number: "04",
    icon: Users,
    title: "Sender View",
    subtitle: "Your cleanup surface.",
    description:
      "Newsletter weed overgrowth solved. Control, not reading. Mute. Unsubscribe. Gate. Done.",
    highlights: ["Bulk power", "Orthogonal axis", "Authority over inbox"],
    color: "#F472B6",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        {/* Section Header */}
        <div className="features__header">
          <motion.span
            className="features__label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The System
          </motion.span>
          <motion.h2
            className="features__title heading-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Four Pillars.
            <br />
            <span className="text-accent">One Loop.</span>
          </motion.h2>
          <motion.p
            className="features__subtitle text-body-lg text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every pillar reinforces the others. Nothing is redundant. Nothing
            competes. Nothing leaks responsibility.
          </motion.p>
        </div>

        {/* Features Grid - Masonry style */}
        <motion.div
          className="features__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`features__card features__card--${index + 1}`}
              variants={itemVariants}
            >
              <div className="features__card-header">
                <span className="features__card-number">{feature.number}</span>
                <div
                  className="features__card-icon"
                  style={{ background: feature.color }}
                >
                  <feature.icon size={24} />
                </div>
              </div>

              <h3 className="features__card-title heading-4">
                {feature.title}
              </h3>
              <p className="features__card-subtitle">{feature.subtitle}</p>
              <p className="features__card-description text-body">
                {feature.description}
              </p>

              <ul className="features__card-highlights">
                {feature.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Loop Visualization */}
        <motion.div
          className="features__loop"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="features__loop-content">
            <span className="features__loop-arrow">→</span>
            <span>Inbox</span>
            <span className="features__loop-arrow">→</span>
            <span>Views</span>
            <span className="features__loop-arrow">→</span>
            <span>Workspace</span>
            <span className="features__loop-arrow">→</span>
            <span>Sender</span>
            <span className="features__loop-arrow">→</span>
            <span className="features__loop-highlight">Home</span>
            <span className="features__loop-arrow">↻</span>
          </div>
        </motion.div>
      </div>

      {/* Vertical text decoration */}
      <div className="features__vertical-text vertical-text">Four Pillars</div>
    </section>
  );
}
