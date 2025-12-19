/**
 * Stackwright Typography System
 * IBM Plex Family - balancing the "Author" (Serif) with the "Machine" (Sans)
 */

export const typography = {
  // Font Families
  families: {
    serif: '"IBM Plex Serif", Georgia, serif',      // The human voice
    sans: '"IBM Plex Sans", system-ui, sans-serif', // The engineering layer
    mono: '"IBM Plex Mono", "Courier New", monospace', // The raw material
  },

  // Font Weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  // Font Sizes (fluid typography using clamp for responsive scaling)
  sizes: {
    h1: 'clamp(2.5rem, 5vw, 4rem)',      // 40px - 64px
    h2: 'clamp(2rem, 4vw, 3rem)',        // 32px - 48px
    h3: 'clamp(1.5rem, 3vw, 2rem)',      // 24px - 32px
    h4: 'clamp(1.25rem, 2.5vw, 1.5rem)', // 20px - 24px
    h5: '1.125rem',                       // 18px
    h6: '1rem',                           // 16px
    body: '1rem',                         // 16px
    bodyLarge: '1.125rem',                // 18px
    bodySmall: '0.875rem',                // 14px
    code: '0.875rem',                     // 14px
  },

  // Line Heights
  lineHeights: {
    tight: 1.2,
    base: 1.5,
    relaxed: 1.75,
  },
} as const;

export type FontFamily = keyof typeof typography.families;
export type FontWeight = keyof typeof typography.weights;
export type FontSize = keyof typeof typography.sizes;
export type LineHeight = keyof typeof typography.lineHeights;
