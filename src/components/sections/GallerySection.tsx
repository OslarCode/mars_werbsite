"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Masonry from "react-masonry-css";

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

export const GallerySection = ({ images }: { images: string[] }) => (
  <section className="horizontal-section bg-gray-100 p-6 overflow-hidden">
    <LazyMotion features={domAnimation}>
      <div className="w-full max-w-7xl h-full mx-auto overflow-y-auto pr-2">
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((src, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="overflow-hidden"
            >
              <img
                src={src}
                alt={`Mars Gallery ${index + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-md transition-transform duration-300"
                loading="lazy"
              />
            </m.div>
          ))}
        </Masonry>
      </div>
    </LazyMotion>
  </section>
);
