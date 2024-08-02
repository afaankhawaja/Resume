// import React from 'react';

// const About = () => {
//   return (
//     <section id="about">
//       <h2>Professional Summary</h2>
//       <p style={{fontFamily:'Lucida Console'}}>
//         Highly motivated and technically proficient in Reactjs development.Aspiring MERN stack developer. Successfully
//         completed internship demonstrating strong problem-solving skills, adaptive
//         learning, and a commitment to continuous improvement. Eager to leverage my skills and
//         knowledge to contribute to the success of your team. 
//       </p>
//     </section>
//   );
// };

// export default About;
// About.js
import React from 'react';
import '../assets/css/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">Professional Summary</h2>
        <div className="about-content">
          <p className="about-text">
            Highly motivated and technically proficient in Reactjs development. Aspiring MERN stack developer. Successfully
            completed internship demonstrating strong problem-solving skills, adaptive
            learning, and a commitment to continuous improvement. Eager to leverage my skills and
            knowledge to contribute to the success of your team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
