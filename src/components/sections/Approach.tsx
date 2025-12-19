import React from 'react';
import { Heading, Body } from '../typography';
import styles from './Approach.module.css';

/**
 * Approach Section
 * How Stackwright works with clients
 */
export const Approach: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Assess',
      description: 'We start by understanding your current infrastructure, pain points, and goals.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'We craft a clear, pragmatic architecture that aligns with your business needs.',
    },
    {
      number: '03',
      title: 'Implement',
      description: 'We build and deploy with precision, ensuring every component is solid and tested.',
    },
    {
      number: '04',
      title: 'Support',
      description: 'We provide ongoing guidance and support to ensure long-term success.',
    },
  ];

  return (
    <div className={styles.approach}>
      <Heading level="h2" className={styles.title}>
        How We Work
      </Heading>
      <Body size="large" className={styles.intro}>
        Our process is straightforward and transparent. No buzzwords, no complexity for
        complexity's sake—just honest, effective engineering.
      </Body>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <div className={styles.stepContent}>
              <Heading level="h3" className={styles.stepTitle}>
                {step.title}
              </Heading>
              <Body className={styles.stepDescription}>{step.description}</Body>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
