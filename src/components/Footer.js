// import React from 'react';
// import image from '../assets/images/CV.png';
// import '../assets/css/footer.css';

// const Footer = () => {
//   return (
//     <>
//       <footer>
//         <h2>Honors & Awards:</h2>
//         <ul>
//           <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Dean's Honour</p>
//         </ul>
//         <h2>Extracurricular Activities:</h2>
//         <i>
//           <ul>
//             <li><b style={{ textDecoration: 'underline' }}>Youth Robotec:</b> Participated in youth Robotec competition held by UET Peshawar</li>
//             <li><b style={{ textDecoration: 'underline' }}>Robo Cust:</b> Competed in Robo race competition held by C.U.S.T university</li>
//             <li><b style={{ textDecoration: 'underline' }}>Trip management:</b> Organized a trip to Mushk Puri Top for students at university</li>
//             <li><b style={{ textDecoration: 'underline' }}>Nescon:</b> Took part in Nescon programming competition held by F.A.S.T university</li>
//           </ul>
//         </i>
//       </footer>
//       <div className="download-section">
//         <a href={image} download className="download-button">Download</a>
//       </div>
//     </>
//   );
// };

// export default Footer;

// Footer.js
import React from 'react';
import image from '../assets/images/CV.png';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <section className="honors-awards">
          <h2 className="section-title">Honors & Awards</h2>
          <div className="honor-item">
            <span className="honor-title">Dean's Honour</span>
          </div>
        </section>

        <section className="extracurricular-activities">
          <h2 className="section-title">Extracurricular Activities</h2>
          <ul className="activities-list">
            <li className="activity-item">
              <span className="activity-title">Youth Robotec:</span>
              <p>Participated in youth Robotec competition held by UET Peshawar</p>
            </li>
            <li className="activity-item">
              <span className="activity-title">Robo Cust:</span>
              <p>Competed in Robo race competition held by C.U.S.T university</p>
            </li>
            <li className="activity-item">
              <span className="activity-title">Trip management:</span>
              <p>Organized a trip to Mushk Puri Top for students at university</p>
            </li>
            <li className="activity-item">
              <span className="activity-title">Nescon:</span>
              <p>Took part in Nescon programming competition held by F.A.S.T university</p>
            </li>
          </ul>
        </section>
      </div>

      <div className="download-section">
        <a href={image} download className="download-button">
          Download
        </a>
      </div>
    </div>
  );
};

export default Footer;