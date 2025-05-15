import React from 'react'

const projects = [
  { title: 'Movie Recommender', link: 'https://github.com/quickish007/Movie-Recommender-ML' },
  { title: 'California Housing Price Predictor', link: 'https://github.com/quickish007/Predicting_California_House_Price' }
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#334155] to-[#64748b]
                 text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div
              key={p.link}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg
                         shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
