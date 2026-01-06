import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="w-full max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-lg shadow-lg">

        <h2 className="text-3xl font-bold mb-4 text-center">
          Let’s Work Together
        </h2>

        <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
          Have a project, idea, or opportunity in mind?  
          Fill out the form below and I’ll get back to you.
        </p>

        {/* Google Form Embed */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScWEhguU6NEBg2Zzy9j2p_FJzWaBIzAf0kYa63H0xRmimLaIA/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact Form"
          className="rounded-md"
        >
          Loading…
        </iframe>

      </div>
    </section>
  );
}
