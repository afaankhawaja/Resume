import React from 'react';
import '../assets/css/Timeline.css';

const Education = ()=>{
  const Educations=[
    {
        date: '2020 - 2024',
        title: 'Bachelor\'s Degree in Computer Science',
        location: 'Capital University of Science & Technology (CUST)',
        description: 'Relevant coursework: Data Structures, Web Development, Database Management.'
      },
      {
        date: '2017 - 2019',
        title: 'Intermediacte in Computer Science',
        location: 'Punjab group of colleges (PGC)',
        description: 'computer Science, Mathematics, Physics'
      },
  ]
    return(
        <>
        <h2>Education</h2>
        <div className='timeline'>
        {Educations.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-location">{item.location}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      </>
    )
}
export default Education;