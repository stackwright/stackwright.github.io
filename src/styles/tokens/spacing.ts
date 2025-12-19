/**
 * Stackwright Spacing System
 * Based on 8px grid with generous whitespace for "Relief"
 */

export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
  '4xl': '8rem',  // 128px
  '5xl': '12rem', // 192px
} as const;

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
} as const;

export const container = {
  maxWidth: '1200px',
  padding: {
    mobile: spacing.md,
    tablet: spacing.xl,
    desktop: spacing['2xl'],
  },
} as const;

export type SpacingToken = keyof typeof spacing;
export type Breakpoint = keyof typeof breakpoints;
