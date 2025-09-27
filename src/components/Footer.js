import React from 'react';
import styles from '../styles/Footer.module.css';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
       

        {/* Social Media */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Let's Connect</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/dnyaneshwar-pujari-4aa6101a6/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram"><FiLinkedin /></a>
            <a href="https://github.com/pujaridnyaneshwar" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook"><FiGithub /></a>
             <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pujaridnyanu55@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FiMail />
          </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Dnyaneshwar Pujari. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
