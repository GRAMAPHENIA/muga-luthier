"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const Slider = ({ images, modelTitle }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = images?.length ?? 0;

  const handleImageChange = useCallback(
    (newIndex) => {
      if (totalImages === 0) {
        return;
      }
      setCurrentImage((newIndex + totalImages) % totalImages);
    },
    [totalImages]
  );

  useEffect(() => {
    if (totalImages === 0) {
      return undefined;
    }

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        return undefined;
      }
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalImages]);

  if (totalImages === 0) {
    return (
      <div className="p-8 text-center text-[var(--muted)]">
        Esta galería no tiene imágenes disponibles.
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative mx-auto w-full h-[420px] lg:h-[520px] border-y border-[var(--border)]">
        <Image
          className="object-cover"
          src={images[currentImage].url}
          alt={
            images[currentImage].title ||
            `${modelTitle || "Instrumento"} - imagen ${currentImage + 1}`
          }
          fill
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <button
            type="button"
            aria-label="Imagen anterior"
            className="font-semibold text-[var(--text)] text-4xl absolute left-3 lg:left-10 hover:text-[var(--accent)]"
            onClick={() => handleImageChange(currentImage - 1)}
          >
            «
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            className="font-semibold text-[var(--text)] text-4xl absolute right-3 lg:right-10 hover:text-[var(--accent)]"
            onClick={() => handleImageChange(currentImage + 1)}
          >
            »
          </button>
        </div>
      </div>

      {/* <p className="my-5 text-lg font-light text-[var(--text-light)]">
        {images[currentImage].title}
      </p> */}

      <div className="flex justify-center items-center mt-20 space-x-3">
        {images.map((image, index) => (
          <button
            key={image.url}
              type="button"
              aria-label={`Ir a la imagen ${index + 1}`}
              aria-current={index === currentImage ? "true" : undefined}
              onClick={() => handleImageChange(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentImage
                ? "bg-[var(--text-extralight)]"
                : "bg-[var(--border)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
