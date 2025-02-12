import React from 'react';

import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <h3>Thanvi Build Tech and Ventures</h3>
            <p>Building dreams into reality with innovative construction solutions and unparalleled expertise.</p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>Thanvi Build Tech and Ventures, #32, 2nd floor MIG2B, 6th Cross, KHB Colony, Gandhinagar International, Airport Road, Yelahanka, Bengaluru, Karnataka 560064</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+91 917829721234</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span> enquiry@thanvibuildtech.com</span>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className={styles.socialMedia}>
            <h4>Connect With Us</h4>
            <div className={styles.socialIcons}>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
              >
                <FaTwitter />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Thanvi Build Tech and Ventures. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;