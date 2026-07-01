# Streamertail

**Lightweight, framework-agnostic CSS utility library with theme support.**

Works everywhere: Angular, React, Vue, Svelte, SPFx, static HTML — any UI framework or none at all.

## Key Principles

- **Zero side effects** — Importing Streamertail will never break your existing app. All styles are opt-in via CSS classes.
- **Dual-class output** — Every class is available both prefixed (`.st-btn`) and unprefixed (`.btn`). Use `st-` for guaranteed Streamertail styles; use unprefixed when you want browser/cascade to decide.
- **No conflicts** — The `st-` prefix (e.g., `.st-btn`, `.st-p-4`, `.st-flex`) safely coexists with Bootstrap, Tailwind, or any other library.
- **No learning curve** — Class names are intuitive: `.st-text-red`, `.st-bg-primary`, `.st-flex`, `.st-p-4`, `.st-shadow-lg`.
- **Lightweight** — Import only what you need, or grab the full bundle.
- **Theme-aware** — Light/dark theme out of the box via OS preference, CSS class, or data attribute.
- **All browsers** — Uses CSS custom properties with sensible defaults. No JS runtime needed.
- **Overridable** — Every design token is a CSS variable you can override.

## Install

```bash
npm install streamertail
```

## What's Included

| Module | Contents | Import |
|--------|----------|--------|
| Full bundle | Everything below combined | `streamertail` |
| Core | CSS variables, themes, typography, buttons, forms | `streamertail/core` |
| Layouts | Grid, flexbox, containers, spacing, display utilities | `streamertail/layouts` |
| Colors | Text, background, border colors + shadows | `streamertail/colors` |
| Animations | Transitions & keyframe animations | `streamertail/animations` |
| Tokens | Design tokens as JS/JSON for frameworks | `streamertail/tokens` |

## Quick Start

### Demo Page

You can explore the live demo in three ways:

- From the package source: clone the repo and open [demo/index.html](demo/index.html) in a browser
- From GitHub: open the repository demo page once published
- From npm: install the package and use the same examples shown below in your own app

For a local preview, run:

```bash
cd demo
npx vite
```

Then open:

```text
http://localhost:5173/
```

If you want a public hosted version, this repository is ready for GitHub Pages deployment via the workflow in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

### Static HTML / CDN

```html
<!-- Full bundle (recommended) -->
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/streamertail.css" />

<!-- Or pick individual modules -->
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/core.css" />
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/layouts.css" />
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/colors.css" />
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/animations.css" />
```

### npm (any framework)

```bash
npm install streamertail
```

```css
/* Full bundle — everything in one import */
@import 'streamertail';

/* Or pick only what you need */
@import 'streamertail/core';
@import 'streamertail/layouts';
@import 'streamertail/colors';
@import 'streamertail/animations';
```

## Dual-Class System

Every utility class is output in two forms:

```html
<!-- Prefixed: guaranteed Streamertail styles (safe with any other library) -->
<button class="st-btn st-btn-primary st-p-4">Save</button>

<!-- Unprefixed: same styles, but can be overridden by cascade -->
<button class="btn btn-primary p-4">Save</button>

<!-- Mix and match freely -->
<div class="st-flex gap-4 st-items-center">...</div>
```

Use `st-` prefixed classes when you want guaranteed isolation. Use unprefixed when you're the only CSS library in the project or want natural class names.

## Theme Switching

Streamertail supports three mechanisms (all work simultaneously):

```html
<!-- 1. Automatic: follows OS preference (no code needed) -->

<!-- 2. CSS class on <html> or any ancestor -->
<html class="theme-dark">

<!-- 3. data-theme attribute on any element -->
<div data-theme="dark">
  <!-- dark theme scoped here -->
</div>
```

Toggle via JS:
```js
document.documentElement.classList.toggle('theme-dark');
```

## Base Styles (Zero-Config Beautification)

Streamertail automatically enhances raw HTML elements — headings, links, code blocks, tables, forms, buttons — using CSS `@layer`. This means:

- **Your HTML looks good immediately** without adding any classes
- **Your existing styles always win** — `@layer` ensures non-layered CSS has higher priority
- **No layout changes** — margins, padding, display, width are untouched (browser defaults preserved)
- **Only appearance enhanced** — fonts, colors, borders, accent-color, subtle interactions

