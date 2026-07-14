'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

const roles = [
  'Graphic Designer',
  'Brand Strategist',
  'Logo Designer',
  'Creative Director',
  'Visual Storyteller',
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];

    const colors = ['#5E3BFF', '#8A63FF', '#00D4FF', '#FFFFFF'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color +
          Math.floor(p.opacity * 255)
            .toString(16)
            .padStart(2, '0');
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(94, 59, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const springRotateX = useSpring(rotateX, { stiffness: 80, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
      onMouseMove={handleMouseMove}
    >
      {/* Particle field */}
      <ParticleCanvas />

      {/* Gradient mesh blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5E3BFF, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent 70%)' }} />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#5E3BFF]"
                    style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              <span className="text-[#A5A5A5] text-sm tracking-widest uppercase">
                Available for freelance
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-white mb-6"
            >
              I Design{' '}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #5E3BFF 0%, #8A63FF 50%, #00D4FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Brands That
              </span>
              People{' '}
              <span className="relative">
                Remember.
                <motion.span
                  className="absolute -bottom-2 left-0 h-[3px] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 3.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ background: 'linear-gradient(90deg, #5E3BFF, #00D4FF)' }}
                />
              </span>
            </motion.h1>

            {/* Rotating role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6 }}
              className="h-8 overflow-hidden mb-10"
            >
              <motion.div
                key={roleIndex}
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -32, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-lg sm:text-xl text-[#A5A5A5] font-medium">
                  {roles[roleIndex]}
                </span>
              </motion.div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(94, 59, 255, 0.6)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full font-bold text-white text-base"
                style={{ background: 'linear-gradient(135deg, #5E3BFF, #8A63FF)' }}
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToProjects}
                className="px-8 py-4 rounded-full font-bold text-white text-base border border-white/15 hover:border-[#5E3BFF]/50 transition-colors backdrop-blur-sm flex items-center gap-2"
              >
                View Projects <ExternalLink size={16} />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.6 }}
              className="flex gap-10"
            >
              {[
                { value: '120+', label: 'Projects' },
                { value: '40+', label: 'Clients' },
                { value: '5+', label: 'Years' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-xs text-[#A5A5A5] tracking-widest uppercase mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Logo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              style={{ rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 1000 }}
              className="relative"
            >
              {/* Main logo card */}
              <div
                className="w-80 h-80 xl:w-96 xl:h-96 rounded-3xl flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, #101010 0%, #0a0a0a 100%)',
                  border: '1px solid rgba(94, 59, 255, 0.2)',
                  boxShadow: '0 0 80px rgba(94, 59, 255, 0.15), inset 0 0 40px rgba(94, 59, 255, 0.05)',
                }}
              >
                {/* Gradient glow behind logo */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-30 blur-xl"
                  style={{ background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)' }}
                />
                <svg
                  width="140"
                  height="140"
                  viewBox="0 0 64 64"
                  fill="none"
                  className="relative z-10"
                >
                  <defs>
                    <linearGradient id="heroLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#5E3BFF" />
                      <stop offset="50%" stopColor="#8A63FF" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                  </defs>
                  <path d="M18 46 L30 18 L38 18 L50 46 L42 46 L34 24 L26 46 Z" fill="url(#heroLogoGrad)" />
                  <rect x="22" y="34" width="20" height="3" rx="1.5" fill="url(#heroLogoGrad)" opacity="0.5" />
                </svg>

                {/* Corner accents */}
                {[
                  'top-4 left-4 border-t border-l',
                  'top-4 right-4 border-t border-r',
                  'bottom-4 left-4 border-b border-l',
                  'bottom-4 right-4 border-b border-r',
                ].map((cls, i) => (
                  <div
                    key={i}
                    className={`absolute w-6 h-6 ${cls} border-[#5E3BFF]/40`}
                  />
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-[#101010] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-2 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-xs font-medium">Available</span>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-[#101010] border border-white/10 rounded-2xl px-4 py-3"
              >
                <div className="text-xl font-black text-white">5+</div>
                <div className="text-[10px] text-[#A5A5A5] tracking-widest uppercase">Years Exp.</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#A5A5A5]/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-[#A5A5A5]/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
