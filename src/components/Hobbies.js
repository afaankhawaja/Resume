import React from 'react';
import "../assets/css/Timeline.css";

const Hobbies = () => {
  const Hobbies = [
  {
    name:'Cricket',
    level:'Playing and watching'
  },
  {
    name:'Music',
    level:'Listening to Atif Aslam'
    },
    {
      name:'Netflix',
      level:'Watching hollywood films and k-series'  
      }
  ]
  return (
    <>
       <div className="timeline-container">
      <h2 className="timeline-header">Hobbies</h2>
      <div className="timeline">
        {Hobbies.map((item, index) => (
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

export default Hobbies;