```html
<!-- These look good with zero classes thanks to @layer streamertail.base -->
<h1>Clean heading with proper font</h1>
<a href="#">Themed link with hover effect</a>
<code>Styled code block</code>
<blockquote>Accent-bordered quote</blockquote>
<button>Subtle styled button</button>
<input type="text" placeholder="Themed input with focus ring" />
<details><summary>Expandable</summary>Content here</details>
```

> **How @layer works:** Styles inside `@layer` have lower priority than regular CSS. If you write `a { color: green; }` anywhere in your app, it beats streamertail's `a { color: blue; }` — no specificity battle, no `!important` needed.

To override base styles selectively:
```css
/* This automatically wins over @layer streamertail.base */
blockquote { border-left-color: hotpink; }
input:focus { box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.2); }
```

---

## Semantic Color Aliases

Colors have multiple names for convenience:

| Color | Aliases |
|-------|---------|
| Red | `.st-text-red`, `.st-text-danger`, `.st-text-error` |
| Orange | `.st-text-orange`, `.st-text-warning` |
| Yellow | `.st-text-yellow`, `.st-text-caution` |
| Green | `.st-text-green`, `.st-text-success` |
| Blue | `.st-text-blue`, `.st-text-info` |
| Teal | `.st-text-teal`, `.st-text-secondary` |

Same aliases work for `.st-bg-*` and `.st-border-*` classes.

## Responsive Breakpoints

| Prefix | Min-width |
|--------|-----------|
| (none) | 0px (mobile-first default) |
| `st-sm-`  | 576px |
| `st-md-`  | 768px |
| `st-lg-`  | 992px |
| `st-xl-`  | 1200px |
| `st-xxl-` | 1400px |

```html
<div class="st-grid st-grid-cols-1 st-sm-grid-cols-2 st-lg-grid-cols-4 st-gap-4">
  <!-- Responsive grid: 1 col mobile, 2 col tablet, 4 col desktop -->
</div>
```

---

## Installation Guide

### Option 1: Full Bundle (Recommended)

```bash
npm install streamertail
```

Then import in your app entry point:

```css
@import 'streamertail';
```

### Option 2: Pick Only What You Need

```css
@import 'streamertail/core';      /* always required — provides CSS variables */
@import 'streamertail/layouts';   /* grid, flexbox, spacing */
@import 'streamertail/colors';    /* color utilities */
@import 'streamertail/animations'; /* transitions & keyframes */
```

### Option 3: CDN (No Build Step)

Add directly to any HTML page. No npm, no bundler:

```html
<!-- Full bundle -->
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/streamertail.css" />

<!-- Or individual modules -->
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/core.css" />
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/layouts.css" />
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/colors.css" />
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/animations.css" />
```

### Framework-Specific Setup

#### React / Next.js

```jsx
// app/layout.tsx or index.tsx
import 'streamertail';

export default function App() {
  return <button className="st-btn st-btn-primary">Click me</button>;
}
```

#### Angular

```typescript
// angular.json → styles array
{
  "styles": [
    "node_modules/streamertail/dist/streamertail.css"
  ]
}
```

```html
<!-- Then use in any component template -->
<button class="st-btn st-btn-primary st-btn-lg">Submit</button>
```

#### Vue.js

```js
// main.js or main.ts
import 'streamertail';
```

```html
<!-- In any .vue component -->
<template>
  <div class="st-container st-p-4">
    <h1 class="st-heading-2 st-text-primary">Hello Streamertail</h1>
  </div>
</template>
```

#### SPFx (SharePoint Framework)

```typescript
// In your web part's onInit or top-level require
require('streamertail');
```

#### Svelte / SvelteKit

```html
<!-- src/routes/+layout.svelte -->
<script>
  import 'streamertail';
</script>

<slot />
```

#### Nuxt 3

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['streamertail'],
});
```

#### Astro

```astro
---
// src/layouts/Layout.astro
import 'streamertail';
---

<html>
  <body>
    <slot />
  </body>
</html>
```

#### Remix

```typescript
// app/root.tsx
import 'streamertail';
```

#### SolidJS / SolidStart

```typescript
// src/index.tsx or src/root.tsx
import 'streamertail';
```

#### Qwik / QwikCity

```typescript
// src/root.tsx
import 'streamertail';
```

#### Lit / Web Components

```javascript
// Import globally in your app entry point
import 'streamertail';

