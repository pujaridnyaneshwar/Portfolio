import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : 'auto';
      return newState;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) closeMobileMenu();
  }, [isMobile]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo + Brand */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="Company Logo" className={styles.logoLeft} />
          <span className={styles.brandName}>Dnyaneshwar Pujari</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <FaTimes
              className={styles.hamburgerIcon}
              style={{
                color: scrolled ? '#fff' : theme === 'light' ? '#000' : '#fff',
              }}
            />
          ) : (
            <FaBars
              className={styles.hamburgerIcon}
              style={{
                color: scrolled ? '#fff' : theme === 'light' ? '#000' : '#fff',
              }}
            />
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`${styles.navLinks} ${isMobileMenuOpen ? styles.show : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          {[
            { to: 'home', name: 'Home' },
            { to: 'about', name: 'About' },
            { to: 'project', name: 'Project' },
            { to: 'blog', name: 'Blogs' },
            { to: 'contact', name: 'Contact' },
          ].map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
              className={`${styles.navLink} ${
                scrolled ? styles.navLinkScrolled : theme === 'light' ? styles.navLinkDark : ''
              }`}
              activeClass={styles.active}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
