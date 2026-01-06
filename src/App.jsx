import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DotBackground from "./components/DotBackground";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors min-h-screen">
      <DotBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}