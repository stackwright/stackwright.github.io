import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card Component
 * Container for grouped content with subtle border styling
 */
export const Card: React.FC<CardProps> = ({ children, className }) => {
  const combinedClassName = `${styles.card} ${className || ''}`.trim();

  return <div className={combinedClassName}>{children}</div>;
};
