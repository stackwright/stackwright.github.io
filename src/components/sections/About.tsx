import React from 'react';
import { Heading, Body } from '../typography';
import styles from './About.module.css';

/**
 * About Section
 */
export const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Heading level="h2">What We Do</Heading>
      <div className={styles.content}>
        <Body size="large">
          You have a problem. We provide your solution.
        </Body>
        <Body>
          Systems should be reliable. They should scale, and they should cost what they're worth.
        </Body>
      </div>
    </div>
  );
};
