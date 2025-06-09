# MyBuddy Landing Page

A modern, elegant, and minimalist landing page for the MyBuddy app built with Next.js, Framer Motion, and Tailwind CSS.

## Features

- 🎨 Modern design with Solana-inspired purple and cyan colors
- ✨ Smooth animations powered by Framer Motion
- 📱 Responsive design that works on all devices
- 🚀 High-performance Next.js 14 with App Router
- 🤖 AI-powered companion theme for Solana trenches
- 🌟 Floating particle animations
- 🔔 Toast notifications and waitlist functionality
- 💫 Glassmorphism effects and backdrop blur

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with Solana color scheme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
mybuddy-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   └── home/
│   │       ├── HeroContentContainer.tsx
│   │       ├── HeroBrandLogo.tsx
│   │       ├── HeroTitle.tsx
│   │       ├── HeroSubtitle.tsx
│   │       ├── HeroCTAButton.tsx
│   │       ├── BackgroundOverlay.tsx
│   │       └── DecorativeBackgroundElements.tsx
│   ├── pages/
│   │   └── HomePage.tsx
│   └── ui/
│       ├── BackgroundAnimation.tsx
│       ├── ChatInterface.tsx
│       ├── ChatMessage.tsx
│       ├── DownloadButton.tsx
│       ├── FloatingElements.tsx
│       ├── Logo.tsx
│       ├── PhoneMockup.tsx
│       ├── SuggestionPill.tsx
│       ├── ToastNotification.tsx
│       └── WaitlistModal.tsx
├── hooks/
│   └── useToast.ts
├── contexts/
│   └── NavigationContext.tsx
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
- `Header`: Navigation with logo and "Get MyBuddy" button
- `Footer`: Social links and copyright

### Section Components
- `HomePage`: Main landing page with hero section
- `HeroContentContainer`: Container for hero content
- `HeroBrandLogo`: MyBuddy branding
- `HeroTitle`: Main headline
- `HeroSubtitle`: Description of MyBuddy's AI features
- `HeroCTAButton`: Call-to-action button

### UI Components
- `BackgroundAnimation`: Floating particle effects
- `ChatInterface`: Chat conversation with AI assistant
- `ChatMessage`: Individual chat message bubbles
- `DownloadButton`: "Get MyBuddy" button with waitlist modal
- `FloatingElements`: Animated orbs with Solana colors
- `Logo`: MyBuddy logo with "M" icon
- `PhoneMockup`: iPhone frame with floating animation
- `SuggestionPill`: Interactive suggestion buttons
- `ToastNotification`: Global toast system
- `WaitlistModal`: Beta signup modal for MyBuddy

### Hooks
- `useToast`: Global state management for toast notifications

### Contexts
- `NavigationContext`: Page navigation state management

## Customization

### Colors
The color scheme is defined in `tailwind.config.js` with Solana-inspired colors:
- Primary colors: Solana purple (`#9945ff`) to cyan (`#14f195`) gradients
- Background: Clean white with colored accents
- Accent colors: Purple/cyan variants matching Solana branding

### Animations
All animations are powered by Framer Motion with custom configurations for:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Floating elements with Solana colors
- Modal appearances

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

© 2025 MyBuddy. All rights reserved. 