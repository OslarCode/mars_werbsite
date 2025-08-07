"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiMail,
  FiSend,
  FiPhone,
  FiMapPin,
  FiUser,
  FiClock,
  FiThumbsUp,
  FiSmile,
  FiShoppingCart,
} from "react-icons/fi";

export const IconGridSection = () => {
  const icons = [
    { icon: <FiCheckCircle />, text: "Verified Missions" },
    { icon: <FiMail />, text: "Contact Support" },
    { icon: <FiSend />, text: "Fast Communication" },
    { icon: <FiPhone />, text: "24/7 Assistance" },
    { icon: <FiMapPin />, text: "Precise Locations" },
    { icon: <FiUser />, text: "Expert Guides" },
    { icon: <FiClock />, text: "Time Efficient" },
    { icon: <FiThumbsUp />, text: "High Satisfaction" },
    { icon: <FiSmile />, text: "Friendly Service" },
    { icon: <FiShoppingCart />, text: "Easy Booking" },
  ];

  return (
    <section className="horizontal-section snap-start w-screen h-screen flex items-center justify-center bg-[#c1440e] p-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl"
      >
        {icons.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 bg-black bg-opacity-20 rounded-xl text-white text-center"
          >
            <div className="text-3xl mb-2 p-3 bg-white bg-opacity-10 rounded-full">
              {item.icon}
            </div>
            <p className="text-sm font-medium">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
