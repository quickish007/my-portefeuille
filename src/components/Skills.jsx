import React from 'react';
import './Skills.css';

// Web Development Skills with custom percentages
const webSkills = [
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 70 },
  { name: "Node.js", percent: 65 },
  { name: "Docker", percent: 50 },
  { name: "SQLlite", percent: 35 },
  { name: "Git", percent: 90 },
  { name: "FastAPI", percent: 40 }
];

// Machine Learning Skills with custom percentages
const mlSkills = [
  { name: "Python", percent: 75 },
  { name: "Machine Learning", percent: 70 },
  { name: "Deep Learning", percent: 25 },
  { name: "Pandas", percent: 80 },
  { name: "NumPy", percent: 80 },
  { name: "Scikit-Learn", percent: 75 },
  { name: "TensorFlow", percent: 70 },
  { name: "PyTorch", percent: 65 }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#64748b] to-[#f8fafc] py-20 flex justify-center"
    >
      <div className="container">
        <h2 className="text-3xl font-semibold mb-10 text-center">My Skills</h2>
        <div className="skills-two-column">
          {/* Left Column: Web Dev */}
          <div className="column">
            {/* <h3 className="column-title">Web Development</h3> */}
            {webSkills.map((skill, index) => (
              <div className="skill-box" key={index}>
                <span className="title">{skill.name}</span>
                <div className="skill-bar">
                  <span
                    className="skill-per"
                    style={{ width: `${skill.percent}%` }}
                  ></span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Machine Learning */}
          <div className="column">
            {/* <h3 className="column-title">Machine Learning</h3> */}
            {mlSkills.map((skill, index) => (
              <div className="skill-box" key={index}>
                <span className="title">{skill.name}</span>
                <div className="skill-bar">
                  <span
                    className="skill-per"
                    style={{ width: `${skill.percent}%` }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
