import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Frontend Engineer',
      company: 'Acme Corp',
      period: '2022 — Present',
      bullets: [
        'Led migration to a modular design system with shadcn/ui and Radix primitives',
        'Architected micro-frontend strategy improving deployment independence',
        'Delivered Lighthouse 95+ scores across core user flows',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Pixel Labs',
      period: '2019 — 2022',
      bullets: [
        'Built analytics dashboards with React, Zustand, and D3',
        'Introduced TypeScript, reducing runtime bugs by 30%',
        'Improved build times by 40% with Vite and module federation',
      ],
    },
    {
      role: 'UI Engineer',
      company: 'Startly',
      period: '2016 — 2019',
      bullets: [
        'Shipped responsive, accessible components for B2B SaaS',
        'Set up automated testing with Vitest and Playwright',
        'Mentored juniors and ran frontend guilds',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3">
          <Briefcase className="text-violet-400" />
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <p className="mt-2 text-slate-400">Selected roles and outcomes.</p>

        <div className="mt-10 grid gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur overflow-hidden"
            >
              <div className="pointer-events-none absolute -inset-1 opacity-40 bg-[radial-gradient(60%_60%_at_10%_0%,rgba(139,92,246,0.25),transparent_70%)]" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-slate-300">{exp.company}</p>
                </div>
                <p className="text-sm text-slate-400">{exp.period}</p>
              </div>
              <ul className="relative mt-4 space-y-2 text-slate-300">
                {exp.bullets.map((b) => (
                  <li key={b} className="pl-4 before:content-['•'] before:text-cyan-300 before:mr-2">{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
