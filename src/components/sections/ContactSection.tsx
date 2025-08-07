"use client";

import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ButtonComponent } from "@/components/ButtonComponent";
import { SocialIcons } from "@/components/SocialIcons";

export const ContactSection = () => {
  const contactItems = [
    {
      icon: <FiMail className="text-2xl" />,
      text: "contact@mars-exploration.com",
    },
    { icon: <FiPhone className="text-2xl" />, text: "+1 (555) 123-4567" },
    {
      icon: <FiMapPin className="text-2xl" />,
      text: "Mars Colony 1, Red Planet",
    },
  ];

  return (
    <section className="horizontal-section flex items-center justify-center bg-[#e77d11] px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-white bg-black bg-opacity-20 p-3 rounded-full">
                  {item.icon}
                </div>
                <p className="text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="bg-white p-6 rounded-xl shadow-2xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
          <ButtonComponent
            label="Send Message"
            icon={<FiSend className="ml-2" />}
          />
          <div className="pt-6">
            <SocialIcons size="small" />
          </div>
        </form>
      </motion.div>
    </section>
  );
};
