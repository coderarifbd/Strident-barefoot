import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import useUIStore from '../store/uiStore';

const COLORWAYS = [
  {
    name: 'Stealth Black',
    hex: '#1a1a1a',
    images: [
      '/feature_toebox.jpg',
      '/feature_zerodrop.jpg',
      '/feature_flexibility.jpg',
      '/feature_drainage.jpg',
      '/feature_lifestyle.jpg',
    ],
  },
  {
    name: 'Earth Olive',
    hex: '#5a6b3a',
    images: [
      '/feature_zerodrop.jpg',
      '/feature_toebox.jpg',
      '/feature_flexibility.jpg',
      '/feature_drainage.jpg',
      '/feature_lifestyle.jpg',
    ],
  },
  {
    name: 'Summit Gray',
    hex: '#8a8fa0',
    images: [
      '/feature_drainage.jpg',
      '/feature_zerodrop.jpg',
      '/feature_toebox.jpg',
      '/feature_flexibility.jpg',
      '/feature_lifestyle.jpg',
    ],
  },
];

export default function ProductGallery() {
  const { selectedColor, setColor } = useUIStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const currentColorway = COLORWAYS.find((c) => c.name === selectedColor) || COLORWAYS[0];
  const images = currentColorway.images;

  // Reset index on color change
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedColor]);

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div
        style={{
          position: 'relative',
          background: 'radial-gradient(circle at center, rgba(40, 42, 65, 0.7) 0%, rgba(15, 15, 26, 0.98) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 24,
          overflow: 'hidden',
          aspectRatio: '4/3',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={`${selectedColor}-${activeIndex}`}
            src={images[activeIndex]}
            alt={`Strident TrailGrip - ${selectedColor}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              cursor: 'zoom-in',
            }}
            onClick={() => setZoomed(true)}
          />
        </AnimatePresence>

        {/* Nav Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 10,
                padding: 8,
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              style={{
                position: 'absolute',
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 10,
                padding: 8,
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Zoom Hint */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            padding: '4px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 11,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          <ZoomIn size={12} />
          Zoom
        </div>

        {/* Color Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            background: 'rgba(10,10,18,0.85)',
            border: '1px solid rgba(232,184,109,0.3)',
            backdropFilter: 'blur(10px)',
            borderRadius: 20,
            padding: '4px 14px 4px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: currentColorway.hex,
              boxShadow: '0 0 8px ' + currentColorway.hex,
            }}
          />
          <span style={{ fontSize: 12, color: '#f0f0f5', fontWeight: 600 }}>{selectedColor}</span>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`gallery-thumb ${i === activeIndex ? 'active' : ''}`}
            style={{
              flex: 1,
              aspectRatio: '4/3',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 12,
              padding: 0,
              overflow: 'hidden',
              border: i === activeIndex ? '2px solid #e8b86d' : '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img
              src={img}
              alt={`View ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>

      {/* Colorway Swatches */}
      <div>
        <p style={{ fontSize: 12, color: '#8888aa', marginBottom: 10, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          Colorway: <span style={{ color: '#f0f0f5' }}>{selectedColor}</span>
        </p>
        <div className="flex gap-3">
          {COLORWAYS.map((colorway) => (
            <button
              key={colorway.name}
              onClick={() => setColor(colorway.name)}
              title={colorway.name}
              className={`color-swatch ${selectedColor === colorway.name ? 'selected' : ''}`}
              style={{ background: colorway.hex }}
            />
          ))}
        </div>
      </div>

      {/* Zoomed Lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            className="modal-backdrop fixed inset-0 flex items-center justify-center p-6"
            style={{ zIndex: 300, cursor: 'zoom-out' }}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={images[activeIndex]}
              alt="Zoom"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 12,
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
