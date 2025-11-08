import Spline from '@splinetool/react-spline';
import { Rocket, Download, Sparkles, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Color washes and vignette (non-blocking) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-24 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(139,92,246,0.35),transparent_70%)]" />
        <div className="absolute -inset-24 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(56,189,248,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80" />
        {/* Faux grain */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 2px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <Sparkles size={14} className="text-violet-300" />
            Futuristic UI Engineer
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Interfaces that feel alive
            </span>
          </h1>

          <p className="mt-4 text-slate-300 text-base md:text-lg max-w-xl">
            I craft immersive, accessible frontends with React and TypeScript — blending design systems,
            motion, and real performance to ship products users love.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-2 font-medium shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] transition"
            >
              <Rocket size={16} className="transition group-hover:translate-x-0.5" />
              Start a project
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-4 py-2 font-medium backdrop-blur transition"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
            <MousePointerClick size={14} className="text-cyan-300" /> Interact with the 3D scene
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative z-10 grid grid-cols-2 gap-4 text-sm"
        >
          {[
            { label: 'React • Next.js • Vite', value: 'Ecosystem' },
            { label: 'TypeScript • Node', value: 'Languages' },
            { label: 'Design Systems • Radix • shadcn', value: 'UI/UX' },
            { label: 'Playwright • CI/CD', value: 'Quality' },
          ].map((item) => (
            <li
              key={item.label}
              className="relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur text-slate-200 overflow-hidden"
            >
              <div className="pointer-events-none absolute -inset-1 opacity-60 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,246,0.3),rgba(56,189,248,0.3),rgba(139,92,246,0.3))] blur-xl" />
              <p className="relative text-xs text-slate-400">{item.value}</p>
              <p className="relative mt-1 font-semibold">{item.label}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
