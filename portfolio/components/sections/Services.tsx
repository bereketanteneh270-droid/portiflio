'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Pen, Layers, Package, Share2, CreditCard, BookOpen, Monitor, Layout, Compass, Target,
} from 'lucide-react';
import { services } from '@/lib/data/services';
import { formatPrice } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Pen, Layers, Package, Share2, CreditCard, BookOpen, Monitor, Layout, Compass, Target,
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.05] blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, #5E3BFF, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">What I Do</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Services &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Offerings
            </span>
          </h2>
          <p className="text-[#A5A5A5] max-w-xl mx-auto leading-7">
            Premium design services for brands that want to make a lasting impression. Every project is
            approached with strategy-first thinking and obsessive craft.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                onHoverStart={() => setHovered(service.id)}
                onHoverEnd={() => setHovered(null)}
                className="relative group"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full text-white"
                      style={{ background: 'linear-gradient(135deg, #5E3BFF, #8A63FF)' }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full p-7 rounded-2xl border transition-all duration-300 flex flex-col"
                  style={{
                    background: hovered === service.id ? 'linear-gradient(135deg, #5E3BFF08, #101010)' : '#101010',
                    borderColor: hovered === service.id ? 'rgba(94,59,255,0.3)' : 'rgba(255,255,255,0.06)',
                    boxShadow: hovered === service.id ? '0 0 40px rgba(94,59,255,0.1)' : 'none',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                    style={{
                      background: hovered === service.id
                        ? 'linear-gradient(135deg, #5E3BFF, #8A63FF)'
                        : 'rgba(94,59,255,0.1)',
                    }}
                  >
                    <Icon size={20} className={hovered === service.id ? 'text-white' : 'text-[#5E3BFF]'} />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                  <p className="text-[#A5A5A5] text-sm leading-7 mb-5 flex-1">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#A5A5A5]">
                        <div className="w-1 h-1 rounded-full bg-[#5E3BFF] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-[#5E3BFF]/60">+{service.features.length - 3} more included</li>
                    )}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                    <div>
                      <div className="text-[10px] text-[#A5A5A5]/60 uppercase tracking-widest">Starts from</div>
                      <div className="text-white font-black text-lg">{formatPrice(service.startingPrice)}</div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-200"
                      style={{
                        background: hovered === service.id
                          ? 'linear-gradient(135deg, #5E3BFF, #8A63FF)'
                          : 'rgba(94,59,255,0.15)',
                        color: hovered === service.id ? 'white' : '#8A63FF',
                      }}
                    >
                      Request Quote
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
