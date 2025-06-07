# Bonded Landing Page

A modern, elegant, and minimalist landing page for the Bonded app built with Next.js, Framer Motion, and Tailwind CSS.

## Features

- 🎨 Modern design with dark gradient background and purple/pink accents
- ✨ Smooth animations powered by Framer Motion
- 📱 Responsive design that works on all devices
- 🚀 High-performance Next.js 14 with App Router
- 🎭 Interactive iPhone mockup with chat interface
- 🌟 Floating particle animations
- 🔔 Toast notifications for "Coming Soon" functionality
- 💫 Glassmorphism effects and backdrop blur

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
bonded-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AppSection.tsx
│   │   └── AboutSection.tsx
│   └── ui/
│       ├── BackgroundAnimation.tsx
│       ├── ChatInterface.tsx
│       ├── ChatMessage.tsx
│       ├── DownloadButton.tsx
│       ├── FloatingElements.tsx
│       ├── Logo.tsx
│       ├── PhoneMockup.tsx
│       ├── SuggestionPill.tsx
│       └── ToastNotification.tsx
├── hooks/
│   └── useToast.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Component Architecture

The application is highly factorized with the following component structure:

### Layout Components
- `Header`: Navigation with logo and download button
- `Footer`: Social links and copyright

### Section Components
- `HeroSection`: Main title, subtitle, and floating animations
- `AppSection`: iPhone mockup with chat interface
- `AboutSection`: Description of the Bonded app

### UI Components
- `BackgroundAnimation`: Floating particle effects
- `ChatInterface`: Chat conversation with AI assistant
- `ChatMessage`: Individual chat message bubbles
- `DownloadButton`: Animated button with toast notification
- `FloatingElements`: Animated orbs in hero section
- `Logo`: Bonded logo with icon
- `PhoneMockup`: iPhone frame with floating animation
- `SuggestionPill`: Interactive suggestion buttons
- `ToastNotification`: Global toast system

### Hooks
- `useToast`: Global state management for toast notifications

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary colors: Purple gradient (from `#8a2be2` to `#da70d6`)
- Dark background: Custom dark theme
- Accent colors: Purple/pink variants

### Animations
All animations are powered by Framer Motion with custom configurations for:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Floating elements
- Chat message appearances

## Performance

- ⚡ Optimized with Next.js 14 App Router
- 🎯 Component-based architecture for code splitting
- 🔄 Efficient re-renders with proper React patterns
- 📦 Minimal bundle size with tree-shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Bonded. All rights reserved. 