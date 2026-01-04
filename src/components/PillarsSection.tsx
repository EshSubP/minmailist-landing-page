import { motion } from "framer-motion";

const pillars = [
  {
    id: 1,
    number: "01",
    title: "SUPERIOR INBOX",
    subtitle: "This is your spine.",
    description:
      "An inbox that stays readable, even when it's huge. Overlay, not DOM hack. Sidebar-first. Splits > labels.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
  },
  {
    id: 2,
    number: "02",
    title: "SUPERIOR HOME",
    subtitle: "Your emotional differentiator.",
    description:
      "A place where email ends. Not analytics. Not productivity porn. Start with clarity, end without guilt.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
  },
  {
    id: 3,
    number: "03",
    title: "SIMPLE WORKSPACE",
    subtitle: "Where you drew the boundary.",
    description:
      "Action is human. Planning needs context. AI does not assign obligation. A place to think after you've seen the email.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
  },
  {
    id: 4,
    number: "04",
    title: "SENDER VIEW",
    subtitle: "Cleanup + control surface.",
    description:
      "Newsletter overgrowth? Repeated senders? This view is about control, not reading. Mute. Unsubscribe. Gate. Done.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="bg-brand-black text-white py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-brand-yellow text-sm uppercase tracking-[0.3em] mb-4 block">
            THE PHILOSOPHY
          </span>
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.9] tracking-tight">
            FOUR PILLARS,
            <br />
            <span className="text-brand-yellow">ONE SYSTEM</span>
          </h2>
        </motion.div>

        {/* Pillars Grid - Asymmetric like reference */}
        <div className="space-y-1">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid grid-cols-12 gap-1 group ${
                index % 2 === 1 ? "direction-alternate" : ""
              }`}
            >
              {/* Number + Title */}
              <div
                className={`col-span-12 lg:col-span-4 bg-brand-gray p-8 lg:p-12 flex flex-col justify-between min-h-[300px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <span className="text-brand-yellow font-display text-6xl lg:text-8xl font-bold opacity-30">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 text-sm uppercase tracking-widest">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div
                className={`col-span-12 lg:col-span-5 relative overflow-hidden min-h-[300px] ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Description */}
              <div
                className={`col-span-12 lg:col-span-3 bg-brand-gray/50 p-8 lg:p-12 flex items-center ${
                  index % 2 === 1 ? "lg:order-3" : ""
                }`}
              >
                <p className="text-white/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Loop Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-white/40 text-sm uppercase tracking-[0.2em]">
            INBOX → VIEWS → WORKSPACE → SENDER → HOME → REPEAT
          </p>
          <p className="text-white/20 text-xs mt-4">
            Nothing is redundant. Nothing competes. Nothing leaks
            responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
