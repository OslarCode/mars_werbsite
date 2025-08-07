"use client";

import { HorizontalScrollContainer } from "@/components/shared/HorizontalScrollContainer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FullscreenImageSection } from "@/components/sections/FullscreenImageSection";
import { IconGridSection } from "@/components/sections/IconGridSection";
import { TextContentSection } from "@/components/sections/TextContentSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
// Importar otras secciones según sea necesario

const galleryImages = [
  "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?_gl=1*1en2yvq*_ga*NTU0MzY2ODc1LjE3NTQ1NjQ3MDA.*_ga_8JE65Q40S6*czE3NTQ1NjQ2OTkkbzEkZzEkdDE3NTQ1NjUwODAkajEzJGwwJGgw", // Foto de Pixabay: https://www.pexels.com/es-es/foto/robot-gris-y-blanco-73910/
  "https://images.pexels.com/photos/12441849/pexels-photo-12441849.jpeg?_gl=1*1ruzmq6*_ga*NTU0MzY2ODc1LjE3NTQ1NjQ3MDA.*_ga_8JE65Q40S6*czE3NTQ1NjQ2OTkkbzEkZzEkdDE3NTQ1NjUwMzQkajU5JGwwJGgw", // Foto de 婊婊 海绵: https://www.pexels.com/es-es/foto/paisaje-vista-superior-escenico-pintoresco-12441849/
  "https://images.pexels.com/photos/20337600/pexels-photo-20337600.jpeg?_gl=1*ktz18k*_ga*NTU0MzY2ODc1LjE3NTQ1NjQ3MDA.*_ga_8JE65Q40S6*czE3NTQ1NjQ2OTkkbzEkZzEkdDE3NTQ1NjQ5NjEkajM5JGwwJGgw", // Foto de Zelch Csaba: https://www.pexels.com/es-es/foto/naturaleza-espacio-galaxy-galaxia-20337600/
  "https://images.pexels.com/photos/8474484/pexels-photo-8474484.jpeg?_gl=1*1ueh87p*_ga*NTU0MzY2ODc1LjE3NTQ1NjQ3MDA.*_ga_8JE65Q40S6*czE3NTQ1NjQ2OTkkbzEkZzEkdDE3NTQ1NjQ5MDMkajI2JGwwJGgw", // Foto de RDNE Stock project: https://www.pexels.com/es-es/foto/montanas-sombras-al-aire-libre-mochila-8474484/
  "https://images.pexels.com/photos/7527862/pexels-photo-7527862.jpeg?_gl=1*16dd10m*_ga*NTU0MzY2ODc1LjE3NTQ1NjQ3MDA.*_ga_8JE65Q40S6*czE3NTQ1NjQ2OTkkbzEkZzEkdDE3NTQ1NjQ3MTkkajQwJGwwJGgw", // Foto de Kindel Media: https://www.pexels.com/es-es/foto/paisaje-arena-desierto-seco-7527862/
  "https://images.pexels.com/photos/4355348/pexels-photo-4355348.jpeg?_gl=1*14ej94m*_ga*NTU0MzY2ODc1LjE3NTQ1NjQ3MDA.*_ga_8JE65Q40S6*czE3NTQ1NjQ2OTkkbzEkZzEkdDE3NTQ1NjUxNDMkajE2JGwwJGgw", // Foto de murat esibatir: https://www.pexels.com/es-es/foto/mujer-vistiendo-traje-espacial-4355348/
  "https://images.pexels.com/photos/32083788/pexels-photo-32083788.jpeg?_gl=1*1xfwrao*_ga*NTU0MzY2ODc1LjE3NTQ1NjQ3MDA.*_ga_8JE65Q40S6*czE3NTQ1NjQ2OTkkbzEkZzEkdDE3NTQ1NjUyMDkkajIyJGwwJGgw", // Foto de Ramaz Bluashvili: https://www.pexels.com/es-es/foto/explorador-de-marte-32083788/
  "https://images.pexels.com/photos/18717302/pexels-photo-18717302.jpeg?_gl=1*1bsd9qz*_ga*NTU0MzY2ODc1LjE3NTQ1NjQ3MDA.*_ga_8JE65Q40S6*czE3NTQ1NjQ2OTkkbzEkZzEkdDE3NTQ1NjUyOTUkajMkbDAkaDA.", // Foto de AXP Photography: https://www.pexels.com/es-es/foto/casas-desierto-casa-esteril-18717302/
  "https://images.pexels.com/photos/7527855/pexels-photo-7527855.jpeg?_gl=1*k1wiyg*_ga*NTU0MzY2ODc1LjE3NTQ1NjQ3MDA.*_ga_8JE65Q40S6*czE3NTQ1NjQ2OTkkbzEkZzEkdDE3NTQ1NjUzNDkkajIwJGwwJGgw", // Foto de Kindel Media: https://www.pexels.com/es-es/foto/paisaje-naturaleza-desierto-rocas-7527855/
];

export default function Home() {
  return (
    <HorizontalScrollContainer>
      <HeroSection />
      <FullscreenImageSection
        imageUrl="https://unsplash.com/photos/OtXJhYjbKeg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWFyc3xlc3wwfHx8fDE3Mzg4NjIyMzN8MA&force=true&w=1920"
        title="Discover Mars"
        description="Explore its mysterious landscapes"
      />
      <IconGridSection />
      <TextContentSection />
      <ContactSection />
      <GallerySection images={galleryImages} />
      {/* Otras secciones */}
    </HorizontalScrollContainer>
  );
}
