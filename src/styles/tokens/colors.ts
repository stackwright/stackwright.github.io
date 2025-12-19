/**
 * Stackwright Color Palette
 * Theme: "The Workshop"
 */

export const colors = {
  // Background - warm, paper-like canvas
  vellum: '#F7F5F0',

  // Primary Text - soft, deep iron
  gunmetal: '#2A2F35',

  // UI / Borders - brushed steel for subtle elements
  brushedSteel: '#8C96A0',

  // Accent - use sparingly for buttons and primary links
  internationalOrange: '#D64531',
} as const;

export type ColorToken = keyof typeof colors;
