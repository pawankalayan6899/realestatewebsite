import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './GetInTouch.module.css';
import { 
  FaPhone, 
  FaEnvelope, 
  FaUser, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

// Validation utility functions
const validateName = (name) => {
  const trimmedName = name.trim();
  return trimmedName.length >= 2 ? null : 'Name must be at least 2 characters';
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const trimmedEmail = email.trim();
  return !trimmedEmail ? 'Email is required' : 
         !emailRegex.test(trimmedEmail) ? 'Invalid email format' : 
         null;
};

const validatePhone = (phone) => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  const trimmedPhone = phone.trim();
  return !trimmedPhone ? 'Phone number is required' : 
         !phoneRegex.test(trimmedPhone) ? 'Invalid phone number' : 
         null;
};

const validateMessage = (message) => {
  const trimmedMessage = message.trim();
  return !trimmedMessage ? 'Message is required' : 
         trimmedMessage.length < 10 ? 'Message must be at least 10 characters' : 
         null;
};

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const formRef = useRef(null);
  const titleRef = useRef(null);

  // Intersection Observer for title animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after first intersection
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentTitleRef = titleRef.current;

    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []);

  // Form validation
  const validateForm = useCallback(() => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message)
    };

    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([, value]) => value !== null)
    );

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0;
  }, [formData]);

  // Handle input changes
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Form submission handler
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        // Simulated form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [validateForm]);

  // Render form input
  const renderFormInput = (name, label, type, icon, placeholder) => {
    const errorMessage = errors[name];
    return (
      <div className={styles.formGroup}>
        <label htmlFor={name}>
          {icon}
          {label}
        </label>
        {type === 'textarea' ? (
          <textarea 
            id={name} 
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className={errorMessage ? styles.inputError : ''}
          />
        ) : (
          <input 
            type={type} 
            id={name} 
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className={errorMessage ? styles.inputError : ''}
          />
        )}
        {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
      </div>
    );
  };

  return (
    <section className={styles.getInTouch} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 
            ref={titleRef} 
            className={`${styles.title} ${isVisible ? styles.titleAnimation : ''}`}
          >
            Get In Touch
          </h2>
          <p className={styles.subtitle}>
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>

          {isSubmitted ? (
            <div className={styles.successMessage}>
              <h3>Thank You!</h3>
              <p>Your message has been successfully sent. We'll get back to you soon.</p>
            </div>
          ) : (
            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className={styles.contactForm}
            >
              {renderFormInput('name', 'Full Name', 'text', <FaUser />, 'Enter your full name')}
              {renderFormInput('email', 'Email Address', 'email', <FaEnvelope />, 'Enter your email')}
              {renderFormInput('phone', 'Phone Number', 'tel', <FaPhone />, 'Enter your phone number')}
              {renderFormInput('message', 'Your Message', 'textarea', <FaMapMarkerAlt />, 'Tell us about your project')}

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
