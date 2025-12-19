/**
 * Stackwright Design System
 * Unified export of all design tokens
 */

import { colors } from './colors';
import { typography } from './typography';
import { spacing, breakpoints, container } from './spacing';
import { animations } from './animations';

export { colors } from './colors';
export type { ColorToken } from './colors';

export { typography } from './typography';
export type { FontFamily, FontWeight, FontSize, LineHeight } from './typography';

export { spacing, breakpoints, container } from './spacing';
export type { SpacingToken, Breakpoint } from './spacing';

export { animations } from './animations';
export type { AnimationDuration, AnimationEasing, AnimationTransition } from './animations';

// Unified theme object
export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  container,
  animations,
} as const;
