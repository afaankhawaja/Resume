import React from 'react';
import "../assets/css/Timeline.css";

const Hobbies = () => {
  const Hobbies = [
  {
    name:'cricket',
    level:'playing and watching'
  },
  {
    name:'music',
    level:'listening to Atif Aslam'
    },
    {
      name:'Netflix',
      level:'Watching hollywood films and k-series'  
      }
  ]
  return (
    <>
    <h2>Hobbies</h2>
<div className="timeline">
    
      {Hobbies.map((hobbies, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
          <p className="timeline-title">{hobbies.name}</p>
          <p className="timeline-description">{hobbies.level}</p>
          </div>
        </div>
      ))}
     </div> 
     </>
  );
};

export default Hobbies;
