# LGLC Website Templates

Lesbian and Gay Liberation in Canada (LGLC) website templates and 
components built with a token-based design system.

## 🚀 Quick Start

1. **View the templates:**
   - Open `index.html` in a browser to see the active template (currently Organization page)
   - Open `search.html` to see the search interface

2. **Customize a page:**
   - Edit `index.html` and uncomment the desired page template section
   - Replace placeholder content with your actual data
   - Update CSS files to match your brand (using design tokens)

3. **Add new components:**
   - Create a new CSS file in `css/` directory
   - Import `design-tokens.css` first, then your component CSS
   - Use design tokens exclusively (see Component Styling Guide below)

## 📁 Project Structure

```
├── css/
│   ├── design-tokens.css    # Design system (colors, spacing, typography)
│   ├── header.css           # Header component styles
│   ├── footer.css           # Footer component styles
│   ├── main.css             # Main shared styles
│   ├── pages.css            # Page-specific styles (records, landing, etc.)
│   └── search.css           # Search page styles
├── js/
│   └── header.js            # Header interactivity and accessibility features
├── media/                   # Images, fonts, and assets
│   ├── fonts/               # Local font files (Josefin Sans, Aachen Std)
│   ├── icons/               # Icon images for related results
│   ├── img/                 # Image assets and logos
│   └── style_guide.pdf      # Official LGLC Brand Standards Manual
├── .cursorrules             # Consolidated AI/IDE rules (for coding assistants)
├── DESIGN-LANGUAGE.md       # Comprehensive design language documentation
├── index.html               # Main template (contains multiple page types)
├── search.html              # Search page template with staticSearch integration
└── README.md                # This file
```

## 🎨 Brand Standards

**IMPORTANT:** This project follows the official **LGLC Brand Standards Manual** (see `media/style_guide.pdf`).

### Official Brand Colors

All colors must match the brand standards exactly:

- **Black:** `#000000` - Main headings (Aachen Std)
- **Red:** `#ED1C24` - Header, interactive materials
- **Navy:** `#1C3664` - Body copy, secondary headings (Josefin Sans)
- **Yellow:** `#F6BE38` - Accents, highlights
- **Light Grey:** `#E6E7E8` - Page backgrounds

**Note:** Magenta is part of the official brand palette but is not used in this implementation. We use a context-aware navy-based link color system instead.

### Official Typography

**Primary Typeface: Josefin Sans**
- Body copy (Regular, Navy, 10pt+)
- Secondary headings (Bold, Navy, 14pt+)
- Tertiary headings (Bold, Navy, 11pt+)

**Secondary Typeface: Aachen Std**
- Main headings only (Bold, Black, 18pt+)

### Brand Color Usage Rules

