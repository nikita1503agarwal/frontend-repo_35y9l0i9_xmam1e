import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      name: 'Core',
      items: ['JavaScript/TypeScript', 'React & Next.js', 'Vite', 'Node.js'],
    },
    {
      name: 'UI & Design',
      items: ['Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Framer Motion'],
    },
    { name: 'Quality', items: ['Jest/Vitest', 'Playwright', 'Storybook', 'ESLint/Prettier'] },
    { name: 'Ops', items: ['CI/CD', 'Vercel', 'Docker', 'Analytics'] },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Skills</h2>
        <p className="mt-2 text-slate-600">A toolkit focused on quality and velocity.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">{cat.name}</h3>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="text-teal-500" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
