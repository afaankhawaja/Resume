import React, { useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import generatePDF from '../pdfGenerator'; // Import the PDF generator function
import '../assets/css/Header.css'; // Ensure you have a CSS file for styling
import profile from '../assets/images/peng.jpg';

const Header = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    generatePDF(resumeRef.current.innerHTML);
  };

  return (
    <header className="header">
      <div className="profile-pic-container">
        <img src={profile} alt="Profile" className="profile-pic" />
      </div>
      <div className="header-content" ref={resumeRef}>
        <h1>Afaan Ahmad</h1>
        <p>Reactjs Developer | Aspiring Junior MERN Stack Developer | React & Node.js Enthusiast</p>
        <div className="social-media">
          <a href="https://www.instagram.com/afaankhawaja4011/">
            <FaInstagram size={30} style={{ color: 'Pink' }} />
          </a>
          <a href="https://github.com/afaankhawaja">
            <FaGithub size={30} style={{ color: 'Pink' }} />
          </a>
          <a href="https://www.linkedin.com/in/afaan-ahmad-9b855623a/">
            {" "}
            <FaLinkedin size={30} style={{ color: 'Pink' }} />{" "}
          </a>
          <a href="mailto:aafaan02@gmail.com"><MdEmail size={30} style={{ color: 'Pink' }} /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
