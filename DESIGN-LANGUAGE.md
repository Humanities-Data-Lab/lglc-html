# LGLC Design Language

A comprehensive guide to using design elements consistently across the Lesbian and Gay Liberation in Canada (LGLC) website.

**Based on the official LGLC Brand Standards Manual**

## About LGLC

The Lesbian and Gay Liberation in Canada (LGLC) project is working to build an interactive digital resource for the study of LGBT history in Canada. The project takes Don McLeod's books, *Lesbian and Gay Liberation in Canada: A Selected Annotated Chronology Volumes 1 and 2* and will convert them into a visual and interactive database that will allow users to explore the people, places, events, and publications that defined the history of gay liberation in Canada between 1964 and 1981. While being a pilot project within the Canadian Writing Research Collaboratory, this project will be available as part of an interdisciplinary, open-access library database, for use by researchers and students worldwide.

The LGLC identity reflects this mission. It captures these historical movements while transcending to current struggles today.

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Buttons](#buttons)
5. [Cards](#cards)
6. [Layout Patterns](#layout-patterns)
7. [Spacing System](#spacing-system)
8. [Components](#components)
9. [Form Elements](#form-elements)
10. [Images & Media](#images--media)
11. [Responsive Design](#responsive-design)

---

## Brand Identity

### Logo Structure

The LGLC logo is comprised of two parts:
- **Logotype** - The text "LGLC" and tagline
- **Symbol** - The graphical icon

### Logo Versions

**Full Version (with tagline and website)**
- Use whenever possible
- Includes logo, symbol, and logotype

**Symbol Only**
- Use when space is lacking
- Only on LGLC-issued communications materials

### Logo Spacing

The "X" measurement represents the height of the first "L" in "LGLC". This measurement is the basis for all spacing guidelines.

**Spacing Rules:**
- The space surrounding the logo should be equal to or greater than the height of the "L" in the word "LGLC" (the "X" measurement)
- No elements—other logos, type, or images—should encroach upon the "X" space around the logo
- This applies to both the full version and symbol-only versions of the logo

### Logo Usage Don'ts

❌ **NEVER:**
- Stretch the logo horizontally or vertically
- Place the logo on an angle
- Reconfigure the logo elements
- Use effects like drop shadows
- Change the logo colors

### File Types

LGLC's logo is available in several different file types. File selection is determined by the media:

**For Print (High-Res):**
- Main Identity: `LGLC Logo Black.eps`
- Symbol only: `LGLC Logo Icon Black.eps`

**For Web (Low-Res):**
- Main Identity: `LGLC Logo Black.jpg`
- Symbol only: `LGLC Logo Icon Black.jpg`

---

## Color System

### Primary Colors

Materials issued by LGLC should utilize the official brand palette. If limited by a one-colour option, black can be used.

- **Black (`--color-primary-black`)** - Primary text, headings, main emphasis
  - **Hex:** `#000000`
  - **RGB:** 0, 0, 0
  - **CMYK:** 0/0/0/100
  - Use for: Main headings (Aachen std), primary buttons, high-contrast text
  - Example: Main page titles, `.btn-primary` buttons

- **Red (`--color-primary-red`)** - Header background, interactive elements, critical information
  - **Hex:** `#ED1C24`
  - **RGB:** 237, 28, 36
  - **CMYK:** 0/100/100/0
  - Use for: Site header banner, interactive materials (menus, maps, graphs), error states
  - Example: Header banner, navigation highlights

- **Navy (`--color-primary-navy`)** - Navigation, body text, primary UI elements
  - **Hex:** `#1C3664`
  - **RGB:** 28, 54, 100 (Note: Brand manual shows 0/51/102, but hex `#1C3664` = RGB 28/54/100)
  - **CMYK:** 100/87/33/23
  - Use for: Navigation backgrounds, headings (Josefin Sans), body copy
  - Example: Secondary headings, navigation bar, primary text

- **Magenta (`--color-primary-magenta`)** - Links, accent color
  - **Hex:** `#EC008C`
  - **RGB:** 236, 0, 140
  - **CMYK:** 0/100/0/0
  - Use for: Links (80% tint), special emphasis, accent elements
  - Example: Text links, highlighted content

- **Yellow (`--color-primary-yellow`)** - Accents, highlights, warm elements
  - **Hex:** `#F6BE38`
  - **RGB:** 246, 190, 56
  - **CMYK:** 3/26/89/0
  - Use for: Accents, highlights, warning states (not primary focus indicators)
  - Example: Accent elements, decorative highlights

### Grey Tones

- **Light Grey (`--color-grey-light`)** - Backgrounds, subtle elements
  - **Hex:** `#E6E7E8`
  - **RGB:** 230, 231, 232
  - **CMYK:** 0/0/0/10
  - Use for: Page backgrounds, subtle separators, light UI elements

### Secondary Colors (Tints)

Tints of 80% and 60% of the primary palette can be used for variety.

**80% Tints:**
- **Black 80%:** `#58595B` (RGB: 88, 89, 91, CMYK: 0/0/0/80)
- **Red 80%:** `#F15B40` (RGB: 241, 91, 64, CMYK: 0/80/80/0) - Use for: Interactive materials (with red)
- **Navy 80%:** `#445078` (RGB: 68, 80, 120, CMYK: 80/69/26/18)
- **Magenta 80%:** `#EF5BA1` (RGB: 239, 91, 161, CMYK: 0/80/0/0) - **Note:** Brand manual specifies this for links, but we use context-aware navy-based system (see Link Colors section)
- **Yellow 80%:** `#F8C965` (RGB: 248, 201, 101, CMYK: 2/21/71/0)

**60% Tints:**
- **Black 60%:** `#808285` (RGB: 128, 130, 133, CMYK: 0/0/0/60)
- **Red 60%:** `#F58466` (RGB: 245, 132, 102, CMYK: 0/60/60/0)
- **Navy 60%:** `#6A6D8F` (RGB: 106, 109, 143, CMYK: 60/52/20/14)
- **Magenta 60%:** `#F287B7` (RGB: 242, 135, 183, CMYK: 0/60/0/0)
- **Yellow 60%:** `#FAD589` (RGB: 250, 213, 137, CMYK: 2/16/53/0)

### Semantic Colors

**Text Colors:**
- `--text-primary` - Main content, headings (black: `#000000`)
- `--text-secondary` - Body text, descriptions (navy: `#1C3664`)
- `--text-tertiary` - Metadata, less important info (navy 60%: `#6A6D8F`)
- `--text-inverse` - Text on dark backgrounds (white)
- `--text-link` - Links (context-aware navy-based system: brightened navy `#2D5A8C` on light backgrounds)
  - **Note:** Brand manual specifies magenta 80% for links, but we use a context-aware navy-based system (see [Link Colors](#link-colors-implementation-note) section)

**Background Colors:**
- `--bg-page` - Page background (light grey: `#E6E7E8`)
- `--bg-surface` - Card/container backgrounds (white)
- `--bg-elevated` - Elevated surfaces (white with shadow)

### Color Usage Rules (from Brand Standards)

✅ **DO:**
- Use **red** (`#ED1C24`) and **red 80%** (`#F15B40`) for interactive materials (menus, maps, graphs)
- Use **navy** (`#1C3664`) for headings and body copy
- Use **black** (`#000000`) for main headings (with Aachen std font)
- Maintain the official color palette values exactly
- Use tints (80% and 60%) for variety
- If limited by a one-colour option, black can be used

❌ **DON'T:**
- Don't stretch or distort logo colors
- Don't use effects like drop shadows on brand elements
- Don't create new colors outside the approved palette
- Don't change the official hex values
- Don't use colors that aren't in the brand standards

### Link Colors (Implementation Note)

**Brand Manual Specification:** The brand standards manual specifies that 80% magenta (`#EF5BA1`) should be used for links.

**Our Implementation:** We use a context-aware navy-based link color system instead, which provides better brand harmony and accessibility. This system uses:
- **Default links (on light backgrounds):** Brightened navy (`#2D5A8C`) → Navy (`#1C3664`) on hover
- **Links on colored backgrounds:** Context-specific colors (white on red/navy/black, navy on yellow/grey)

This approach maintains brand cohesion while ensuring optimal contrast and accessibility across all contexts. See the [Typography & Color](#typography--color) section for complete link color specifications.

---

## Typography

### Font Families

**Official LGLC Typefaces:**

- **Primary Typeface: Josefin Sans** (`--font-family-primary`)
  - Web-friendly typeface
  - Available weights: Light, Light Italic, Regular, Bold, Bold Italic
  - Use for: Body copy, secondary headings, tertiary headings, all general UI
  - **Regular** - Default body copy
  - **Bold** - Secondary headings
  - Example: Paragraph text, navigation, buttons, form inputs

- **Secondary Typeface: Aachen Std** (`--font-family-heading`)
  - Use for: Main headings only
  - Bold weight
  - Color: Black (`#000000`)
  - Size: 18pt+ (1.125rem+)
  - Example: Page titles, major section headings

- **Mono Font** (`--font-family-mono`) - Monospace stack
  - Use for: Code, technical content, data tables (if needed)

### Font Sizes

**Typography Hierarchy (from Brand Standards):**

- **Main Heading** - 18pt+ (1.5rem/24px) - Aachen Std, Black
  - Use for: Page titles, major section headings
  - Font: `--font-family-heading` (Aachen Std)
  - Token: `--font-size-main-heading`
  - Color: `--text-primary` (Black #000000)
  - Example: "LOREM IPSUM DOLOR", main page titles
  
- **Secondary Heading** - 14pt+ (1.167rem/~19px) - Josefin Sans Bold, Navy
  - Use for: Section subheadings, important subsections
  - Font: `--font-family-primary` (Josefin Sans Bold)
  - Token: `--font-size-secondary-heading`
  - Color: `--text-secondary` (Navy #1C3664)
  - Example: Section titles, card headings
  
- **Tertiary Heading** - 11pt+ (0.917rem/~15px) - Josefin Sans Bold, Navy
  - Use for: Smaller headings, card titles, emphasized labels
  - Font: `--font-family-primary` (Josefin Sans Bold)
  - Token: `--font-size-tertiary-heading`
  - Color: `--text-secondary` (Navy #1C3664)
  - Example: Small section titles, form group labels
  
- **Body Copy** - 10pt+ (0.875rem/14px) - Josefin Sans Regular, Navy
  - Use for: All body text, paragraph content
  - Font: `--font-family-primary` (Josefin Sans Regular)
  - Token: `--font-size-body`
  - Color: `--text-secondary` (Navy #1C3664)
  - Example: Main content, descriptions, general text (like Jane Rule biography)

**Additional Size Scale:**

- **5xl (3rem/48px)** - Hero titles, landing page headlines
- **4xl (2.25rem/36px)** - Large section titles
- **3xl (1.875rem/30px)** - Subsection headings
- **2xl (1.5rem/24px)** - Main headings (18pt) when used in large contexts
- **xl (1.25rem/20px)** - Large emphasis text
- **lg (1.125rem/18px)** - Large body text, descriptions
- **base (1rem/16px)** - UI elements (buttons, inputs, labels)
- **sm (0.875rem/14px)** - Body copy (10.5pt, meets 10pt+ requirement)
- **xs (0.75rem/12px)** - Small text, captions, metadata

### Font Weights

- **Extrabold (800)** - Hero titles, major emphasis
- **Bold (700)** - Section headings, important content
- **Semibold (600)** - Buttons, card titles, emphasized text
- **Medium (500)** - Navigation links, subheadings
- **Normal (400)** - Body text, default weight

### Line Heights

Based on the brand guide visual examples:

- **Tight (1.2)** - Main headings (Aachen Std), large display text
- **Normal (1.4)** - Secondary and tertiary headings (Josefin Sans Bold)
- **Relaxed (1.7)** - Short paragraphs, descriptions, metadata
- **Loose (1.9)** - Body copy, long-form content (per brand guide example)

### Typography & Color (Brand Standards)

LGLC applications should use the following styles and colors as a base for all LGLC materials:

**Typography Hierarchy:**
- **Main Heading:** Aachen Std | Color: Black (`#000000`) | Size: 18pt+
- **Secondary Heading:** Josefin Sans Bold | Color: Navy (`#1C3664`) | Size: 14pt+
- **Tertiary Heading:** Josefin Sans Bold | Color: Navy (`#1C3664`) | Size: 11pt+
- **Body Copy:** Josefin Sans Regular | Color: Navy (`#1C3664`) | Size: 10pt+

**Interactive Materials:**
- **Red** (`#ED1C24`) and **Red 80%** (`#F15B40`) should be used for interactive materials (e.g., menus, maps, graphs)

**Links:**
- **Brand Manual:** 80% magenta (`#EF5BA1`) should be used for links
- **Our Implementation:** Context-aware navy-based system (see [Link Colors](#link-colors-implementation-note) section)

### Typography Usage Rules

✅ **DO:**
- Use **Aachen Std** for main headings (18pt+) in black
- Use **Josefin Sans Bold** for secondary and tertiary headings in navy
- Use **Josefin Sans Regular** for all body copy in navy
- Use the official brand font hierarchy
- Maintain tight line-height for headings
- Use relaxed line-height for body text
- Use **red** and **red 80%** for interactive materials (menus, maps, graphs)

❌ **DON'T:**
- Don't use Josefin Sans for main headings (use Aachen Std instead)
- Don't use Aachen Std for body copy (use Josefin Sans instead)
- Don't use colors other than black for main headings (Aachen Std)
- Don't use colors other than navy for secondary/tertiary headings and body copy
- Don't mix font families outside the brand standards
- Don't use font weights not specified in the brand standards

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

| Color | Hex | Token | Use For |
|-------|-----|-------|---------|
| Black | `#000000` | `--color-primary-black` | Main headings (Aachen), primary text |
| Red | `#ED1C24` | `--color-primary-red` | Header, interactive materials |
| Navy | `#1C3664` | `--color-primary-navy` | Headings (Josefin), body copy, navigation |
| Magenta | `#EC008C` | `--color-primary-magenta` | Accent elements |
| Yellow | `#F6BE38` | `--color-primary-yellow` | Accents, highlights |
| Light Grey | `#E6E7E8` | `--color-grey-light` | Backgrounds, subtle elements |
| Magenta 80% | `#EF5BA1` | `--color-magenta-80` | **Links** |
| Red 80% | `#F15B40` | `--color-red-80` | Interactive materials (with red) |

---

## Design Principles

1. **Brand Integrity** - Follow the official LGLC Brand Standards Manual exactly
2. **Consistency** - Use design tokens consistently across all pages
3. **Hierarchy** - Establish clear visual hierarchy with typography (Aachen for main, Josefin for secondary)
4. **Accessibility** - Ensure all elements are accessible and keyboard navigable
5. **Responsive** - Design mobile-first, enhance for larger screens
6. **Clarity** - Use clear, semantic HTML and appropriate components
7. **Historical Mission** - Honor the historical LGBT liberation movement while remaining relevant today

---

## Brand Standards Reference

This design language is based on the **LGLC Brand Standards Manual**. For official logo files, detailed spacing guidelines, and additional brand usage rules, refer to:

- **Document:** `media/style_guide.pdf`
- **Contact:** www.lglc.ca

### Brand Standards Manual Contents

The official LGLC Brand Standards Manual includes:

1. **File Types** - Logo file formats for print (`.eps`) and web (`.jpg`)
2. **Structure** - Full version (with tagline and website) and symbol-only versions
3. **Spacing** - X measurement guidelines for logo placement
4. **Colour Palette** - Primary colors, grey tones, and secondary tints (80% and 60%)
5. **Typography** - Primary typeface (Josefin Sans) and secondary typeface (Aachen Std)
6. **Typography & Colour** - Usage guidelines for headings, body copy, and interactive materials
7. **Don'ts** - Logo usage restrictions
8. **Contact Information** - www.lglc.ca

### Key Brand Rules

1. ✅ Use exact hex values from the brand palette
2. ✅ Use Aachen Std for main headings only (18pt+, black)
3. ✅ Use Josefin Sans for body copy and secondary/tertiary headings (navy)
4. ✅ Use red and red 80% for interactive materials (menus, maps, graphs)
5. ✅ Maintain proper logo spacing (X measurement)
6. ✅ Use tints (80% and 60%) for variety
7. ✅ If limited by one-colour option, use black
8. ❌ Never stretch, rotate, or apply effects to the logo
9. ❌ Never change brand colors or create new combinations
10. ❌ Never use fonts outside Aachen Std and Josefin Sans
11. ❌ Never reconfigure logo elements
12. ❌ Never place logo on an angle

**Note on Links:** The brand manual specifies magenta 80% for links, but we implement a context-aware navy-based system for better brand harmony and accessibility.

---

## Implementation Guide

### How to Apply Brand Standards to Components

**1. Headings:**

```css
/* Main Heading (h1) - Brand Standard */
h1 {
  font-family: var(--font-family-heading);     /* Aachen Std */
  font-size: var(--font-size-main-heading);    /* 18pt+ (1.5rem/24px) */
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);                  /* Black #000000 */
  line-height: var(--line-height-tight);       /* 1.2 - Tight for large headings */
}

/* Secondary Heading (h2) - Brand Standard */
h2 {
  font-family: var(--font-family-primary);         /* Josefin Sans */
  font-size: var(--font-size-secondary-heading);   /* 14pt+ (1.167rem/~19px) */
  font-weight: var(--font-weight-bold);
  color: var(--text-secondary);                    /* Navy #1C3664 */
  line-height: var(--line-height-normal);          /* 1.4 - Comfortable for subheadings */
}

/* Tertiary Heading (h3) - Brand Standard */
h3 {
  font-family: var(--font-family-primary);        /* Josefin Sans */
  font-size: var(--font-size-tertiary-heading);   /* 11pt+ (0.917rem/~15px) */
  font-weight: var(--font-weight-bold);
  color: var(--text-secondary);                   /* Navy #1C3664 */
  line-height: var(--line-height-normal);         /* 1.4 - Comfortable for small headings */
}
```

**2. Body Text:**

```css
/* Body Element - Brand Standard */
body {
  font-family: var(--font-family-primary);  /* Josefin Sans */
  font-size: var(--font-size-body);         /* 10pt+ (0.875rem/14px) */
  font-weight: var(--font-weight-normal);
  color: var(--text-secondary);             /* Navy #1C3664 */
  line-height: var(--line-height-loose);    /* 1.9 - Generous spacing per brand guide */
}

/* Paragraphs - Brand Standard */
p {
  font-family: var(--font-family-primary);  /* Josefin Sans */
  font-size: var(--font-size-body);         /* 10pt+ (0.875rem/14px) */
  color: var(--text-secondary);             /* Navy #1C3664 */
  line-height: var(--line-height-loose);    /* 1.9 - Generous spacing per brand guide */
}
```

**3. Links:**

```css
a {
  color: var(--text-link);                  /* Magenta 80% #EF5BA1 */
  text-decoration: underline;
}

a:hover {
  color: var(--text-link-hover);            /* Full Magenta #EC008C */
}
```

**4. Interactive Elements (Buttons, Menus):**

```css
.interactive-element {
  background-color: var(--color-primary-red);     /* Red #ED1C24 */
}

.interactive-element:hover {
  background-color: var(--color-red-80);          /* Red 80% #F15B40 */
}
```

---

*Last updated: Based on official LGLC Brand Standards Manual*

