import React from 'react';
import './Skills.css';
export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-[#1e293b] to-[#334155] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 items-center gap-16">
        
        {/* Content Section */}
        <div className="about-content flex flex-col justify-center text-center">
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m Rushikesh Haveliwala, a PGDM graduate in Web Development Technology from Conestoga College based in Ontario, Canada. I'm a passionate machine learning enthusiast with a strong foundation in full-stack development—having built Angular e-commerce sites and Firebase-backed Android apps. My journey naturally progressed into ML, where I’ve developed end-to-end pipelines for projects like California housing price prediction and movie recommendation systems. Constantly exploring new ML techniques, I’m driven by a desire to create AI-powered solutions that are practical, scalable, and impactful.
          </p>
        </div>

        {/* Image Section */}
        <div className="about-image flex justify-center">
          <img
            src="/assets/images/convo.jpg"
            alt="Profile"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </section>
  );
}
