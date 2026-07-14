import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data/testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Journal | Bereket Anteneh',
  description:
    'Design insights, branding tips, case studies, and creative direction articles from Bereket Anteneh — graphic designer based in Addis Ababa.',
};

const categoryColors: Record<string, string> = {
  'Logo Design': '#5E3BFF',
  'Color Theory': '#00D4FF',
  Typography: '#8A63FF',
  Packaging: '#F59E0B',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-28 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">
            Insights
          </p>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-none mb-6">
            Design Journal
          </h1>
          <p className="text-[#A5A5A5] text-base max-w-lg leading-7">
            Branding insights, design process breakdowns, and creative direction articles.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-6">
          {blogPosts.map((post, i) => {
            const color = categoryColors[post.category] || '#5E3BFF';
            return (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group p-8 rounded-2xl border border-white/[0.06] bg-[#101010] hover:border-[#5E3BFF]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
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
                        <span className="text-[#A5A5A5]/50 text-xs">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <h2 className="text-white font-bold text-xl lg:text-2xl leading-snug mb-3 group-hover:text-[#8A63FF] transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="text-[#A5A5A5] text-sm leading-7">{post.excerpt}</p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#5E3BFF]/50 group-hover:bg-[#5E3BFF]/10 transition-all duration-300 hidden sm:flex">
                      <ArrowRight
                        size={16}
                        className="text-[#A5A5A5] group-hover:text-white group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Back home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-[#A5A5A5] hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
