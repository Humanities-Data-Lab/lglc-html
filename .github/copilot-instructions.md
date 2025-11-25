# LGLC Website Templates - GitHub Copilot Instructions

This project uses a token-based design system. Follow these rules when suggesting code.

## Core Rules

### CSS Development
- **ALWAYS use design tokens** from `css/design-tokens.css` via `var(--token-name)`
- **NEVER hardcode** CSS values (no `16px`, `#ED1C24`, `8px`, etc.)
- **NEVER use raw `px`** for spacing, fonts, or sizes (use tokens with `rem` values)
- Import `css/design-tokens.css` **FIRST** before any component CSS
- Each component gets its own CSS file in `css/` directory

### Example - ✅ Correct:
```css
.my-component {
  padding: var(--spacing-4);
  color: var(--color-primary-red);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-lg);
}
```

### Example - ❌ Incorrect:
```css
.my-component {
  padding: 16px;           /* Don't hardcode */
  color: #ED1C24;         /* Use tokens */
  border-radius: 8px;     /* Use tokens */
  font-size: 18px;        /* Use tokens */
}
```

## Design Token Categories

### Colors
- Primary: `--color-primary-red`, `--color-primary-navy`, `--color-primary-yellow`, `--color-primary-black`, `--color-primary-gray`
- Semantic: `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-inverse`
- Backgrounds: `--bg-page`, `--bg-surface`, `--bg-elevated`

### Spacing
- Use `--spacing-1` through `--spacing-24` (0.25rem to 6rem)
- Never hardcode spacing values

### Typography
- Font sizes: `--font-size-xs` through `--font-size-5xl`
- Font weights: `--font-weight-normal` through `--font-weight-extrabold`
- Line heights: `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed`

### Borders & Shadows
- Border radius: `--border-radius-sm` through `--border-radius-2xl`
- Shadows: `--shadow-xs` through `--shadow-2xl`

## HTML Guidelines

- Use semantic HTML5: `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`
- Include ARIA labels where needed
- No inline styles - keep all CSS in stylesheets
- Import CSS in correct order: `design-tokens.css` first, then component CSS

## JavaScript Guidelines

- Keep JavaScript vanilla (no frameworks)
- Ensure accessibility: keyboard navigation, ARIA updates, focus management
- Component-specific JS in `js/` directory

## Responsive Design

- Mobile-first approach (default styles for mobile)
- Breakpoints: `48rem` (tablet), `64rem` (desktop), `80rem` (large desktop)
- Note: CSS variables cannot be used in `@media` queries - use values directly with comments

```css
@media (min-width: 48rem) {  /* --breakpoint-md */
  /* Tablet styles */
}
```

## Accessibility Requirements

- Focus states: Yellow outline (`--color-primary-yellow`) with adequate offset
- Touch targets: Minimum `var(--touch-target-min)` (2.75rem/44px)
- All interactive elements must be keyboard accessible
- Include ARIA labels and logical tab order

## Component Creation

When creating new components:
1. Create new CSS file in `css/` directory
2. Reference existing tokens via `var(--token-name)`
3. If new token needed, add to `css/design-tokens.css` first
4. Follow patterns in `css/header.css` and `css/footer.css`

## Common Mistakes to Avoid

1. ❌ Hardcoding CSS values instead of using tokens
2. ❌ Using `px` for spacing/fonts instead of `rem` via tokens
3. ❌ Defining custom values in component CSS files
4. ❌ Importing CSS files in wrong order
5. ❌ Using inline styles
6. ❌ Not including accessibility features

## Reference Files

- `css/design-tokens.css` - All available design tokens
- `DESIGN-LANGUAGE.md` - Detailed component guidelines
- `README.md` - Project structure and usage
- `css/header.css` and `css/footer.css` - Example component patterns


