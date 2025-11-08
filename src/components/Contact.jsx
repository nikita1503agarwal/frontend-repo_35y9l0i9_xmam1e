import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-400">Have a project in mind? Let’s talk.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! Your message has been captured locally. Hook this up to your backend or email provider.');
              e.currentTarget.reset();
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur overflow-hidden"
          >
            <div className="pointer-events-none absolute -inset-1 opacity-40 bg-[radial-gradient(60%_60%_at_10%_90%,rgba(139,92,246,0.25),transparent_70%)]" />
            <div className="relative grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-200">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200">Message</label>
                <textarea required rows={5} className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Tell me about your project" />
              </div>
              <button type="submit" className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-2 font-medium shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] transition">
                <Send size={16} className="transition group-hover:-translate-y-0.5" />
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur overflow-hidden"
          >
            <div className="pointer-events-none absolute -inset-1 opacity-40 bg-[radial-gradient(60%_60%_at_90%_10%,rgba(56,189,248,0.25),transparent_70%)]" />
            <p className="relative text-slate-300">Or reach out directly:</p>
            <ul className="relative mt-4 space-y-3 text-slate-200">
              <li className="flex items-center gap-3">
                <Mail className="text-cyan-300" />
                <a href="mailto:hello@senior.dev" className="hover:underline">hello@senior.dev</a>
              </li>
              <li className="flex items-center gap-3">
                <Github className="text-white" />
                <a href="https://github.com/senior-dev" target="_blank" rel="noreferrer" className="hover:underline">github.com/senior-dev</a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="text-[#0a66c2]" />
                <a href="https://linkedin.com/in/senior-dev" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/senior-dev</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
