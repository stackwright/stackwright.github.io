# Stackwright Website

The official website for Stackwright - Cloud Architecture & DevOps Consulting.

## Design Philosophy

Clean, functional, and direct. Built to work.

### Design System

- **Color Palette**: Vellum (#F7F5F0), Gunmetal (#2A2F35), Brushed Steel (#8C96A0), International Orange (#D64531)
- **Typography**: IBM Plex family (Serif for headlines, Sans for body, Mono for code)
- **Iconography**: Monoline technical style using Phosphor Icons
- **Animations**: Fast, linear transitions (0.2s) - no bounce or spring effects
- **Layout**: Generous whitespace for "Relief"

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **CSS Modules** for scoped, maintainable styling
- **Phosphor Icons** for monoline technical iconography

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, Section
│   ├── sections/     # Hero, About, Services, Approach, Contact
│   ├── typography/   # Heading, Body, Code
│   └── ui/          # Button, Card, Icon, Logo
├── styles/
│   ├── tokens/      # Design system tokens
│   ├── global.css   # Global styles and reset
│   └── fonts.css    # IBM Plex font imports
├── assets/          # Static assets (logos, images)
└── hooks/           # Custom React hooks
```

## Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This starts the Vite development server at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This compiles TypeScript and builds the site to the root directory for GitHub Pages deployment.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This site is deployed via GitHub Pages and serves from the root directory.

### Deployment Steps

1. Build the site: `npm run build`
2. Commit the built files (index.html, assets/)
3. Push to the `main` branch
4. GitHub Pages will automatically serve the site

### Important Notes

- During development, build outputs are git-ignored
- Before deployment, ensure build files are committed
- The `CNAME` file is preserved during builds for custom domain configuration

## Logo Integration

The Logo component currently uses a text-based placeholder. To integrate your SVG logo files:

1. Place your SVG files in `src/assets/logos/`:
   - `dovetail-mark.svg` (the interlocking S/Handshake mark)
   - `wordmark.svg` (the Stackwright text)

2. Update `src/components/ui/Logo.tsx` to import and use the SVG files:

```tsx
import DovetailMark from '../../assets/logos/dovetail-mark.svg?react';
import Wordmark from '../../assets/logos/wordmark.svg?react';
```

3. Replace the placeholder elements with the imported SVG components

## Customization

### Content Updates

- **Hero Section**: Edit `src/components/sections/Hero.tsx`
- **About Section**: Edit `src/components/sections/About.tsx`
- **Services**: Update the services array in `src/components/sections/Services.tsx`
- **Approach**: Modify steps in `src/components/sections/Approach.tsx`
- **Contact**: Update contact info in `src/components/sections/Contact.tsx`

### Design Tokens

All design tokens are centralized in `src/styles/tokens/`:
- `colors.ts` - Color palette
- `typography.ts` - Font families, sizes, weights
- `spacing.ts` - Spacing scale and breakpoints
- `animations.ts` - Transition timing

### Navigation

Update navigation links in `src/App.tsx` by modifying the `navLinks` array.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (320px+)
- Accessibility compliant (WCAG AA)

## License

Copyright © 2025 Stackwright. All rights reserved.
