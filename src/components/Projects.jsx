import React from 'react';
import Slider from 'react-slick';
import { projects } from '../data/projectsData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-[#334155] to-[#64748b] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] bg-gray-900 flex items-center justify-center"
                />
                <div className="bg-gray-800 p-4 text-center">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
