import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-[#1e293b] to-[#334155] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m Rushikesh Haveliwala, a PGDM graduate in Web Development Technology from Conestoga College based in Ontario, Canada. I'm a passionate machine learning enthusiast with a strong foundation in full-stack development—having built Angular e-commerce sites and Firebase-backed Android apps. My journey naturally progressed into ML, where I’ve developed end-to-end pipelines for projects like California housing price prediction and movie recommendation systems. Constantly exploring new ML techniques, I’m driven by a desire to create AI-powered solutions that are practical, scalable, and impactful.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/images/convo.jpg"
            alt="Profile"
            className="w-90 h-90 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
