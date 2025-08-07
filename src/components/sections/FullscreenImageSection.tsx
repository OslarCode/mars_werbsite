"use client";

type FullscreenImageSectionProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export const FullscreenImageSection = ({
  imageUrl,
  title,
  description,
}: FullscreenImageSectionProps) => {
  return (
    <section className="horizontal-section relative overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-md">
          {title}
        </h2>
        <p className="text-lg md:text-2xl text-white drop-shadow-sm max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
};
