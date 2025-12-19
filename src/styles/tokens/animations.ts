/**
 * Stackwright Animation System
 * Fast, linear animations - solid and responsive like a physical switch
 * No bouncy, springy, or "gamified" motions
 */

export const animations = {
  // Duration
  duration: {
    fast: '0.15s',
    base: '0.2s',
    slow: '0.3s',
  },

  // Easing - linear for mechanical feel
  easing: {
    linear: 'linear',
    // Subtle easing for rare cases where linear feels too harsh
    easeOut: 'cubic-bezier(0.33, 1, 0.68, 1)',
  },

  // Common transitions
  transitions: {
    all: '0.2s linear',
    color: 'color 0.2s linear',
    background: 'background-color 0.2s linear',
    transform: 'transform 0.2s linear',
    opacity: 'opacity 0.2s linear',
  },
} as const;

export type AnimationDuration = keyof typeof animations.duration;
export type AnimationEasing = keyof typeof animations.easing;
export type AnimationTransition = keyof typeof animations.transitions;
