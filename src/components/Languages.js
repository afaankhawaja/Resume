import React from 'react';
import "../assets/css/Timeline.css";

const Languages = () => {
  const languages = [
  {
    name:'Urdu',
    level:'Native or Bilingual Proficiency'
  },
  {
    name:'English',
    level:'Working Proficiency'
    },
    {
      name:'Punjabi',
      level:'Working Proficiency'
      }
  ]
  return (
    <>
    <h2>Languages</h2>
<div className="timeline">
    
      {languages.map((language, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
          <p className="timeline-title">{language.name}</p>
          <p className="timeline-description">{language.level}</p>
          </div>
        </div>
      ))}
     </div> 
     </>
  );
};

export default Languages;
