import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="#home" className="font-bold text-xl">R.Haveliwala</a>
        <ul className="hidden md:flex space-x-6">
          {['Home', 'About', 'Projects', 'Contact'].map(section => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className="hover:underline">{section}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}