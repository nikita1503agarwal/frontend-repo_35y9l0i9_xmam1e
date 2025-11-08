import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight">Senior.Dev</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#certificates" className="hover:text-slate-900">Certificates</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Summary />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-200">© {new Date().getFullYear()} Senior Developer. All rights reserved.</footer>
    </div>
  );
}

function Summary() {
  return (
    <section id="summary" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Summary</h2>
        <p className="mt-4 text-slate-700 max-w-3xl">
          Senior Frontend Developer with 8+ years building scalable, accessible, and engaging products.
          I specialize in React, TypeScript, and design systems, partnering closely with design and product
          to ship measurable outcomes. Comfortable leading initiatives, mentoring teams, and delivering
          from discovery to production with performance and reliability in mind.
        </p>
      </div>
    </section>
  );
}

export default App;
