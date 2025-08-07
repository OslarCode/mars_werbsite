"use client";
import { motion } from "framer-motion";
import { ButtonComponent } from "@/components/ButtonComponent";

export const HeroSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="horizontal-section flex items-center bg-[#f0e7e7]"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
      <div className="h-full">
        <img
          src="https://unsplash.com/photos/ORCtEM5qyrg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1hcnN8ZXN8MHwxfHx8MTczODg2MjU0N3ww&force=true&w=1920"
          alt="Mars Landscape"
          className="w-full h-full object-cover object-right"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center p-10">
        <h2 className="text-4xl font-bold mb-4">Hello My Name Is Mars</h2>
        <p className="text-lg text-gray-700 mb-6">
          Explore the red planet like never before.
        </p>
        <ButtonComponent variant="primary" label="Explore More" />
      </div>
    </div>
  </motion.section>
);
