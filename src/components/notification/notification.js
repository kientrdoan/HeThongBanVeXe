import React from 'react';
import styles from './notification.module.css';

const Notification = ({ message, type, onClose }) => {
    return (
        <div className={`${styles.notification} ${styles[type]}`}>
            <span>{message}</span>
            <button onClick={onClose} className={styles.closeButton}>&times;</button>
        </div>
    );
};

export default Notification;
