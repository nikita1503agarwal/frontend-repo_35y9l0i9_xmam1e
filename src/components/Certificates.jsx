import { Award } from 'lucide-react';

export default function Certificates() {
  const certs = [
    {
      name: 'Google UX Design Professional Certificate',
      issuer: 'Coursera',
      year: '2023',
    },
    {
      name: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera',
      year: '2022',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2021',
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Certificates</h2>
        <p className="mt-2 text-slate-600">Selected certifications and professional learning.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {certs.map((c) => (
            <div key={c.name} className="rounded-xl border border-slate-200 p-6">
              <div className="flex items-start gap-3">
                <Award className="text-amber-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">{c.name}</h3>
                  <p className="text-slate-600">{c.issuer}</p>
                  <p className="text-sm text-slate-500">{c.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
