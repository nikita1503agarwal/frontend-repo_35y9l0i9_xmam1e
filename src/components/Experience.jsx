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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Experience</h2>
        <p className="mt-2 text-slate-600">Selected roles and impact.</p>

        <div className="mt-10 grid gap-6">
          {experiences.map((exp) => (
            <div key={exp.role} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                  <p className="text-slate-600">{exp.company}</p>
                </div>
                <p className="text-sm text-slate-500">{exp.period}</p>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
