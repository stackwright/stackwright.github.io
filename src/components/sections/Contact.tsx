import React from 'react';
import { Heading, Body } from '../typography';
import { Button } from '../ui';
import { Icon } from '../ui';
import styles from './Contact.module.css';

/**
 * Contact Section
 * Call to action and contact information
 */
export const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <Heading level="h2" className={styles.title}>
        Let's Work Together
      </Heading>
      <Body size="large" className={styles.intro}>
        Have a problem that needs solving? Let's talk.
      </Body>
      <div className={styles.contactMethods}>
        <a href="mailto:hello@stackwright.com" className={styles.contactLink}>
          <Icon name="Envelope" size={24} weight="regular" />
          <span>hello@stackwright.com</span>
        </a>
        <a href="https://github.com/stackwright" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
          <Icon name="GithubLogo" size={24} weight="regular" />
          <span>github.com/stackwright</span>
        </a>
      </div>
      <div className={styles.cta}>
        <Button variant="primary" size="large" href="mailto:hello@stackwright.com">
          Start a Conversation
        </Button>
      </div>
    </div>
  );
};
