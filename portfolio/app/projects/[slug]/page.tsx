import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/data/projects';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — ${project.subtitle} | Bereket Anteneh`,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24">
      {/* Back nav */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[#A5A5A5] hover:text-white transition-colors text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="flex flex-wrap gap-3 mb-6">
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: `${project.color}20`, color: project.color }}
          >
            {project.category}
          </span>
          <span className="text-xs text-[#A5A5A5] px-3 py-1.5 rounded-full border border-white/[0.08]">
            {project.year}
          </span>
        </div>

        <h1 className="text-5xl lg:text-8xl font-black leading-none tracking-tight mb-4">
          {project.title}
        </h1>
        <p
          className="text-2xl lg:text-3xl font-light mb-10"
          style={{ color: project.color }}
        >
          {project.subtitle}
        </p>

        {/* Cover visual */}
        <div
          className="w-full rounded-3xl overflow-hidden mb-10"
          style={{ aspectRatio: '16/7' }}
        >
          <div
            className="w-full h-full flex items-center justify-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${project.color}30, ${project.color}08, #101010)` }}
          >
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, ${project.color} 0px, ${project.color} 1px, transparent 1px, transparent 24px)`,
              }}
            />
            <div
              className="text-[20vw] font-black leading-none select-none"
              style={{ color: `${project.color}20` }}
            >
              {project.title}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6">
        {/* Overview */}
        <section className="mb-20">
          <h2 className="text-xs text-[#A5A5A5] tracking-widest uppercase mb-4">Overview</h2>
          <p className="text-lg lg:text-xl text-white/80 leading-9 max-w-3xl">{project.overview}</p>
        </section>

        {/* Challenge + Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-[#101010] border border-white/[0.06]">
            <div className="text-[#5E3BFF] text-xs tracking-widest uppercase mb-4">The Challenge</div>
            <p className="text-[#A5A5A5] leading-8 text-sm">{project.challenge}</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#101010] border border-white/[0.06]">
            <div className="text-[#00D4FF] text-xs tracking-widest uppercase mb-4">The Solution</div>
            <p className="text-[#A5A5A5] leading-8 text-sm">{project.solution}</p>
          </div>
        </div>

        {/* Research & Concept */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Research</h3>
              <p className="text-[#A5A5A5] leading-8 text-sm">{project.research}</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Concept</h3>
              <p className="text-[#A5A5A5] leading-8 text-sm">{project.concept}</p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-20">
          <h2 className="text-xs text-[#A5A5A5] tracking-widest uppercase mb-6">Color Palette</h2>
          <div className="flex flex-wrap gap-4">
            {project.colors.map(({ name, hex }) => (
              <div key={hex} className="flex flex-col items-center gap-3">
                <div
                  className="w-20 h-20 rounded-2xl border border-white/[0.08]"
                  style={{ background: hex }}
                />
                <div className="text-center">
                  <div className="text-white text-xs font-semibold">{name}</div>
                  <div className="text-[#A5A5A5] text-[10px] font-mono">{hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-xs text-[#A5A5A5] tracking-widest uppercase mb-6">Typography</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.typography.map(({ name, usage, weight }) => (
              <div
                key={name}
                className="p-6 rounded-2xl bg-[#101010] border border-white/[0.06]"
              >
                <div className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'serif' }}>
                  {name}
                </div>
                <div className="text-[#A5A5A5] text-xs mb-1">{usage}</div>
                <div className="text-[#5E3BFF] text-xs">Weight: {weight}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-20">
          <h2 className="text-xs text-[#A5A5A5] tracking-widest uppercase mb-6">Deliverables</h2>
          <div className="flex flex-wrap gap-3">
            {project.deliverables.map((d) => (
              <span
                key={d}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white border border-white/[0.08] bg-[#101010]"
              >
                {d}
              </span>
            ))}
          </div>
        </section>

        {/* Project navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between py-12 border-t border-white/[0.06] mb-20">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-4 p-6 rounded-2xl border border-white/[0.06] bg-[#101010] hover:border-[#5E3BFF]/30 transition-all flex-1"
            >
              <ArrowLeft size={20} className="text-[#A5A5A5] group-hover:-translate-x-1 transition-transform" />
              <div>
                <div className="text-[#A5A5A5] text-xs mb-1">Previous Project</div>
                <div className="text-white font-bold">{prevProject.title}</div>
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 p-6 rounded-2xl border border-white/[0.06] bg-[#101010] hover:border-[#5E3BFF]/30 transition-all flex-1"
            >
              <div className="text-right">
                <div className="text-[#A5A5A5] text-xs mb-1">Next Project</div>
                <div className="text-white font-bold">{nextProject.title}</div>
              </div>
              <ArrowRight size={20} className="text-[#A5A5A5] group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </div>
  );
}
