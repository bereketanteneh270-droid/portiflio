'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Trophy, Award, Shield, CheckCircle } from 'lucide-react';
import { awards } from '@/lib/data/testimonials';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Star, Trophy, Award, Shield, CheckCircle,
};

export default function Awards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="awards" className="py-24 bg-[#050505] border-y border-white/[0.04] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">Recognition</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">Awards & Certifications</h2>
        </motion.div>

        {/* Awards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {awards.map((award, i) => {
            const Icon = iconMap[award.icon] || Award;
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-[#101010] text-center group cursor-default transition-all duration-300 hover:border-white/10"
                style={{
                  boxShadow: `0 0 0 0 ${award.color}00`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${award.color}15`, color: award.color }}
                >
                  <Icon size={24} />
                </div>
                <div className="text-white font-bold text-sm mb-1">{award.platform}</div>
                <div className="text-[#A5A5A5] text-xs leading-4 mb-2">{award.title}</div>
                <div
                  className="text-[10px] font-semibold tracking-widest"
                  style={{ color: award.color }}
                >
                  {award.year}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative marquee strip */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(4)].flatMap((_, outerIdx) =>
              ['Brand Identity', 'Logo Design', 'Packaging', 'Creative Direction', 'UI Design', 'Typography', 'Brand Strategy', 'Illustration'].map((t, i) => (
                <span key={`${outerIdx}-${t}-${i}`} className="text-white/[0.04] text-4xl font-black tracking-tight uppercase">
                  {t} ·
                </span>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
