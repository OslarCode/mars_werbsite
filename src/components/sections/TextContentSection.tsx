"use client";

import { motion } from "framer-motion";
import { FiAward, FiBox, FiCode } from "react-icons/fi";

const cards = [
  {
    icon: <FiAward className="text-3xl text-orange-600" />,
    title: "Our Achievements",
    text: "With over 50 successful missions to Mars, we've established ourselves as leaders in interplanetary exploration.",
  },
  {
    icon: <FiBox className="text-3xl text-orange-600" />,
    title: "Equipment",
    text: "State-of-the-art technology designed to withstand Martian conditions while providing maximum comfort.",
  },
  {
    icon: <FiCode className="text-3xl text-orange-600" />,
    title: "Technology",
    text: "Cutting-edge navigation and life support systems powered by AI and quantum computing.",
  },
];

export const TextContentSection = () => {
  return (
    <section className="horizontal-section bg-[#FAF3E0] p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 cursor-default hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3">
              {card.icon}
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
            <p className="text-gray-700">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
