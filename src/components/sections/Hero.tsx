import React from 'react';
import { Heading } from '../typography';
import { Body } from '../typography';
import { Button } from '../ui';
import styles from './Hero.module.css';

/**
 * Hero Section
 */
export const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <Heading level="h1" className={styles.title}>
          We Build Solutions That Work
        </Heading>
        <Body size="large" className={styles.subtitle}>
          Software. Systems. Solutions. Built right. Delivered on time.
        </Body>
        <div className={styles.actions}>
          <Button variant="primary" size="large" href="#contact">
            Get Started
          </Button>
          <Button variant="secondary" size="large" href="#about">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
