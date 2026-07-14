'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start with a deep-dive call to understand your brand, audience, competitors, and goals. This strategic foundation shapes every design decision that follows.',
    duration: '1–2 days',
    color: '#5E3BFF',
  },
  {
    number: '02',
    title: 'Research',
    description:
      "Comprehensive competitive analysis, audience research, and market positioning work. I study what works, what's been done, and where the white space is for your brand.",
    duration: '2–3 days',
    color: '#6F4CFF',
  },
  {
    number: '03',
    title: 'Sketch',
    description:
      '100+ hand-drawn concepts generated rapidly. This is where ideas are born, explored, and brutally filtered down to the strongest 3–5 directions.',
    duration: '2–3 days',
    color: '#7E5EFF',
  },
  {
    number: '04',
    title: 'Concept',
    description:
      'The strongest sketch directions are developed digitally into initial concepts with rationale. Each concept tells a story and solves the brief differently.',
    duration: '3–4 days',
    color: '#8A63FF',
  },
  {
    number: '05',
    title: 'Design',
    description:
      'The approved concept is refined to perfection — every curve, weight, spacing, and color decision made with intention. The full identity system is built out.',
    duration: '5–7 days',
    color: '#6B9AFF',
  },
  {
    number: '06',
    title: 'Revision',
    description:
      'Up to 3 rounds of revision included. Your feedback is incorporated with precision, and we refine until every element is exactly right.',
    duration: '3–5 days',
    color: '#00C4FF',
  },
  {
    number: '07',
    title: 'Presentation',
    description:
      'Final designs presented in context — on mockups, in environments, at scale. You see exactly how the brand will live in the real world before final delivery.',
    duration: '1–2 days',
    color: '#00D4FF',
  },
  {
    number: '08',
    title: 'Delivery',
    description:
      'All final files delivered: vector formats (AI, EPS, SVG), rasterized (PNG, JPEG), color profiles (CMYK, RGB, Pantone), and brand guidelines PDF.',
    duration: '1 day',
    color: '#00E4FF',
  },
  {
    number: '09',
    title: 'Support',
    description:
      "30-day post-delivery support included. Questions about file usage, additional format requests, or minor adjustments — I'm here for you.",
    duration: '30 days',
    color: '#22D3EE',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.05] blur-[100px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse, #00D4FF, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">My Approach</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            The Creative{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Process
            </span>
          </h2>
          <p className="text-[#A5A5A5] max-w-xl mx-auto leading-7">
            A proven 9-step process refined over 5 years and 120+ projects. Every step exists for a reason —
            nothing is skipped, nothing is rushed.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group p-6 rounded-2xl border border-white/[0.06] bg-[#101010] hover:border-white/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Step number bg */}
              <div
                className="absolute top-4 right-4 text-6xl font-black leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-300"
                style={{ color: step.color }}
              >
                {step.number}
              </div>

              {/* Color accent line */}
              <div
                className="w-8 h-0.5 rounded-full mb-5"
                style={{ background: step.color }}
              />

              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-white font-bold text-lg">{step.title}</h3>
                <span
                  className="flex-shrink-0 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: `${step.color}15`, color: step.color }}
                >
                  {step.duration}
                </span>
              </div>

              <p className="text-[#A5A5A5] text-sm leading-7">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#A5A5A5] mb-6">Ready to start your brand transformation?</p>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(94, 59, 255, 0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-bold text-white text-base"
            style={{ background: 'linear-gradient(135deg, #5E3BFF, #8A63FF)' }}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
