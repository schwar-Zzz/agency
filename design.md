# MONO Labs - Design System & Blueprint

## Executive Summary

MONO Labs is a modern, premium creative agency specializing in **Web Development, UI/UX Design, Branding & Graphics, and Film/Video Editing**. This design document outlines the complete visual identity, component system, and section-by-section blueprint for the landing page, inspired by the clean, professional aesthetic of midu.design.

**Design Philosophy**: Minimal, intentional, professional. Every pixel serves a purpose. Motion enhances, not distracts. Precision in typography and spacing creates visual hierarchy and trust.

---

## 1. Typographic & Color System

### 1.1 Typography Scale

#### Font Pairings
- **Headings**: `Space Grotesk` (400, 600, 700 weights)
  - Modern geometric sans-serif with technical precision
  - Excellent for display sizes
  - Communicates innovation and professionalism
  
- **Body Text**: `Inter` (400, 500, 600 weights)
  - Highly legible humanist sans-serif
  - Perfect for reading body copy and UI labels
  - Proven across screens and print

#### Typographic Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| **Hero Headline (Desktop)** | 96px | 600 | 1.1 | -0.06em | Main hero message |
| **Hero Headline (Tablet)** | 76px | 600 | 1.1 | -0.06em | Medium screens |
| **Hero Headline (Mobile)** | 42px | 600 | 1.1 | -0.06em | Mobile screens |
| **Section Headline** | 56px | 600 | 1.15 | -0.04em | Section titles |
| **Subheading** | 28px | 500 | 1.2 | -0.02em | Secondary titles |
| **Body Large** | 18px | 400 | 1.6 | 0em | Leading paragraphs |
| **Body Base** | 16px | 400 | 1.6 | 0em | Standard paragraph text |
| **Body Small** | 14px | 400 | 1.5 | 0em | Secondary text |
| **Label** | 12px | 600 | 1.4 | 0.08em | Buttons, tags, UI labels |
| **Caption** | 11px | 500 | 1.4 | 0.12em | Small UI text |

**Key Principles**:
- **Generous line-height** (1.5-1.6) for body text ensures readability and breathing room
- **Tight line-height** (1.1) on headlines creates visual impact
- **Negative letter-spacing** on large headlines improves optical spacing
- **Increased letter-spacing** on small text (labels, captions) improves clarity

---

### 1.2 Color Palette

#### Primary Colors

| Color | Hex | RGB | Usage | Notes |
|-------|-----|-----|-------|-------|
| **White** | #FFFFFF | 255, 255, 255 | Primary background, text | Maximum contrast, primary CTA |
| **Black** | #1A1A1A | 26, 26, 26 | Primary text on light | Deep black for premium feel |
| **Off-White** | #F8F9FA | 248, 249, 250 | Secondary background | Subtle light backgrounds |

#### Secondary/Neutral Colors

| Color | Hex | RGB | Usage | Notes |
|-------|-----|-----|-------|-------|
| **Neutral Light** | #E8E8E8 | 232, 232, 232 | Borders, dividers | Subtle visual separation |
| **Neutral Medium** | #A0A0A0 | 160, 160, 160 | Secondary text, icons | Lower contrast text |
| **Neutral Dark** | #4A4A4A | 74, 74, 74 | Body text (secondary) | Readable on light backgrounds |

#### Accent Color

| Color | Hex | RGB | Usage | Notes |
|-------|-----|-----|-------|-------|
| **Accent Purple** | #6C63FF | 108, 99, 255 | CTAs, highlights, hover states | Vibrant, energetic, premium feel |

#### Semantic Colors

| State | Light BG Color | Dark BG Color | Notes |
|-------|---|---|---|
| **Success** | #10B981 | #059669 | Forms, confirmations |
| **Warning** | #F59E0B | #D97706 | Alerts, notifications |
| **Error** | #EF4444 | #DC2626 | Form errors, critical alerts |
| **Info** | #3B82F6 | #2563EB | Informational messages |

#### Dark Theme Variant (For Hero & Future Dark Sections)

