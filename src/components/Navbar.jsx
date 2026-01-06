import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="font-bold text-xl">R.Haveliwala</Link>
        <ul className="hidden md:flex space-x-6">
          {['Home', 'About', 'Projects', 'Contact'].map(section => (
            <li key={section}>
              {section === 'Contact' ? (
                <Link to="/contact" className="hover:underline">{section}</Link>
              ) : (
                <a href={section === 'Home' ? '/' : `/#${section.toLowerCase()}`} className="hover:underline">{section}</a>
              )}
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}