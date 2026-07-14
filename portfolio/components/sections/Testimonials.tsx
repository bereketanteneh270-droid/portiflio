'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.05] blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, #5E3BFF, transparent)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">Social Proof</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            What Clients{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="p-8 md:p-14 rounded-3xl border border-white/[0.06] relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #101010, #0a0a0a)',
              boxShadow: '0 0 80px rgba(94, 59, 255, 0.08)',
            }}
          >
            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={80} className="text-[#5E3BFF]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-10 max-w-3xl">
                  "{current.text}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center gap-5">
                  {/* Avatar placeholder */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)' }}
                  >
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">{current.name}</div>
                    <div className="text-[#A5A5A5] text-sm">
                      {current.role}, {current.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/[0.06]">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-[#5E3BFF]' : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A5A5A5] hover:text-white hover:border-[#5E3BFF]/40 transition-all"
                >
                  <ChevronLeft size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A5A5A5] hover:text-white hover:border-[#5E3BFF]/40 transition-all"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
