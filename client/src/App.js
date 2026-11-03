import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Credentials from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <>
    <a
      href="#top"
      className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-saffron focus:px-5 focus:py-2.5 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.16em] focus:text-ink"
    >
      Skip to content
    </a>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Credentials />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
