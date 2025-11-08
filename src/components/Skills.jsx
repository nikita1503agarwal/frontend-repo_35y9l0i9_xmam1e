import { CheckCircle2, Cpu, Layers, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      name: 'Core',
      icon: Cpu,
      items: ['JavaScript/TypeScript', 'React & Next.js', 'Vite', 'Node.js'],
    },
    {
      name: 'UI & Design',
      icon: Layers,
      items: ['Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Framer Motion'],
    },
    { name: 'Performance', icon: Gauge, items: ['Web Vitals 95+', 'Code Splitting', 'RUM + APM', 'Bundle Analysis'] },
    { name: 'Quality', icon: CheckCircle2, items: ['Playwright', 'Vitest', 'Storybook', 'ESLint/Prettier'] },
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <p className="mt-2 text-slate-400">A toolkit focused on quality, motion, and velocity.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur overflow-hidden"
            >
              <div className="pointer-events-none absolute -inset-1 opacity-40 bg-[radial-gradient(60%_60%_at_90%_0%,rgba(56,189,248,0.25),transparent_70%)]" />
              <div className="relative flex items-center gap-3">
                <cat.icon className="text-cyan-300" />
                <h3 className="font-semibold text-white">{cat.name}</h3>
              </div>
              <ul className="relative mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="text-violet-300" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
