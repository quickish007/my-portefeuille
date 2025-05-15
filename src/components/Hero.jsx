import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center
                 bg-gradient-to-b from-[#0f172a] to-[#1e293b]"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Rushikesh Haveliwala
        </h1>
        <p className="text-xl md:text-2xl">
          Full-Stack Developer & ML Engineer
        </p>
        <p className="mt-2 italic">
          "Building Intelligent Solutions, One Line of Code at a Time."
        </p>
      </motion.div>
    </section>
  )
}
