import React from 'react';
import styles from './Logo.module.css';

type LogoVariant = 'full' | 'mark' | 'wordmark';
type LogoSize = 'small' | 'medium' | 'large';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

/**
 * Logo Component
 * Stack mark with wordmark - recreated in CSS
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'medium',
  className,
}) => {
  const combinedClassName = `${styles.logo} ${styles[size]} ${className || ''}`.trim();

  const StackMark = () => (
    <div className={styles.mark} aria-label="Stackwright Logo Mark">
      <div className={`${styles.bar} ${styles.bar1}`}></div>
      <div className={`${styles.bar} ${styles.bar2}`}></div>
      <div className={`${styles.bar} ${styles.bar3}`}></div>
      <div className={`${styles.bar} ${styles.bar4}`}></div>
    </div>
  );

  if (variant === 'mark') {
    return (
      <div className={combinedClassName}>
        <StackMark />
      </div>
    );
  }

  if (variant === 'wordmark') {
    return (
      <div className={combinedClassName}>
        <span className={styles.wordmark}>Stackwright</span>
      </div>
    );
  }

  // Full logo: mark above wordmark
  return (
    <div className={combinedClassName}>
      <div className={styles.fullLogo}>
        <StackMark />
        <span className={styles.wordmark}>Stackwright</span>
      </div>
    </div>
  );
};
