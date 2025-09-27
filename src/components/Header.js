import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import styles from '../styles/Header.module.css';

const Header = () => {
  // const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.right}>
          <a href="tel:+91 7058121907" className={styles.contactItem}>
            {isMobile ? <FaPhone /> : <><FaPhone /> +91 7058121907</>}
          </a>

          {/* <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button> */}

          <a href="https://www.linkedin.com/in/dnyaneshwar-pujari-4aa6101a6/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            < FiLinkedin />
          </a>
          <a href="https://github.com/pujaridnyaneshwar" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            < FiGithub />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pujaridnyanu55@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FiMail />
          </a>



        </div>
      </div>
    </header>
  );
};

export default Header;
