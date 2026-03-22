"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const copy = {
  es: {
    loading: "Cargando galería...",
    fallbackInstrument: "Instrumento",
    closeExpanded: "Cerrar galería ampliada",
    closeGallery: "Cerrar galería de",
    close: "Cerrar",
    loadingGallery: "Cargando galería",
    openGallery: "Abrir galería de",
    galleryOf: "Galería de",
    openCard: "Ver modelo",
  },
  en: {
    loading: "Loading gallery...",
    fallbackInstrument: "Instrument",
    closeExpanded: "Close expanded gallery",
    closeGallery: "Close gallery of",
    close: "Close",
    loadingGallery: "Loading gallery",
    openGallery: "Open gallery of",
    galleryOf: "Gallery of",
    openCard: "View model",
  },
};

const Slider = dynamic(() => import("@/components/Slider"), {
  ssr: false,
  loading: () => <div className="p-8 text-center text-[var(--muted)]">...</div>,
});

const EMPTY_GALLERY = [];
let galleryDataPromise;
let galleryByIdPromise;

const preloadSlider = () => {
  void import("@/components/Slider");
};

const preloadGallery = () => {
  void getGalleryById();
};

const getGalleryData = async () => {
  if (!galleryDataPromise) {
    galleryDataPromise = import("@/data/data.json").then((galleryModule) => galleryModule.default ?? []);
  }

  return galleryDataPromise;
};

const getGalleryById = async () => {
  if (!galleryByIdPromise) {
    galleryByIdPromise = getGalleryData().then((data) => {
      const nextMap = new Map();

      data.forEach((item) => {
        nextMap.set(item.id, item);
      });

      return nextMap;
    });
  }

  return galleryByIdPromise;
};

const loadGalleryById = async (id, locale = "es") => {
  const t = copy[locale] || copy.es;
  const galleryById = await getGalleryById();
  const selected = galleryById.get(id);

  if (!selected) {
    return {
      titulo: t.fallbackInstrument,
      galeria: EMPTY_GALLERY,
    };
  }

  return {
    titulo: selected.titulo,
    galeria: selected.galeria ?? EMPTY_GALLERY,
  };
};

const Modal = ({ modelTitle, galleryImages, onClose, locale = "es" }) => {
  const titulo = modelTitle;
  const galeria = galleryImages;
  const t = copy[locale] || copy.es;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-lg overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0"
        aria-label={t.closeExpanded}
        onClick={onClose}
      />
      <div className="relative z-10 m-8 flex h-[95dvh] w-[100dvh] flex-col justify-center border border-[var(--border)] bg-[var(--panel)] text-center backdrop-filter backdrop-blur-md">
        <h2 id="gallery-modal-title" className="sr-only">
          {t.galleryOf} {titulo}
        </h2>
        <Slider images={galeria} modelTitle={titulo} locale={locale} />
        <button
          type="button"
          aria-label={`${t.closeGallery} ${titulo}`}
          className="absolute px-4 py-2 m-2 lg:m-4 right-0 top-0 bg-[var(--panel)] text-center mono-ui hover:bg-[var(--panel-strong)] hover:text-[var(--accent)] cursor-pointer border border-[var(--border)]"
          onClick={onClose}
        >
          {t.close}
        </button>
      </div>
    </div>
  );
};

const GuitarItem = ({ guitar, locale = "es", index = 0 }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoadingGallery, setIsLoadingGallery] = useState(false);
  const t = copy[locale] || copy.es;
  const [galleryData, setGalleryData] = useState({
    titulo: guitar.titulo,
    galeria: EMPTY_GALLERY,
  });

  const openModal = useCallback(async () => {
    setIsLoadingGallery(true);

    const loadedGallery = await loadGalleryById(guitar.id, locale);
    setGalleryData(loadedGallery);
    setIsLoadingGallery(false);
    setModalOpen(true);
  }, [guitar.id, locale]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const { titulo, foto_de_portada } = guitar;
  const isEven = index % 2 === 0;
  const isPiccolina = titulo.toLowerCase().includes("piccolina");
  const motionClass = isPiccolina
    ? "transition duration-700 ease-out -scale-x-100 group-hover:-scale-x-[1.06] group-hover:scale-y-[1.06]"
    : "transition duration-700 ease-out group-hover:scale-[1.06]";

  return (
    <>
      <section
        className="relative group bg-[var(--panel)] min-w-0 h-full"
        style={{ animationDelay: `${Math.min(index * 70, 360)}ms` }}
      >
        <button
          type="button"
          aria-label={`${t.openGallery} ${titulo}`}
          className="block w-full overflow-hidden relative bg-[var(--panel)] hover:bg-[var(--panel-strong)] cursor-pointer text-left"
          onClick={openModal}
          onMouseEnter={() => {
            preloadSlider();
            preloadGallery();
          }}
          onFocus={() => {
            preloadSlider();
            preloadGallery();
          }}
        >
          <div className="relative h-[230px] md:h-[250px] overflow-hidden">
            <Image
              className={`h-full w-full object-cover grayscale group-hover:grayscale-0 ${motionClass} ${
                isEven ? "object-[50%_45%]" : "object-[50%_55%]"
              }`}
              src={foto_de_portada}
              alt={titulo}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl transition duration-700 ease-out group-hover:left-[120%]" />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/30 backdrop-blur-md px-3 py-2 md:px-4 md:py-3 flex items-center justify-between gap-3 shadow-[0_-8px_18px_rgba(0,0,0,0.35)]">
              <strong className="min-w-0 flex-1 truncate text-base md:text-lg font-light text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {titulo}
              </strong>
              <span
                aria-hidden="true"
                className="shrink-0 inline-flex items-center justify-center text-white/90 group-hover:text-[var(--accent)] transition-colors duration-300"
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 14L14 6M7 6H14V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sr-only">{t.openCard}</span>
              </span>
            </div>
          </div>
        </button>
      </section>

      {modalOpen ? (
        <Modal
          modelTitle={galleryData.titulo}
          galleryImages={galleryData.galeria}
          onClose={closeModal}
          locale={locale}
        />
      ) : null}

      {isLoadingGallery ? (
        <p className="sr-only" aria-live="polite">
          {t.loadingGallery}
        </p>
      ) : null}
    </>
  );
};

export default GuitarItem;
