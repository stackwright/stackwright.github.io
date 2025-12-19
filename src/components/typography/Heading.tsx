import React from 'react';
import styles from './Heading.module.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Heading Component
 * Uses IBM Plex Serif for the "human voice" - the "Why" and "Who"
 */
export const Heading: React.FC<HeadingProps> = ({ level, children, className, id }) => {
  const Tag = level;
  const combinedClassName = `${styles.heading} ${styles[level]} ${className || ''}`.trim();

  return (
    <Tag id={id} className={combinedClassName}>
      {children}
    </Tag>
  );
};
