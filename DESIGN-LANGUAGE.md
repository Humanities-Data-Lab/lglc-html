# LGLC Design Language

A comprehensive guide to using design elements consistently across the Lesbian and Gay Liberation in Canada (LGLC) website.

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Buttons](#buttons)
4. [Cards](#cards)
5. [Layout Patterns](#layout-patterns)
6. [Spacing System](#spacing-system)
7. [Components](#components)
8. [Form Elements](#form-elements)
9. [Images & Media](#images--media)
10. [Responsive Design](#responsive-design)

---

## Color System

### Primary Colors

**When to use:**

- **Red (`--color-primary-red`)** - Header background, primary actions, critical information
  - Use for: Site header banner, primary call-to-action buttons, error states, important alerts
  - Example: Header banner, search buttons

- **Navy (`--color-primary-navy`)** - Navigation, text on light backgrounds, primary UI elements
  - Use for: Navigation backgrounds, primary text color, search interface backgrounds, links
  - Example: Search tabs container, navigation bar, primary text

- **Yellow (`--color-primary-yellow`)** - Accents, highlights, focus indicators
  - Use for: Focus outlines, warning states, accent elements, team section backgrounds
  - Example: Focus rings, team section background

- **Black (`--color-primary-black`)** - Primary buttons, high-contrast text
  - Use for: Primary action buttons, main headings, high-emphasis text
  - Example: `.btn-primary` buttons, main page titles

- **Gray (`--color-primary-gray`)** - Borders, secondary elements
  - Use for: Button borders, dividers, disabled states, subtle separations
  - Example: `.btn-secondary` borders, card borders

### Secondary Colors

**When to use:**

- **Magenta (`--color-primary-magenta`)** - Accent color for special emphasis
- **Orange (`--color-secondary-orange`)** - Hover states, warm accents
- **Coral (`--color-secondary-coral`)** - Error backgrounds, warm highlights
- **Charcoal (`--color-secondary-charcoal`)** - Secondary text, hover states
  - Use for: Body text, secondary information, button hover states
- **Dark Gray (`--color-secondary-dark-gray`)** - Tertiary text
  - Use for: Less important text, metadata, captions

### Semantic Colors

**When to use:**

- **Text Colors:**
  - `--text-primary` - Main content, headings (black)
  - `--text-secondary` - Body text, descriptions (charcoal)
  - `--text-tertiary` - Metadata, less important info (dark gray)
  - `--text-inverse` - Text on dark backgrounds (white)

- **Background Colors:**
  - `--bg-page` - Page background (light gray)
  - `--bg-surface` - Card/container backgrounds (white)
  - `--bg-elevated` - Elevated surfaces (white with shadow)

### Color Usage Rules

✅ **DO:**
- Use primary red for header and critical actions
- Use navy for navigation and primary UI elements
- Use yellow for focus states and accessibility
- Use semantic text colors for consistent hierarchy

❌ **DON'T:**
- Don't use brand colors for decorative purposes only
- Don't create new color combinations without design system approval
- Don't use colors that aren't in the design token system

---

## Typography

### Font Families

- **Primary Font** (`--font-family-primary`) - System font stack
  - Use for: All body text, buttons, form inputs, general UI
- **Heading Font** (`--font-family-heading`) - Same as primary
  - Use for: All headings (h1-h6)
- **Mono Font** (`--font-family-mono`) - Monospace stack
  - Use for: Code, technical content, data tables

### Font Sizes

**When to use each size:**

- **5xl (3rem/48px)** - Hero titles, landing page main headings
  - Example: `.hero-title`, main page headlines
  
- **4xl (2.25rem/36px)** - Section titles, major page headings
  - Example: `.section-title`, `.team-title`
  
- **3xl (1.875rem/30px)** - Subsection headings, large content titles
  - Example: Mobile hero titles, large card titles
  
- **2xl (1.5rem/24px)** - Medium headings, section subheadings
  - Example: `.details-heading`, `.related-heading`
  
- **xl (1.25rem/20px)** - Small headings, card titles
  - Example: `.card-title`, `.about-subheading`
  
- **lg (1.125rem/18px)** - Large body text, emphasized content
  - Example: `.hero-description`, search tab links
  
- **base (1rem/16px)** - Default body text, buttons, form inputs
  - Example: Most content, button text, form labels
  
- **sm (0.875rem/14px)** - Small text, captions, metadata
  - Example: Form labels, footer links, search filters
  
- **xs (0.75rem/12px)** - Tiny text, fine print
  - Example: Copyright text, very small labels

### Font Weights

- **Extrabold (800)** - Hero titles, major emphasis
- **Bold (700)** - Section headings, important content
- **Semibold (600)** - Buttons, card titles, emphasized text
- **Medium (500)** - Navigation links, subheadings
- **Normal (400)** - Body text, default weight

### Line Heights

- **Tight (1.25)** - Headings, short text blocks
- **Normal (1.5)** - Body text, general content
- **Relaxed (1.75)** - Long-form content, descriptions
- **Loose (2)** - Very long-form content, poetry

### Typography Usage Rules

✅ **DO:**
- Use size hierarchy to establish information importance
- Use tight line-height for headings
- Use relaxed line-height for body text
- Maintain consistent font weights within component types

❌ **DON'T:**
- Don't mix font families unnecessarily
- Don't use more than 3 font sizes in a single section
- Don't use font-weight to create hierarchy when size would be more appropriate

---

## Buttons

### Primary Button (`.btn-primary`)

**When to use:**
- Main call-to-action on a page
- Primary user actions (Submit, Search, Continue)
- Hero section actions
- Most important action in a group

**Characteristics:**
- Black background (`--color-primary-black`)
- White text
- Medium border radius
- Hover: Darker background, slight lift, shadow
- Focus: Yellow outline

**Example:**
```html
<a href="/search" class="btn-primary">Search Database</a>
<button class="btn-primary">Submit</button>
```

### Secondary Button (`.btn-secondary`)

**When to use:**
- Secondary actions
- Alternative options
- Less important actions
- When you need visual hierarchy (primary vs secondary)

**Characteristics:**
- Transparent background
- Black text
- Gray border
- Hover: Light gray background
- Focus: Yellow outline

**Example:**
```html
<button class="btn-secondary">Cancel</button>
<a href="/about" class="btn-secondary">Learn More</a>
```

### Team Section Buttons

**When to use:**
- Buttons on colored backgrounds (like yellow team section)
- Special section call-to-actions

**`.btn-team-primary`:**
- Black background, white text
- Use on yellow/light backgrounds

**`.btn-team-secondary`:**
- White background, black text
- Use on yellow/light backgrounds for contrast

### Button Usage Rules

✅ **DO:**
- Use primary button for the most important action
- Use secondary button for alternative actions
- Group related buttons together
- Ensure buttons have sufficient touch target size (44px minimum)

❌ **DON'T:**
- Don't use more than one primary button per section
- Don't use buttons for navigation (use links instead)
- Don't make buttons too small (minimum touch target: 44px)

---

## Cards

### Content Cards (`.card`)

**When to use:**
- Displaying related content items
- Feature highlights
- Content previews
- Grid layouts of similar items

**Characteristics:**
- White background
- Image at top (optional)
- Title and content below
- Hover: Slight lift, enhanced shadow
- Focus: Yellow outline

**Example:**
```html
<article class="card">
  <img src="..." alt="..." class="card-image">
  <h3 class="card-title">Card Title</h3>
</article>
```

### Related Results Cards (`.related-card`)

**When to use:**
- Displaying related content on detail pages
- Showing connections between records
- Grouping related information

**Characteristics:**
- Icon/image at top
- Heading
- List of related items
- Used in 3-column grid (desktop)

**Example:**
```html
<div class="related-card">
  <img src="..." class="related-icon-img" alt="">
  <h3 class="related-heading">Affiliated persons</h3>
  <ul class="related-list">
    <li>Person's Name</li>
  </ul>
</div>
```

### Card Usage Rules

✅ **DO:**
- Use cards for grouping related content
- Maintain consistent card sizes in grids
- Include hover states for interactive cards
- Use cards in responsive grids

❌ **DON'T:**
- Don't nest cards within cards
- Don't use cards for single pieces of information
- Don't make cards too small to be clickable

---

## Layout Patterns

### Containers

**`.landing-container`**
- Use for: Landing page sections
- Max width: 75rem (1200px)
- Centered with side padding

**`.record-container`**
- Use for: Individual record pages (Event, Person, Place, etc.)
- Max width: 80rem (1280px)
- White background
- Side padding

**`.search-section`**
- Use for: Search page content
- Max width: 72.5rem (1160px)
- Centered layout

### Content Widths

- **Narrow (40rem/640px)** - Hero content, focused reading
- **Medium (48rem/768px)** - Standard content width
- **Wide (64rem/1024px)** - Search interfaces, wide content
- **XLarge (75rem/1200px)** - Landing page sections
- **Search (72.5rem/1160px)** - Search page specific

### Grid Layouts

**3-Column Grid (`.cards-grid`)**
- Use for: Card layouts, related results
- Responsive: Stacks to 1 column on mobile
- Gap: `--spacing-8`

**2-Column Grid**
- Use for: About sections, content with images
- Responsive: Stacks to 1 column on tablet/mobile

### Section Spacing

- **Hero sections**: `--spacing-20` top, `--spacing-16` bottom
- **Standard sections**: `--spacing-20` vertical
- **Featured images**: `--spacing-12` top, `--spacing-16` bottom
- **Team sections**: `--spacing-16` vertical

---

## Spacing System

### Spacing Scale

Use spacing tokens consistently:

- **0** - No spacing
- **1 (0.25rem/4px)** - Tight spacing, icon padding
- **2 (0.5rem/8px)** - Small gaps, tight lists
- **3 (0.75rem/12px)** - Standard small spacing
- **4 (1rem/16px)** - Default spacing, button padding
- **5 (1.25rem/20px)** - Medium spacing
- **6 (1.5rem/24px)** - Card padding, larger gaps
- **8 (2rem/32px)** - Section gaps, grid gaps
- **10 (2.5rem/40px)** - Large gaps
- **12 (3rem/48px)** - Section spacing
- **16 (4rem/64px)** - Major section spacing
- **20 (5rem/80px)** - Hero spacing
- **24 (6rem/96px)** - Maximum spacing

### Spacing Usage Rules

✅ **DO:**
- Use spacing tokens, never hardcode values
- Maintain consistent spacing within components
- Use larger spacing for major sections
- Use smaller spacing for related elements

❌ **DON'T:**
- Don't mix spacing units (px, em, rem)
- Don't create custom spacing values
- Don't use spacing that doesn't align with the scale

---

## Components

### Header

**When to use:**
- On every page
- Contains site logo and navigation
- Sticky positioning for accessibility

**Structure:**
- Red banner background
- White text
- Logo on left, navigation on right
- Mobile menu toggle for small screens

### Navigation

**Primary Navigation (`.primary-nav`)**
- Desktop: Horizontal list
- Mobile: Hidden, use mobile menu
- Active state: Current page indicator

**Mobile Navigation (`.mobile-nav`)**
- Hidden by default
- Toggle with hamburger menu
- Full-width dropdown
- Accessible with keyboard navigation

### Footer

**When to use:**
- On every page
- Contains site links, social media
- Multiple columns (desktop), stacked (mobile)

**Structure:**
- Logo and social links (left)
- Navigation columns (right)
- Responsive: Stacks on mobile

### Search Interface

**When to use:**
- Search page (`search.html`)
- Integrated with staticSearch

**Components:**
- Search tabs for collection types
- Search form with filters
- Date range filters
- Feature filters (people, places, etc.)
- Results display area

---

## Form Elements

### Input Fields

**Text Inputs**
- Background: Light gray (`--color-bg-lighter-gray`)
- Border: Navy with opacity
- Focus: Navy border, white background, shadow
- Border radius: Large (`--border-radius-lg`)

**When to use:**
- Search inputs
- Form fields
- Filter inputs

### Select Dropdowns

**Characteristics:**
- Same styling as text inputs
- Custom arrow icon
- Accessible keyboard navigation

### Checkboxes

**When to use:**
- Filter options
- Multiple selections
- Type selections

**Style:**
- Custom styled checkboxes
- Pill-shaped labels
- Selected: Navy background, white text

### Form Layout

**Grid Layout (`.ssFieldset`)**
- Label column: 240px (desktop)
- Input column: Flexible
- Responsive: Stacks on mobile

---

## Images & Media

### Image Sizes

**When to use each:**

- **Small (12.5rem/200px)** - Thumbnails, small cards
- **Medium (15rem/240px)** - Card images, standard content
- **Large (31.25rem/500px)** - Featured images, hero images
- **XLarge (37.5rem/600px)** - About section images
- **2XLarge (50rem/800px)** - Full-width hero images

### Image Usage Rules

✅ **DO:**
- Use appropriate image sizes for context
- Include descriptive alt text
- Use `object-fit: cover` for consistent aspect ratios
- Optimize images for web

❌ **DON'T:**
- Don't use images larger than necessary
- Don't skip alt text
- Don't distort images

---

## Responsive Design

### Breakpoints

**Mobile First Approach:**
- Default: Mobile styles
- Tablet: `48rem` (768px) and up
- Desktop: `64rem` (1024px) and up
- Large Desktop: `80rem` (1280px) and up

### Responsive Patterns

**Navigation:**
- Mobile: Hamburger menu
- Desktop: Horizontal navigation

**Grids:**
- Mobile: 1 column
- Tablet: 2 columns (if applicable)
- Desktop: 3 columns

**Typography:**
- Mobile: Smaller font sizes
- Desktop: Larger font sizes

**Spacing:**
- Mobile: Reduced padding
- Desktop: Full spacing

### Responsive Usage Rules

✅ **DO:**
- Design mobile-first
- Test on multiple screen sizes
- Use flexible units (rem, %, fr)
- Hide/show content appropriately

❌ **DON'T:**
- Don't use fixed pixel widths for layouts
- Don't hide important content on mobile
- Don't make touch targets too small

---

## Accessibility Guidelines

### Focus States

**Always include:**
- Yellow outline (`--color-primary-yellow`)
- Adequate offset (`--outline-offset-sm`)
- Visible on all interactive elements

### Touch Targets

**Minimum sizes:**
- Interactive elements: 44px × 44px minimum
- Buttons: Adequate padding
- Links: Sufficient clickable area

### Color Contrast

- Text on backgrounds must meet WCAG AA standards
- Use semantic colors for text
- Don't rely on color alone for information

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order
- Skip links for main content
- ARIA labels where needed

---

## Quick Reference

### When to Use What

| Element | Use Case | Example |
|---------|----------|---------|
| `.btn-primary` | Main action | "Search Database", "Submit" |
| `.btn-secondary` | Alternative action | "Cancel", "Learn More" |
| `.card` | Content previews | Feature cards, content grid |
| `.related-card` | Related content | Affiliated items on detail pages |
| `.hero-title` | Main page heading | Landing page title |
| `.section-title` | Section headings | "How do I get started?" |
| `.search-tabs` | Collection type navigation | Events, People, Places tabs |
| `.record-container` | Detail pages | Event, Person, Place pages |
| `.landing-container` | Landing page sections | Hero, About, Team sections |

### Color Quick Reference

| Color | Token | Use For |
|-------|-------|---------|
| Red | `--color-primary-red` | Header, primary actions |
| Navy | `--color-primary-navy` | Navigation, search UI |
| Yellow | `--color-primary-yellow` | Focus, accents, team section |
| Black | `--color-primary-black` | Primary buttons, headings |
| Charcoal | `--color-secondary-charcoal` | Body text, secondary info |

---

## Design Principles

1. **Consistency** - Use design tokens consistently across all pages
2. **Hierarchy** - Establish clear visual hierarchy with typography and spacing
3. **Accessibility** - Ensure all elements are accessible and keyboard navigable
4. **Responsive** - Design mobile-first, enhance for larger screens
5. **Clarity** - Use clear, semantic HTML and appropriate components
6. **Brand** - Maintain brand colors and identity throughout

---

*Last updated: Based on current design system implementation*