- **Links:** Context-aware navy-based system (see [Link Colors](#-link-colors) section below)
  - Default (on light backgrounds): Brightened navy (`#2D5A8C`) → Navy (`#1C3664`) on hover
  - On colored backgrounds: Context-specific colors (white on red/navy/black, navy on yellow/grey)
- **Interactive elements:** Red (`#ED1C24`) and Red 80% (`#F15B40`)
- **Body text:** Navy (`#1C3664`)
- **Main headings:** Black (`#000000`)

For detailed brand guidelines, typography examples, logo usage rules, and complete link color specifications, see:
- **Brand Standards Manual:** `media/style_guide.pdf`
- **Design Language Doc:** `DESIGN-LANGUAGE.md` - Comprehensive guide with all design system details

---

## 🔗 Link Colors

LGLC uses a context-aware navy-based link color system for optimal brand harmony and accessibility:

- **Default links (on white/light backgrounds):** Brightened navy (`#2D5A8C`) → Navy (`#1C3664`) on hover
- **Links on red backgrounds:** White (background change provides hover feedback)
- **Links on navy/dark backgrounds:** White (background change provides hover feedback)
- **Links on black backgrounds:** White (background change provides hover feedback)
- **Links on grey backgrounds:** Navy (`#1C3664`) → Brightened navy (`#2D5A8C`) on hover
- **Links on yellow backgrounds:** Navy (`#1C3664`) → Black (`#000000`) on hover

All link color combinations meet WCAG 2.1 accessibility standards. See `DESIGN-LANGUAGE.md` for complete specifications and usage examples.

## 🎨 Component Styling Guide

### Design Token System

All styling **must** use design tokens from `css/design-tokens.css`. 
Never hardcode values in component stylesheets.

**✅ Correct:**
```css
.my-component {
  padding: var(--spacing-4);
  color: var(--color-primary-red);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-lg);
}
```

**❌ Incorrect:**
```css
.my-component {
  padding: 16px;           /* Don't hardcode */
  color: #ED1C24;          /* Use tokens */
  border-radius: 8px;      /* Use tokens */
  font-size: 18px;         /* Use tokens */
}
```

### Available Token Categories

- **Colors**: `--color-primary-*`, `--color-secondary-*`
- **Spacing**: `--spacing-1` through `--spacing-24`
- **Typography**: `--font-size-*`, `--font-weight-*`, 
  `--line-height-*`
- **Borders**: `--border-width-*`, `--border-radius-*`, 
  `--border-color-*`
- **Shadows**: `--shadow-xs` through `--shadow-2xl`
- **Opacity**: `--opacity-hover`, `--opacity-disabled`
- **Overlays**: `--overlay-light`, `--overlay-dark`
- **Focus**: `--outline-width-*`, `--outline-offset-*`
- **Touch Targets**: `--touch-target-min`, `--touch-target-sm`

### Creating New Components

1. **Import design tokens first, then your component:**
   ```html
   <!-- Design Tokens MUST be imported first -->
   <link rel="stylesheet" href="css/design-tokens.css">
   <!-- Main shared styles -->
   <link rel="stylesheet" href="css/main.css">
   <!-- Your new component -->
   <link rel="stylesheet" href="css/your-component.css">
   ```

2. **Use design tokens exclusively:**
   - Reference existing tokens via `var(--token-name)`
   - Never define custom values in component CSS
   - If you need a new value, add it to `css/design-tokens.css`

3. **Follow unit conventions:**
   - Use `rem` for all scalable values (spacing, fonts, sizes)
   - Use `px` ONLY for border widths (already in tokens)
   - Use design token variables, not raw values

4. **Maintain consistency:**
   - Use semantic token names (`--text-primary` vs 
     `--color-primary-black`)
   - Follow existing patterns in `css/header.css` and `css/footer.css`
   - Keep component-specific tokens in the component section of 
     `css/design-tokens.css`

### Example: Creating a Card Component

```css
/* card.css */
.card {
  background-color: var(--card-bg);
  border: var(--border-width-thin) solid var(--card-border);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  box-shadow: var(--card-shadow);
  transition: box-shadow var(--transition-fast);
}

.card:hover {
  box-shadow: var(--card-shadow-hover);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-3);
}

.card-text {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
}
```

## 📱 Responsive Design

### Breakpoints

Breakpoints are defined in `css/design-tokens.css` for documentation and 
JavaScript access. **Note:** CSS variables cannot be used in `@media` 
queries, so use the values directly with comments:

```css
/* Mobile-first: min-width queries */
@media (min-width: 48rem) {  /* --breakpoint-md */
  /* Tablet styles (768px+) */
}

@media (min-width: 64rem) {  /* --breakpoint-lg */
  /* Desktop styles (1024px+) */
}

/* Desktop-first: max-width queries */
@media (max-width: 47.9375rem) {  /* --breakpoint-md-max */
  /* Mobile styles (767px and below) */
}
```

**Available breakpoints:**
- `--breakpoint-sm`: 40rem (640px)
- `--breakpoint-md`: 48rem (768px)
- `--breakpoint-lg`: 64rem (1024px)
- `--breakpoint-xl`: 80rem (1280px)
- `--breakpoint-2xl`: 96rem (1536px)

## ♿ Accessibility

- Use semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`)
- Include ARIA labels where needed
- Ensure touch targets are minimum `var(--touch-target-min)` 
  (2.75rem/44px)
- Use focus indicators: `outline: var(--outline-width-thick) solid 
  var(--color-primary-yellow)`
- Test keyboard navigation

## 📄 Page Templates

The `index.html` file contains multiple page templates that can be activated by uncommenting the relevant sections:

- **Landing Page** - Homepage with hero section, featured content, and team section
- **Event Page** - Individual event record with details and related results
- **Person Page** - Individual person record with biography, occupation, and related results
- **Place Page** - Individual place record with related results
- **Periodical Page** - Individual periodical record with related results
- **Organization Page** - Individual organization record with related results (currently active)

To switch between templates, comment/uncomment the relevant `<main>` sections in `index.html`.

## 🔍 Search Functionality

The `search.html` page includes integration with [staticSearch](https://github.com/projectEndings/staticSearch), a static site search solution. The search page includes:

- Tabbed interface for different collection types (Events, People, Places, Periodicals, Organizations)
- Keyword search with date range filters
- Advanced filters for associated people, periodicals, organizations, and places
- Type-based filtering (e.g., place types)
- Boolean filters for availability

**Note:** The staticSearch build artifacts (`ssSearch.js`, `ssInitialize.js`) need to be generated and injected into the search page for full functionality.

## 🎯 JavaScript Features

The `js/header.js` file provides:

- **Mobile Menu Toggle** - Responsive navigation with ARIA attributes
- **Accessibility Enhancements** - Skip links, keyboard navigation, screen reader announcements
- **Focus Management** - Proper focus handling for keyboard users
- **Window Resize Handling** - Auto-closes mobile menu on desktop viewport

## 🚀 Development Rules

- **No hardcoded values** - always use design tokens
- **Consistent units** - use `rem` via tokens (not `px` or `em`)
- **No inline styles** - keep all CSS in stylesheets
- **Import order** - `css/design-tokens.css` must load first
- **Component isolation** - each component in its own CSS file
- **Semantic HTML** - use proper HTML5 elements and ARIA attributes
- **Accessibility first** - ensure all interactive elements are keyboard accessible

## 🌐 Browser Support

These templates are designed to work in modern browsers that support:
- CSS Custom Properties (CSS Variables)
- Flexbox and CSS Grid
- ES6 JavaScript features
- HTML5 semantic elements

## 📝 Usage

1. **Set up your HTML page:**
   ```html
   <!-- Design Tokens MUST be imported first -->
   <link rel="stylesheet" href="css/design-tokens.css">
   <!-- Main shared styles -->
   <link rel="stylesheet" href="css/main.css">
   <!-- Component-specific styles -->
   <link rel="stylesheet" href="css/header.css">
   <link rel="stylesheet" href="css/footer.css">
   <!-- Page-specific styles -->
   <link rel="stylesheet" href="css/pages.css">
   <!-- For search page only -->
   <link rel="stylesheet" href="css/search.css">
   ```
   - Include `js/header.js` before closing `</body>` tag

2. **Use design tokens:**
   - Reference tokens via `var(--token-name)`
   - Never hardcode values in component CSS

3. **Customize templates:**
   - Uncomment the desired page template in `index.html`
   - Replace placeholder content with your actual data
   - Update navigation links and footer content as needed

4. **For search functionality:**
   - Set up staticSearch build process
   - Configure search indexes for your content
   - Inject build artifacts into `search.html`

## 📦 Media Assets

The `media/` folder contains:
- **`fonts/`** - Local font files (Josefin Sans, Aachen Std) with fallback support
- **`icons/`** - Icon images for related results sections (events, people, periodicals, places)
- **`img/`** - Image assets including logos and featured images
- **`style_guide.pdf`** - Official LGLC Brand Standards Manual

Replace placeholder images with your actual project assets. Maintain the same file structure or update image paths in the HTML files accordingly.

## 🔧 Technical Details

- **No build process required** - These are static HTML/CSS/JS templates
- **No dependencies** - Pure vanilla JavaScript and CSS
- **Design tokens** - All styling values are centralized in `css/design-tokens.css`
- **Accessibility** - WCAG 2.1 compliant with semantic HTML and ARIA attributes
- **Mobile-first** - Responsive design with mobile-first approach

## 🤖 For AI/IDE Assistants

This project includes a consolidated rules file for AI coding assistants:

- **`.cursorrules`** - Comprehensive coding rules, brand standards, design token usage, and development guidelines

All AI coding assistants should reference `.cursorrules` for:
- Design token system requirements
- Brand standards compliance
- Component creation guidelines
- Accessibility requirements
- Code quality standards

For detailed design specifications and component examples, see `DESIGN-LANGUAGE.md`.
