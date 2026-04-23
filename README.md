# LGLC Website Templates

Lesbian and Gay Liberation in Canada (LGLC) website templates and components built with a **token-based design system** documented in `DESIGN-LANGUAGE.md` and sourced from `designs/Design System.png`.

## Quick start

1. **View the templates**
   - Open `index.html` in a browser to explore the main template (multiple page sections can be toggled in the file).
   - Open files under `demo/` for standalone examples (landing, record types, etc.).

2. **Customize a page**
   - Edit the relevant HTML and replace placeholder content.
   - Style changes should go through **`css/design-tokens.css`** and component CSS—avoid hardcoded values (see below).

3. **Add new components**
   - Add a CSS file under `css/`.
   - Load `design-tokens.css` first, then shared styles, then your component.
   - Use tokens only (`var(--token-name)`).

## Project structure

```
├── css/
│   ├── design-tokens.css    # Design tokens (colors, spacing, typography)
│   ├── header.css           # Header / nav / search bar strip
│   ├── footer.css           # Footer (white band; navy text)
│   ├── main.css             # Base typography, buttons, grids, utilities
│   ├── components.css       # Cards, tags, related-result cards, tertiary buttons
│   ├── pages.css            # Landing + record page patterns
│   └── search.css           # staticSearch / search UI styling
├── demo/                    # Example HTML pages
├── designs/                 # Design system artwork (e.g. Design System.png)
├── js/
│   └── header.js            # Mobile nav, search tabs, accessibility helpers
├── media/                   # Images, optional local fonts, brand PDFs
├── .cursorrules             # AI/IDE rules (may lag design updates—prefer DESIGN-LANGUAGE.md)
├── DESIGN-LANGUAGE.md       # Authoritative design system documentation
├── index.html               # Main multi-section template
└── README.md                # This file
```

## Design system overview

The **canonical spec** is **`DESIGN-LANGUAGE.md`**, aligned with **`designs/Design System.png`**. CSS implements that spec via **`css/design-tokens.css`**.

A separate **LGLC Brand Standards Manual** may exist as `media/style_guide.pdf` for logo and print rules; **web UI tokens** follow the Design Language (colors, type, spacing) unless you intentionally map back to print-only guidelines.

### Colors

| Role | Name | Hex | Typical use |
|------|------|-----|-------------|
| Primary | Primary Navy | `#002D56` | Body emphasis, headings, primary buttons, footer |
| Accent | Secondary Gold | `#FFC72C` | Focus rings, highlights, team / accent bands |
| Surface | Background Cream | `#F9F7F2` | Default page background |
| Alert | Accent Red | `#C8102E` | Errors, critical callouts |

**Neutrals:** Black `#000000`, Dark Grey `#4D4D4D`, Medium Grey `#999999`, Light Grey `#E6E6E6`, White `#FFFFFF`.

In CSS, prefer semantic tokens such as `--text-primary`, `--text-secondary`, `--bg-page`, `--color-primary-navy`, `--color-secondary-gold`, and `--color-focus-ring` (gold) rather than raw hex values.

### Typography

Fonts load from **Google Fonts** (see the `<link>` in each HTML file):

- **Montserrat** — `h1`–`h4`, section titles, labels / buttons (`--font-family-heading`, `--font-family-label`).
- **Open Sans** — body, captions, UI copy (`--font-family-primary`).

Sizes and line heights are expressed in **`rem`** via tokens (e.g. `--font-size-h1`–`--font-size-h4`, `--font-size-body`, `--font-size-body-small`).

### Spacing

Spacing follows a **4px / 8px** rhythm. Numeric tokens include `--spacing-1` (4px) through `--spacing-20` (80px) and semantic aliases such as `--spacing-xs` … `--spacing-4xl` where defined in `design-tokens.css`.

### Buttons

- **Primary:** Navy fill, white text (`--button-primary-*`).
- **Secondary:** Navy border, transparent / light fill (`--button-secondary-*`).
- **White** (`.btn-white`): Used on strong accent backgrounds (e.g. gold band).

### Focus and links

- **Focus:** Use **`--color-focus-ring`** (gold) for visible focus outlines on interactive elements.
- **Links:** Default in-page links use the semantic link tokens (`--text-link`, `--text-link-hover`, `--text-link-visited`). Utility classes such as `.bg-navy`, `.bg-yellow`, etc. adjust link colors on colored surfaces—see `css/main.css` and `DESIGN-LANGUAGE.md`.

## Component styling guide

All styling **must** use design tokens from `css/design-tokens.css`. Do not hardcode colors, spacing, or font sizes in component stylesheets.

**Correct:**

