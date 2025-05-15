import React from 'react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#64748b] to-[#f8fafc] py-20"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>

      {/* Wrapper div to handle padding and centering */}
      <div className="px-4">
        <div className="max-w-md mx-auto">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded border"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded border"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="p-3 rounded border"
            />
            <button
              type="submit"
              className="self-center px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