// Note: For Shadow DOM components, you'll need to adopt the stylesheet:
// const sheet = new CSSStyleSheet();
// sheet.replaceSync(streamertailCSS);
// this.shadowRoot.adoptedStyleSheets = [sheet];
```

#### Blazor (Server / WASM)

```html
<!-- wwwroot/index.html or Pages/_Host.cshtml -->
<link rel="stylesheet" href="_content/node_modules/streamertail/dist/streamertail.css" />
```

Or via CSS import in `wwwroot/css/app.css`:
```css
@import '../../node_modules/streamertail/dist/streamertail.css';
```

#### WordPress / PHP

```php
// functions.php (after npm install in your theme)
function enqueue_streamertail() {
  wp_enqueue_style('streamertail', get_template_directory_uri() . '/node_modules/streamertail/dist/streamertail.css');
}
add_action('wp_enqueue_scripts', 'enqueue_streamertail');
```

Or copy `dist/streamertail.css` to your theme's `assets/` folder and reference it directly.

---

## Usage Guide

### Colors

```html
<!-- Text colors -->
<p class="st-text-primary">Primary brand color</p>
<p class="st-text-danger">Error / danger text (also: .st-text-red, .st-text-error)</p>
<p class="st-text-warning">Warning text (also: .st-text-orange)</p>
<p class="st-text-success">Success text (also: .st-text-green)</p>
<p class="st-text-muted">Muted/secondary text</p>

<!-- Background colors -->
<div class="st-bg-primary st-text-white st-p-4">Primary background</div>
<div class="st-bg-danger-light st-text-danger st-p-4">Light danger alert</div>
<div class="st-bg-surface st-p-4">Surface (auto theme-aware)</div>

<!-- Border colors -->
<div class="st-border-primary" style="border: 1px solid;">Primary border</div>
```

### Typography

```html
<!-- Headings (fluid responsive sizing) -->
<h1 class="st-heading-1">Page Title</h1>
<h2 class="st-heading-3">Section Title</h2>

<!-- Font sizes -->
<p class="st-text-xs">Extra small</p>
<p class="st-text-sm">Small</p>
<p class="st-text-body">Base (default)</p>
<p class="st-text-lg">Large</p>
<p class="st-text-2xl">2X Large</p>

<!-- Font weight -->
<span class="st-font-bold">Bold text</span>
<span class="st-font-light">Light text</span>

<!-- Text utilities -->
<p class="st-text-center st-text-uppercase">Centered uppercase</p>
<p class="st-text-truncate">This very long text will be truncated with ellipsis...</p>
```

### Layouts

```html
<!-- Responsive grid -->
<div class="st-grid st-grid-cols-1 st-sm-grid-cols-2 st-md-grid-cols-3 st-lg-grid-cols-4 st-gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>

<!-- Flexbox row -->
<div class="st-flex st-justify-between st-items-center st-gap-4">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Centered content -->
<div class="st-flex st-justify-center st-items-center" style="min-height: 200px;">
  <p>I'm centered!</p>
</div>

<!-- Container (responsive max-width) -->
<div class="st-container">
  <!-- Content is centered with max-width per breakpoint -->
</div>

<!-- Column spanning -->
<div class="st-grid st-grid-cols-12 st-gap-4">
  <aside class="st-col-span-3">Sidebar</aside>
  <main class="st-col-span-9">Main content</main>
</div>
```

### Spacing

```html
<!-- Padding -->
<div class="st-p-4">Padding all sides (1rem)</div>
<div class="st-px-6 st-py-2">Horizontal 1.5rem, vertical 0.5rem</div>
<div class="st-pt-8">Top padding only (2rem)</div>

<!-- Margin -->
<div class="st-mb-4">Bottom margin 1rem</div>
<div class="st-mx-auto">Centered horizontally</div>
<div class="st-mt-8 st-mb-4">Top 2rem, bottom 1rem</div>
```

### Buttons

```html
<!-- Solid variants -->
<button class="st-btn st-btn-primary">Save</button>
<button class="st-btn st-btn-danger">Delete</button>
<button class="st-btn st-btn-success">Confirm</button>

<!-- Outline & ghost -->
<button class="st-btn st-btn-outline">Cancel</button>
<button class="st-btn st-btn-outline-primary">Edit</button>
<button class="st-btn st-btn-ghost">More options</button>

<!-- Sizes -->
<button class="st-btn st-btn-primary st-btn-sm">Small</button>
<button class="st-btn st-btn-primary">Default</button>
<button class="st-btn st-btn-primary st-btn-lg">Large</button>

