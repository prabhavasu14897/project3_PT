# Design System

## Source

The design system is based primarily on the visual language of:

https://lionsunitedsports.com/home

The final values should be refined during the Impeccable design process.

---

# Design Philosophy

The visual system should communicate:

- Athletic energy
- Confidence
- Movement
- Professionalism
- Competition
- Community
- Youth and development

The design should have strong visual hierarchy without becoming visually chaotic.

---

# Color System

Use semantic color tokens.

Required tokens:

- background
- background-secondary
- surface
- surface-secondary
- primary
- primary-hover
- secondary
- accent
- text-primary
- text-secondary
- text-muted
- border
- overlay
- success
- warning
- error

Do not scatter arbitrary hex values throughout the implementation.

Prefer centralized design tokens.

---

# Color Selection

Colors must be derived from the reference website.

When extracting colors:

1. Identify dominant background colors.
2. Identify brand/accent colors.
3. Identify text colors.
4. Identify secondary surfaces.
5. Identify borders.
6. Identify CTA colors.

Avoid introducing colors that do not belong to the established visual language.

---

# Typography

Use a professional modern typeface that closely matches the reference.

Define:

- Display
- H1
- H2
- H3
- H4
- Body Large
- Body
- Body Small
- Caption
- Label
- Navigation
- Button

Each typography level must define:

- Font family
- Font size
- Font weight
- Line height
- Letter spacing

---

# Typography Hierarchy

Headings should have strong visual presence.

Body text should remain readable.

Avoid:

- Excessive font sizes
- Very thin text
- Excessive letter spacing
- Long text lines
- Too many font families

---

# Spacing

Use a consistent spacing scale.

Preferred base unit:

4px

Example:

4
8
12
16
24
32
48
64
80
96
120

Use spacing tokens consistently.

Avoid arbitrary values unless necessary.

---

# Layout

Use a consistent content container.

Recommended starting range:

1200–1280px maximum width.

Desktop page gutters:

24–64px depending on viewport.

Mobile page gutters:

16–20px.

These values should be refined based on the reference.

---

# Border Radius

Define a limited radius system:

- sm
- md
- lg
- xl
- full

Avoid excessive rounding.

Sports-oriented interfaces should generally feel structured and confident rather than overly soft.

---

# Buttons

Provide:

### Primary

Main conversion/action.

### Secondary

Supporting action.

### Ghost

Low-emphasis action.

Each must support:

- Default
- Hover
- Active
- Focus
- Disabled

---

# Cards

Cards should be visually consistent.

Define:

- Background
- Border
- Radius
- Padding
- Image ratio
- Title
- Description
- CTA
- Hover behavior

Avoid making every section into a card.

Use cards only where grouping information improves usability.

---

# Images

Images are a major part of the visual identity.

Use:

- High-quality sports imagery
- Strong compositions
- Consistent aspect ratios
- Intentional cropping
- Responsive positioning

Never distort images.

Use overlays only where necessary for contrast/readability.

---

# Hero Sections

Hero sections should establish:

- Strong visual identity
- Clear page purpose
- Strong headline
- Supporting copy
- Primary CTA
- Appropriate imagery

Hero composition should follow the reference.

---

# Motion

Use motion sparingly.

Appropriate:

- Fade
- Slide
- Scale
- Hover transitions
- Menu transitions
- Scroll reveal

Avoid:

- Constant movement
- Excessive parallax
- Distracting effects
- Long animations

Respect:

`prefers-reduced-motion`

---

# Accessibility

Maintain:

- WCAG-aware contrast
- Visible focus states
- Keyboard navigation
- Accessible controls
- Readable text
- Proper heading hierarchy
- Meaningful alt text

Accessibility must not be sacrificed for visual similarity.