// import React from 'react';
// import '../assets/css/Timeline.css';

// const Timeline = () => {
//   const timelineData = [
//     {
//         date: '2024 - current',
//         title: 'Intern',
//         location: 'Ensemble-ai',
//         description: 'Working as React developer on a multiple projects.'
//       },
    
//     {
//       date: 'July 2023 - September 2023',
//       title: 'Intern',
//       location: 'Codify Pvt Limited',
//       description: 'Developed a solid foundation in front-end development by exploring and utilizing React documentation and Redux Toolkit.'
//     },
//     {
//       date: 'Project (In Progress)',
//       title: 'E-commerce Project',
//       location: '',
//       description: 'Developing a full-stack e-commerce application using MERN stack.'
//     },
//     {
//       date: '',
//       title: 'To-Do List Application',
//       location: '',
//       description: 'Built a dynamic and responsive To-Do List application using React.js.'
//     },
//     {
//       date: '',
//       title: 'Redux Store',
//       location: '',
//       description: 'Created a Redux Store project to manage state efficiently in React applications.'
//     }
//   ];
  

//   return (
//     <>
//             <h2>Experience</h2>

//     <div className="timeline">
//       {timelineData.map((item, index) => (
//         <div className="timeline-item" key={index}>
//           <div className="timeline-dot"></div>
//           <div className="timeline-content">
//             <span className="timeline-date">{item.date}</span>
//             <h3 className="timeline-title">{item.title}</h3>
//             <h4 className="timeline-location">{item.location}</h4>
//             <p className="timeline-description">{item.description}</p>
//           </div>
//         </div>
//       ))}
//       </div>
     
//     </>
//   );
// };

// export default Timeline;

/////
// Timeline.js
import React from 'react';
import '../assets/css/Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
        date: '2024 - current',
        title: 'Intern',
        location: 'Ensemble-ai',
        description: 'Working as React developer on a multiple projects.'
      },
    
    {
      date: 'July 2023 - September 2023',
      title: 'Intern',
      location: 'Codify Pvt Limited',
      description: 'Developed a solid foundation in front-end development by exploring and utilizing React documentation and Redux Toolkit.'
    },
    {
      date: 'Project (In Progress)',
      title: 'E-commerce Project',
      location: '',
      description: 'Developing a full-stack e-commerce application using MERN stack.'
    },
    {
      date: '',
      title: 'To-Do List Application',
      location: '',
      description: 'Built a dynamic and responsive To-Do List application using React.js.'
    },
    {
      date: '',
      title: 'Redux Store',
      location: '',
      description: 'Created a Redux Store project to manage state efficiently in React applications.'
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Experience</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title">{item.title}</h3>
              {item.location && <h4 className="timeline-location">{item.location}</h4>}
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;