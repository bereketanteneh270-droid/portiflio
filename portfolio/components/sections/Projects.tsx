'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data/projects';

const categoryColors: Record<string, string> = {
  'Brand Identity': '#5E3BFF',
  'Personal Branding': '#00D4FF',
  Packaging: '#8A63FF',
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 opacity-[0.06] blur-[100px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">Featured Work</p>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Selected{' '}
              <span style={{
                background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Projects
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-[#A5A5A5] hover:text-white transition-colors text-sm font-medium group"
            >
              View All Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  onHoverStart={() => setHovered(project.id)}
                  onHoverEnd={() => setHovered(null)}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#101010] cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: hovered === project.id
                      ? `0 0 60px ${project.color}30`
                      : 'none',
                  }}
                >
                  {/* Image placeholder with gradient */}
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: i === 0 ? '16/9' : '16/10' }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}40, ${project.color}10)`,
                      }}
                    />
                    {/* Animated pattern overlay */}
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, ${project.color} 0px, ${project.color} 1px, transparent 1px, transparent 20px)`,
                      }}
                    />
                    {/* Project title large in background */}
                    <div
                      className="absolute inset-0 flex items-center justify-center text-[120px] lg:text-[160px] font-black leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-110"
                      style={{
                        color: `${project.color}20`,
                        letterSpacing: '-0.05em',
                      }}
                    >
                      {project.title.slice(0, 1)}
                    </div>

                    {/* Center logo area */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="text-4xl font-black tracking-tight"
                        style={{ color: project.color }}
                      >
                        {project.title}
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={hovered === project.id ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{ background: `${project.color}20`, backdropFilter: 'blur(4px)' }}
                      />
                      <div className="relative z-10 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm">
                        View Project <ExternalLink size={14} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Card footer */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-xs font-semibold px-3 py-1 rounded-full"
                            style={{
                              background: `${project.color}20`,
                              color: project.color,
                            }}
                          >
                            {project.category}
                          </span>
                          <span className="text-[#A5A5A5] text-xs">{project.year}</span>
                        </div>
                        <h3 className="text-white font-black text-xl">{project.title}</h3>
                        <p className="text-[#A5A5A5] text-sm mt-1">{project.subtitle}</p>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#5E3BFF]/50 group-hover:bg-[#5E3BFF]/10 transition-all duration-300">
                        <ArrowRight size={16} className="text-[#A5A5A5] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] text-[#A5A5A5]/60 px-2 py-1 rounded-full border border-white/[0.05]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
