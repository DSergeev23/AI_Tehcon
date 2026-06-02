import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

function GalleryImage({ image, index, onClick }) {
  const isHero = index === 0;

  return (
    <motion.div
      className={`relative group cursor-zoom-in overflow-hidden rounded-xl border border-white/10 ${
        isHero ? 'col-span-2 row-span-2' : 'col-span-1'
      }`}
      whileHover={{ scale: 1.015, boxShadow: '0 0 32px 2px rgba(255,255,255,0.07)' }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(index)}
    >
      <img
        src={image.src}
        alt={image.caption || `Gallery image ${index + 1}`}
        className="w-full h-full object-cover"
        style={{ minHeight: isHero ? '260px' : '140px' }}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
        <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg" />
      </div>
      {/* Caption */}
      {image.caption && (
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-[10px] text-white/60 leading-tight">{image.caption}</p>
        </div>
      )}
    </motion.div>
  );
}

function Lightbox({ images, activeIndex, onClose, onNav }) {
  const image = images[activeIndex];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 w-9 h-9 border border-white/15 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors z-10"
        onClick={onClose}
      >
        <X className="w-4 h-4" />
      </button>

      {/* Counter */}
      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-white/40">
        {activeIndex + 1} / {images.length}
      </p>

      {/* Image */}
      <motion.div
        key={activeIndex}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.caption || ''}
          className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
        />
        {image.caption && (
          <p className="mt-3 text-center text-xs text-white/50">{image.caption}</p>
        )}
      </motion.div>

      {/* Nav buttons */}
      {images.length > 1 && (
        <div className="flex gap-3 mt-6" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => onNav(i)}
              className={`w-5 h-0.5 rounded-full transition-colors duration-200 ${
                i === activeIndex ? 'bg-white' : 'bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function ProductGallery({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="p-8 border-b border-white/[0.08]">
        <p className="text-xs text-white/30 uppercase tracking-[0.15em] mb-5">Галерея</p>

        {/* Bento grid: hero (2×2) + smaller tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[160px]">
          {images.map((image, i) => (
            <GalleryImage key={i} image={image} index={i} onClick={setLightboxIndex} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            activeIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNav={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}