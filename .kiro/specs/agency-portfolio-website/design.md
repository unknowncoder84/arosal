# Design Document

## Overview

This document outlines the technical design for a futuristic software agency portfolio website (arosal.site) built with Next.js 14. The website features a dark mode theme with glassmorphism effects, neon cyan accents, high-end animations including scramble text, mouse-tracking glow, 3D tilt effects, custom cursor, and infinite marquee.

**Tech Stack:**
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom dark theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Language**: TypeScript

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Next.js App                          │
├─────────────────────────────────────────────────────────────┤
│  Layout (app/layout.tsx)                                    │
│  ├── Custom Cursor Component                                │
│  ├── Glassmorphism Navigation                               │
│  ├── Page Content (app/page.tsx)                           │
│  │   ├── Hero Section (Scramble Text + Mouse Glow)         │
│  │   ├── Infinite Marquee Background                        │
│  │   ├── Stats Section (Animated Counters)                  │
│  │   ├── Services Section (Expand/Glow Cards)              │
│  │   ├── Portfolio Section (Bento Grid + 3D Tilt)          │
│  │   └── Contact Section (Neon Borders + Haptic Button)    │
│  └── Footer Component (Glassmorphism)                       │
├─────────────────────────────────────────────────────────────┤
│  Shared Components                                          │
│  ├── UI Components (Button, Card, Input with neon styling) │
│  ├── ScrambleText Component                                 │
│  ├── MouseGlow Component                                    │
│  ├── CustomCursor Component                                 │
│  ├── InfiniteMarquee Component                              │
│  └── AnimatedCounter Component                              │
├─────────────────────────────────────────────────────────────┤
│  Utilities & Hooks                                          │
│  ├── useMousePosition                                       │
│  ├── useScrollAnimation                                     │
│  ├── useIntersectionObserver                               │
│  └── Form validation schemas                                │
└─────────────────────────────────────────────────────────────┘
```

## Design System

### Color Palette
```typescript
const colors = {
  background: {
    primary: '#0a0a0a',    // Deep black
    secondary: '#111111',   // Slightly lighter black
    card: 'rgba(17, 17, 17, 0.5)', // Glassmorphism
  },
  neon: {
    cyan: '#00ffff',        // Primary accent
    cyanGlow: 'rgba(0, 255, 255, 0.5)',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
  }
}
```

### Glassmorphism Style
```css
.glassmorphism {
  background: rgba(17, 17, 17, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Components and Interfaces

### Custom Cursor Component

```typescript
interface CustomCursorProps {
  disabled?: boolean; // Disable on mobile
}
```

**Behavior:**
- Small circle (20px) follows mouse with smooth delay
- Trailing dot (8px) follows with longer delay
- Hidden on mobile devices
- Changes size/color on hover over interactive elements

### Scramble Text Component

```typescript
interface ScrambleTextProps {
  text: string;
  duration?: number;
  className?: string;
}
```

**Behavior:**
- Characters randomly scramble through alphabet
- Gradually settle to final text from left to right
- Completes animation in ~2 seconds

### Mouse Glow Component

```typescript
interface MouseGlowProps {
  color?: string;
  size?: number;
  blur?: number;
}
```

**Behavior:**
- Radial gradient follows mouse position
- Smooth transition with CSS transform
- Disabled on mobile for performance

### Infinite Marquee Component

```typescript
interface InfiniteMarqueeProps {
  text: string;
  speed?: number;
}
```

**Behavior:**
- Continuous horizontal scroll
- Text: 'AI AUTOMATION • WEB DEVELOPMENT • CUSTOM SOFTWARE •'
- Positioned in background with low opacity
- Uses CSS animation for smooth performance

### Navigation Component

```typescript
interface NavLink {
  label: string;
  href: string;
}

interface NavigationProps {
  links: NavLink[];
}
```

**Behavior:**
- Sticky position with glassmorphism effect
- Backdrop blur: 10px
- Neon cyan underline on active section
- Mobile: glassmorphism drawer menu

### Hero Section

```typescript
interface HeroProps {
  headline: string; // 'AROSAL Software Solutions'
  subheadline: string;
  ctaText: string;
  ctaHref: string;
}
```

**Behavior:**
- Full viewport height
- Scramble text effect for headline
- Mouse-tracking glow in background
- CTA button with neon cyan glow on hover

### Stats Section

```typescript
interface Statistic {
  value: number;
  label: string;
  suffix?: string;
}

interface StatsProps {
  statistics: Statistic[]; // ['50+ Projects', '50+ Happy Clients']
}
```

**Behavior:**
- Animated counters trigger on viewport entry
- Count from 0 to target value in 2 seconds
- Neon cyan accent on numbers

### Services Section

```typescript
interface Service {
  id: string;
  icon: string;
  title: string; // 'AI Bot Services', 'In-house System Dev', 'Web Solutions'
  description: string;
}

interface ServicesProps {
  title: string;
  services: Service[];
}
```

**Behavior:**
- Grid layout with glassmorphism cards
- Hover: expand scale (1.05) + neon cyan glow
- Reveal-on-scroll animation

### Portfolio Section (Bento Grid)

```typescript
interface PortfolioItem {
  id: string;
  title: string; // 'Selectz.in', 'Katneswarkar', 'Pixcelcut.studio'
  category: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large'; // For Bento Grid
}

interface PortfolioProps {
  title: string;
  items: PortfolioItem[];
}
```

**Behavior:**
- Asymmetric Bento Grid layout
- 3D hover-tilt effect using Framer Motion (perspective transform)
- Glassmorphism overlay with project info
- Reveal-on-scroll with stagger

### Contact Section

```typescript
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  title: string;
  subtitle: string;
}
```

**Behavior:**
- Minimal form with neon cyan borders on focus
- Submit button: haptic feedback (scale + pulse + glow)
- Success/error states with neon styling
- Form validation with inline errors

### Footer Component

```typescript
interface FooterProps {
  companyName: string;
  socialLinks: SocialLink[];
  contactInfo: {
    email: string;
    phone: string;
  };
}
```

**Behavior:**
- Glassmorphism background
- Neon cyan accents on links
- Social icons with hover glow

## Custom Hooks

### useMousePosition
```typescript
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Track mouse movement
  return position;
}
```

### useAnimatedCounter
```typescript
const useAnimatedCounter = (target: number, duration: number) => {
  const [count, setCount] = useState(0);
  // Animate from 0 to target when in viewport
  return count;
}
```

## Animation Specifications

### Reveal on Scroll
- Opacity: 0 → 1
- Transform: translateY(50px) → translateY(0)
- Duration: 0.6s
- Easing: ease-out

### 3D Tilt Effect (Portfolio)
- Framer Motion perspective: 1000px
- Rotate on hover based on mouse position
- Max rotation: ±15 degrees
- Smooth spring animation

### Haptic Button Feedback
- Scale: 1 → 0.95 (on click)
- Box-shadow: neon cyan glow increase
- Duration: 150ms
- Spring animation

## Responsive Behavior

### Desktop (>1024px)
- All effects enabled
- Multi-column layouts
- Custom cursor active
- Mouse glow active

### Tablet (768-1024px)
- 2-column layouts
- Custom cursor disabled
- Mouse glow disabled
- Simplified animations

### Mobile (<768px)
- Single-column layouts
- All mouse-based effects disabled
- Touch-optimized interactions
- Reduced animation complexity

## Performance Optimizations

1. **Custom Cursor**: Use CSS transform for 60fps
2. **Mouse Glow**: Throttle mouse events to 60fps
3. **Marquee**: Use CSS animation instead of JS
4. **Images**: Next.js Image with lazy loading
5. **Animations**: Use Framer Motion's layout animations
6. **Mobile**: Disable resource-intensive effects

## File Structure

```
arosal-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── CustomCursor.tsx
│   ├── ScrambleText.tsx
│   ├── MouseGlow.tsx
│   ├── InfiniteMarquee.tsx
│   └── ui/
│       ├── Button.tsx (neon styling)
│       ├── Card.tsx (glassmorphism)
│       └── Input.tsx (neon borders)
├── hooks/
│   ├── useMousePosition.ts
│   ├── useAnimatedCounter.ts
│   ├── useScrollAnimation.ts
│   └── useIntersectionObserver.ts
├── lib/
│   ├── data.ts
│   └── validation.ts
└── tailwind.config.ts (dark theme + neon colors)
```

## Testing Strategy

Focus on visual regression testing and interaction testing for the advanced effects. Unit tests for utility functions and hooks.
