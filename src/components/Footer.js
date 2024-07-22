import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h2>Honors & Awards:</h2>
      <ul>
        <p style={{textDecoration:'underline', fontWeight:'bold'}}>Dean's Honour</p>
      </ul>
      <h2>Extracurricular Activities:</h2>
      <i><ul>
        <li><b style={{textDecoration:'underline'}}>Youth Robotec:</b> Participated in youth Robotec competition held by UET Peshawar</li>
        <li><b style={{textDecoration:'underline'}}>Robo Cust:</b> Competed in Robo race competition held by C.U.S.T university</li>
        <li><b style={{textDecoration:'underline'}}>Trip management:</b> Organized a trip to Mushk Puri Top for students at university</li>
        <li><b style={{textDecoration:'underline'}}>Nescon:</b> Took part in Nescon programming competition held by F.A.S.T university</li>
      </ul></i>
    </footer>
  );
};

export default Footer;
