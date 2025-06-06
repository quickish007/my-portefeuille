import React from 'react';
import DotBackground from "./components/DotBackground";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      <DotBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills/>
      </main>
      <Footer />
    </div>
  );
}