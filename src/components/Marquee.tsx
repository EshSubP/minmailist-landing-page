import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "BE A DROP, START A RIPPLE",
    "•",
    "SUPERIOR INBOX",
    "•",
    "ZEN HOME",
    "•",
    "SIMPLE WORKSPACE",
    "•",
    "SENDER CONTROL",
    "•",
  ];

  return (
    <div className="bg-brand-yellow py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, idx) => (
              <span
                key={idx}
                className={`mx-4 font-display text-xl font-semibold text-brand-black ${
                  item === "•" ? "text-brand-black/30" : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