| Color | Hex | RGB | Usage | Notes |
|-------|-----|-----|-------|-------|
| **Dark Background** | #000000 | 0, 0, 0 | Hero background (current) | Pure black for maximum contrast |
| **Dark Text Primary** | #FFFFFF | 255, 255, 255 | Text on dark | Full opacity for primary text |
| **Dark Text Secondary** | rgba(255, 255, 255, 0.45) | 255, 255, 255, 45% | Secondary text | Reduced opacity for hierarchy |
| **Dark Text Tertiary** | rgba(255, 255, 255, 0.25) | 255, 255, 255, 25% | Hints, labels | Lowest visual priority |
| **Dark Glass** | rgba(255, 255, 255, 0.05) | 255, 255, 255, 5% | Glass effect backgrounds | Subtle glass-morphism |

#### Color Application Rules

- **Light Sections**: Use #FFFFFF background with #1A1A1A text
- **Dark Sections**: Use #000000 background with white text at varying opacity
- **Accent Color**: Reserve #6C63FF for:
  - Primary CTAs
  - Hover states on interactive elements
  - Highlights and attention-grabbing elements
  - Links and interactive indicators
- **Opacity Hierarchy**: Text opacity creates visual hierarchy without introducing new colors
  - Primary text: 100% opacity
  - Secondary text: 60-70% opacity
  - Tertiary text: 40-50% opacity
  - Muted text: 20-30% opacity

---

## 2. Component Specifications

### 2.1 Navbar / Header

**Visual Style**:
- Clean, minimal header positioned at top
- Logo/brand name on left
- Navigation menu (expandable dropdown or horizontal list)
- Sticky on scroll
- Glass-morphism effect for modern feel

**Desktop Layout**:
- Full horizontal navigation visible at all times
- Logo + spacing + nav items + CTA button aligned in one row
- Subtle background with backdrop blur

**Mobile Layout** (< 768px):
- Hamburger menu or morphing dropdown
- Logo centered with menu toggle
- Navigation appears below header on tap

