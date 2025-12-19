import React from 'react';
import styles from './Body.module.css';

type BodySize = 'small' | 'base' | 'large';
type BodyWeight = 'light' | 'regular';

interface BodyProps {
  children: React.ReactNode;
  size?: BodySize;
  weight?: BodyWeight;
  className?: string;
}

/**
 * Body Component
 * Uses IBM Plex Sans for the "engineering layer" - the "How" and "What"
 */
export const Body: React.FC<BodyProps> = ({
  children,
  size = 'base',
  weight = 'regular',
  className
}) => {
  const combinedClassName = `${styles.body} ${styles[size]} ${styles[weight]} ${className || ''}`.trim();

  return <p className={combinedClassName}>{children}</p>;
};
