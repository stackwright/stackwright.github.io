import React from 'react';
import { Heading, Body } from '../typography';
import { Card } from '../ui';
import { Icon } from '../ui';
import styles from './Services.module.css';

/**
 * Services Section
 */
export const Services: React.FC = () => {
  const services = [
    {
      icon: 'CloudArrowUp' as const,
      title: 'Custom Solutions',
      description: 'We architect solutions for your specific business problems.',
    },
    {
      icon: 'GitBranch' as const,
      title: 'DevOps & CI/CD',
      description: 'Automated deployments. Streamlined workflows.',
    },
    {
      icon: 'ChartLineUp' as const,
      title: 'Optimization',
      description: 'Make it faster. Make it cheaper. Make it better.',
    },
    {
      icon: 'Users' as const,
      title: 'Team Training',
      description: 'We teach your team what they need to know.',
    },
  ];

  return (
    <div className={styles.services}>
      <Heading level="h2" className={styles.title}>
        What We Offer
      </Heading>
      <div className={styles.grid}>
        {services.map((service) => (
          <Card key={service.title} className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Icon name={service.icon} size={32} weight="regular" />
            </div>
            <Heading level="h4" className={styles.serviceTitle}>
              {service.title}
            </Heading>
            <Body className={styles.serviceDescription}>{service.description}</Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
