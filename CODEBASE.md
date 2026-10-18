# MONO Labs - Agency Landing Page Codebase Documentation

## Project Overview

**MONO Labs** is a modern, production-ready landing page for a full-service creative agency specializing in **Web Development, UI/UX Design, Branding & Graphics, and Film/Video Editing**. The website is inspired by the design principles of [midu.design](https://midu.design/), featuring cutting-edge animations, WebGL effects, and interactive components.

### Agency Focus
- **Digital Production & Design Studio** based in Algeria
- Specialization: Full-service creative agency with a focus on high-end UI/UX and product thinking
- Philosophy: "Design for those who want to become a better version of themselves"

---

## Tech Stack

### Core Framework & Styling
- **React 19.2.6** - Frontend framework with TypeScript
- **Vite 8.0.12** - Lightning-fast build tool and dev server
- **TypeScript 6.0.2** - Type-safe JavaScript development
- **Tailwind CSS 4.3.0** - Utility-first CSS framework
- **@tailwindcss/vite 4.3.0** - Tailwind integration with Vite

### Animation & Graphics
- **Framer Motion 12.38.0** - React animation library for smooth transitions and micro-interactions
- **Three.js 0.184.0** - 3D graphics library for WebGL effects
- **@react-three/fiber 9.6.1** - React renderer for Three.js

### UI Components & Icons
- **Lucide React 1.16.0** - Beautiful, minimalist SVG icon library

### Development & Linting
- **ESLint 10.3.0** - Code quality and consistency checking
- **TypeScript ESLint 8.59.2** - TypeScript linting support

---

## Project Structure

```
/Agency
├── src/
│   ├── component/
│   │   └── ui/
│   │       ├── heroSection.tsx          # Main hero section component
│   │       ├── GradientShader.tsx       # WebGL gradient background
│   │       ├── WebGLGlassText.tsx       # 3D glass-morphism text effect
│   │       ├── BottomGradientText.tsx   # Gradient text utility
│   │       └── DropMenu.tsx             # Animated dropdown navigation menu
│   ├── App.tsx                          # Main application component
│   ├── main.tsx                         # React entry point
│   ├── index.css                        # Global styles
│   └── assets/                          # Images and static assets
├── public/                              # Static files
├── package.json                         # Dependencies and scripts
├── tsconfig.json                        # TypeScript configuration
├── tsconfig.app.json                    # App-specific TypeScript config
├── tsconfig.node.json                   # Node-specific TypeScript config
├── vite.config.ts                       # Vite configuration
├── eslint.config.js                     # ESLint configuration
├── index.html                           # HTML entry point
└── README.md                            # Project setup documentation
```

---

## Component Architecture

### Hero Section Component (`heroSection.tsx`)

The hero section is the flagship component, featuring a full-screen immersive experience.

#### Key Features:
- **Full-screen hero** with dynamic background
- **Three-part layout**: Header, Center copy, Bottom scroll indicator
- **Responsive design** optimized for mobile, tablet, and desktop
- **Accessibility labels** and semantic HTML structure
- **Interactive CTAs** with hover states

#### Sub-Components Used:
1. **GradientShader** - Animated WebGL background
2. **LayeredWebGLGlassText** - "MONO" text with 3D glass effect
3. **DropMenu** - Hover-activated navigation menu

#### Key Sections:

**Header (Navigation)**
```tsx
- Logo: "Mono" text link
- Sticky positioning at top
- Part of DropMenu component
```

**Background Layers**
```tsx
- GradientShader (z-0): WebGL animated gradient
- Vignette overlay (z-1): Radial gradient for contrast
- Glass text "MONO" (z-20): Layered 3D WebGL text
```

**Main Hero Content (z-20)**
- Headline: "Design for those who want to become a better version of themselves"
- Supporting copy: Describes the agency's approach
- Two CTAs:
  - Primary: "Explore work" (white background)
  - Secondary: "Get in touch" (glass-morphism style)

**Side Labels (Hidden on Mobile)**
- **Left side**: "Digital production and design studio" + Location
- **Right side**: "Scroll to explore" hint

**Scroll Indicator (Mobile Only)**
- Animated vertical line that loops infinitely
- Encourages user to scroll for more content

#### Responsive Breakpoints:
- **Mobile** (< 768px): Simplified layout, hide side labels, visible scroll indicator
- **Tablet** (768px - 1024px): Show side labels, adjust font sizes
- **Desktop** (> 1024px): Full feature set with all details visible

---

### GradientShader Component (`GradientShader.tsx`)

An iframe-embedded component that renders an animated gradient background using WebGL.

#### Purpose:
- Provides a dynamic, animated visual backdrop
- Uses external Vercel-hosted shader for performance
- Full viewport coverage without affecting interactivity

#### Configuration:
- **URL**: `https://gradientshader-nine.vercel.app/`
- **Sandbox attributes**: Restricted for security while allowing scripts and forms
- **Size**: 100% width and height to fill parent container

---

### WebGLGlassText Component (`WebGLGlassText.tsx`)

Advanced 3D text rendering with glass-morphism effects using Three.js.

#### Features:
- **3D text rendering** using WebGL and canvas
- **Glass effect** with transparency and light interactions
- **Configurable properties**:
  - `text`: Content to render
  - `fontSize`: Size in pixels (default: 300)
  - `fontFamily`: Font to use
  - `fontWeight`: Font weight (400, 700, etc.)
  - `align`: Horizontal alignment (left, center, right)
  - `verticalAlign`: Vertical alignment (top, center, bottom)
  - `planeWidth` & `planeHeight`: 3D plane dimensions
  - `textOffsetY`: Vertical text offset within texture
  - `meshOffsetY`: Mesh position in 3D space
  - `revealDistance` & `revealDuration`: Animation parameters

#### Usage in Hero:
```tsx
<LayeredWebGLGlassText
  text="MONO"
  align="center"
  verticalAlign="bottom"
  fontSize={750}
  planeWidth={15}
  planeHeight={6}
  textOffsetY={210}
  meshOffsetY={-0.85}
  revealDistance={1000}
  revealDuration={1.5}
/>
```

---

### DropMenu Component (`DropMenu.tsx`)

An elegant, morphing dropdown navigation menu with spring animations.

#### Features:
- **Hover-activated**: Expands on mouse enter, collapses on mouse leave
- **Spring physics animation**: Smooth, natural motion using Framer Motion
- **Menu items**: Default includes Home, Pricing, How we work, Contact
- **Availability indicator**: Shows current project slots
- **Glass-morphism design**: Frosted glass effect with backdrop blur

#### Interactive States:
- **Closed**: Compact pill-shaped button (132px width, 56px height, border-radius 999px)
- **Open**: Expanded menu (390px width, 430px height, border-radius 34px)

#### Menu Structure:
- Logo/branding in header
- "Menu" label appears on hover
- Menu items with:
  - Sequential reveal animation
  - Hover highlighting
  - Description text
  - Arrow icon with hover translation
- Availability section with CTA button

#### Default Menu Items:
1. **Home** → #hero - "Back to the hero"
2. **Pricing** → #pricing - "Packages and options"
3. **How we work** → #how-we-work - "Our design process"
4. **Contact** → #contact - "Start a project"

---

### BottomGradientText Component (`BottomGradientText.tsx`)

Utility component for rendering text with gradient effects (currently imported but not actively used).

---

## Design System

### Color Palette
- **Background**: Black (#000000) for hero, with light neutral for future sections
- **Primary Text**: White/off-white with varying opacity levels
  - High contrast: `text-white` (100%)
  - Primary text: `text-white/90` (90%)
  - Secondary text: `text-white/45` (45%)
  - Tertiary/muted: `text-white/25` (25%)
- **Accent**: White buttons and interactive elements
- **Glass effect**: `bg-white/[0.03]` to `bg-white/[0.06]` with backdrop blur

### Typography
- **Headings**: Heavy font-weight (600+), generous tracking, line-height optimized for readability
  - Hero H1: 42px (mobile) → 76px (tablet) → 96px (desktop)
- **Body text**: Medium weight, optimized line-height (6-7)
- **Tracking**: Wide letter-spacing for premium feel
  - Navigation: `tracking-[0.24em]` to `tracking-[0.26em]`
  - Button text: `tracking-[0.18em]`

### Spacing & Layout
- **Container padding**: 20px (mobile) → 32px (desktop)
- **Section height**: Full viewport (h-screen)
- **Gaps**: Consistent use of standard Tailwind gap units (gap-2, gap-3, gap-4, etc.)

### Interactive Elements

**Buttons**
- Shape: Fully rounded (`rounded-full`)
- Padding: `px-5 py-3` (standard), smaller for secondary CTAs
- Transitions: Smooth color changes
- Hover states:
  - Primary: `bg-white/80` (slight opacity reduction)
  - Secondary: Border and text color enhancement

**Links & Navigation**
- Hover effects: Text color changes, icon translations
- Smooth transitions with defined duration

---

## Animation Strategy

### Animation Libraries

**Framer Motion** (`motion` from 'framer-motion')
- Used for: Component mount/unmount, hover effects, menu morphing
- Key features:
  - `AnimatePresence` for conditional rendering with animation
  - `motion.div`, `motion.nav`, `motion.a` for animated elements
  - Spring physics for natural motion
  - Staggered animations for sequential reveals

**Three.js / WebGL**
- Used for: Background gradient shader, 3D text rendering
- Provides: GPU-accelerated graphics for smooth performance

### Current Animations

1. **Menu Morphing** (DropMenu)
   - Width, height, and border-radius spring animations
   - Stiffness: 220, Damping: 28, Mass: 0.9
   - Duration: ~400ms

2. **Menu Item Reveals** (DropMenu)
   - Sequential stagger of 55ms between items
   - Blur and position transitions
   - Directional animations (opacity, Y-position, blur)

3. **Scroll Indicator** (HeroSection)
   - Infinite loop animation: `animate-[scrollLine_1.8s_ease-in-out_infinite]`
   - Vertical line animating up continuously

4. **3D Text Reveal** (WebGLGlassText)
   - Reveal distance: 1000 (units)
   - Reveal duration: 1.5 seconds
   - Smooth entrance animation on load

### Future Animation Opportunities
- Scroll-triggered animations for other sections
- Parallax effects on scroll
- Animated transitions between sections
- GSAP ScrollTrigger integration for performance-critical animations

---

## Responsive Design

### Breakpoints Used (Tailwind)
- **Mobile-first approach** (no `sm:` prefix on base styles)
- **`md:`** (768px): Tablet and up
- **`lg:`** (1024px): Desktop and up

### Responsive Adjustments in Hero

| Element | Mobile | Tablet/Desktop |
|---------|--------|----------------|
| Header padding | `px-5 py-5` | `px-8 py-7` |
| Hero H1 size | 42px | 76px (tablet) → 96px (desktop) |
| Side labels | Hidden | Visible |
| Scroll indicator | Visible | Hidden |
| CTA layout | Vertical stack | Horizontal flex |
| Body text size | `text-sm` | `text-base` |

---

## Current Status

### ✅ Completed
- **Hero Section**: Fully implemented with all interactive elements
- **Navigation Menu**: Morphing dropdown with smooth animations
- **WebGL Background**: Gradient shader integration
- **3D Text Effects**: Glass-morphism text rendering
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Color System**: Dark theme with glass-morphism accents
- **Animation Framework**: Framer Motion + Three.js integration

### 📋 Planned Sections (From Project Brief)
1. **Services Section** - 3-4 column grid with hover animations
2. **Work/Showcase Section** - Grid of projects with modal details
3. **Process/How It Works** - 3-step timeline
4. **FAQ Section** - Expandable accordions
5. **Footer** - Logo, navigation, social links, copyright

---

## Development Workflow

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm lint

# Preview production build
npm run preview
```

### Development Tips

1. **Hot Module Replacement (HMR)**: Vite provides instant updates during development
2. **Component-Based**: Add new sections as separate components in `src/component/`
3. **Tailwind utilities**: Use Tailwind classes for styling; CSS variables for consistent theming
4. **TypeScript**: Leverage type safety with strict TSConfig
5. **ESLint**: Run `npm lint` to catch code issues before commit

---

## Performance Considerations

1. **WebGL Optimization**: Gradient shader runs in iframe (isolated GPU context)
2. **Lazy Loading**: Consider for images and heavy components as site grows
3. **Code Splitting**: Vite automatically code-splits at component boundaries
4. **CSS Purging**: Tailwind automatically removes unused styles in production
5. **Animation Performance**: Hardware acceleration through transform/opacity changes

---

## Accessibility & Semantics

### Current Practices
- Semantic HTML (`<section>`, `<header>`, `<nav>`)
- ARIA labels and descriptions for interactive elements
- Contrast ratios maintained for text readability
- Touch-friendly button sizes (min 44x44px on mobile)
- Skip links and anchor navigation for screen readers

### Areas for Enhancement
- Add `alt` text for images and WebGL elements
- Expand ARIA labels for complex animations
- Test with screen readers (NVDA, JAWS)
- Keyboard navigation for menu items

---

## Browser Compatibility

- **Modern browsers** with WebGL support
- **CSS Grid & Flexbox**: Fully supported
- **CSS Variables**: Supported with fallbacks
- **Tailwind CSS 4**: Latest version for all modern features
- **Three.js**: Chrome, Firefox, Safari, Edge (recent versions)

---

## Future Enhancements

1. **Dark Mode Toggle**: Utilize CSS variables for theme switching
2. **More Sections**: Services, work showcase, FAQ, footer
3. **GSAP Integration**: For complex scroll-triggered animations
4. **Form Validation**: Contact form with real email backend
5. **Image Optimization**: Use WebP format with fallbacks
6. **Analytics**: Integrate tracking for user behavior
7. **Meta Tags**: SEO optimization (OG tags, structured data)
8. **Internationalization**: Multi-language support

---

## Design References

**Inspiration**: [midu.design](https://midu.design/)

**Design Philosophy**:
- Clean, minimalist aesthetic
- Motion and micro-interactions enhance UX
- Professional and modern tone
- Focus on typography and whitespace
- Accessibility without compromising design

---

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production
```bash
npm run build
# Output in /dist folder
```

---

## File Sizes & Performance Metrics

### Expected Bundle Sizes (Production)
- Main JS: ~200-300KB (with dependencies)
- CSS: ~50-80KB (Tailwind purged)
- WebGL assets: Handled via external iframe

### Optimization Opportunities
- Tree-shake unused Three.js utilities
- Consider CSS-in-JS for dynamic theming
- Image optimization for future sections
- Service worker for offline support

---

## Contact & Support

For questions about the codebase or project structure, refer to:
- **Package.json**: Dependencies and scripts
- **tsconfig.json**: TypeScript configuration
- **vite.config.ts**: Build configuration
- **tailwind.config.js**: If created, theme customization

---

**Last Updated**: May 2026  
**Project**: MONO Labs - Agency Landing Page  
**Version**: 0.0.0 (Initial Release)