<!-- Shapes -->
<button class="st-btn st-btn-primary st-btn-pill">Rounded Pill</button>
<button class="st-btn st-btn-primary st-btn-full">Full Width</button>

<!-- Disabled -->
<button class="st-btn st-btn-primary" disabled>Can't click me</button>

<!-- Button group -->
<div class="st-btn-group">
  <button class="st-btn st-btn-primary">Left</button>
  <button class="st-btn st-btn-primary">Center</button>
  <button class="st-btn st-btn-primary">Right</button>
</div>
```

### Forms

```html
<!-- Basic input -->
<div class="st-form-group">
  <label class="st-label st-label-required">Email</label>
  <input class="st-input" type="email" placeholder="you@example.com" />
  <span class="st-form-helper">We'll never share your email.</span>
</div>

<!-- Input with error -->
<div class="st-form-group">
  <label class="st-label">Password</label>
  <input class="st-input st-input-error" type="password" />
  <span class="st-form-error">Password must be at least 8 characters.</span>
</div>

<!-- Select -->
<div class="st-form-group">
  <label class="st-label">Country</label>
  <select class="st-input">
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
  </select>
</div>

<!-- Textarea -->
<textarea class="st-input" placeholder="Write your message..."></textarea>

<!-- Sizes -->
<input class="st-input st-input-sm" placeholder="Small input" />
<input class="st-input st-input-lg" placeholder="Large input" />

<!-- Checkbox & Radio -->
<label class="st-checkbox"><input type="checkbox" /> Remember me</label>
<label class="st-radio"><input type="radio" name="plan" /> Free</label>
<label class="st-radio"><input type="radio" name="plan" /> Pro</label>

<!-- Inline form -->
<div class="st-form-inline">
  <input class="st-input" placeholder="Search..." style="width: auto;" />
  <button class="st-btn st-btn-primary">Go</button>
</div>
```

### Semantic Layouts

```html
<!-- Stack: vertical rhythm with consistent spacing -->
<div class="st-stack">
  <h2>Title</h2>
  <p>Paragraph</p>
  <button class="st-btn st-btn-primary">Action</button>
</div>

<!-- Cluster: horizontal wrapping group (tags, pills) -->
<div class="st-cluster">
  <span class="st-badge-primary">Tag 1</span>
  <span class="st-badge-secondary">Tag 2</span>
  <span class="st-badge-success">Tag 3</span>
</div>

<!-- Center: max-width + auto margins (ideal for content) -->
<div class="st-center">
  <p>Centered readable content area (max 65ch)</p>
</div>

<!-- Auto-grid: responsive grid that auto-fills columns -->
<div class="st-auto-grid">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Sidebar layout: intrinsic two-panel -->
<div class="st-with-sidebar">
  <aside>Sidebar (fixed width)</aside>
  <main>Main content (fills remaining space)</main>
</div>

<!-- Switcher: row → column when space runs out -->
<div class="st-switcher">
  <div>Panel A</div>
  <div>Panel B</div>
  <div>Panel C</div>
</div>

<!-- Reel: horizontal scrolling strip (carousel) -->
<div class="st-reel">
  <img src="1.jpg" />
  <img src="2.jpg" />
  <img src="3.jpg" />
</div>

<!-- Cover: full-viewport section with centered content -->
<div class="st-cover">
  <header>Top</header>
  <div class="st-cover-center">Centered hero content</div>
  <footer>Bottom</footer>
</div>

<!-- Pancake: header/main/footer app shell -->
<div class="st-pancake">
  <header>Header</header>
  <main>Main (grows to fill)</main>
  <footer>Footer</footer>
</div>
```

### Semantic Colors & States

```html
<!-- Alerts: pre-styled contextual messages -->
<div class="st-alert-success">Operation completed successfully.</div>
<div class="st-alert-danger">Something went wrong!</div>
<div class="st-alert-warning">Please review before continuing.</div>
<div class="st-alert-info">Here's some helpful information.</div>

<!-- Badges: solid -->
<span class="st-badge-primary">New</span>
<span class="st-badge-danger">3</span>
<span class="st-badge-success">Active</span>

<!-- Badges: soft (lighter) -->
<span class="st-badge-soft-primary">Draft</span>
<span class="st-badge-soft-danger">Failed</span>
<span class="st-badge-soft-success">Passed</span>

<!-- Status indicators -->
<span class="st-status-online"></span> Online
<span class="st-status-offline"></span> Offline
<span class="st-status-busy"></span> Busy
<span class="st-status-away"></span> Away

