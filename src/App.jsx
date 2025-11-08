import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">Senior.Dev</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      </header>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-slate-400 border-t border-white/10">© {new Date().getFullYear()} Senior Developer. Built with care.</footer>
    </div>
  );
}

export default App;
