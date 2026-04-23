# LGLC Design Language

A practical guide to visual design for the **Lesbian and Gay Liberation in Canada (LGLC)** website and related templates.

**Source:** This document is derived from the project Design System specification (`designs/Design System.png`). Detailed UI components (buttons, form controls, cards, tags, header/footer layout) are also reflected in `designs/Design Components.png`; the templates implement those patterns in HTML/CSS (see `css/components.css`).

## About LGLC

The Lesbian and Gay Liberation in Canada (LGLC) project is building an interactive digital resource for the study of LGBT history in Canada, based on Don McLeod’s chronology and related materials. The interface should feel scholarly, welcoming, and clear—supporting long reading sessions and structured exploration (search, filters, record pages).

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Accessible Color Combinations](#accessible-color-combinations)
4. [Typography](#typography)
5. [Spacing System](#spacing-system)
6. [Buttons](#buttons)
7. [Core UI Patterns](#core-ui-patterns)
8. [Layout Patterns](#layout-patterns)
9. [Cards & Content Blocks](#cards--content-blocks)
10. [Forms & Search](#forms--search)
11. [Images & Media](#images--media)
12. [Responsive Design](#responsive-design)
13. [Accessibility](#accessibility)
14. [Quick Reference](#quick-reference)
15. [Design Principles](#design-principles)
16. [Implementation Note](#implementation-note)

---

## Brand Identity

### Logo

- **Placement:** Logo on the left; primary navigation on the right in the header.
- **Footer:** Logo may appear in white on the dark navy footer for contrast and continuity.

### Logo usage (don’ts)

Do **not**:

- Stretch or squash the logo
- Rotate or place the logo at an angle
- Rearrange logo elements
- Add effects such as drop shadows to the logo
- Change approved logo colors

Use official logo assets from project media folders; prefer vector for print and optimized raster or SVG for web.

---

## Color System

The palette is organized into **theme**, **secondary/accent**, and **neutral** colors.

### Theme colors

| Role | Name | Hex | Usage |
|------|------|-----|--------|
| Primary | **Primary Navy** | `#002D56` | Headers, primary buttons, key branding surfaces |
| Accent | **Secondary Gold** | `#FFC72C` | Accents, highlights, emphasis on dark or light UI |
| Surface | **Background Cream** | `#F9F7F2` | Default page background |

### Secondary / accent

| Role | Name | Hex | Usage |
|------|------|-----|--------|
| Alert / emphasis | **Accent Red** | `#C8102E` | Critical alerts, strong callouts, selective highlights |

The system may use **tints and shades** of Primary Navy and Secondary Gold for borders, hover states, and subtle fills—keep them clearly related to the base hues and test contrast.

### Neutrals

| Name | Hex | Usage |
|------|-----|--------|
| **Black** | `#000000` | Strong body text, high-contrast copy |
| **Dark Grey** | `#4D4D4D` | Secondary text, subdued labels |
| **Medium Grey** | `#999999` | Placeholder, disabled, tertiary text |
| **Light Grey** | `#E6E6E6` | Dividers, subtle panels, input backgrounds |
| **White** | `#FFFFFF` | Cards, surfaces, text on dark navy |

---

## Accessible Color Combinations

Use these pairings as the default for readable, on-brand UI:

| Foreground | Background | Notes |
|------------|------------|--------|
| Primary Navy `#002D56` | White `#FFFFFF` | Primary text on light surfaces |
| Black `#000000` | White `#FFFFFF` | Maximum contrast body text |
| Secondary Gold `#FFC72C` | Primary Navy `#002D56` | Accents on dark regions (e.g. header bands, buttons) |
| Primary Navy `#002D56` | Secondary Gold `#FFC72C` | Accents on light gold bands |
| White `#FFFFFF` | Primary Navy `#002D56` | Footer, inverted nav, primary filled buttons |

Validate combinations with WCAG contrast checks when using intermediate tints or new components.

---

## Typography

The system uses two families: **Montserrat** for headings and labels, **Open Sans** for body and supporting text.

| Style | Font | Size | Line height | Usage |
|-------|------|------|-------------|--------|
| **H1 Heading** | Montserrat | 48px | 60px | Main page titles |
| **H2 Heading** | Montserrat | 32px | 40px | Section headers |
| **H3 Heading** | Montserrat | 24px | 32px | Sub-section headers |
| **H4 Heading** | Montserrat | 20px | 28px | Small headers, card titles |
| **Body Lead** | Open Sans | 18px | 28px | Introductory / lead paragraphs |
| **Body Main** | Open Sans | 16px | 24px | Standard body copy |
| **Body Small** | Open Sans | 14px | 20px | Captions, metadata, notes |
| **Label** | Montserrat Bold | 14px | 20px | Form labels, button text, tags |

### Rules of thumb

- **Hierarchy:** Step down from H1 → H4; avoid skipping levels for accessibility.
- **Body:** Default to Body Main; use Body Lead sparingly for hero or section intros.
- **Labels:** Use Montserrat Bold at Label size for control text and primary actions in compact UI.

---

## Spacing System

Spacing uses a **4px / 8px** rhythm. Name tokens for documentation:

| Token | Value | Typical use |
|-------|--------|-------------|
| `spacing-xs` | 4px | Tight gaps (icon + text) |
| `spacing-sm` | 8px | Related items in a list or toolbar |
| `spacing-md` | 16px | Default padding inside components |
| `spacing-lg` | 24px | Space between grouped blocks |
| `spacing-xl` | 32px | Between distinct sections |
| `spacing-2xl` | 48px | Large section gaps |
| `spacing-3xl` | 64px | Major layout separation |
| `spacing-4xl` | 80px | Maximum page-level vertical margins |

Prefer repeating these steps over arbitrary pixel values.

---

## Buttons

Three levels define actions and emphasis.

### 1. Primary

- **Fill:** Primary Navy `#002D56`
- **Text:** White `#FFFFFF`
- **Use:** Main call to action (e.g. “Apply filters”, “Search”, submit).

### 2. Secondary

- **Border:** Primary Navy
- **Text:** Primary Navy
- **Background:** Transparent or cream/white
- **Use:** Secondary actions that should stay visible but not compete with the primary button.

### 3. Tertiary / link-style

- **Text:** Primary Navy (often with a chevron or “learn more” pattern)
- **Use:** Low-emphasis navigation (“Learn more”, inline next steps).

Ensure minimum touch targets (see [Accessibility](#accessibility)) and visible focus styles.

---

## Core UI Patterns

Patterns illustrated in the Design System:

- **Header:** LGLC logo left; horizontal navigation right; clean, light background or cream as appropriate to the page.
- **Hero:** H1 plus Body Lead on Background Cream; generous vertical spacing.
- **Search:** Prominent full-width (or contained) field with a clear label and a **primary** button for the main action.
- **Footer:** Dark **Primary Navy** band; logo in white; navigation links in light/white text.

---

## Layout Patterns

### Containers

- Center main content with comfortable horizontal padding; avoid edge-to-edge text on large screens.
- Use consistent max-widths for reading columns (hero, long-form) versus wide tools (search, results).

### Grids

- **Cards:** Multi-column on desktop; collapse to a **single column** on small viewports.
- **Gaps:** Use `spacing-lg`–`spacing-xl` between cards depending on density.

### Section spacing

- Between major sections: `spacing-2xl`–`spacing-3xl` vertically.
- Within a section: `spacing-md`–`spacing-lg` between related blocks.

---

## Cards & Content Blocks

- **Surface:** Prefer white or cream with clear separation (border or shadow—keep subtle).
- **Content:** Image optional at top; **H3/H4** for titles; short supporting copy in Body Main or Body Small.
- **Actions:** Tertiary “Learn more” links for secondary navigation from cards.

---

## Forms & Search

- **Labels:** Montserrat Bold, Label size; associate labels with inputs (`for` / `id`).
- **Inputs:** Clear borders using neutrals; focus state visible (outline or ring using Secondary Gold or a high-contrast navy border—see Accessibility).
- **Primary action:** Primary button aligned with the task (e.g. search submit).

---

## Images & Media

- Provide meaningful **alt** text for informative images; empty `alt` for decorative images.
- Use consistent aspect ratios within grids; avoid stretching logos or portraits.
- Optimize file size for web delivery.

---

## Responsive Design

- **Mobile first:** Default to single-column layouts and stacked navigation.
- **Breakpoints:** Scale typography and spacing slightly up at tablet and desktop where the Design System shows multi-column layouts.
- **Navigation:** Collapse to a compact pattern (e.g. menu control) on small screens while preserving keyboard access.

---

## Accessibility

- **Contrast:** Prefer the [Accessible color combinations](#accessible-color-combinations); test custom pairs.
- **Focus:** Visible focus for links, buttons, and form controls (e.g. gold or navy outline with clear offset).
- **Touch targets:** Minimum about **44×44px** for interactive elements.
- **Keyboard:** Logical tab order; interactive components operable without a pointer.
- **Headings:** One logical H1 per page where possible; do not pick heading levels for style alone.

---

## Quick Reference

### Typography (summary)

| Element | Font | Size / line |
|---------|------|-------------|
| H1 | Montserrat | 48 / 60 |
| H2 | Montserrat | 32 / 40 |
| H3 | Montserrat | 24 / 32 |
| H4 | Montserrat | 20 / 28 |
| Lead | Open Sans | 18 / 28 |
| Body | Open Sans | 16 / 24 |
| Small | Open Sans | 14 / 20 |
| Label | Montserrat Bold | 14 / 20 |

### Color (summary)

| Token concept | Hex |
|---------------|-----|
| Primary Navy | `#002D56` |
| Secondary Gold | `#FFC72C` |
| Background Cream | `#F9F7F2` |
| Accent Red | `#C8102E` |
| Neutrals | `#000000`, `#4D4D4D`, `#999999`, `#E6E6E6`, `#FFFFFF` |

### Spacing (summary)

`4 → 8 → 16 → 24 → 32 → 48 → 64 → 80` px (`xs` through `4xl`).

---

## Design Principles

1. **Clarity** — Readable type, predictable spacing, obvious primary actions.
2. **Consistency** — Reuse the spacing scale, type styles, and color roles across pages.
3. **Accessibility** — Sufficient contrast, focus visibility, and semantic structure.
4. **Responsive behavior** — One column on small screens; progressive enhancement for larger viewports.
5. **Respect for content** — History-forward, low-noise UI that foregrounds chronology, people, places, and sources.

---

## Implementation Note

This file describes the **Design System** as shown in `designs/Design System.png`. CSS in the repository (for example `css/design-tokens.css` and component styles) may still use older naming or values from a previous brand pass. When updating templates, align variables, components, and tokens with this document and the Design System artwork so that the live site matches these guidelines.

---

*Last updated: Sourced from `designs/Design System.png` (LGLC Design System).*