<!-- Highlight: inline text emphasis -->
<p>This is <span class="st-highlight">highlighted</span> text.</p>
<p>This is <span class="st-highlight-success">success highlighted</span>.</p>

<!-- Gradient backgrounds -->
<section class="st-gradient-primary st-p-8">Primary → Secondary</section>
<section class="st-gradient-sunset st-p-8">Orange → Pink → Rose</section>
<section class="st-gradient-ocean st-p-8">Cyan → Blue → Indigo</section>

<!-- Surface variants (for cards) -->
<div class="st-surface-raised st-p-4">Raised card</div>
<div class="st-surface-sunken st-p-4">Sunken/recessed area</div>
<div class="st-surface-interactive st-p-4">Clickable card (hover effect)</div>

<!-- Dividers -->
<hr class="st-divider" />
<hr class="st-divider-strong" />
<hr class="st-divider-dashed" />
<span class="st-divider-vertical"></span> <!-- vertical separator -->
```

### Semantic Typography

```html
<!-- Prose: full typographic formatting for long-form content -->
<article class="st-prose">
  <h2>Article Title</h2>
  <p>Paragraphs, lists, links, code blocks — all beautifully formatted.</p>
</article>
<article class="st-prose-sm">Smaller prose</article>
<article class="st-prose-lg">Larger prose</article>

<!-- Display headings: large hero titles -->
<h1 class="st-display-1">Huge Hero Title</h1>
<h1 class="st-display-2">Large Hero Title</h1>
<h1 class="st-display-3">Medium Hero Title</h1>

<!-- Lead: intro paragraph -->
<p class="st-lead">This article explores the fundamentals of design systems.</p>

<!-- Caption: figure/table descriptions -->
<figcaption class="st-caption">Photo by John Doe, 2024</figcaption>

<!-- Overline: small label above headings -->
<span class="st-overline">Featured Article</span>
<h2 class="st-heading-2">The Main Title</h2>
<p class="st-subtitle">A supporting subtitle goes here</p>

<!-- Keyboard keys -->
<p>Press <kbd class="st-kbd">Ctrl</kbd> + <kbd class="st-kbd">C</kbd> to copy.</p>

<!-- Inline code -->
<p>Use the <code class="st-code">useState</code> hook.</p>

<!-- Blockquote -->
<blockquote class="st-blockquote">Design is not just what it looks like.</blockquote>

<!-- List styles -->
<ul class="st-list-check">
  <li>Feature one</li>
  <li>Feature two</li>
  <li>Feature three</li>
</ul>

<!-- Number formatting -->
<span class="st-tabular-nums">1,234,567.89</span>

<!-- Modern text wrapping -->
<h2 class="st-text-balance">A Heading That Wraps Evenly Across Lines</h2>
<p class="st-text-pretty">Paragraph with better line-break decisions.</p>
```

### Shadows

```html
<!-- Elevation levels -->
<div class="st-p-4 st-bg-elevated st-shadow-sm">Subtle shadow</div>
<div class="st-p-4 st-bg-elevated st-shadow">Default shadow</div>
<div class="st-p-4 st-bg-elevated st-shadow-md">Medium shadow</div>
<div class="st-p-4 st-bg-elevated st-shadow-lg">Large shadow</div>
<div class="st-p-4 st-bg-elevated st-shadow-xl">Extra-large shadow</div>

<!-- Colored shadows (glow effect) -->
<button class="st-btn st-btn-primary st-shadow-primary">Glowing button</button>

<!-- Inner shadow -->
<div class="st-p-4 st-shadow-inner">Inset shadow</div>
```

### Animations

```html
<!-- Enter animations -->
<div class="st-animate-fade-in">Fades in on load</div>
<div class="st-animate-slide-up">Slides up on load</div>
<div class="st-animate-scale-in">Scales in on load</div>

<!-- Continuous animations -->
<span class="st-animate-spin">⟳</span>     <!-- Loading spinner -->
<div class="st-animate-pulse">Loading...</div>  <!-- Skeleton loader -->
<span class="st-animate-bounce">↓</span>   <!-- Scroll indicator -->

<!-- Hover effects (pair with transition class) -->
<div class="st-p-4 st-bg-elevated st-shadow st-transition-transform st-hover-lift">
  Lifts on hover
