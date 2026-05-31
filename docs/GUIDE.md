# Streamertail — Complete User Guide

A comprehensive guide to every class, utility, and feature in Streamertail.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Core Concepts](#core-concepts)
3. [Typography](#typography)
4. [Semantic Typography](#semantic-typography)
5. [Colors](#colors)
6. [Semantic Colors & States](#semantic-colors--states)
7. [Layouts & Grid](#layouts--grid)
8. [Semantic Layouts](#semantic-layouts)
9. [Spacing](#spacing)
10. [Borders & Rounded](#borders--rounded)
11. [Sizing](#sizing)
12. [Flexbox](#flexbox)
13. [Display & Visibility](#display--visibility)
14. [Buttons](#buttons)
15. [Forms](#forms)
16. [Shadows](#shadows)
17. [Animations & Transitions](#animations--transitions)
18. [Hover Effects](#hover-effects)
19. [Accessibility](#accessibility)
20. [Utilities](#utilities)
21. [Theming](#theming)
22. [Easter Eggs](#easter-eggs-)
23. [Responsive Design](#responsive-design)
24. [Design Tokens (JS)](#design-tokens-js)
25. [Complete Class Reference](#complete-class-reference)

---

## Getting Started

### Install

```bash
npm install streamertail
```

### Import (pick one method)

**Full bundle (recommended):**
```css
@import 'streamertail';
```

**Individual modules:**
```css
@import 'streamertail/core';
@import 'streamertail/layouts';
@import 'streamertail/colors';
@import 'streamertail/animations';
```

**JS imports (React, Vue, Svelte, etc.):**
```js
import 'streamertail';

// Or individual modules:
import 'streamertail/core';
import 'streamertail/layouts';
import 'streamertail/colors';
import 'streamertail/animations';
```

**CDN (no build step):**
```html
<!-- Full bundle -->
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/streamertail.css" />

<!-- Or individual modules -->
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/core.css" />
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/layouts.css" />
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/colors.css" />
<link rel="stylesheet" href="https://unpkg.com/streamertail/dist/animations.css" />
```

> **Note:** When importing individual modules, `streamertail/core` is always required — it provides the CSS variables all other modules depend on.

---

## Core Concepts

### Dual-Class System

Every Streamertail class exists in two forms:

| Form | Example | When to use |
|------|---------|-------------|
| **Prefixed** | `.st-btn`, `.st-flex` | Safe alongside Bootstrap/Tailwind/any library |
| **Unprefixed** | `.btn`, `.flex` | Cleaner code when Streamertail is your only CSS lib |

```html
<!-- Both work identically: -->
<button class="st-btn st-btn-primary">Save</button>
<button class="btn btn-primary">Save</button>

<!-- Mix freely: -->
<div class="st-flex gap-4 items-center">...</div>
```

### CSS Variables (Design Tokens)

All values come from CSS custom properties you can override:

```css
:root {
  --st-color-primary: #your-brand-color;
  --st-font-family: 'Inter', sans-serif;
  --st-border-radius: 8px;
  --st-space-4: 1.5rem; /* Make spacing larger globally */
}
```

### @layer (Non-Breaking Base Styles)

Streamertail's base element styles (headings, links, code, inputs) are wrapped in `@layer streamertail.base`. This means **your existing styles always win** — no specificity battles.

---

## Typography

### Headings

```html
<h1 class="st-heading-1">Page Title (3rem)</h1>
<h2 class="st-heading-2">Section (2.25rem)</h2>
<h3 class="st-heading-3">Subsection (1.875rem)</h3>
<h4 class="st-heading-4">Group Title (1.5rem)</h4>
<h5 class="st-heading-5">Small Heading (1.25rem)</h5>
<h6 class="st-heading-6">Tiny Heading (1.125rem)</h6>
```

### Font Sizes

| Class | Size |
|-------|------|
| `.st-text-xs` | 0.75rem (12px) |
| `.st-text-sm` | 0.875rem (14px) |
| `.st-text-base` / `.st-text-body` | 1rem (16px) |
| `.st-text-lg` | 1.125rem (18px) |
| `.st-text-xl` | 1.25rem (20px) |
| `.st-text-2xl` | 1.5rem (24px) |
| `.st-text-3xl` | 1.875rem (30px) |
| `.st-text-4xl` | 2.25rem (36px) |
| `.st-text-5xl` | 3rem (48px) |

**Responsive:** `.st-md-text-lg`, `.st-lg-text-2xl`, etc.

### Font Weight

| Class | Weight |
|-------|--------|
| `.st-font-light` | 300 |
| `.st-font-normal` | 400 |
| `.st-font-medium` | 500 |
| `.st-font-semibold` | 600 |
| `.st-font-bold` | 700 |

### Font Family

```html
<p class="st-font-sans">System sans-serif stack</p>
<code class="st-font-mono">Monospace code font</code>
```

### Text Alignment

| Class | Effect |
|-------|--------|
| `.st-text-left` | Left align |
| `.st-text-center` | Center |
| `.st-text-right` | Right align |
| `.st-text-justify` | Justified |

**Responsive:** `.st-md-text-center`, `.st-lg-text-left`

### Text Transform

```html
<span class="st-text-uppercase">UPPERCASE</span>
<span class="st-text-lowercase">lowercase</span>
<span class="st-text-capitalize">First Letter Cap</span>
<span class="st-text-normal-case">Reset transform</span>
```

### Text Decoration

```html
<span class="st-text-underline">Underlined</span>
<span class="st-text-line-through">Strikethrough</span>
<span class="st-text-no-underline">Remove underline</span>
```

### Line Height

| Class | Value |
|-------|-------|
| `.st-leading-tight` | 1.25 |
| `.st-leading-normal` | 1.5 |
| `.st-leading-relaxed` | 1.75 |

### Letter Spacing

| Class | Value |
|-------|-------|
| `.st-tracking-tighter` | -0.05em |
| `.st-tracking-tight` | -0.025em |
| `.st-tracking-normal` | 0 |
| `.st-tracking-wide` | 0.025em |
| `.st-tracking-wider` | 0.05em |
| `.st-tracking-widest` | 0.1em |

### Text Utilities

```html
<p class="st-text-truncate">Long text cut off with ellipsis...</p>
<p class="st-text-nowrap">Stays on one line</p>
<p class="st-text-wrap">Normal wrapping</p>
<p class="st-text-break">Breaks long words</p>
```

---

## Semantic Typography

### Prose (Formatted Content)

Apply `.st-prose` to any content area for beautiful typographic defaults — headings, paragraphs, lists, links, code, tables all get proper spacing and styling.

```html
<article class="st-prose">
  <h2>Article Title</h2>
  <p>Paragraphs with comfortable line-height and max-width for readability.</p>
  <ul>
    <li>Lists are properly spaced</li>
    <li>Links are styled with underlines</li>
  </ul>
  <blockquote>Blockquotes get a left border and italic styling.</blockquote>
  <pre><code>Code blocks are dark with proper padding.</code></pre>
</article>

<!-- Size variants -->
<article class="st-prose-sm">Smaller text, narrower width (55ch)</article>
<article class="st-prose-lg">Larger text, wider width (75ch)</article>
```

### Display Headings (Hero Titles)

```html
<h1 class="st-display-1">Huge (3rem → 5rem fluid)</h1>
<h1 class="st-display-2">Large (2.5rem → 4rem fluid)</h1>
<h1 class="st-display-3">Medium (2rem → 3rem fluid)</h1>
```

### Lead Paragraph

```html
<p class="st-lead">A larger, slightly muted intro paragraph for articles and hero sections.</p>
```

### Caption

```html
<figcaption class="st-caption">Photo by John Doe, 2024</figcaption>
```

### Overline + Subtitle

```html
<span class="st-overline">Featured</span>
<h2 class="st-heading-2">Main Title</h2>
<p class="st-subtitle">Supporting text that provides more context</p>
```

### Keyboard Keys

```html
<p>Press <kbd class="st-kbd">Ctrl</kbd> + <kbd class="st-kbd">C</kbd> to copy</p>
```

### Inline Code

```html
<p>Use the <code class="st-code">useState</code> hook for state management.</p>
```

### Blockquote

```html
<blockquote class="st-blockquote">
  Design is how it works. — Steve Jobs
</blockquote>
<blockquote class="st-blockquote-accent">
  With accent-colored left border.
</blockquote>
```

### List Styles

```html
<ul class="st-list-none">No bullets, no padding</ul>
<ul class="st-list-disc">Standard bullets</ul>
<ol class="st-list-decimal">Numbered list</ol>
<ul class="st-list-check">
  <li>Green checkmark prefix</li>
  <li>Another completed item</li>
</ul>
```

### Numeric Formatting

```html
<span class="st-tabular-nums">1,234,567.89</span>  <!-- Aligned columns -->
<span class="st-proportional-nums">1,234</span>     <!-- Natural spacing -->
<span class="st-oldstyle-nums">1234</span>          <!-- Old-style figures -->
```

### Text Wrapping (Modern)

```html
<h2 class="st-text-balance">Headings wrap evenly across lines</h2>
<p class="st-text-pretty">Paragraphs avoid orphans and widows</p>
```

### Label Text

```html
<span class="st-label-text">Required field</span>
```

---

## Colors

### Text Colors

```html
<!-- Brand -->
<p class="st-text-primary">Primary blue</p>
<p class="st-text-secondary">Secondary teal</p>
<p class="st-text-accent">Accent amber</p>

<!-- Semantic -->
<p class="st-text-success">Success / green</p>
<p class="st-text-danger">Danger / error / red</p>
<p class="st-text-warning">Warning / orange</p>
<p class="st-text-caution">Caution / yellow</p>
<p class="st-text-info">Info / blue</p>
<p class="st-text-neutral">Neutral gray</p>
<p class="st-text-muted">Muted (subdued)</p>

<!-- Direct color names (aliases) -->
<p class="st-text-red">Red (= danger)</p>
<p class="st-text-orange">Orange (= warning)</p>
<p class="st-text-green">Green (= success)</p>
<p class="st-text-blue">Blue (= info)</p>
<p class="st-text-teal">Teal (= secondary)</p>

<!-- Gray scale -->
<p class="st-text-gray-100">...</p>
<p class="st-text-gray-500">...</p>
<p class="st-text-gray-900">...</p>

<!-- Special -->
<p class="st-text-white">White</p>
<p class="st-text-black">Black</p>
<p class="st-text-link">Link color (themed)</p>
```

### Background Colors

```html
<!-- Brand & semantic -->
<div class="st-bg-primary">Primary</div>
<div class="st-bg-secondary">Secondary</div>
<div class="st-bg-success">Success</div>
<div class="st-bg-danger">Danger</div>
<div class="st-bg-warning">Warning</div>

<!-- Light variants (for alerts/badges) -->
<div class="st-bg-success-light st-text-success">Success alert</div>
<div class="st-bg-danger-light st-text-danger">Error alert</div>
<div class="st-bg-warning-light st-text-warning">Warning alert</div>
<div class="st-bg-info-light st-text-info">Info alert</div>

<!-- Theme-aware surfaces -->
<div class="st-bg-surface">Slightly elevated</div>
<div class="st-bg-elevated">Card/modal background</div>
<div class="st-bg-overlay">Overlay/backdrop</div>

<!-- Special -->
<div class="st-bg-white">Always white</div>
<div class="st-bg-black">Always black</div>
<div class="st-bg-transparent">Transparent</div>
```

### Border Colors

```html
<div class="st-border st-border-primary">Primary border</div>
<div class="st-border st-border-danger">Danger border</div>
<div class="st-border st-border-success">Success border</div>
<div class="st-border st-border-default">Default themed border</div>
<div class="st-border st-border-strong">Strong/darker border</div>
```

---

## Semantic Colors & States

### Alerts

Pre-styled contextual messages — no need to combine multiple classes:

```html
<div class="st-alert-success">✓ Operation completed successfully.</div>
<div class="st-alert-danger">✕ Something went wrong!</div>
<div class="st-alert-warning">⚠ Please review before continuing.</div>
<div class="st-alert-info">ℹ Here's some helpful information.</div>
<div class="st-alert-caution">⚡ Proceed with caution.</div>
<div class="st-alert-neutral">A neutral informational message.</div>
```

### Badges (Solid)

```html
<span class="st-badge-primary">New</span>
<span class="st-badge-secondary">Beta</span>
<span class="st-badge-accent">Hot</span>
<span class="st-badge-success">Active</span>
<span class="st-badge-danger">3</span>
<span class="st-badge-warning">Expiring</span>
<span class="st-badge-info">Updated</span>
<span class="st-badge-neutral">Archived</span>
```

### Badges (Soft / Light)

```html
<span class="st-badge-soft-primary">Draft</span>
<span class="st-badge-soft-secondary">Review</span>
<span class="st-badge-soft-success">Approved</span>
<span class="st-badge-soft-danger">Rejected</span>
<span class="st-badge-soft-warning">Pending</span>
<span class="st-badge-soft-info">Info</span>
```

### Status Indicators

Small dot indicators for user/system status:

```html
<span class="st-status-online"></span> Online
<span class="st-status-offline"></span> Offline
<span class="st-status-busy"></span> Busy
<span class="st-status-away"></span> Away
<span class="st-status-dnd"></span> Do Not Disturb
```

### Highlights

Inline text highlighting for emphasis:

```html
<span class="st-highlight">Default (yellow) highlight</span>
<span class="st-highlight-success">Success highlight</span>
<span class="st-highlight-danger">Danger highlight</span>
<span class="st-highlight-info">Info highlight</span>
```

### Gradient Backgrounds

Decorative gradient backgrounds for sections and cards:

```html
<section class="st-gradient-primary st-p-8">Primary → Secondary</section>
<section class="st-gradient-secondary st-p-8">Secondary → Accent</section>
<section class="st-gradient-sunset st-p-8">Orange → Pink → Rose</section>
<section class="st-gradient-ocean st-p-8">Cyan → Blue → Indigo</section>
<section class="st-gradient-forest st-p-8">Emerald → Green → Teal</section>
<section class="st-gradient-midnight st-p-8">Navy → Deep Blue → Blue</section>
<section class="st-gradient-surface">Subtle bg → surface</section>
```

### Surface Variants

Semantic card/section surfaces with appropriate elevation:

```html
<div class="st-surface-raised st-p-6">Raised card (border + shadow)</div>
<div class="st-surface-sunken st-p-6">Sunken/recessed area (inset shadow)</div>
<div class="st-surface-interactive st-p-6">Clickable card (hover lifts shadow)</div>
```

### Dividers

Semantic separators:

```html
<hr class="st-divider" />            <!-- Default thin line -->
<hr class="st-divider-strong" />     <!-- Thicker, darker -->
<hr class="st-divider-dashed" />     <!-- Dashed style -->
<span class="st-divider-vertical"></span>  <!-- Vertical inline separator -->
```

---

## Layouts & Grid

### Container

```html
<!-- Responsive max-width container (centered) -->
<div class="st-container">
  <!-- Max-width adapts per breakpoint: 540px → 720px → 960px → 1140px → 1320px -->
</div>

<!-- Full-width container (no max-width cap) -->
<div class="st-container-fluid">...</div>
```

### CSS Grid

```html
<!-- Basic grid -->
<div class="st-grid st-grid-cols-3 st-gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Responsive grid -->
<div class="st-grid st-grid-cols-1 st-sm-grid-cols-2 st-md-grid-cols-3 st-lg-grid-cols-4 st-gap-6">
  <div>Card</div>
  <div>Card</div>
  <div>Card</div>
  <div>Card</div>
</div>

<!-- Column spanning -->
<div class="st-grid st-grid-cols-12 st-gap-4">
  <aside class="st-col-span-3">Sidebar</aside>
  <main class="st-col-span-9">Content</main>
</div>
<div class="st-col-span-full">Full row</div>

<!-- Row spanning -->
<div class="st-row-span-2">Spans 2 rows</div>
```

**Grid columns:** `.st-grid-cols-1` through `.st-grid-cols-12`
**Column span:** `.st-col-span-1` through `.st-col-span-12`, `.st-col-span-full`
**Row span:** `.st-row-span-1` through `.st-row-span-6`

### Gap

| Class | Value |
|-------|-------|
| `.st-gap-0` | 0 |
| `.st-gap-1` | 0.25rem |
| `.st-gap-2` | 0.5rem |
| `.st-gap-3` | 0.75rem |
| `.st-gap-4` | 1rem |
| `.st-gap-6` | 1.5rem |
| `.st-gap-8` | 2rem |
| `.st-gap-10` | 2.5rem |
| `.st-gap-12` | 3rem |

Also: `.st-gap-x-{size}` (column gap) and `.st-gap-y-{size}` (row gap)

---

## Semantic Layouts

Composable layout primitives based on "Every Layout" patterns. These handle common layout needs with a single class.

### Stack (Vertical Rhythm)

Evenly spaced vertical children — the most common layout pattern:

```html
<div class="st-stack">         <!-- gap: 1rem -->
  <h2>Title</h2>
  <p>Content</p>
  <button>Action</button>
</div>

<div class="st-stack-sm">     <!-- gap: 0.5rem (tight) -->
<div class="st-stack-lg">     <!-- gap: 2rem (spacious) -->
<div class="st-stack-xl">     <!-- gap: 3rem (sections) -->
```

### Cluster (Horizontal Wrapping Group)

For tags, pills, button groups, and any inline items that should wrap:

```html
<div class="st-cluster">      <!-- gap: 0.75rem, wraps, centers vertically -->
  <span class="st-badge-primary">Tag 1</span>
  <span class="st-badge-secondary">Tag 2</span>
  <span class="st-badge-success">Tag 3</span>
</div>

<div class="st-cluster-sm">   <!-- tighter: gap 0.25rem -->
<div class="st-cluster-lg">   <!-- looser: gap 1.5rem -->
```

### Center (Readable Content)

Max-width + auto margins with inline padding — ideal for text content:

```html
<div class="st-center">          <!-- max-width: 65ch -->
<div class="st-center-narrow">   <!-- max-width: 45ch -->
<div class="st-center-wide">     <!-- max-width: 90ch -->
```

Customize width: `style="--st-center-width: 50rem"`

### Auto Grid

Responsive grid that auto-fills columns based on minimum item width:

```html
<div class="st-auto-grid">       <!-- min: 16rem per item -->
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<div class="st-auto-grid-sm">   <!-- min: 12rem (more columns) -->
<div class="st-auto-grid-lg">   <!-- min: 22rem (fewer columns) -->
```

Customize minimum: `style="--st-auto-grid-min: 20rem"`

### With Sidebar

Two-panel layout where the sidebar has intrinsic width and the main area fills the rest:

```html
<div class="st-with-sidebar">
  <aside>Sidebar (defaults to 20rem)</aside>
  <main>Main content (fills remaining)</main>
</div>
```

Customize sidebar width: `style="--st-sidebar-width: 15rem"`

### Switcher

Flexbox row that automatically switches to column when space runs out:

```html
<div class="st-switcher">
  <div>Panel A</div>
  <div>Panel B</div>
  <div>Panel C</div>
</div>
```

Customize threshold: `style="--st-switcher-threshold: 40rem"`

### Reel (Horizontal Scroll)

Horizontal scrolling strip with snap points — for carousels, image galleries, tabs:

```html
<div class="st-reel">
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</div>
```

Children auto-get `flex-shrink: 0` and `scroll-snap-align: start`.

### Cover (Full-Viewport Section)

Hero sections with vertically centered content:

```html
<div class="st-cover">
  <header>Pushed to top</header>
  <div class="st-cover-center">Vertically centered hero content</div>
  <footer>Pushed to bottom</footer>
</div>
```

### Pancake (App Shell)

Header/main/footer layout where main grows to fill viewport:

```html
<div class="st-pancake">
  <header>Fixed header</header>
  <main>Content (expands to fill)</main>
  <footer>Fixed footer</footer>
</div>
```

### Holy Grail (3-Column Page)

Classic header + sidebar + main + sidebar + footer:

```html
<div class="st-holy-grail">
  <header>Full-width header</header>
  <nav>Left sidebar</nav>
  <main>Main content</main>
  <aside>Right sidebar</aside>
  <footer>Full-width footer</footer>
</div>
```

### Imposter (Centered Overlay)

Centered absolutely/fixed-positioned element (for modals):

```html
<div class="st-imposter">Centered in nearest positioned parent</div>
<div class="st-imposter-fixed">Centered in viewport (modal)</div>
```

### Frame (Aspect-Ratio Media)

Contain images/video in a fixed aspect ratio:

```html
<div class="st-frame">          <!-- 16:9 -->
  <img src="hero.jpg" />
</div>
<div class="st-frame-square">   <!-- 1:1 -->
  <img src="avatar.jpg" />
</div>
```

Children `img`/`video` auto-get `object-fit: cover`.

### Icon (Inline SVG Sizing)

Size inline SVG icons relative to text:

```html
<svg class="st-icon">...</svg>       <!-- 1em -->
<svg class="st-icon-sm">...</svg>    <!-- 0.875em -->
<svg class="st-icon-lg">...</svg>    <!-- 1.25em -->
<svg class="st-icon-xl">...</svg>    <!-- 1.5em -->
```

Icons inherit `currentColor` and align with text baseline.

---

## Spacing

### Padding

| Pattern | Effect |
|---------|--------|
| `.st-p-{size}` | All sides |
| `.st-px-{size}` | Left + Right |
| `.st-py-{size}` | Top + Bottom |
| `.st-pt-{size}` | Top only |
| `.st-pr-{size}` | Right only |
| `.st-pb-{size}` | Bottom only |
| `.st-pl-{size}` | Left only |

### Margin

| Pattern | Effect |
|---------|--------|
| `.st-m-{size}` | All sides |
| `.st-mx-{size}` | Left + Right |
| `.st-my-{size}` | Top + Bottom |
| `.st-mt-{size}` | Top |
| `.st-mr-{size}` | Right |
| `.st-mb-{size}` | Bottom |
| `.st-ml-{size}` | Left |
| `.st-m-auto` | Auto (centering) |
| `.st-mx-auto` | Horizontal centering |

### Negative Margin

Use `st--m{side}-{size}` for negative values: `.st--mt-4`, `.st--ml-2`

### Spacing Scale

| Size | Value |
|------|-------|
| `0` | 0 |
| `1` | 0.25rem (4px) |
| `2` | 0.5rem (8px) |
| `3` | 0.75rem (12px) |
| `4` | 1rem (16px) |
| `5` | 1.25rem (20px) |
| `6` | 1.5rem (24px) |
| `8` | 2rem (32px) |
| `10` | 2.5rem (40px) |
| `12` | 3rem (48px) |
| `16` | 4rem (64px) |
| `20` | 5rem (80px) |

### Responsive Spacing

All spacing classes work at breakpoints:

```html
<div class="st-p-2 st-md-p-4 st-lg-p-8">
  <!-- 0.5rem on mobile, 1rem on tablet, 2rem on desktop -->
</div>

<div class="st-mb-4 st-lg-mb-12">
  <!-- Bottom margin adapts per screen -->
</div>
```

Pattern: `.st-{breakpoint}-{property}-{size}`

---

## Borders & Rounded

### Border Width

| Class | Effect |
|-------|--------|
| `.st-border` | 1px solid (default color) |
| `.st-border-0` | Remove border |
| `.st-border-2` | 2px solid |
| `.st-border-4` | 4px solid |
| `.st-border-8` | 8px solid |

### Border Sides

```html
<div class="st-border-t">Top border only</div>
<div class="st-border-b">Bottom only</div>
<div class="st-border-l">Left only</div>
<div class="st-border-r">Right only</div>
<div class="st-border-x">Left + Right</div>
<div class="st-border-y">Top + Bottom</div>
```

Remove specific sides: `.st-border-t-0`, `.st-border-b-0`, etc.

### Border Style

```html
<div class="st-border st-border-dashed">Dashed</div>
<div class="st-border st-border-dotted">Dotted</div>
<div class="st-border st-border-solid">Solid (default)</div>
<div class="st-border-none">No border</div>
```

### Border Radius (Rounded)

| Class | Value |
|-------|-------|
| `.st-rounded-none` | 0 |
| `.st-rounded-sm` | 0.25rem |
| `.st-rounded` | 0.375rem |
| `.st-rounded-md` | 0.5rem |
| `.st-rounded-lg` | 0.75rem |
| `.st-rounded-xl` | 1rem |
| `.st-rounded-full` | 9999px (circle/pill) |

### Per-Corner Radius

```html
<div class="st-rounded-t">Top corners rounded</div>
<div class="st-rounded-b">Bottom corners</div>
<div class="st-rounded-l">Left corners</div>
<div class="st-rounded-r">Right corners</div>
<div class="st-rounded-tl">Top-left only</div>
<div class="st-rounded-br">Bottom-right only</div>
```

### Divide (Borders Between Children)

```html
<!-- Vertical list with dividers -->
<div class="st-flex st-flex-col st-divide-y">
  <div class="st-py-3">Item 1</div>
  <div class="st-py-3">Item 2</div>
  <div class="st-py-3">Item 3</div>
</div>

<!-- Horizontal row with dividers -->
<div class="st-flex st-divide-x">
  <div class="st-px-4">Left</div>
  <div class="st-px-4">Center</div>
  <div class="st-px-4">Right</div>
</div>

<!-- Thicker divide -->
<div class="st-divide-y-2">...</div>

<!-- Colored divide -->
<div class="st-divide-y st-divide-primary">...</div>
```

---

## Sizing

### Width

| Class | Value |
|-------|-------|
| `.st-w-full` | 100% |
| `.st-w-auto` | auto |
| `.st-w-screen` | 100vw |
| `.st-w-fit` | fit-content |
| `.st-w-min` | min-content |
| `.st-w-max` | max-content |
| `.st-w-1\/2` | 50% |
| `.st-w-1\/3` | 33.333% |
| `.st-w-2\/3` | 66.667% |
| `.st-w-1\/4` | 25% |
| `.st-w-3\/4` | 75% |

### Height

| Class | Value |
|-------|-------|
| `.st-h-full` | 100% |
| `.st-h-auto` | auto |
| `.st-h-screen` | 100vh |
| `.st-h-fit` | fit-content |
| `.st-min-h-0` | min-height: 0 |
| `.st-min-h-full` | min-height: 100% |
| `.st-min-h-screen` | min-height: 100vh |

### Max-Width

| Class | Value |
|-------|-------|
| `.st-max-w-none` | none |
| `.st-max-w-xs` | 20rem (320px) |
| `.st-max-w-sm` | 24rem (384px) |
| `.st-max-w-md` | 28rem (448px) |
| `.st-max-w-lg` | 32rem (512px) |
| `.st-max-w-xl` | 36rem (576px) |
| `.st-max-w-2xl` | 42rem (672px) |
| `.st-max-w-3xl` | 48rem (768px) |
| `.st-max-w-4xl` | 56rem (896px) |
| `.st-max-w-5xl` | 64rem (1024px) |
| `.st-max-w-6xl` | 72rem (1152px) |
| `.st-max-w-7xl` | 80rem (1280px) |
| `.st-max-w-full` | 100% |
| `.st-max-w-prose` | 65ch (ideal reading width) |
| `.st-max-w-screen-sm` | 576px |
| `.st-max-w-screen-md` | 768px |
| `.st-max-w-screen-lg` | 992px |
| `.st-max-w-screen-xl` | 1200px |

### Aspect Ratio

```html
<div class="st-aspect-square">1:1 square</div>
<div class="st-aspect-video">16:9 video</div>
<div class="st-aspect-4\/3">4:3 photo</div>
<div class="st-aspect-3\/2">3:2 classic</div>
```

### Object Fit (for images/video)

```html
<img class="st-object-cover st-w-full st-h-full" src="photo.jpg" />
<img class="st-object-contain" src="logo.svg" />
<img class="st-object-fill" src="banner.jpg" />
<img class="st-object-none" src="icon.png" />
```

Object position: `.st-object-center`, `.st-object-top`, `.st-object-bottom`, `.st-object-left`, `.st-object-right`

---

## Flexbox

### Base

```html
<div class="st-flex">Flex row (default)</div>
<div class="st-inline-flex">Inline flex</div>
```

### Direction

```html
<div class="st-flex st-flex-row">Row (default)</div>
<div class="st-flex st-flex-col">Column</div>
<div class="st-flex st-flex-row-reverse">Row reversed</div>
<div class="st-flex st-flex-col-reverse">Column reversed</div>
```

### Wrap

```html
<div class="st-flex st-flex-wrap">Wraps to new lines</div>
<div class="st-flex st-flex-nowrap">Single line</div>
```

### Justify Content

| Class | Effect |
|-------|--------|
| `.st-justify-start` | flex-start |
| `.st-justify-end` | flex-end |
| `.st-justify-center` | center |
| `.st-justify-between` | space-between |
| `.st-justify-around` | space-around |
| `.st-justify-evenly` | space-evenly |

### Align Items

| Class | Effect |
|-------|--------|
| `.st-items-start` | flex-start |
| `.st-items-end` | flex-end |
| `.st-items-center` | center |
| `.st-items-baseline` | baseline |
| `.st-items-stretch` | stretch |

### Align Self

`.st-self-start`, `.st-self-end`, `.st-self-center`, `.st-self-baseline`, `.st-self-stretch`

### Flex Sizing

| Class | Effect |
|-------|--------|
| `.st-flex-1` | flex: 1 1 0% (grow to fill) |
| `.st-flex-auto` | flex: 1 1 auto |
| `.st-flex-initial` | flex: 0 1 auto |
| `.st-flex-none` | flex: none (rigid) |
| `.st-grow` | flex-grow: 1 |
| `.st-grow-0` | flex-grow: 0 |
| `.st-shrink` | flex-shrink: 1 |
| `.st-shrink-0` | flex-shrink: 0 |

### Order

`.st-order-1` through `.st-order-6`, `.st-order-first` (-9999), `.st-order-last` (9999)

### Responsive Flex

```html
<div class="st-flex st-flex-col st-md-flex-row st-gap-4">
  <!-- Stacked on mobile, side-by-side on tablet+ -->
</div>
```

---

## Display & Visibility

| Class | Effect |
|-------|--------|
| `.st-block` | display: block |
| `.st-inline-block` | display: inline-block |
| `.st-inline` | display: inline |
| `.st-hidden` | display: none |
| `.st-invisible` | visibility: hidden (still takes space) |
| `.st-visible` | visibility: visible |

### Responsive Display

```html
<div class="st-hidden st-md-block">Hidden on mobile, visible on tablet+</div>
<div class="st-block st-lg-hidden">Visible until desktop, then hidden</div>
```

### Overflow

```html
<div class="st-overflow-hidden">Clips content</div>
<div class="st-overflow-auto">Scrollbar when needed</div>
<div class="st-overflow-scroll">Always show scrollbar</div>
<div class="st-overflow-x-auto">Horizontal scroll only</div>
<div class="st-overflow-y-auto">Vertical scroll only</div>
```

### Position

```html
<div class="st-relative">Relative positioning</div>
<div class="st-absolute">Absolute positioning</div>
<div class="st-fixed">Fixed to viewport</div>
<div class="st-sticky">Sticky (sticks at top on scroll)</div>
```

---

## Buttons

### Basic Usage

```html
<button class="st-btn">Default</button>
<button class="st-btn st-btn-primary">Primary</button>
<button class="st-btn st-btn-secondary">Secondary</button>
<button class="st-btn st-btn-accent">Accent</button>
<button class="st-btn st-btn-success">Success</button>
<button class="st-btn st-btn-warning">Warning</button>
<button class="st-btn st-btn-danger">Danger</button>
<button class="st-btn st-btn-info">Info</button>
<button class="st-btn st-btn-neutral">Neutral</button>
```

### Variants

```html
<!-- Outline -->
<button class="st-btn st-btn-outline">Default outline</button>
<button class="st-btn st-btn-outline-primary">Primary outline</button>
<button class="st-btn st-btn-outline-danger">Danger outline</button>

<!-- Ghost (no border) -->
<button class="st-btn st-btn-ghost">Ghost button</button>
```

### Sizes

```html
<button class="st-btn st-btn-primary st-btn-xs">Extra Small</button>
<button class="st-btn st-btn-primary st-btn-sm">Small</button>
<button class="st-btn st-btn-primary">Default</button>
<button class="st-btn st-btn-primary st-btn-lg">Large</button>
<button class="st-btn st-btn-primary st-btn-xl">Extra Large</button>
```

### Shapes

```html
<button class="st-btn st-btn-primary st-btn-pill">Pill shape</button>
<button class="st-btn st-btn-primary st-btn-square">Square corners</button>
<button class="st-btn st-btn-primary st-btn-full">Full width</button>
```

### Button Group

```html
<div class="st-btn-group">
  <button class="st-btn st-btn-primary">One</button>
  <button class="st-btn st-btn-primary">Two</button>
  <button class="st-btn st-btn-primary">Three</button>
</div>
```

### States

```html
<button class="st-btn st-btn-primary" disabled>Disabled</button>
```

---

## Forms

### Inputs

```html
<input class="st-input" type="text" placeholder="Default input" />
<input class="st-input st-input-sm" placeholder="Small" />
<input class="st-input st-input-lg" placeholder="Large" />

<!-- Validation states -->
<input class="st-input st-input-success" value="Valid!" />
<input class="st-input st-input-error" value="Invalid" />
```

### Form Group (recommended pattern)

```html
<div class="st-form-group">
  <label class="st-label st-label-required">Email</label>
  <input class="st-input" type="email" placeholder="you@example.com" />
  <span class="st-form-helper">We'll never spam you.</span>
</div>

<div class="st-form-group">
  <label class="st-label">Password</label>
  <input class="st-input st-input-error" type="password" />
  <span class="st-form-error">Must be at least 8 characters.</span>
</div>
```

### Select & Textarea

```html
<select class="st-input">
  <option>Choose...</option>
  <option>Option A</option>
  <option>Option B</option>
</select>

<textarea class="st-input" placeholder="Write here..."></textarea>
```

### Checkbox & Radio

```html
<label class="st-checkbox">
  <input type="checkbox" /> Remember me
</label>

<label class="st-radio">
  <input type="radio" name="plan" /> Free
</label>
<label class="st-radio">
  <input type="radio" name="plan" /> Pro
</label>
```

### Inline Form

```html
<div class="st-form-inline">
  <input class="st-input" placeholder="Search..." />
  <button class="st-btn st-btn-primary">Go</button>
</div>
```

---

## Shadows

### Elevation

```html
<div class="st-shadow-none">No shadow</div>
<div class="st-shadow-xs">Extra small</div>
<div class="st-shadow-sm">Small</div>
<div class="st-shadow">Default</div>
<div class="st-shadow-md">Medium</div>
<div class="st-shadow-lg">Large</div>
<div class="st-shadow-xl">Extra large</div>
```

### Colored Shadows (Glow)

```html
<button class="st-btn st-btn-primary st-shadow-primary">Primary glow</button>
<div class="st-shadow-success">Green glow</div>
<div class="st-shadow-danger">Red glow</div>
<div class="st-shadow-warning">Orange glow</div>
```

### Inner Shadow

```html
<div class="st-shadow-inner">Inset shadow</div>
```

---

## Animations & Transitions

### Transitions

```html
<!-- Apply to elements that change on hover/state -->
<div class="st-transition-all">All properties (200ms)</div>
<div class="st-transition-fast">All properties (150ms)</div>
<div class="st-transition-slow">All properties (300ms)</div>
<div class="st-transition-colors">Color/bg/border only</div>
<div class="st-transition-opacity">Opacity only</div>
<div class="st-transition-shadow">Box-shadow only</div>
<div class="st-transition-transform">Transform only</div>
<div class="st-transition-none">Disable transitions</div>
```

### Enter Animations (play once on load)

```html
<div class="st-animate-fade-in">Fades in</div>
<div class="st-animate-fade-out">Fades out</div>
<div class="st-animate-slide-up">Slides up + fades in</div>
<div class="st-animate-slide-down">Slides down + fades in</div>
<div class="st-animate-scale-in">Scales up + fades in</div>
```

### Continuous Animations (loop forever)

```html
<span class="st-animate-spin">⟳</span>     <!-- Spinner -->
<div class="st-animate-pulse">...</div>     <!-- Pulsing opacity -->
<span class="st-animate-bounce">↓</span>   <!-- Bouncing -->
```

### Hover Transforms

```html
<div class="st-transition-transform st-hover-lift">Lifts up 2px on hover</div>
<div class="st-transition-transform st-hover-grow">Scales up 5% on hover</div>
<div class="st-transition-transform st-hover-shrink">Shrinks 5% on hover</div>
```

> All animations automatically disabled when user has `prefers-reduced-motion: reduce`.

---

## Hover Effects

### Hover Background

```html
<div class="st-hover-bg-primary st-transition-colors">Blue on hover</div>
<div class="st-hover-bg-surface st-transition-colors">Surface bg on hover</div>
<div class="st-hover-bg-danger st-transition-colors">Red on hover</div>
```

### Hover Text

```html
<a class="st-hover-text-primary st-transition-colors">Blue text on hover</a>
<a class="st-hover-text-danger st-transition-colors">Red on hover</a>
```

### Hover Border

```html
<div class="st-border st-hover-border-primary st-transition-colors">Primary border on hover</div>
```

### Hover Opacity

```html
<img class="st-hover-opacity-75 st-transition-opacity" src="..." />
```

---

## Accessibility

### Screen Reader Only

```html
<!-- Visually hidden but read by screen readers -->
<span class="st-sr-only">This text is only for screen readers</span>

<!-- Show it again (responsive reveal) -->
<span class="st-not-sr-only">Visible again</span>
```

### Focus Ring

```html
<!-- Accessible focus indicator (only shows on keyboard focus) -->
<button class="st-focus-ring">Keyboard-accessible button</button>
<button class="st-focus-ring-danger">Danger focus ring</button>
<button class="st-focus-ring-inset">Inset ring (inside element)</button>
```

### Focus Within

```html
<!-- Highlights wrapper when any child gets focus -->
<div class="st-focus-within-ring st-p-4 st-border">
  <input class="st-input" />
</div>
```

### Skip Link

```html
<!-- First element in <body> for keyboard users -->
<a href="#main-content" class="st-skip-link">Skip to main content</a>
```

### Reduced Motion

```html
<!-- Only animate for users who haven't opted out -->
<div class="st-motion-safe st-animate-fade-in">Respects user preference</div>
```

---

## Utilities

### Opacity

| Class | Value |
|-------|-------|
| `.st-opacity-0` | 0 (invisible) |
| `.st-opacity-25` | 0.25 |
| `.st-opacity-50` | 0.5 |
| `.st-opacity-75` | 0.75 |
| `.st-opacity-100` | 1 (fully visible) |

Full scale: 0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100

### Z-Index

| Class | Value |
|-------|-------|
| `.st-z-0` | 0 |
| `.st-z-10` | 10 |
| `.st-z-20` | 20 |
| `.st-z-30` | 30 |
| `.st-z-40` | 40 |
| `.st-z-50` | 50 |
| `.st-z-auto` | auto |
| `.st-z-dropdown` | 1000 |
| `.st-z-sticky` | 1020 |
| `.st-z-fixed` | 1030 |
| `.st-z-modal` | 1050 |
| `.st-z-tooltip` | 1070 |

### Cursor

| Class | Cursor |
|-------|--------|
| `.st-cursor-pointer` | Clickable hand |
| `.st-cursor-default` | Arrow |
| `.st-cursor-text` | Text I-beam |
| `.st-cursor-move` | Move arrows |
| `.st-cursor-grab` | Grab hand |
| `.st-cursor-grabbing` | Grabbing hand |
| `.st-cursor-not-allowed` | ⊘ (disabled) |
| `.st-cursor-wait` | Loading |
| `.st-cursor-crosshair` | Crosshair |
| `.st-cursor-zoom-in` | Zoom in |
| `.st-cursor-zoom-out` | Zoom out |

### Pointer Events

```html
<div class="st-pointer-events-none">Click-through (no interaction)</div>
<div class="st-pointer-events-auto">Normal interaction</div>
```

### User Select

```html
<div class="st-select-none">Can't select text</div>
<div class="st-select-text">Normal selection</div>
<div class="st-select-all">Select all on click</div>
```

### Scroll Behavior

```html
<html class="st-scroll-smooth"><!-- Smooth scrolling for anchor links --></html>
```

### Print Utilities

```html
<nav class="st-print-hidden">Hidden when printing</nav>
<div class="st-print-only">Only visible in print</div>
<div class="st-print-break-before">Page break before this element</div>
<div class="st-print-break-after">Page break after</div>
<div class="st-print-break-inside-avoid">Avoid breaking inside</div>
```

---

## Theming

### Three Ways to Switch Themes

```html
<!-- 1. Automatic (OS preference, no code needed) -->
<!-- Just works! Dark if user's OS is dark mode -->

<!-- 2. CSS class (on <html> or any ancestor) -->
<html class="theme-dark">

<!-- 3. Data attribute (scope to any element) -->
<div data-theme="dark">
  <!-- Everything inside is dark -->
</div>
```

### Toggle via JS

```js
// Toggle dark mode
document.documentElement.classList.toggle('theme-dark');

// Force dark
document.documentElement.setAttribute('data-theme', 'dark');

// Follow OS
document.documentElement.removeAttribute('data-theme');
document.documentElement.classList.remove('theme-dark', 'theme-light');
```

### Custom Brand Colors

```css
:root {
  /* Brand */
  --st-color-primary: #e11d48;      /* Rose */
  --st-color-secondary: #0d9488;    /* Teal */
  --st-color-accent: #06b6d4;       /* Cyan */

  /* Typography */
  --st-font-family: 'Inter', system-ui, sans-serif;

  /* Spacing (make everything more spacious) */
  --st-space-4: 1.25rem;
  --st-space-6: 2rem;

  /* Corners */
  --st-border-radius: 0.75rem;
}
```

### Scoped Theming

```css
/* Different brand per section */
.marketing {
  --st-color-primary: #f59e0b;
}

.dashboard {
  --st-color-primary: #10b981;
  --st-bg-surface: #f0fdf4;
}
```

---

## Easter Eggs 🎉

Fun effects for creative projects, landing pages, or just making things delightful.

### Rainbow Text (Party Mode)

```html
<h1 class="st-party">This text cycles through rainbow colors!</h1>
```

### Neon Glow

```html
<h2 class="st-neon">Flickering neon sign</h2>
<h2 class="st-neon-green">Matrix green neon</h2>
<h2 class="st-neon-pink">Hot pink neon</h2>
```

### Glassmorphism

```html
<!-- Use on top of colorful backgrounds -->
<div class="st-glass st-p-6">
  <h3>Frosted glass card</h3>
  <p>Blurred translucent background</p>
</div>

<div class="st-glass-dark st-p-6">Dark glass variant</div>
```

### Retro Terminal

```html
<div class="st-retro">
  <p>> SYSTEM ONLINE</p>
  <p>> LOADING...</p>
  <p>> WELCOME, USER_</p>
</div>
```

### Shake (Error/Attention)

```html
<!-- Trigger shake class on wrong password, etc. -->
<input class="st-input st-shake" />

<!-- Shake on hover -->
<button class="st-btn st-hover-shake">Don't click me!</button>
```

### Float (Gentle Levitation)

```html
<div class="st-float">I'm floating gently up and down</div>
```

### 3D Tilt

```html
<div class="st-tilt st-p-6 st-bg-elevated st-shadow-lg st-rounded-lg">
  Tilts in 3D on hover
</div>

<div class="st-tilt-reverse">Tilts the other way</div>
```

### Typewriter Cursor

```html
<p class="st-typewriter">Blinking cursor at the end_</p>
```

### Heartbeat

```html
<span class="st-heartbeat" style="font-size: 2rem;">❤️</span>
```

### Wiggle

```html
<span class="st-wiggle">🔔</span>
<button class="st-btn st-hover-wiggle">Wiggles on hover</button>
```

### Glitch

```html
<h1 class="st-glitch">GLITCH EFFECT</h1>
```

### Zoom Wobble

```html
<div class="st-zoom-wobble">Subtly zooms and rotates</div>
```

### Gradient Text

```html
<h1 class="st-gradient-text">Primary → Secondary gradient</h1>
<h1 class="st-gradient-text-warm">Amber → Red gradient</h1>
<h1 class="st-gradient-text-cool">Cyan → Sky gradient</h1>
```

### Paper/Notebook

```html
<div class="st-paper">
  Looks like lined notebook paper
  with a red margin line
</div>
```

### Morphing Shape

```html
<div class="st-morph st-bg-primary st-p-8" style="width: 200px; height: 200px;">
  Continuously morphing border-radius
</div>
```

### Secret Credits Badge

```html
<!-- Add this attribute to get a tiny "Made with Streamertail" badge -->
<footer data-streamertail="credits">My Project</footer>
```

> All easter egg animations respect `prefers-reduced-motion` and auto-disable for users who prefer less motion.

---

## Responsive Design

### Breakpoints

| Prefix | Min-Width | Target |
|--------|-----------|--------|
| (none) | 0px | Mobile (default) |
| `sm-` | 576px | Large phones |
| `md-` | 768px | Tablets |
| `lg-` | 992px | Laptops |
| `xl-` | 1200px | Desktops |
| `xxl-` | 1400px | Large screens |

### Pattern

All responsive classes follow: `.st-{breakpoint}-{utility}`

```html
<!-- Grid responsive -->
<div class="st-grid st-grid-cols-1 st-md-grid-cols-2 st-lg-grid-cols-4">

<!-- Spacing responsive -->
<div class="st-p-4 st-md-p-8 st-lg-p-12">

<!-- Text responsive -->
<h1 class="st-text-2xl st-md-text-4xl st-lg-text-5xl">

<!-- Display responsive -->
<aside class="st-hidden st-lg-block">

<!-- Flex responsive -->
<div class="st-flex st-flex-col st-md-flex-row">

<!-- Alignment responsive -->
<p class="st-text-center st-md-text-left">
```

### What's Responsive?

| Feature | Responsive? |
|---------|-------------|
| Grid columns | ✅ `.st-md-grid-cols-3` |
| Column span | ✅ `.st-lg-col-span-6` |
| Flex direction | ✅ `.st-md-flex-row` |
| Display | ✅ `.st-lg-hidden` |
| Spacing (padding/margin) | ✅ `.st-md-p-4` |
| Font size | ✅ `.st-lg-text-xl` |
| Text alignment | ✅ `.st-md-text-center` |
| Justify/align | ✅ `.st-md-justify-center` |

---

## Design Tokens (JS)

For programmatic use in frameworks:

```bash
npm install streamertail
```

### CommonJS

```js
const { colors, darkColors, spacing, typography, breakpoints } = require('streamertail/dist/tokens/index.js');
```

### ES Module

```js
import { colors, darkColors, spacing, typography, shadows, breakpoints } from 'streamertail/tokens';
```

### Available Exports

| Export | Contents |
|--------|----------|
| `colors` | All light-mode color values |
| `darkColors` | All dark-mode color values (backgrounds, text, borders) |
| `spacing` | Spacing scale (0-24) |
| `typography` | Font families, sizes, weights, line-heights |
| `shadows` | Box-shadow values (xs → 2xl) |
| `breakpoints` | Breakpoint pixel values |
| `borderRadius` | Radius scale |
| `transitions` | Timing values |
| `zIndex` | Z-index layer scale |

### Usage Example

```jsx
import { colors, spacing } from 'streamertail/tokens';

// Use in styled-components, CSS-in-JS, or config files
const theme = {
  primary: colors.primary,        // '#2563eb'
  danger: colors.danger,          // '#dc2626'
  cardPadding: spacing[4],        // '1rem'
  sectionGap: spacing[8],         // '2rem'
};
```

---

## Complete Class Reference

### Quick Cheat Sheet

```
TYPOGRAPHY
  .st-heading-{1-6}
  .st-text-{xs|sm|base|lg|xl|2xl|3xl|4xl|5xl}
  .st-font-{light|normal|medium|semibold|bold|sans|mono}
  .st-text-{left|center|right|justify}
  .st-text-{uppercase|lowercase|capitalize|normal-case}
  .st-text-{underline|line-through|no-underline}
  .st-leading-{tight|normal|relaxed}
  .st-tracking-{tighter|tight|normal|wide|wider|widest}
  .st-text-{truncate|wrap|nowrap|break}

COLORS
  .st-text-{primary|secondary|accent|success|danger|warning|info|muted|white|black}
  .st-bg-{primary|secondary|accent|success|danger|warning|info|surface|elevated|white|black|transparent}
  .st-bg-{success-light|danger-light|warning-light|info-light}
  .st-border-{primary|secondary|success|danger|warning|info|default|strong}
  .st-text-gray-{100-900}
  .st-bg-gray-{100-900}

LAYOUT
  .st-container | .st-container-fluid
  .st-grid | .st-grid-cols-{1-12}
  .st-col-span-{1-12} | .st-col-span-full
  .st-row-span-{1-6}
  .st-gap-{0-12} | .st-gap-x-{0-12} | .st-gap-y-{0-12}
  .st-flex | .st-inline-flex
  .st-flex-{row|col|row-reverse|col-reverse}
  .st-flex-{wrap|nowrap}
  .st-justify-{start|end|center|between|around|evenly}
  .st-items-{start|end|center|baseline|stretch}
  .st-flex-{1|auto|initial|none}

SPACING
  .st-p-{0-20} | .st-px-{0-20} | .st-py-{0-20}
  .st-pt|pr|pb|pl-{0-20}
  .st-m-{0-20} | .st-mx-{0-20} | .st-my-{0-20}
  .st-mt|mr|mb|ml-{0-20}
  .st-m-auto | .st-mx-auto

BORDERS
  .st-border | .st-border-{0|2|4|8}
  .st-border-{t|r|b|l|x|y}
  .st-border-{solid|dashed|dotted|none}
  .st-rounded-{none|sm|DEFAULT|md|lg|xl|full}
  .st-rounded-{t|b|l|r|tl|tr|bl|br}
  .st-divide-{y|x|y-2|x-2|none}

SIZING
  .st-w-{full|auto|screen|fit|min|max}
  .st-h-{full|auto|screen|fit}
  .st-max-w-{none|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full|prose}
  .st-min-h-{0|full|screen}
  .st-aspect-{auto|square|video}
  .st-object-{cover|contain|fill|none|scale-down}

DISPLAY
  .st-block | .st-inline-block | .st-inline | .st-hidden
  .st-invisible | .st-visible
  .st-overflow-{hidden|auto|scroll}
  .st-relative | .st-absolute | .st-fixed | .st-sticky

BUTTONS
  .st-btn
  .st-btn-{primary|secondary|accent|success|warning|danger|info|neutral}
  .st-btn-{outline|outline-primary|outline-danger|ghost}
  .st-btn-{xs|sm|lg|xl}
  .st-btn-{pill|square|full}
  .st-btn-group

FORMS
  .st-input | .st-input-{sm|lg}
  .st-input-{success|error}
  .st-label | .st-label-required
  .st-form-group | .st-form-inline
  .st-form-helper | .st-form-error
  .st-checkbox | .st-radio

SHADOWS
  .st-shadow-{none|xs|sm|DEFAULT|md|lg|xl}
  .st-shadow-{inner|primary|success|danger|warning}

OPACITY
  .st-opacity-{0|5|10|20|25|30|40|50|60|70|75|80|90|100}

Z-INDEX
  .st-z-{0|10|20|30|40|50|auto}
  .st-z-{dropdown|sticky|fixed|modal|tooltip}

CURSOR
  .st-cursor-{auto|default|pointer|wait|text|move|grab|grabbing|not-allowed|crosshair|zoom-in|zoom-out}

INTERACTION
  .st-pointer-events-{none|auto}
  .st-select-{none|text|all|auto}
  .st-scroll-{smooth|auto}

TRANSITIONS
  .st-transition-{none|all|fast|slow|colors|opacity|shadow|transform}

ANIMATIONS
  .st-animate-{fade-in|fade-out|slide-up|slide-down|scale-in|spin|pulse|bounce}

HOVER TRANSFORMS
  .st-hover-{lift|grow|shrink}

HOVER COLORS
  .st-hover-bg-{primary|secondary|accent|success|danger|warning|surface|elevated|transparent|white|black}
  .st-hover-text-{primary|secondary|accent|success|danger|warning|muted|white|black}
  .st-hover-border-{primary|secondary|danger|success|transparent}
  .st-hover-opacity-{50|75|100}

ACCESSIBILITY
  .st-sr-only | .st-not-sr-only
  .st-focus-ring | .st-focus-ring-danger | .st-focus-ring-inset
  .st-focus-within-ring
  .st-skip-link
  .st-motion-safe | .st-motion-reduce

PRINT
  .st-print-hidden | .st-print-only
  .st-print-break-{before|after}
  .st-print-break-inside-avoid

EASTER EGGS
  .st-party | .st-neon | .st-neon-green | .st-neon-pink
  .st-glass | .st-glass-dark
  .st-retro | .st-paper
  .st-shake | .st-hover-shake
  .st-float | .st-tilt | .st-tilt-reverse
  .st-typewriter | .st-heartbeat | .st-wiggle | .st-hover-wiggle
  .st-glitch | .st-zoom-wobble | .st-morph
  .st-gradient-text | .st-gradient-text-warm | .st-gradient-text-cool
  [data-streamertail="credits"]

SEMANTIC LAYOUTS
  .st-stack | .st-stack-sm | .st-stack-lg | .st-stack-xl
  .st-cluster | .st-cluster-sm | .st-cluster-lg
  .st-center | .st-center-narrow | .st-center-wide
  .st-auto-grid | .st-auto-grid-sm | .st-auto-grid-lg
  .st-with-sidebar
  .st-switcher
  .st-reel
  .st-cover | .st-cover-center
  .st-pancake
  .st-holy-grail
  .st-imposter | .st-imposter-fixed
  .st-frame | .st-frame-square
  .st-icon | .st-icon-sm | .st-icon-lg | .st-icon-xl

SEMANTIC COLORS
  .st-alert-{success|danger|warning|info|caution|neutral}
  .st-badge-{primary|secondary|accent|success|danger|warning|info|neutral}
  .st-badge-soft-{primary|secondary|success|danger|warning|info}
  .st-status-{online|offline|busy|away|dnd}
  .st-highlight | .st-highlight-{success|danger|info}
  .st-gradient-{primary|secondary|sunset|ocean|forest|midnight|surface}
  .st-surface-{raised|sunken|interactive}
  .st-divider | .st-divider-{strong|dashed|vertical}

SEMANTIC TYPOGRAPHY
  .st-prose | .st-prose-sm | .st-prose-lg
  .st-display-{1|2|3}
  .st-lead | .st-caption | .st-overline | .st-subtitle
  .st-kbd | .st-code
  .st-blockquote | .st-blockquote-accent
  .st-list-{none|disc|decimal|check}
  .st-label-text
  .st-tabular-nums | .st-proportional-nums | .st-oldstyle-nums
  .st-text-balance | .st-text-pretty
```

---

## Tips & Patterns

### Card Component (using surface)

```html
<div class="st-surface-interactive st-p-6">
  <h3 class="st-heading-4 st-mb-2">Card Title</h3>
  <p class="st-text-muted st-mb-4">Description text here.</p>
  <button class="st-btn st-btn-primary st-btn-sm">Learn More</button>
</div>
```

### Alert/Banner (using semantic alert)

```html
<!-- New way (single class): -->
<div class="st-alert-danger">Something went wrong.</div>

<!-- Manual way (composing utilities): -->
<div class="st-bg-danger-light st-text-danger st-p-4 st-rounded st-border st-border-danger">
  <strong>Error:</strong> Something went wrong.
</div>
```

### Responsive Navigation

```html
<nav class="st-flex st-justify-between st-items-center st-p-4 st-bg-surface st-shadow-sm">
  <a class="st-heading-5 st-text-primary st-text-no-underline">Brand</a>
  <div class="st-hidden st-md-flex st-gap-4">
    <a class="st-hover-text-primary st-transition-colors">Home</a>
    <a class="st-hover-text-primary st-transition-colors">About</a>
    <a class="st-hover-text-primary st-transition-colors">Contact</a>
  </div>
</nav>
```

### Hero Section

```html
<!-- Using semantic cover layout: -->
<section class="st-cover st-text-center">
  <div></div>
  <div class="st-cover-center st-center">
    <h1 class="st-display-1 st-gradient-text st-mb-4">Welcome to Streamertail</h1>
    <p class="st-lead st-mb-8">
      The lightweight CSS library that doesn't break your app.
    </p>
    <div class="st-cluster">
      <a class="st-btn st-btn-primary st-btn-lg">Get Started</a>
      <a class="st-btn st-btn-outline st-btn-lg">Documentation</a>
    </div>
  </div>
  <div></div>
</section>
```

### Two-Column Layout

```html
<!-- Using semantic sidebar layout: -->
<div class="st-with-sidebar st-container st-py-12">
  <aside class="st-p-4 st-surface-raised">Sidebar</aside>
  <main>Main content</main>
</div>

<!-- Or using grid: -->
<div class="st-grid st-grid-cols-1 st-lg-grid-cols-12 st-gap-8 st-container st-py-12">
  <aside class="st-lg-col-span-3 st-p-4 st-bg-surface st-rounded">Sidebar</aside>
  <main class="st-lg-col-span-9">Main content</main>
</div>
```

### Blog Post Layout

```html
<article class="st-center">
  <span class="st-overline">Tutorial</span>
  <h1 class="st-display-3">Building a Design System</h1>
  <p class="st-subtitle">A step-by-step guide for teams</p>
  <hr class="st-divider" />
  <div class="st-prose">
    <p class="st-lead">Design systems help teams work faster...</p>
    <h2>Getting Started</h2>
    <p>First, define your design tokens...</p>
  </div>
  <hr class="st-divider" />
  <div class="st-cluster">
    <span class="st-badge-soft-primary">Design</span>
    <span class="st-badge-soft-secondary">CSS</span>
    <span class="st-badge-soft-info">Tutorial</span>
  </div>
</article>
```

### Dashboard Card Grid

```html
<div class="st-auto-grid">
  <div class="st-surface-interactive st-p-6 st-stack-sm">
    <span class="st-overline">Revenue</span>
    <span class="st-display-3 st-tabular-nums">$12,450</span>
    <span class="st-badge-soft-success">↑ 12%</span>
  </div>
  <div class="st-surface-interactive st-p-6 st-stack-sm">
    <span class="st-overline">Users</span>
    <span class="st-display-3 st-tabular-nums">1,892</span>
    <span class="st-badge-soft-danger">↓ 3%</span>
  </div>
  <div class="st-surface-interactive st-p-6 st-stack-sm">
    <span class="st-overline">Status</span>
    <span class="st-display-3"><span class="st-status-online"></span> Healthy</span>
    <span class="st-badge-soft-info">All systems go</span>
  </div>
</div>
```

---

## Bundle Sizes

| Module | Uncompressed | Gzipped |
|--------|-------------|---------|
| `streamertail` (full) | ~224 KB | ~30 KB |
| `streamertail/core` | ~42 KB | ~6.6 KB |
| `streamertail/layouts` | ~92 KB | ~14 KB |
| `streamertail/colors` | ~17 KB | ~2.5 KB |
| `streamertail/animations` | ~8 KB | ~2.2 KB |

> Layouts is largest due to responsive spacing at all breakpoints. Only import what you need!

---

*Built with love. Explore the easter eggs. 🎉*
