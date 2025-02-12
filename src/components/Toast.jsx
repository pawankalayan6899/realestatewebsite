import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';
import styles from './Toast.module.css';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.icon}>
        {type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className={styles.message}>{message}</div>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close">
        <FaTimes />
      </button>
    </div>
  );
};

export default Toast;
