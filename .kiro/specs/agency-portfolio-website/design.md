# Design Document

## Overview

This document outlines the technical design for a modern agency portfolio website built with React and Next.js. The website will be a single-page application with smooth scroll navigation, responsive design, and engaging animations. The tech stack prioritizes performance, developer experience, and modern web standards.

**Tech Stack:**
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Language**: TypeScript

## Architecture

The application follows a component-based architecture with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────────┐
│                        Next.js App                          │
├─────────────────────────────────────────────────────────────┤
│  Layout (app/layout.tsx)                                    │
│  ├── Navigation Component                                   │
│  ├── Page Content (app/page.tsx)                           │
│  │   ├── Hero Section                                       │
│  │   ├── About Section                                      │
│  │   ├── Services Section                                   │
│  │   ├── Portfolio Section                                  │
│  │   ├── Team Section                                       │
│  │   └── Contact Section                                    │
│  └── Footer Component                                       │
├─────────────────────────────────────────────────────────────┤
│  Shared Components                                          │
│  ├── UI Components (Button, Card, Input, etc.)             │
│  ├── Animation Wrappers                                     │
│  └── Section Container                                      │
├─────────────────────────────────────────────────────────────┤
│  Utilities & Hooks                                          │
│  ├── useScrollAnimation                                     │
│  ├── useIntersectionObserver                               │
│  └── Form validation schemas                                │
└─────────────────────────────────────────────────────────────┘
```

## Components and Interfaces

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
- Fixed position at top of viewport
- Transparent background initially, solid on scroll
- Smooth scroll to sections on link click
- Mobile: hamburger menu with slide-in drawer

### Hero Section

```typescript
interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
}
```

**Behavior:**
- Full viewport height
- Animated text entrance (fade-in, slide-up)
- CTA button scrolls to contact section

### About Section

```typescript
interface Statistic {
  value: number;
  label: string;
  suffix?: string;
}

interface AboutProps {
  title: string;
  description: string;
  mission: string;
  statistics: Statistic[];
}
```

**Behavior:**
- Counter animation triggers on viewport entry
- Statistics displayed in a row/grid

### Services Section

```typescript
interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ServicesProps {
  title: string;
  subtitle: string;
  services: Service[];
}
```

**Behavior:**
- Grid layout (1 col mobile, 2 col tablet, 4 col desktop)
- Hover effect: scale and shadow increase

### Portfolio Section

```typescript
interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface PortfolioProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
}
```

**Behavior:**
- Grid layout with staggered animation on scroll
- Hover: overlay with title and category

### Team Section

```typescript
interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'github' | 'dribbble';
  url: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

interface TeamProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}
```

**Behavior:**
- Grid layout
- Hover: reveal social links overlay

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
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}
```

**Behavior:**
- Form with validation
- Success/error state handling
- Contact info displayed alongside form

### Footer Component

```typescript
interface FooterProps {
  companyName: string;
  socialLinks: SocialLink[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}
```

## Data Models

### Site Content Data Structure

```typescript
interface SiteContent {
  navigation: NavLink[];
  hero: HeroProps;
  about: AboutProps;
  services: ServicesProps;
  portfolio: PortfolioProps;
  team: TeamProps;
  contact: ContactProps;
  footer: FooterProps;
}
```

### Form Validation Schema (Zod)

```typescript
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the acceptance criteria analysis, the following testable properties have been identified:

### Property 1: Statistics rendering completeness
*For any* valid statistics array passed to the About section, all statistics should render with their value and label visible in the DOM.
**Validates: Requirements 3.3**

### Property 2: Services rendering completeness
*For any* valid services array passed to the Services section, all service cards should render with their icon, title, and description visible in the DOM.
**Validates: Requirements 4.2**

### Property 3: Portfolio items rendering completeness
*For any* valid portfolio items array passed to the Portfolio section, all items should render with their image and title visible in the DOM.
**Validates: Requirements 5.2**

### Property 4: Team members rendering completeness
*For any* valid team members array passed to the Team section, all members should render with their photo, name, and role visible in the DOM.
**Validates: Requirements 6.2**

### Property 5: Form validation rejects invalid data
*For any* form submission with invalid data (empty required fields or malformed email), the form should display appropriate validation error messages and prevent submission.
**Validates: Requirements 7.3, 7.4**

### Property 6: Email format validation
*For any* string that does not match a valid email format (missing @, missing domain, etc.), the email field should display a validation error.
**Validates: Requirements 7.5**

## Error Handling

### Form Submission Errors
- Display inline validation errors for each invalid field
- Show a general error message if form submission fails
- Maintain form state on error to allow correction

### Image Loading Errors
- Display placeholder images if portfolio/team images fail to load
- Use Next.js Image component with fallback handling

### Navigation Errors
- Gracefully handle missing section IDs
- Provide visual feedback if scroll target doesn't exist

## Testing Strategy

### Testing Framework
- **Unit/Component Testing**: Vitest + React Testing Library
- **Property-Based Testing**: fast-check
- **E2E Testing**: Playwright (optional)

### Unit Testing Approach
Unit tests will cover:
- Component rendering with various props
- Form validation logic
- Navigation link generation
- Utility functions

### Property-Based Testing Approach
Property-based tests will use fast-check to verify:
- Components correctly render all items in arrays of varying sizes
- Form validation correctly identifies all invalid inputs
- Email validation handles edge cases

Each property-based test MUST:
- Run a minimum of 100 iterations
- Be tagged with a comment referencing the correctness property: `**Feature: agency-portfolio-website, Property {number}: {property_text}**`
- Use smart generators that constrain to valid input spaces

### Test File Structure
```
src/
├── components/
│   ├── __tests__/
│   │   ├── About.test.tsx
│   │   ├── Services.test.tsx
│   │   ├── Portfolio.test.tsx
│   │   ├── Team.test.tsx
│   │   └── ContactForm.test.tsx
│   └── __tests__/
│       └── properties.test.ts  (property-based tests)
└── lib/
    └── __tests__/
        └── validation.test.ts
```

## File Structure

```
agency-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Team.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       └── SectionContainer.tsx
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useIntersectionObserver.ts
├── lib/
│   ├── data.ts (site content)
│   └── validation.ts
├── public/
│   └── images/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
