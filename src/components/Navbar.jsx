import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link to="/" className={styles.navBrand}>
            <img src={logo} alt="Thanvi Buildtech & Ventures Logo" className={styles.logo} />
          </Link>

          <button
            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className={styles.hamburgerBox}>
              <span className={styles.hamburgerInner}></span>
            </span>
          </button>

          <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
            <li className={styles.navItem}>
              <Link
                to="/"
                className={`${styles.navLink} ${isActive('/')}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/about"
                className={`${styles.navLink} ${isActive('/about')}`}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/projects"
                className={`${styles.navLink} ${isActive('/projects')}`}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/gallery"
                className={`${styles.navLink} ${isActive('/gallery')}`}
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/blog"
                className={`${styles.navLink} ${isActive('/blog')}`}
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/contact"
                className={styles.contactBtn}
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;