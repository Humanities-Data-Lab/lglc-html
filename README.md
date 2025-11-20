# LGLC Website Templates

Lesbian and Gay Liberation in Canada (LGLC) website templates and 
components built with a token-based design system.

## 📁 Project Structure

```
├── css/
│   ├── design-tokens.css    # Design system (colors, spacing, typography)
│   ├── header.css           # Header component styles
│   ├── footer.css           # Footer component styles
│   ├── landing.css          # Landing page styles
│   └── records.css          # Records page styles
├── js/
│   └── header.js            # Header interactivity
├── media/                   # Images and assets
└── index.html               # Landing page template
```

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

1. **Import design tokens first:**
   ```html
   <link rel="stylesheet" href="css/design-tokens.css">
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

## 🚀 Development Rules

- **No hardcoded values** - always use design tokens
- **Consistent units** - use `rem` via tokens (not `px` or `em`)
- **No inline styles** - keep all CSS in stylesheets
- **Import order** - `css/design-tokens.css` must load first
- **Component isolation** - each component in its own CSS file

