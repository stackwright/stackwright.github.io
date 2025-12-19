import React from 'react';
import * as PhosphorIcons from 'phosphor-react';
import styles from './Icon.module.css';

type IconName = keyof typeof PhosphorIcons;
type IconSize = 16 | 24 | 32 | 48;
type IconWeight = 'thin' | 'light' | 'regular' | 'bold';

interface IconProps {
  name: IconName;
  size?: IconSize;
  weight?: IconWeight;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Icon Component
 * Wrapper for Phosphor Icons with monoline technical style
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  weight = 'regular',
  color = 'currentColor',
  className,
  ariaLabel,
}) => {
  const IconComponent = PhosphorIcons[name] as React.ComponentType<{
    size?: number;
    weight?: string;
    color?: string;
    className?: string;
    'aria-label'?: string;
  }>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Phosphor Icons`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      weight={weight}
      color={color}
      className={`${styles.icon} ${className || ''}`}
      aria-label={ariaLabel}
    />
  );
};
