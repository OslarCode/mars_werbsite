"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ButtonComponent = ({
  label,
  icon,
  className = "",
  onClick,
}: ButtonProps) => {
  const baseClasses =
    "px-6 py-3 rounded-md font-medium text-black bg-white/20 backdrop-blur-sm border border-white/30 " +
    "shadow-[5px_5px_rgba(231,_125,_17,_0.4),_10px_10px_rgba(231,_125,_17,_0.3),_15px_15px_rgba(231,_125,_17,_0.2),_20px_20px_rgba(231,_125,_17,_0.1),_25px_25px_rgba(231,_125,_17,_0.05)] " +
    "transition-all duration-300 flex items-center justify-center hover:scale-105 hover:bg-white/30";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {label}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};
