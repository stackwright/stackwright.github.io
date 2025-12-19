import React from 'react';
import styles from './Code.module.css';

interface CodeProps {
  children: React.ReactNode;
  inline?: boolean;
  className?: string;
}

/**
 * Code Component
 * Uses IBM Plex Mono for the "raw material" - code snippets and technical specs
 */
export const Code: React.FC<CodeProps> = ({ children, inline = false, className }) => {
  const combinedClassName = `${styles.code} ${inline ? styles.inline : styles.block} ${className || ''}`.trim();

  if (inline) {
    return <code className={combinedClassName}>{children}</code>;
  }

  return (
    <pre className={styles.preWrapper}>
      <code className={combinedClassName}>{children}</code>
    </pre>
  );
};
