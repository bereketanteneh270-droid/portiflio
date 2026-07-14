'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 120, suffix: '+', label: 'Projects Completed' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Brand Systems' },
];

const skills = [
  { name: 'Brand Identity', level: 97 },
  { name: 'Logo Design', level: 95 },
  { name: 'Packaging Design', level: 88 },
  { name: 'Typography', level: 92 },
  { name: 'UI Design', level: 80 },
  { name: 'Motion Graphics', level: 75 },
];

const timeline = [
  { year: '2020', title: 'Started Freelancing', desc: 'Began taking on brand identity projects for local startups in Addis Ababa.' },
  { year: '2021', title: 'First Major Client', desc: 'Landed first enterprise brand project — a complete identity system for a regional bank.' },
  { year: '2022', title: 'Featured on Behance', desc: 'Multiple projects featured on Behance\'s "Best of Graphic Design" collections.' },
  { year: '2023', title: 'Studio Expansion', desc: 'Expanded to serve international clients across Africa, Europe, and North America.' },
  { year: '2024', title: 'Award Recognition', desc: 'Received Awwwards Honorable Mention and Adobe certification recognition.' },
  { year: '2025', title: 'Present', desc: 'Operating as a premium solo brand consultant, taking select high-impact projects.' },
];

function StatCounter({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  return (
    <div className="text-center">
      <motion.div
        className="text-4xl lg:text-5xl font-black text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {inView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {value}{suffix}
          </motion.span>
        ) : '0'}
      </motion.div>
      <p className="text-[#A5A5A5] text-sm tracking-wide">{label}</p>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-50px' });

  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 opacity-[0.06] blur-[100px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, #5E3BFF, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">About Me</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white max-w-2xl leading-tight">
            Turning vision into{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              visual reality
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-6 text-[#A5A5A5] leading-8 text-base">
              <p>
                I'm <strong className="text-white">Bereket Anteneh</strong>, a graphic designer and brand strategist
                based in Addis Ababa, Ethiopia. With over 5 years of experience building visual identities for
                startups, corporations, and cultural institutions, I've developed a deep belief in the power of
                great design to transform perception and drive real business outcomes.
              </p>
              <p>
                My approach combines rigorous strategic thinking with obsessive visual craft. Before I draw
                a single line, I immerse myself in research — understanding your audience, your competitors,
                and the cultural context your brand lives in. The result is design that doesn't just look
                beautiful, but <em className="text-white">works</em>.
              </p>
              <p>
                I specialize in brand identity systems, logo design, packaging, and creative direction for
                brands that want to be remembered. My clients range from emerging Ethiopian startups to
                regional enterprises and international creative agencies.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Mission', text: 'Design that builds empires' },
                { label: 'Vision', text: 'Africa on the world design stage' },
                { label: 'Value', text: 'Strategy before aesthetics' },
                { label: 'Belief', text: 'Every brand deserves to be remembered' },
              ].map(({ label, text }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl border border-white/[0.06] bg-[#101010]"
                >
                  <div className="text-[#5E3BFF] text-xs tracking-widest uppercase mb-2">{label}</div>
                  <div className="text-white text-sm font-medium leading-5">{text}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-white font-bold text-xl mb-8">Core Skills</h3>
            <div className="space-y-6">
              {skills.map(({ name, level }, i) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white font-medium">{name}</span>
                    <span className="text-[#A5A5A5]">{level}%</span>
                  </div>
                  <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #5E3BFF, #00D4FF)' }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Software */}
            <div className="mt-10">
              <h4 className="text-white/50 text-xs tracking-widest uppercase mb-5">Tools & Software</h4>
              <div className="flex flex-wrap gap-2">
                {['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'After Effects', 'Blender', 'Procreate', 'Cinema 4D'].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-[#A5A5A5] border border-white/[0.08] bg-[#101010] hover:border-[#5E3BFF]/30 hover:text-white transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 rounded-3xl border border-white/[0.06] bg-[#101010] mb-24"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} inView={statsInView} />
          ))}
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white font-black text-2xl lg:text-3xl mb-14 text-center"
          >
            My Journey
          </motion.h3>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#5E3BFF] via-[#5E3BFF]/30 to-transparent hidden lg:block" />

            <div className="space-y-12">
              {timeline.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-16 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div
                      className="inline-block p-5 rounded-2xl border border-white/[0.06] bg-[#101010]"
                    >
                      <div className="text-[#5E3BFF] text-sm font-bold mb-2">{year}</div>
                      <div className="text-white font-bold text-base mb-1">{title}</div>
                      <div className="text-[#A5A5A5] text-sm leading-6">{desc}</div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex flex-col items-center justify-start pt-5">
                    <div className="w-3 h-3 rounded-full bg-[#5E3BFF] ring-4 ring-[#5E3BFF]/20 relative z-10" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
