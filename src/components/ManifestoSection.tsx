import { motion } from "framer-motion";

export default function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="bg-white py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left - Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7"
          >
            <span className="text-brand-yellow text-9xl lg:text-[12rem] font-display font-bold leading-none">
              "
            </span>
            <h2 className="font-display text-[clamp(1.5rem,4vw,3rem)] font-semibold leading-[1.2] text-brand-black -mt-16 lg:-mt-24">
              Email was never
              <br />
              the problem.{" "}
              <span className="text-brand-muted">
                The inbox
                <br />
                that forgot you're
                <br />
                human was.
              </span>
            </h2>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 space-y-6"
          >
            <p className="text-brand-muted leading-relaxed">
              We built Minmailist because every email client treats you like a
              machine. Productivity metrics. Badge counts. Infinite scroll of
              obligation.
            </p>
            <p className="text-brand-black leading-relaxed">
              <strong>Minmailist is different.</strong> It's an overlay that
              respects Gmail's power while giving you the structure you actually
              need. Splits that feel like diary tabs. A home that gives you
              closure. A sender view that gives you authority.
            </p>
            <p className="text-brand-muted leading-relaxed">
              No AI making decisions for you. No gamification of your attention.
              Just clarity when you open your inbox, and peace when you close
              it.
            </p>
            <div className="pt-6 border-t border-black/10">
              <p className="text-sm text-brand-muted uppercase tracking-widest">
                Built with intention, not just code.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
