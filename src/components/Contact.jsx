import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact Me</h2>
        <p className="mt-2 text-slate-600">Have a project in mind? Let’s talk.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! Your message has been captured locally. Hook this up to your backend or email provider.');
              e.currentTarget.reset();
            }}
            className="rounded-xl border border-slate-200 bg-white p-6 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input required type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <button type="submit" className="rounded-md bg-teal-600 text-white px-4 py-2 font-medium hover:bg-teal-500">Send</button>
          </form>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-slate-700">Or reach out directly:</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-center gap-3">
                <Mail className="text-teal-600" />
                <a href="mailto:hello@senior.dev" className="hover:underline">hello@senior.dev</a>
              </li>
              <li className="flex items-center gap-3">
                <Github className="text-slate-900" />
                <a href="https://github.com/senior-dev" target="_blank" rel="noreferrer" className="hover:underline">github.com/senior-dev</a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="text-[#0a66c2]" />
                <a href="https://linkedin.com/in/senior-dev" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/senior-dev</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
