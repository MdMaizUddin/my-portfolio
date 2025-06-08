import React from 'react'
import { Link } from 'react-router';


const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <div>
        <h6 className="footer-title">Contact</h6>
        <p>Mohammad Maiz Uddin</p>
        <p>Managing Director, Vector Classes</p>
        <p>Email: mduddin@gmail.com</p>
        <p>Phone: +8801793993563</p>
      </div>
      <nav>
        <h6 className="footer-title">Connect</h6>
        <a
          href="https://www.linkedin.com/in/mdmaizuddin/"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MdMaizUddin"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          GitHub
        </a>
        <a
          href="https://yourportfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          Portfolio
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Skills</h6>
        <Link to="leadership">Leadership</Link>
     
        <p>Communication</p>
        <p>Web Development</p>
      </nav>
    </footer>
  );
};

export default Footer;
