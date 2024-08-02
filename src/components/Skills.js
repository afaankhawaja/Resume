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
   
    <div className="timeline-container">
      <h2 className="timeline-header">Skills</h2>
      <div className="timeline">
        {skills.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.name}</h3>
              <div className="timeline-description">{item.skills}</div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