</div>
<button class="st-btn st-btn-primary st-transition-transform st-hover-grow">
  Grows on hover
</button>

<!-- Transition utilities -->
<button class="st-btn st-btn-outline st-transition-colors">Smooth color change</button>
<div class="st-shadow-sm st-transition-shadow">Shadow transition on interaction</div>
```

> **Accessibility:** All animations automatically disable when the user has `prefers-reduced-motion: reduce` enabled in their OS.

### Design Tokens (JS)

For programmatic access in React, Vue, Angular, or any JS code:

```js
// ESM import (recommended)
import { colors, spacing, typography, breakpoints } from 'streamertail/tokens';

console.log(colors.primary);      // '#2563eb'
console.log(colors.danger);       // '#dc2626'
console.log(spacing[4]);          // '1rem'
console.log(breakpoints.md);      // '768px'
console.log(typography.fontWeight.bold); // 700
```

```js
// CommonJS
const { colors, spacing } = require('streamertail/dist/tokens/index.js');
```

```js
// JSON import
import tokens from 'streamertail/tokens/json';
```

---

## Customization

Override any CSS variable to match your brand:

```css
:root {
  --st-color-primary: #your-brand-color;
  --st-color-secondary: #your-secondary;
  --st-color-accent: #your-accent;
  --st-font-family: 'Your Font', sans-serif;
  --st-border-radius: 0.5rem;
}
```

### Scoped Overrides

You can scope variable overrides to specific sections:

```css
.admin-panel {
  --st-color-primary: #9333ea;
  --st-bg-surface: #faf5ff;
}
```

### Dark Theme Customization

```css
.theme-dark {
  --st-color-primary: #60a5fa; /* lighter blue for dark backgrounds */
  --st-bg: #0a0a0a;
}
```

---

## Will Streamertail Break My Existing App?

**No.** Streamertail is designed to be 100% safe to add to any existing project:

- **Dual-class system** — use `st-` prefixed classes for guaranteed isolation, or unprefixed for natural names
- **Base styles use `@layer`** — element-level styles (headings, links, inputs, etc.) are wrapped in `@layer streamertail.base`, meaning any existing CSS in your project automatically takes priority
- **No layout changes** — no `box-sizing` reset, no `margin: 0` on body, no `display: block` on images, no `width: 100%` on tables
- **Appearance only** — base styles only enhance fonts, colors, borders, and interactions
- Utility classes require explicit class names to activate
- No `!important` used anywhere
- Low specificity — easy to override with your existing styles
- No JavaScript runtime — pure CSS, zero side effects

### How @layer Ensures Safety

```css
/* streamertail ships this (inside @layer — lowest priority): */
@layer streamertail.base {
  a { color: var(--st-text-link); }
}

/* Your app writes this (no @layer — higher priority automatically): */
a { color: green; }
/* ✅ Your green wins. No specificity fight. */
```

---

## Demo on GitHub Pages

A GitHub Pages site can be published automatically from the repository by enabling GitHub Pages for the `gh-pages` branch.

Once enabled, the demo will be available at:

```text
https://<your-username>.github.io/streamertail/
```

If you want to publish from a custom domain, update the Pages settings in GitHub and point the site to your domain.

## Development

```bash
# Install dependencies
npm install

# Build everything (CSS + tokens)
npm run build

# Build CSS only
npm run build:css

# Build tokens only
npm run build:tokens

# Watch mode (auto-rebuild on changes)
npm run dev

# Run demo locally
cd demo && npx vite
```

### Project Structure

```
streamertail/
├── src/
│   ├── index.scss        # Full bundle entry point
│   ├── _mixins.scss      # Shared SCSS mixins (dual-class system)
│   ├── core/             # Variables, themes, base, typography, buttons, forms
│   ├── colors/           # Text, background, border colors, shadows, hover states
│   ├── layouts/          # Grid, flexbox, containers, spacing, borders, sizing
│   ├── animations/       # Transitions, keyframe animations, easter eggs
│   └── tokens/           # Design tokens as JS (source)
├── dist/
│   ├── streamertail.css        # Full bundle
│   ├── core.css          # Core only
│   ├── colors.css        # Colors only
│   ├── layouts.css       # Layouts only
│   ├── animations.css    # Animations only
│   └── tokens/           # JS/ESM/JSON/d.ts
├── scripts/              # Build scripts
├── demo/                 # Demo page
└── docs/                 # Usage guide
```

### Requirements

- Node.js >= 18

## License

MIT