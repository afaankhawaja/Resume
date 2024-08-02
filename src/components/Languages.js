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
    {/* <h2>Languages</h2>
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
     </div>  */}
      <div className="timeline-container">
      <h2 className="timeline-header">Languages</h2>
      <div className="timeline">
        {languages.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.name}</h3>
              <p className="timeline-description">{item.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     </>
  );
};

export default Languages;