**Hover States**:
- Nav links: text color shifts to accent purple (#6C63FF)
- Underline animation appears beneath nav items
- CTA button background becomes slightly darker or accent color appears

**Component Specifications**:
```
Height: 64px (desktop), 56px (mobile)
Background: Transparent with 1px border bottom (light theme), or glass effect (dark theme)
Padding: 16px horizontal (mobile), 32px horizontal (desktop)
Transition: All color changes 0.3s ease
Border: 1px solid rgba(0, 0, 0, 0.08)
```

---

### 2.2 Buttons

#### Primary Button

**Visual Style**:
- Solid background with accent purple (#6C63FF)
- Rounded corners (24px border-radius)
- Padding: 12px 28px (small), 14px 36px (medium), 16px 44px (large)
- White text, uppercase label with letter-spacing

**Default State**:
```
Background: #6C63FF
Color: #FFFFFF
Border-radius: 24px
Padding: 14px 36px
Font: 500 weight, 12px size, 0.08em tracking
Box-shadow: 0 4px 16px rgba(108, 99, 255, 0.25)
Transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)
```

**Hover State**:
```
Background: #5A52E8 (darker purple)
Transform: scale(1.04)
Box-shadow: 0 8px 24px rgba(108, 99, 255, 0.35)
Cursor: pointer
```

**Active/Pressed State**:
```
Transform: scale(0.98)
Box-shadow: 0 2px 8px rgba(108, 99, 255, 0.2)
```

**Disabled State**:
```
Background: #D0C8F0
Color: #A0A0A0
Cursor: not-allowed
Box-shadow: none
```

#### Secondary Button

**Visual Style**:
- Outlined style with transparent background
- Border matches accent purple or text color
- Hover effect reveals slight background fill

**Default State**:
```
Background: transparent
Border: 1.5px solid #6C63FF
Color: #6C63FF
Border-radius: 24px
Padding: 14px 36px
Font: 500 weight, 12px size, 0.08em tracking
Transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)
```

**Hover State**:
```
Background: rgba(108, 99, 255, 0.08)
Border-color: #5A52E8
Color: #5A52E8
Box-shadow: 0 4px 16px rgba(108, 99, 255, 0.15)
```

#### Ghost Button (Minimal)

**Visual Style**:
- Text-only button with no background or border
- Text color in accent or primary text
- Underline on hover

**Default State**:
```
Background: transparent
Border: none
Color: #1A1A1A
Font: 500 weight, 14px size
Text-decoration: none
Transition: all 0.3s ease
```

**Hover State**:
```
Color: #6C63FF
Text-decoration: underline
Text-decoration-offset: 4px
Text-decoration-thickness: 2px
```

---

### 2.3 Cards

#### Service Card

**Visual Style**:
- Minimal card with subtle border and shadow
- Icon + title + description layout
- Hover effect: slight lift, color accent appears

**Default State**:
```
Background: #FFFFFF
Border: 1px solid #E8E8E8
Border-radius: 12px
Padding: 32px 24px
Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04)
Transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)
```

**Content Layout**:
```
Icon: 48x48px, centered at top
Icon Color: #6C63FF
Title: 20px, 600 weight, #1A1A1A
Description: 14px, 400 weight, #4A4A4A, margin-top: 12px
```

**Hover State**:
```
Transform: translateY(-8px)
Border-color: #6C63FF
Box-shadow: 0 12px 32px rgba(108, 99, 255, 0.12)
```

#### Project Showcase Card

**Visual Style**:
- Image-based card with overlay text
- Click to open modal with full project details
- Subtle gradient overlay on image

**Default State**:
```
Background: Image cover
Border-radius: 16px
Overflow: hidden
Aspect-ratio: 16 / 9 (or 4 / 3)
Cursor: pointer
```

**Overlay (on hover)**:
```
Background: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.6) 100%)
Opacity: 0 (default) → 1 (hover)
Transition: opacity 0.4s ease
```

**Text on Hover**:
```
Color: #FFFFFF
Font-size: 20px
Font-weight: 600
Position: absolute bottom 24px, left 24px
Transform: translateY(8px) (default) → translateY(0) (hover)
Opacity: 0 (default) → 1 (hover)
```

---

### 2.4 Modals

**Visual Style**:
- Centered overlay with semi-transparent backdrop
- Smooth fade-in and scale animation
- Close button (X icon) in top-right corner

**Modal Container**:
```
Background: #FFFFFF
Border-radius: 20px
Box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15)
Max-width: 800px
Padding: 48px
Position: fixed center
Animation: fade in (opacity 0→1), scale (0.95→1) over 0.3s
```

**Backdrop**:
```
Background: rgba(0, 0, 0, 0.5)
Backdrop-filter: blur(4px)
Transition: opacity 0.3s ease
```

**Close Button**:
```
Position: absolute top-right
Icon: X (lucide-react)
Size: 24x24px
Color: #1A1A1A
Hover: Color → #6C63FF
Transition: all 0.2s ease
Cursor: pointer
```

---

### 2.5 Form Elements

#### Input Fields

**Default State**:
```
Background: #F8F9FA
Border: 1px solid #E8E8E8
Border-radius: 8px
Padding: 12px 16px
Font: 14px Inter, 400 weight
Color: #1A1A1A
Placeholder: #A0A0A0
Transition: all 0.2s ease
```

**Focus State**:
```
Background: #FFFFFF
Border-color: #6C63FF
Box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1)
Outline: none
```

**Error State**:
```
Border-color: #EF4444
Background: rgba(239, 68, 68, 0.02)
```

#### Checkboxes & Radio Buttons

**Default State**:
```
Size: 18x18px
Border: 2px solid #E8E8E8
Border-radius: 4px (checkbox), 50% (radio)
Transition: all 0.2s ease
```

**Checked State**:
```
Background: #6C63FF
Border-color: #6C63FF
Checkmark: #FFFFFF, 2px stroke
```

**Hover State**:
```
Border-color: #6C63FF
Box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1)
```

---

### 2.6 Accordions (FAQ)

**Visual Style**:
- Stacked list of collapsible items
- Clean borders separating each item
- Smooth expand/collapse animation
- Chevron icon rotates on open

**Container**:
```
Border: 1px solid #E8E8E8
Border-radius: 12px
Overflow: hidden
Background: #FFFFFF
```

**Accordion Item Header**:
```
Padding: 24px
Display: flex justify-between align-center
Background: #FFFFFF
Border-bottom: 1px solid #E8E8E8
Cursor: pointer
Transition: background 0.3s ease
```

**Header Hover**:
```
Background: #F8F9FA
```

**Header Content**:
```
Title: 16px, 600 weight, #1A1A1A
```

**Chevron Icon**:
```
Size: 20x20px
Color: #6C63FF
Rotation: 0deg (closed) → 180deg (open)
Transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)
```

**Accordion Item Content**:
```
Padding: 24px
Background: #FAFBFC
Border-bottom: 1px solid #E8E8E8
Font-size: 14px
Line-height: 1.6
Color: #4A4A4A
Max-height: 0 (closed) → auto (open)
Overflow: hidden
Transition: max-height 0.4s ease, padding 0.4s ease
```

---

### 2.7 Footer

**Visual Style**:
- Clean, minimal footer with multiple columns
- Consistent with header in styling
- Links, social icons, and copyright information

**Layout**:
```
Background: #F8F9FA
Border-top: 1px solid #E8E8E8
Padding: 48px 32px (desktop), 32px 20px (mobile)
Display: Grid 4 columns (desktop) → 1-2 columns (mobile)
```

**Column Structure**:
1. **Brand Column**: Logo + brand description
2. **Company Links**: Home, About, Services, Work
3. **Resources**: Blog, Case Studies, Resources
4. **Contact**: Email, Phone, Location, Social Icons

**Link Styling**:
```
Font: 14px, 400 weight
Color: #4A4A4A
Hover: #6C63FF
Transition: color 0.3s ease
Underline: none (default) → appears on hover
```

**Social Icons**:
```
Size: 20x20px
Color: #A0A0A0
Hover: #6C63FF, transform scale(1.15)
Transition: all 0.3s ease
Spacing: 12px between icons
```

**Copyright Text**:
```
Font: 12px, 400 weight
Color: #A0A0A0
Margin-top: 24px
Border-top: 1px solid #E8E8E8
Padding-top: 24px
```

---

## 3. Section-by-Section Blueprint

### 3.1 Hero Section ✅ (Already Implemented)

**Design Overview**:
A bold, immersive full-screen hero section that immediately captures attention and sets the tone for the premium agency experience.

**Key Elements**:
- **Background**: Animated gradient using WebGL shader (dynamic, looping)
- **Main Headline**: "Design for those who want to become a better version of themselves"
  - Desktop: 96px Space Grotesk, 600 weight
  - Mobile: 42px
  - Centered, max-width 920px
- **Supporting Copy**: Explain the agency's approach
  - 16px Inter, 400 weight, #4A4A4A (or white with opacity on dark bg)
- **CTAs**: Two buttons (Explore Work, Get in Touch)
  - Primary button (white background)
  - Secondary button (glass-morphism style)
- **Navigation**: Fixed dropdown menu in top-center
- **Metadata Labels** (Desktop):
  - Left: "Digital production and design studio" + Location
  - Right: "Scroll to explore"
- **Scroll Indicator** (Mobile): Animated vertical line

**Animation Specifications**:
- Background gradient loops smoothly (continuous, 8-12 second cycle)
- "MONO" text reveals with subtle glass effect on load (1.5s reveal)
- Scroll indicator animates up and down (infinite loop)
- Hover effects on buttons: scale, color shift, shadow enhancement

**Layout Grid**:
```
Full viewport height
Flexbox: column center
Padding: 20px (mobile), 32px (desktop)
Gap between elements: 24px-36px
```

**Responsive Behavior**:
- Mobile: Hide side labels, show scroll indicator
- Tablet: Show all elements, adjust font sizes
- Desktop: Full layout with all details

---

### 3.2 Services Section (TODO)

**Design Overview**:
Showcase the four core service offerings in a clean, visual grid with interactive cards.

**Services**:
1. **Web Development** - Building scalable, performant websites and applications
2. **UI/UX Design** - Crafting intuitive, beautiful digital experiences
3. **Branding & Graphics** - Creating visual identities that resonate
4. **Film/Video Editing** - Producing compelling visual content

**Layout**:
- 4-column grid (desktop)
- 2-column grid (tablet)
- 1-column stack (mobile)
- Gap between cards: 24px

**Card Specifications**:
- Service Card component (see section 2.3)
- Icon: 48x48px, #6C63FF
- Title: "Service Name"
- Description: 2-3 sentences explaining the service
- Padding: 32px

**Visual Hierarchy**:
```
[Accent Icon]
  ↓
Service Title (Bold, 20px)
  ↓
Description (Secondary text, 14px)
```

**Hover Animation**:
- Lift effect: translateY(-8px)
- Border color changes to #6C63FF
- Enhanced shadow

**Background**:
- White background
- Subtle 1px border (#E8E8E8)

**Section Layout**:
```
Background: #FFFFFF
Padding: 80px 40px (desktop), 60px 20px (mobile)
Section heading: "Our Services"
  - 56px Space Grotesk, 600 weight, centered
  - Margin-bottom: 48px
Grid of 4 cards with spacing
```

---

### 3.3 Work/Showcase Section (TODO)

**Design Overview**:
Minimal, clean grid showcasing past projects with modal-based details view.

**Grid Layout**:
- 3-column grid (desktop)
- 2-column grid (tablet)
- 1-column (mobile)
- Gap: 24px
- Card aspect ratio: 4:3 or 16:9

**Project Card**:
- Image cover with subtle overlay gradient
- Project title visible on hover
- Subtle shadow
- Clickable to open modal

**Hover Interaction**:
- Image slightly darkens (overlay opacity increases)
- Project title and description fade in from bottom
- Cursor changes to pointer

**Modal on Click**:
- Modal container opens with fade + scale animation
- Contains:
  - Large project image
  - Project title
  - Client/industry information
  - Project description
  - Key metrics (e.g., "Increased engagement by 45%")
  - Technologies used (tags)
  - Timeline
- Close button (X icon) in top-right

**Section Layout**:
```
Background: #FFFFFF or #F8F9FA
Padding: 80px 40px (desktop), 60px 20px (mobile)
Section heading: "Our Work"
  - 56px Space Grotesk, 600 weight
  - Margin-bottom: 48px
Grid of project cards
```

---

### 3.4 Process / How It Works Section (TODO)

**Design Overview**:
A clear, visual representation of the agency's workflow as a simple 3-step process.

**Steps**:
1. **Brief** - Understanding your vision and requirements
2. **Creation** - Designing and building the solution
3. **Launch** - Delivering and optimizing results

**Layout Options**:

**Option A: Vertical Timeline (Recommended for mobile)**
```
Step 1
   ↓ (line)
Step 2
   ↓ (line)
Step 3
```

**Option B: Horizontal Timeline (Recommended for desktop)**
```
Step 1 — Step 2 — Step 3
```

**Each Step Component**:
- Number badge: "01", "02", "03" (32px, accent purple background)
- Heading: Step title (24px Space Grotesk, 600 weight)
- Description: 2-3 sentences (16px, secondary text)
- Icon: Illustrative icon representing the step

**Connecting Lines**:
- Desktop: Horizontal line between steps
- Mobile: Vertical line between steps
- Color: #E8E8E8 or #6C63FF with subtle animation
- Animation: Line draws from left to right (or top to bottom) on scroll

**Card Design**:
```
Background: Transparent or #F8F9FA
Border: Optional 1px border
Border-radius: 12px
Padding: 32px 24px
```

**Section Layout**:
```
Background: #FFFFFF
Padding: 80px 40px (desktop), 60px 20px (mobile)
Section heading: "How We Work"
  - 56px Space Grotesk, 600 weight
  - Margin-bottom: 48px
Process timeline (horizontal or vertical based on viewport)
```

**Animation Triggers**:
- Lines draw in as they enter viewport
- Step cards fade in with staggered timing
- On desktop: lines animate smoothly on scroll

---

### 3.5 FAQ Section (TODO)

**Design Overview**:
Expandable accordion-style FAQ section addressing common client questions.

**Sample FAQ Items**:
1. "What's the difference between your service models?"
2. "How long does a typical project take?"
3. "What's your process for understanding our needs?"
4. "Do you offer ongoing support after launch?"
5. "How do you handle revisions?"
6. "What's your team composition?"

**Accordion Specifications** (see section 2.6):
- Each question is a clickable header
- Chevron icon rotates 180° on expand
- Content slides down with smooth animation
- Max-height transition for performance
- One item open at a time (optional)

**Typography**:
- Question: 16px Inter, 600 weight, #1A1A1A
- Answer: 14px Inter, 400 weight, #4A4A4A
- Line-height: 1.6 for readability

**Visual Treatment**:
- Container with subtle border
- Alternating row backgrounds (optional): white and #F8F9FA
- Left accent border (4px, #6C63FF) that appears on hover

**Section Layout**:
```
Background: #F8F9FA
Padding: 80px 40px (desktop), 60px 20px (mobile)
Max-width: 800px, centered
Section heading: "Frequently Asked Questions"
  - 56px Space Grotesk, 600 weight, centered
  - Margin-bottom: 48px
Accordion container
```

---

### 3.6 Footer Section (TODO)

**Design Overview**:
Clean footer with brand information, navigation, and social links.

**Layout Structure** (Desktop, 4 columns):

**Column 1: Brand**
- Logo/brand name
- Brief tagline: "Digital production & design studio"
- Location: "Algeria"

**Column 2: Product**
- Services
- How We Work
- Pricing
- Contact

**Column 3: Company**
- About
- Blog
- Case Studies
- Resources

**Column 4: Connect**
- Email link
- Phone number
- Social media icons (LinkedIn, Twitter, Instagram, Dribbble)
- Newsletter signup (optional CTA)

**Mobile Layout** (1-2 columns):
- Stack vertically
- Logo and brand info at top
- Links grouped into expandable sections (optional)
- Social icons at bottom

**Visual Specification** (see section 2.7):
- Background: #F8F9FA
- Border-top: 1px solid #E8E8E8
- Link color: #4A4A4A, hover: #6C63FF
- Text sizes: 14px for links, 12px for footer text

**Social Icons**:
- 20x20px size
- Hover effect: scale(1.15) + color change to #6C63FF
- Smooth transition

**Bottom Section**:
- Copyright text
- Optional: "Built with [tools]" credit
- Optional: Privacy policy, Terms of service links

---

## 4. Global Design Tokens & Utilities

### Spacing Scale
```
2px, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
```

### Border Radius
```
Micro: 4px (small elements)
Small: 8px (buttons, inputs)
Medium: 12px (cards)
Large: 16px (modals)
Full: 999px (pills, circles)
```

### Shadows
```
Subtle: 0 2px 8px rgba(0, 0, 0, 0.04)
Soft: 0 4px 16px rgba(0, 0, 0, 0.08)
Medium: 0 12px 32px rgba(0, 0, 0, 0.12)
Strong: 0 25px 50px rgba(0, 0, 0, 0.15)
```

### Transitions
```
Quick: 0.2s ease
Standard: 0.3s cubic-bezier(0.16, 1, 0.3, 1)
Smooth: 0.4s cubic-bezier(0.16, 1, 0.3, 1)
Slow: 0.6s ease-in-out
```

### Z-Index Stack
```
Modal backdrop: 1000
Modal: 1010
Dropdown menu: 50
Fixed navbar: 40
Normal content: 10
Background: 1
```

---

## 5. Design Principles & Guidelines

### 1. **Clarity First**
Every design decision serves clarity. Remove visual noise. Prioritize readability and user understanding.

### 2. **Intentional Motion**
Animation should enhance, not distract. Use motion to:
- Guide attention
- Provide feedback
- Show state changes
- Create delightful micro-interactions

### 3. **Hierarchy Through Scale & Weight**
- Font size variations establish importance
- Font weight contrast (400 vs 600) supports hierarchy
- Opacity creates depth (100% primary, 60% secondary, 40% tertiary)

### 4. **Generous Whitespace**
- Breathing room between sections
- Padding inside components allows content to breathe
- Whitespace is a design element, not empty space

### 5. **Consistency**
- Use the typographic scale religiously (no one-off sizes)
- Apply the color palette strictly
- Maintain consistent spacing and borders

### 6. **Accessibility**
- Minimum contrast ratio 4.5:1 for body text
- Touch targets at least 44x44px on mobile
- Color is never the only way to convey information
- Test with screen readers and keyboard navigation

### 7. **Premium Feel**
- Precision in alignment and spacing
- Smooth, performant animations
- High-quality imagery and illustrations
- Negative space and restraint (less is more)

---

## 6. Implementation Notes for Developers

### CSS Variables to Define
```css
--color-primary: #6C63FF;
--color-text-primary: #1A1A1A;
--color-text-secondary: #4A4A4A;
--color-bg-light: #F8F9FA;
--color-border: #E8E8E8;

--font-heading: 'Space Grotesk';
--font-body: 'Inter';

--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 999px;

--transition-quick: 0.2s ease;
--transition-standard: 0.3s cubic-bezier(0.16, 1, 0.3, 1);
```

### Tailwind Configuration
- Use custom theme extensions for accent color (#6C63FF)
- Define custom spacing values
- Configure shadow presets
- Set up font family imports

### Animation Libraries
- **Framer Motion**: Button hovers, menu morphing, accordion expand/collapse
- **GSAP**: Scroll-triggered animations for sections entering viewport
- **CSS animations**: Simple looping effects (scroll indicator, background shader)

### Responsive Strategy
- Mobile-first approach
- `md:` breakpoint at 768px for tablet
- `lg:` breakpoint at 1024px for desktop
- Test on actual devices, not just browser DevTools

---

## 7. Success Criteria

✅ Design is implemented when:
- [ ] All sections follow the color palette exactly
- [ ] Typography matches the scale (no custom sizes)
- [ ] Animations are smooth and performant (60 FPS)
- [ ] Hover states are implemented on all interactive elements
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Accessibility standards are met (contrast, keyboard nav, ARIA)
- [ ] Loading time is under 3 seconds
- [ ] All animations are intentional and enhance UX

---

## 8. Design Handoff Checklist

**For Developers**:
- [ ] Download fonts (Inter, Space Grotesk) from Google Fonts
- [ ] Set up CSS variables for colors and spacing
- [ ] Configure Tailwind theme with custom accent color
- [ ] Create reusable button components (primary, secondary, ghost)
- [ ] Build card component system
- [ ] Set up animation library configuration
- [ ] Create Storybook stories for each component (optional)

**For QA**:
- [ ] Verify all sections render correctly
- [ ] Test all hover and active states
- [ ] Validate animation performance (no jank)
- [ ] Check responsive behavior on device sizes
- [ ] Audit accessibility (WCAG 2.1 AA)
- [ ] Verify all links and CTAs are functional
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

---

## Appendix: Design Inspiration

This design system draws inspiration from:
- **midu.design**: Clean, professional aesthetic with focus on typography
- **Premium SaaS products**: Stripe, Vercel, Linear (minimalist design, intentional motion)
- **Creative agencies**: Thoughtful whitespace, generous padding, premium feel

The result is a modern, professional landing page that communicates expertise and reliability while maintaining an approachable, human feel.

---

**Design Document Version**: 1.0  
**Last Updated**: May 2026  
**Status**: Ready for Implementation  
**Agency**: MONO Labs
