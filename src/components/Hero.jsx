import Spline from '@splinetool/react-spline';
import { Rocket, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <Rocket size={14} className="text-teal-300" />
            Senior Frontend Developer
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building delightful, accessible, and performant web experiences.
          </h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg">
            8+ years crafting modern interfaces with React, TypeScript, design systems,
            and high-impact product engineering.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 font-medium transition"
            >
              Let’s work together
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 font-medium transition"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        <ul className="relative z-10 grid grid-cols-2 gap-4 text-sm text-slate-200">
          {[
            { label: 'React • Next.js • Vite', value: 'Ecosystem' },
            { label: 'TypeScript • Node', value: 'Languages' },
            { label: 'Design Systems • shadcn/ui', value: 'UI/UX' },
            { label: 'Testing • CI/CD', value: 'Quality' },
          ].map((item) => (
            <li key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs text-slate-400">{item.value}</p>
              <p className="mt-1 font-semibold">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
