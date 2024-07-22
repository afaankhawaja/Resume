import React from "react";
import "../assets/css/Timeline.css";

const Skills = () => {
  const skills = [
    {
      name: "Programming Languages",
      skills: "JavaScript, HTML, CSS, C++, Python",
    },
    {
      name: "Frameworks & Libraries",
      skills: "React.js, Node.js, Express.js",
    },
    {
      name: "Databases",
      skills: "MongoDB",
    },
    {
      name: "Tools & Technologies",
      skills: "Redux Toolkit, Git, GitHub",
    },
    {
      name: "Soft Skills",
      skills: "Problem Solving, Adaptive Learning",
    },
  ];
  return (
    <div>
      <h2>Skills</h2>
      <div className="timeline">
        {skills.map((skill, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{skill.name}</h3>
              <div className="timeline-description">{skill.skills}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
