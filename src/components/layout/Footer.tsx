import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  companyName?: string;
}

/**
 * Footer Component
 * Minimal footer with copyright information
 */
export const Footer: React.FC<FooterProps> = ({ companyName = 'Stackwright' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            &copy; {currentYear} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
