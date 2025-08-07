"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    Icon: Github,
    url: "https://github.com",
    color: "hover:text-green-700",
  },
  {
    name: "Twitter",
    Icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-blue-400",
  },
  {
    name: "LinkedIn",
    Icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    url: "https://instagram.com",
    color: "hover:text-pink-500",
  },
  {
    name: "YouTube",
    Icon: Youtube,
    url: "https://youtube.com",
    color: "hover:text-red-500",
  },
];

export const SocialIcons = ({ size = "default" }) => {
  const iconSize = {
    small: "w-8 h-8",
    default: "w-10 h-10",
    large: "w-12 h-12",
  };

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      {socialLinks.map(({ name, Icon, url, color }) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className={`text-gray-600 transition-colors ${color} ${iconSize[size]}`}
        >
          <Icon className="w-full h-full" />
        </motion.a>
      ))}
    </div>
  );
};
