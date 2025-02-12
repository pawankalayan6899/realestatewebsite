import React, { useState } from 'react';
import { submitContactForm, validateForm } from '../../services/contactService';
import styles from './ContactForm.module.css';

const ContactForm = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      showToast('Please fix the form errors', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      showToast('Thank you for your message! We will get back to you soon.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      showToast('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <input
            type="text"
            className={`${styles.input} ${formErrors.name ? styles.invalid : ''}`}
            placeholder="Your Name*"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <div className={styles.errorMessage}>{formErrors.name}</div>}
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            className={`${styles.input} ${formErrors.email ? styles.invalid : ''}`}
            placeholder="Your Email*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && <div className={styles.errorMessage}>{formErrors.email}</div>}
        </div>
      </div>
      <div className={styles.formGroup}>
        <input
          type="tel"
          className={`${styles.input} ${formErrors.phone ? styles.invalid : ''}`}
          placeholder="Your Phone Number*"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {formErrors.phone && <div className={styles.errorMessage}>{formErrors.phone}</div>}
      </div>
      <div className={styles.formGroup}>
        <textarea
          className={`${styles.textarea} ${formErrors.message ? styles.invalid : ''}`}
          placeholder="Your Message*"
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {formErrors.message && <div className={styles.errorMessage}>{formErrors.message}</div>}
      </div>
      <div className={styles.submitContainer}>
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