```css
.my-component {
  padding: var(--spacing-4);
  color: var(--color-primary-navy);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
}
```

**Incorrect:**

```css
.my-component {
  padding: 16px;
  color: #002d56;
  border-radius: 8px;
  font-size: 16px;
}
```

### Token categories (reference)

- **Colors:** `--color-primary-navy`, `--color-secondary-gold`, `--color-bg-cream`, neutrals, semantic `--text-*`, `--bg-*`
- **Spacing:** `--spacing-*` and semantic `--spacing-xs` … `--spacing-4xl` where present
- **Typography:** `--font-family-heading`, `--font-family-primary`, `--font-size-*`, `--font-weight-*`, `--line-height-*`
- **Borders:** `--border-width-*`, `--border-radius-*`, `--border-color-*`
- **Shadows:** `--shadow-xs` … `--shadow-2xl`
- **Focus:** `--color-focus-ring`, `--outline-width-*`, `--outline-offset-*`
- **Touch targets:** `--touch-target-min`, `--touch-target-sm`

### New components

1. Import CSS in order: **`design-tokens.css`** → shared styles (`main.css`, etc.) → your file.
2. Use only `var(--token-name)`; add new tokens in `design-tokens.css` if something is missing.
3. Use **`rem`** via tokens for scalable layout and type; border widths use tokenized **`px`** where defined.

### Example: card

```css
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
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-bold);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-3);
}

.card-text {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  line-height: var(--line-height-loose);
}
```

## Responsive design

Breakpoints are documented in `css/design-tokens.css`. **CSS variables cannot be used inside `@media`**, so duplicate the values with comments:

```css
@media (min-width: 48rem) {  /* --breakpoint-md: 768px */
  /* tablet and up */
}

@media (max-width: 47.9375rem) {  /* --breakpoint-md-max */
  /* mobile */
}
```

Reference tokens: `--breakpoint-sm` through `--breakpoint-2xl`, plus `*-max` variants.

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`) and ARIA where needed.
- Minimum touch target: `var(--touch-target-min)` (2.75rem / 44px).
- Visible focus: `outline` using **`var(--color-focus-ring)`** (gold) with **`var(--outline-offset-sm)`** (or matching tokens).
- Keyboard-navigable controls and logical tab order.

## Page templates

`index.html` bundles several **commented / alternate** `<main>` sections (landing, events, people, etc.). Switch layouts by showing the section you need and hiding others. **`demo/`** holds single-purpose examples (e.g. `demo/landing.html`, `demo/person.html`) with relative paths to `../css/`.

## Search UI

**`css/search.css`** styles the staticSearch-oriented layout (tabs, filters, results). When you add a search page, include `design-tokens.css`, `main.css`, and `search.css`, and wire in [staticSearch](https://github.com/projectEndings/staticSearch) build outputs (`ssSearch.js`, etc.) as needed.

## JavaScript

`js/header.js` provides mobile menu toggling, search tab / panel behavior where present, and related ARIA updates.

## Development rules

- **Tokens only** in CSS—no magic numbers for spacing, colors, or font size.
- **`rem`** for scalable values via tokens; border widths use defined tokens.
- **No inline styles** for presentation.
- **Import order:** `design-tokens.css` first.
- **One component file per major UI area** where practical.

## Browser support

Modern browsers with **CSS Custom Properties**, **Flexbox** and **Grid**, **ES6** syntax, and **HTML5** semantics.

## Usage snippet

```html
<link rel="stylesheet" href="css/design-tokens.css">
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/pages.css">
<link rel="stylesheet" href="css/components.css">
<!-- Search page only: -->
<link rel="stylesheet" href="css/search.css">
```

Load **`js/header.js`** before `</body>` on pages that use the header.

## Media assets

- **`media/img/`** — Logos, photos, illustrations.
- **`media/fonts/`** — Optional local font files; **web templates primarily use Google Fonts** (Montserrat + Open Sans) linked from HTML.
- **`media/style_guide.pdf`** — Legacy / print brand manual (logo usage, etc.), not the same document as the web Design System PNG.

## Technical summary

- Static HTML, CSS, and vanilla JS—no bundler required.
- Centralized **design tokens** in `css/design-tokens.css`.
- **WCAG-oriented** contrast and focus patterns; validate any new color pairs.
- **Mobile-first** responsive layouts.

## For AI and IDE assistants

- **`DESIGN-LANGUAGE.md`** — First stop for colors, type, spacing, and patterns.
- **`.cursorrules`** — Project conventions; may not reflect every design-token name—prefer the CSS files and `DESIGN-LANGUAGE.md` when they disagree.
