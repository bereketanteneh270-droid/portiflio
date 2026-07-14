'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, MessageCircle, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  budget: z.string().min(1, 'Please select a budget range'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const budgets = ['Under $500', '$500–$1,000', '$1,000–$3,000', '$3,000–$5,000', '$5,000+'];
const projectTypes = [
  'Logo Design',
  'Brand Identity',
  'Packaging',
  'Social Media',
  'UI Design',
  'Creative Direction',
  'Brand Strategy',
  'Other',
];

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'bereketanteneh270@gmail.com',
    href: 'mailto:bereketanteneh270@gmail.com',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+1 (503) 344-0511',
    href: 'https://wa.me/15033440511',
  },
  {
    icon: MessageCircle,
    label: 'Telegram',
    value: '@bereketanteneh270',
    href: 'https://t.me/bereketanteneh270',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: 'https://maps.google.com/?q=Addis+Ababa,+Ethiopia',
  },
];

const TelegramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12C24 5.373 18.627 0 12 0zm5.562 8.248l-1.97 9.287c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.088 14.43l-2.967-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.735.156z" />
  </svg>
);

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/@mr_23' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/bereketanteneh270' },
  { icon: TelegramIcon, label: 'Telegram', href: 'https://t.me/bereketanteneh270' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClass =
    'w-full bg-[#0a0a0a] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#A5A5A5]/40 focus:outline-none focus:border-[#5E3BFF]/50 focus:bg-[#5E3BFF]/5 transition-all duration-200';

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.06] blur-[120px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse, #5E3BFF, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#5E3BFF] text-sm tracking-widest uppercase font-semibold mb-4">Let's Talk</p>
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-6">
            Start a{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5E3BFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Project
            </span>
          </h2>
          <p className="text-[#A5A5A5] max-w-lg mx-auto leading-7">
            Ready to build something great? Tell me about your project and let's see if we're a good fit.
            I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.06] bg-[#101010] hover:border-[#5E3BFF]/30 group transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#5E3BFF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5E3BFF]/20 transition-colors">
                  <Icon size={18} className="text-[#5E3BFF]" />
                </div>
                <div>
                  <div className="text-[#A5A5A5] text-xs tracking-widest uppercase mb-1">{label}</div>
                  <div className="text-white text-sm font-medium">{value}</div>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <div className="text-[#A5A5A5]/50 text-xs tracking-widest uppercase mb-4">Follow Me</div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl border border-white/[0.08] flex items-center justify-center text-[#A5A5A5] hover:text-white hover:border-[#5E3BFF]/40 bg-[#101010] transition-all"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/15033440511?text=Hi Bereket, I'd like to discuss a project with you."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(37,211,102,0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 w-full p-5 rounded-2xl font-semibold text-white text-sm transition-all"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-8 rounded-3xl border border-white/[0.06] bg-[#101010] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input {...register('name')} placeholder="Your Name *" className={inputClass} />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register('email')} placeholder="Email Address *" className={inputClass} />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input {...register('phone')} placeholder="Phone Number" className={inputClass} />
                <input {...register('company')} placeholder="Company Name" className={inputClass} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <select {...register('budget')} className={`${inputClass} cursor-pointer`}>
                    <option value="" className="bg-[#0a0a0a]">Budget Range *</option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-[#0a0a0a]">{b}</option>
                    ))}
                  </select>
                  {errors.budget && <p className="text-red-400 text-xs mt-1.5">{errors.budget.message}</p>}
                </div>
                <div>
                  <select {...register('projectType')} className={`${inputClass} cursor-pointer`}>
                    <option value="" className="bg-[#0a0a0a]">Project Type *</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#0a0a0a]">{t}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-red-400 text-xs mt-1.5">{errors.projectType.message}</p>}
                </div>
              </div>

              <div>
                <textarea
                  {...register('message')}
                  placeholder="Tell me about your project — what are you building and what do you need? *"
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>}
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
                >
                  <CheckCircle size={16} />
                  Message sent successfully! I'll get back to you within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status !== 'loading' ? 1.02 : 1, boxShadow: '0 0 40px rgba(94,59,255,0.4)' }}
                whileTap={{ scale: status !== 'loading' ? 0.98 : 1 }}
                className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #5E3BFF, #8A63FF)' }}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-[#A5A5A5]/40 text-xs text-center">
                By submitting, you agree to be contacted regarding your project inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
