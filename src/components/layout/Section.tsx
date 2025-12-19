import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

/**
 * Section Component
 * Provides consistent spacing and layout for main content sections
 */
export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  fullHeight = false,
}) => {
  const combinedClassName = `${styles.section} ${fullHeight ? styles.fullHeight : ''} ${className || ''}`.trim();

  return (
    <section id={id} className={combinedClassName}>
      <div className="container">{children}</div>
    </section>
  );
};
