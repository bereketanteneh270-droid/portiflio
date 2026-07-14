import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Bereket Anteneh',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 text-center">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(94,59,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <div
          className="text-[160px] lg:text-[240px] font-black leading-none tracking-tighter mb-0 select-none"
          style={{
            background: 'linear-gradient(135deg, #5E3BFF20, #00D4FF10)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </div>

        <h1 className="text-3xl lg:text-4xl font-black text-white -mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-[#A5A5A5] text-base mb-10 max-w-md">
          This page doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 rounded-full font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #5E3BFF, #8A63FF)' }}
          >
            Go Home
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-4 rounded-full font-bold text-white text-sm border border-white/10 hover:border-white/20 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
