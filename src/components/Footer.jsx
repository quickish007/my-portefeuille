import React from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-[#f8fafc]">
      <p className="text-black mb-4">
        © {new Date().getFullYear()} Rushikesh Haveliwala. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 text-black">
        <a
          href="https://www.linkedin.com/in/rushikeshhaveliwala/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <Linkedin size={24} aria-label="LinkedIn" />
        </a>
        <a
          href="https://github.com/quickish007"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <Github size={24} aria-label="GitHub" />
        </a>
        <a
          href="mailto:rhaveliwala777@gmail.com"
          className="hover:text-red-600"
        >
          <Mail size={24} aria-label="Email" />
        </a>
      </div>
    </footer>
  )
}
