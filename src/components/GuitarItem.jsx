"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const copy = {
  es: {
    loading: "Cargando galeria...",
    fallbackInstrument: "Instrumento",
    closeExpanded: "Cerrar galeria ampliada",
    closeGallery: "Cerrar galeria de",
    close: "Cerrar",
    loadingGallery: "Cargando galeria",
    openGallery: "Abrir galeria de",
    galleryOf: "Galeria de",
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

const GuitarItem = ({ guitar, locale = "es" }) => {
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

  return (
    <>
      <section className="relative group bg-[var(--panel)] min-w-0 content-auto">
        <button
          type="button"
          aria-label={`${t.openGallery} ${titulo}`}
          className="w-full overflow-hidden relative flex items-center hover:text-[var(--accent)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] cursor-pointer"
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
          <Image
            className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
            src={foto_de_portada}
            alt={titulo}
            width={96}
            height={96}
            loading="lazy"
          />
          <div className="flex min-w-0 flex-col py-5 pl-24 text-left">
            <strong className="text-lg font-light text-[var(--muted)] group-hover:text-[var(--accent)]">
              {titulo}
            </strong>
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
