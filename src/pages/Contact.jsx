import React from 'react';
import styles from './Contact.module.css';
import ContactForm from '../components/ContactForm/ContactForm';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Get in Touch</h2>
          <p className={styles.sectionSubtitle}>
            Your vision, our expertise. Let's build extraordinary real estate solutions together.
          </p>
        </div>
        <div className={styles.contactGrid}>
          <ContactForm />
          <div className={styles.contactInfoCard}>
            <h3 className={styles.contactInfoTitle}>Our Office</h3>
            <div className={styles.contactDetails}>
              <p>
                <FaMapMarkerAlt style={{ marginRight: '10px', color: '#3182ce' }} />
                #32, 2nd floor MIG2B, 6th Cross, KHB Colony, 
                Gandhinagar International, Airport Road, 
                Yelahanka, Bengaluru, Karnataka 560064
              </p>
              <p>
                <FaPhone style={{ marginRight: '10px', color: '#3182ce' }} />
                +91 917829721234
              </p>
              <p>
                <FaEnvelope style={{ marginRight: '10px', color: '#3182ce' }} />
                enquiry@thanvibuildtech.com
              </p>
              <p>
                <FaClock style={{ marginRight: '10px', color: '#3182ce' }} />
                Mon-Sat: 9:00 AM - 6:00 PM
              </p>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1943348268!2d77.5542!3d13.0989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dea5c7e9d9b%3A0x4c2a4b5a4d4d4d4d!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Thanvi BuildTech Office Location"
              ></iframe>
              <div className={styles.mapOverlay}>
                <FaMapMarkerAlt className={styles.mapLocationIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;