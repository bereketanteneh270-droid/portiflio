'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data/testimonials';

const categoryColors: Record<string, string> = {
  'Logo Design': '#5E3BFF',
  'Color Theory': '#00D4FF',
  Typography: '#8A63FF',
  Packaging: '#F59E0B',
};

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">Insights</p>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Design{' '}
              <span style={{
                background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Journal
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="flex items-center gap-2 text-[#A5A5A5] hover:text-white transition-colors text-sm font-medium group">
              All Articles
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => {
            const color = categoryColors[post.category] || '#5E3BFF';
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group p-7 rounded-2xl border border-white/[0.06] bg-[#101010] hover:border-white/10 transition-all duration-300 h-full cursor-pointer"
                >
                  {/* Category + read time */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: `${color}15`, color }}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#A5A5A5] text-xs">
                      <Clock size={12} />
                      {post.readTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-snug mb-4 group-hover:text-[#8A63FF] transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#A5A5A5] text-sm leading-7 mb-6">{post.excerpt}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                    <span className="text-[#A5A5A5]/50 text-xs">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5E3BFF] text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
