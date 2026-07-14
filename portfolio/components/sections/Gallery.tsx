'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Logo Design', 'Brand Identity', 'Packaging', 'Social Media', 'Posters', 'UI Design'];

// Gallery items - color-coded placeholders representing project work
const galleryItems = [
  { id: 1, category: 'Brand Identity', title: 'SBIC Banking System', color: '#1A3C8F', aspect: 'tall' },
  { id: 2, category: 'Logo Design', title: 'KAMEN Wordmark', color: '#2D2D2D', aspect: 'wide' },
  { id: 3, category: 'Packaging', title: 'ZEMA App Icon', color: '#7C3AED', aspect: 'square' },
  { id: 4, category: 'Social Media', title: 'Brand Campaign Post', color: '#5E3BFF', aspect: 'square' },
  { id: 5, category: 'Posters', title: 'Design Week Poster', color: '#00D4FF', aspect: 'tall' },
  { id: 6, category: 'Brand Identity', title: 'Personal Brand Mark', color: '#8A63FF', aspect: 'wide' },
  { id: 7, category: 'Logo Design', title: 'ZEMA Logo System', color: '#7C3AED', aspect: 'square' },
  { id: 8, category: 'Packaging', title: 'KAMEN Hang Tag', color: '#C9A84C', aspect: 'tall' },
  { id: 9, category: 'UI Design', title: 'ZEMA App UI', color: '#06B6D4', aspect: 'wide' },
  { id: 10, category: 'Social Media', title: 'SBIC Social Kit', color: '#2563EB', aspect: 'square' },
  { id: 11, category: 'Posters', title: 'Branding Showcase', color: '#EF4444', aspect: 'wide' },
  { id: 12, category: 'Brand Identity', title: 'KAMEN Brand System', color: '#D97706', aspect: 'square' },
];

function GalleryItem({
  item,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        gridRow: item.aspect === 'tall' ? 'span 2' : 'span 1',
        gridColumn: item.aspect === 'wide' ? 'span 2' : 'span 1',
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      {/* Placeholder visual */}
      <div
        className="w-full h-full min-h-[200px] relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${item.color}30, ${item.color}10, #101010)`,
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${item.color} 0px, ${item.color} 1px, transparent 1px, transparent 20px)`,
          }}
        />
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div
            className="text-4xl lg:text-6xl font-black leading-none mb-2 text-center"
            style={{ color: `${item.color}60` }}
          >
            {item.title.split(' ')[0]}
          </div>
          <div className="text-xs text-white/20 text-center">{item.category}</div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
            <ZoomIn size={18} className="text-white" />
          </div>
          <p className="text-white text-sm font-semibold text-center px-4">{item.title}</p>
          <span className="text-[10px] text-white/50 tracking-widest uppercase">{item.category}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <section id="gallery" className="py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">Portfolio</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
            Creative{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Gallery
            </span>
          </h2>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'text-white'
                    : 'text-[#A5A5A5] border border-white/[0.08] hover:border-white/20 hover:text-white bg-[#101010]'
                }`}
                style={
                  activeCategory === cat
                    ? { background: 'linear-gradient(135deg, #5E3BFF, #8A63FF)' }
                    : {}
                }
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={() => setLightboxItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightboxItem(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightboxItem(null)}
            >
              <X size={20} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl w-full rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: `linear-gradient(135deg, ${lightboxItem.color}20, #101010)`,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                className="w-full h-[60vh] flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${lightboxItem.color}30, ${lightboxItem.color}05)` }}
              >
                <div
                  className="text-[15vw] font-black leading-none select-none"
                  style={{ color: `${lightboxItem.color}30` }}
                >
                  {lightboxItem.title.split(' ')[0]}
                </div>
              </div>
              <div className="p-8">
                <div className="text-[#5E3BFF] text-xs tracking-widest uppercase mb-2">{lightboxItem.category}</div>
                <h3 className="text-white font-black text-2xl">{lightboxItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
