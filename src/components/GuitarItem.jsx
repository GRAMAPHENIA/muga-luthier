"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/Slider"), {
  ssr: false,
  loading: () => (
    <div className="p-8 text-center text-[var(--muted)]">Cargando galería...</div>
  ),
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

const loadGalleryById = async (id) => {
  const galleryById = await getGalleryById();
  const selected = galleryById.get(id);

  if (!selected) {
    return {
      titulo: "Instrumento",
      galeria: EMPTY_GALLERY,
    };
  }

  return {
    titulo: selected.titulo,
    galeria: selected.galeria ?? EMPTY_GALLERY,
  };
};

const Modal = ({ modelTitle, galleryImages, onClose }) => {
  const titulo = modelTitle;
  const galeria = galleryImages;

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
        aria-label="Cerrar galería ampliada"
        onClick={onClose}
      />
      <div className="relative z-10 m-8 flex h-[95dvh] w-[100dvh] flex-col justify-center border border-[var(--border)] bg-[var(--panel)] text-center backdrop-filter backdrop-blur-md">
        <h2 id="gallery-modal-title" className="sr-only">
          Galería de {titulo}
        </h2>
        <Slider images={galeria} modelTitle={titulo} />
        <button
          type="button"
          aria-label={`Cerrar galería de ${titulo}`}
          className="absolute px-4 py-2 m-2 lg:m-4 right-0 top-0 bg-[var(--panel)] text-center mono-ui hover:bg-[var(--panel-strong)] hover:text-[var(--accent)] cursor-pointer border border-[var(--border)]"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const GuitarItem = ({ guitar }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoadingGallery, setIsLoadingGallery] = useState(false);
  const [galleryData, setGalleryData] = useState({
    titulo: guitar.titulo,
    galeria: EMPTY_GALLERY,
  });

  const openModal = useCallback(async () => {
    setIsLoadingGallery(true);

    const loadedGallery = await loadGalleryById(guitar.id);
    setGalleryData(loadedGallery);
    setIsLoadingGallery(false);
    setModalOpen(true);
  }, [guitar.id]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const { titulo, foto_de_portada } = guitar;

  return (
    <>
      <section className="relative group bg-[var(--panel)] min-w-0 content-auto">
        <button
          type="button"
          aria-label={`Abrir galería de ${titulo}`}
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
        />
      ) : null}

      {isLoadingGallery ? (
        <p className="sr-only" aria-live="polite">
          Cargando galería
        </p>
      ) : null}
    </>
  );
};

export default GuitarItem;
