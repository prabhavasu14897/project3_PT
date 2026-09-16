# Visual Implementation Skill

## Purpose

Translate the approved visual design into a high-fidelity frontend implementation.

This skill defines how the approved design system, layouts, imagery, typography, responsive behavior, and interactions must be translated into production frontend code.

The implementation should reproduce the approved visual direction accurately while remaining maintainable, accessible, responsive, and performant.

---

# 1. Primary Rule

The implementation must match the approved design.

**Do not redesign while coding.**

The approved design from Impeccable and the values documented in `.impeccable/context/design-system.md` are the source of truth for visual implementation.

Claude Code should implement the approved direction rather than introducing its own visual interpretation.

If an implementation decision is unclear:

1. Check `design-system.md`.
2. Check `project-overview.md`.
3. Check `prototype-rules.md`.
4. Check the approved reference/design direction.
5. Choose the option that preserves the established visual language.
6. Do not introduce a new visual pattern without justification.

---

# 2. Design Authority

The workflow is:

```text
Reference Website
       ↓
Impeccable Analysis
       ↓
Approved Design Direction
       ↓
Design System
       ↓
Claude Implementation
       ↓
Visual Validation
```

Impeccable establishes and refines the visual direction.

Claude implements that direction.

Claude must not independently redesign the interface during implementation.

---

# 3. Visual Fidelity

Pay close attention to all visual details.

Inspect:

* Typography
* Font family
* Font weight
* Font size
* Line height
* Letter spacing
* Text wrapping
* Color
* Contrast
* Spacing
* Alignment
* Container width
* Section width
* Section height
* Image crop
* Image positioning
* Card dimensions
* Button dimensions
* Border radius
* Borders
* Shadows
* Overlays
* Background treatment
* Icon size
* Icon alignment
* Navigation spacing
* CTA positioning

Small visual inconsistencies should be corrected rather than accepted as "close enough."

---

# 4. Reference Fidelity

The reference website should be treated as a visual reference, not merely a source of text.

When implementing a reference-based design, inspect:

* Overall composition
* Header structure
* Navigation
* Hero composition
* Typography hierarchy
* Section ordering
* Section spacing
* Card layouts
* Image treatment
* CTA placement
* Footer structure
* Mobile behavior
* Interaction patterns
* Visual density

Do not reproduce implementation-specific code from the reference.

Recreate the visual result using clean, maintainable project architecture.

---

# 5. Design Tokens

All visual values must come from the centralized design system.

Use the tokens defined in:

```text
.impeccable/context/design-system.md
```

This includes:

* Colors
* Typography
* Spacing
* Breakpoints
* Border radius
* Shadows
* Container widths
* Component dimensions
* Motion values

Do not randomly introduce new visual values inside components.

---

# 6. No Arbitrary Visual Values

Avoid one-off values such as:

```css
margin-top: 137px;
```

```css
font-size: 19px;
```

```css
border-radius: 17px;
```

```css
color: #123456;
```

unless the value is explicitly part of the approved design system.

If a new value is genuinely required:

1. Check existing design tokens.
2. Determine whether an existing token can be reused.
3. If a new token is necessary, document it in the design system.
4. Use the centralized token afterward.

Do not silently create isolated design values.

---

# 7. Layout

Use a consistent layout system throughout the application.

Prefer:

* Flexbox
* CSS Grid
* Gap
* Padding
* Max-width
* Min-height
* Responsive breakpoints
* Alignment utilities
* Container components

Avoid using arbitrary margins to force alignment.

---

# 8. Container System

Pages should use the shared container system.

The container should control:

* Maximum content width
* Horizontal gutters
* Responsive padding
* Content alignment

Do not create independent container widths for individual sections unless explicitly required by the approved design.

Example:

```tsx
<Container>
  <SectionContent />
</Container>
```

---

# 9. Section Layout

Sections should have intentional:

* Vertical spacing
* Horizontal spacing
* Content width
* Alignment
* Background treatment
* Image relationship

Do not give every section the same height or spacing automatically.

The spacing should follow the visual hierarchy established by the design.

---

# 10. Typography

Typography must use the centralized typography tokens.

Do not randomly change font sizes from component to component.

Pay close attention to:

* Font family
* Font weight
* Font size
* Line height
* Letter spacing
* Heading wrapping
* Paragraph width
* Text density
* Vertical rhythm

---

# 11. Typography Hierarchy

Maintain a clear hierarchy between:

* Display text
* Page titles
* Section headings
* Subheadings
* Body text
* Supporting text
* Labels
* Navigation
* Buttons
* Captions

Do not make headings unnecessarily large simply to create visual impact.

The typography should reflect the approved design.

---

# 12. Heading Wrapping

Heading wrapping is part of the visual design.

When a heading wraps differently from the approved design, inspect:

* Font family
* Font weight
* Font size
* Line height
* Letter spacing
* Maximum width
* Container width

Do not immediately add manual `<br />` elements.

Use manual line breaks only when the design intentionally requires a controlled line break.

---

# 13. Text Width

Avoid overly wide paragraphs.

Use appropriate:

* `max-width`
* Container width
* Typography tokens

to preserve readable line lengths.

Large text blocks should not stretch unnecessarily across the entire viewport.

---

# 14. Images

Use approved image assets.

Do not replace approved images with random images.

For every image:

* Preserve aspect ratio
* Use appropriate `object-fit`
* Use appropriate `object-position`
* Optimize loading
* Provide meaningful alt text
* Avoid distortion
* Maintain intentional cropping
* Use responsive sizing

---

# 15. Image Treatment

Image treatment is part of the visual design.

Respect:

* Crop
* Aspect ratio
* Position
* Overlay
* Border radius
* Masking
* Brightness
* Contrast
* Focal point

If an image is used as a hero background, ensure the important visual subject remains visible across breakpoints.

---

# 16. Image Performance

Use appropriate image optimization.

For Next.js:

* Prefer `next/image` where appropriate.
* Define appropriate dimensions or responsive sizing.
* Use priority loading for critical above-the-fold imagery when necessary.
* Lazy-load below-the-fold imagery.
* Avoid unnecessarily large source images.
* Use modern image formats where appropriate.

Do not sacrifice page performance for visual fidelity.

---

# 17. Image Alt Text

Every meaningful image must have useful alternative text.

Decorative images should be treated as decorative where appropriate.

Do not use meaningless alt text such as:

```text
image
photo
picture
sports image
```

Use descriptions that communicate the image's purpose or content.

---

# 18. Responsive Implementation

The design must work across:

### Desktop

```text
1440px
1280px
1024px
```

### Tablet

```text
834px
768px
```

### Mobile

```text
390px
375px
360px
```

These widths should be used during visual validation.

---

# 19. Responsive Design Rules

Do not simply scale the desktop layout down.

When moving between breakpoints, evaluate:

* Grid columns
* Typography
* Spacing
* Image positioning
* Image crop
* Navigation
* CTA layout
* Card dimensions
* Content order
* Section spacing
* Button sizing
* Text width

Responsive design should intentionally adapt the interface to the available space.

---

# 20. Responsive Navigation

Desktop and mobile navigation should not be treated as identical layouts.

Desktop may use:

* Horizontal navigation
* Dropdown menus
* Header CTA
* Expanded navigation groups

Mobile may require:

* Menu trigger
* Drawer
* Full-screen navigation
* Accordion navigation
* Stacked CTA

Follow the approved design.

Do not simply hide desktop navigation without implementing an appropriate mobile interaction.

---

# 21. Responsive Cards

Cards must adapt appropriately.

Possible behavior:

```text
Desktop
4 columns

Tablet
2 columns

Mobile
1 column
```

However, the exact number of columns must follow the approved design.

Also consider:

* Image ratio
* Text wrapping
* Card height
* CTA position
* Internal padding
* Gap

---

# 22. Responsive Hero

Hero sections require special attention.

Check:

* Hero height
* Image crop
* Text width
* Heading wrapping
* CTA arrangement
* Overlay readability
* Focal point
* Mobile composition

Do not simply reduce the desktop hero height on mobile.

The mobile hero may require a different composition.

---

# 23. Interaction States

Implement all approved interaction states.

Common states include:

* Default
* Hover
* Focus
* Active
* Selected
* Disabled
* Loading
* Open
* Closed
* Error
* Success

Interactive elements must not only look correct in their default state.

---

# 24. Hover States

Hover states should be subtle and intentional.

Examples:

* Color change
* Border change
* Background change
* Small transform
* Image treatment
* Underline
* Shadow adjustment

Do not introduce dramatic hover animations unless supported by the approved design.

---

# 25. Focus States

Focus states must be clearly visible.

Do not remove browser focus indicators without replacing them with an accessible custom focus treatment.

Focus styling should remain consistent across:

* Buttons
* Links
* Inputs
* Selects
* Navigation
* Interactive cards
* Menu controls

---

# 26. Active and Selected States

Interactive navigation and controls must clearly communicate their active or selected state.

Examples:

* Active navigation item
* Selected filter
* Open menu
* Selected tab
* Selected card

Use the design system's approved visual treatment.

---

# 27. Disabled States

Disabled controls must clearly appear unavailable.

Do not rely only on color to communicate disabled state.

Ensure:

* Appropriate visual treatment
* Correct semantic state
* No unintended interaction

---

# 28. Animation

Use subtle animation.

Preferred duration:

```text
approximately 150–400ms
```

Use animation to communicate:

* State changes
* Navigation
* Visibility changes
* Interaction feedback
* Content transitions

Do not animate simply because animation is possible.

---

# 29. Animation Rules

Avoid:

* Long delays
* Excessive movement
* Distracting effects
* Continuous unnecessary animation
* Animation that blocks interaction
* Large decorative animations unsupported by the design

Animation should enhance usability rather than delay it.

---

# 30. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Users who prefer reduced motion should not be forced to experience unnecessary animation.

Where appropriate:

* Remove decorative animation
* Reduce transition duration
* Disable movement
* Preserve usability and state communication

---

# 31. Pixel Accuracy

When comparing implementation against the approved design, inspect:

* Horizontal alignment
* Vertical alignment
* Section height
* Container width
* Padding
* Gaps
* Typography
* Image cropping
* Button size
* Card dimensions
* Border radius
* Shadows
* Navigation spacing
* CTA placement

Do not assume "close enough" when obvious differences exist.

---

# 32. Visual Validation Process

After implementing a major section:

1. Render the page.
2. Compare against the approved design.
3. Identify visible differences.
4. Determine the root cause.
5. Correct the implementation.
6. Re-check responsive behavior.
7. Continue to the next section.

Do not wait until the entire website is finished before performing visual validation.

---

# 33. Root-Cause Fixing

When something looks wrong, do not immediately add a CSS override.

First inspect:

* Component structure
* Container width
* Grid configuration
* Flex alignment
* Spacing token
* Typography token
* Image sizing
* Breakpoint behavior

Fix the underlying problem.

Avoid accumulating override layers.

---

# 34. Accessibility

Visual implementation must maintain:

* Focus visibility
* Sufficient contrast
* Semantic markup
* Keyboard navigation
* Touch-friendly controls
* Accessible labels
* Meaningful alt text
* Proper heading hierarchy
* Reduced-motion support

Visual fidelity must never be achieved by removing accessibility.

---

# 35. Semantic HTML

Use semantic HTML wherever appropriate.

Prefer:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Use:

```html
<button>
```

for actions.

Use:

```html
<a>
```

for navigation.

Do not use clickable `<div>` elements when a semantic interactive element is appropriate.

---

# 36. Touch Targets

Interactive elements must be comfortable to use on touch devices.

Pay attention to:

* Button size
* Navigation controls
* Menu triggers
* Links
* Form controls
* Gallery controls

Do not make mobile controls unnecessarily small.

---

# 37. Color Accuracy

Use the approved color tokens.

Do not introduce:

* Random gradients
* Random accent colors
* Random background colors
* Random text colors
* Unapproved opacity values

unless they are part of the approved design.

---

# 38. Shadows and Effects

Use shadows and visual effects intentionally.

Avoid excessive:

* Drop shadows
* Glow effects
* Blur
* Glassmorphism
* Gradients
* Decorative overlays

The implementation should remain faithful to the approved visual direction.

---

# 39. Border Radius

Use the approved radius tokens.

Do not make every element heavily rounded.

Apply radius based on the component's role and the design system.

---

# 40. Icons

Use the approved icon system.

Maintain consistency in:

* Icon family
* Stroke weight
* Size
* Alignment
* Color
* Spacing

Do not mix unrelated icon styles.

---

# 41. Component Consistency

Components that represent the same concept must look and behave consistently.

For example:

All primary buttons should share:

* Typography
* Height
* Padding
* Radius
* Color
* Hover behavior
* Focus behavior

All standard cards should follow the approved card system unless an explicit variant exists.

---

# 42. Design System Changes

If implementation reveals that the design system is missing a required token:

Do not create a local one-off value.

Instead:

1. Identify the missing design decision.
2. Determine the appropriate token.
3. Update `design-system.md`.
4. Use that token consistently.

This keeps the design system and implementation synchronized.

---

# 43. Content Fidelity

Content affects visual fidelity.

Do not replace approved content with:

* Lorem ipsum
* Random text
* Excessively long placeholder copy
* Artificially short content

Use realistic content with similar:

* Length
* Tone
* Density
* Hierarchy

to the approved design.

---

# 44. Content Wrapping

When validating visual fidelity, check how realistic content behaves.

Inspect:

* Heading wrapping
* Paragraph height
* Card title wrapping
* Button text width
* Navigation item width
* Form label wrapping

Do not artificially truncate content just to make a layout fit unless truncation is part of the approved design.

---

# 45. Performance

Do not achieve visual fidelity by sacrificing performance.

Optimize:

### Images

* Dimensions
* Compression
* Loading strategy
* Responsive sources

### Fonts

* Required weights only
* Appropriate loading strategy
* Avoid unnecessary font files

### Animations

* Avoid expensive continuous animations
* Prefer performant CSS transitions

### JavaScript

* Minimize client-side JavaScript
* Avoid unnecessary state
* Avoid unnecessary effects

### Rendering

* Prefer Server Components where appropriate
* Avoid unnecessary client rendering
* Keep component trees efficient

---

# 46. Next.js Implementation

For Next.js App Router:

Prefer Server Components by default.

Use `"use client"` only when required for:

* React state
* Event handlers
* Browser APIs
* Client-side effects
* Interactive components

Do not mark an entire page as a Client Component simply because one child component requires interactivity.

Keep interactive behavior as close to the interactive component as practical.

---

# 47. Avoid Unnecessary JavaScript

Do not use JavaScript for problems that can be solved with CSS.

Prefer CSS for:

* Layout
* Responsive behavior
* Hover states
* Simple transitions
* Visibility
* Grid
* Flexbox

Use JavaScript when actual behavior requires it.

---

# 48. Avoid Page-Specific Hacks

Do not create CSS hacks that only solve one page's layout.

Avoid:

```css
.home-page .special-card {
  margin-top: 137px;
}
```

unless the design explicitly requires a unique composition.

Prefer reusable component variants or proper layout structures.

---

# 49. Avoid Visual Drift

Visual drift occurs when different pages gradually introduce different:

* Fonts
* Colors
* Spacing
* Buttons
* Cards
* Section layouts
* Navigation patterns

Prevent visual drift by always using:

* Shared components
* Shared tokens
* Shared layout primitives
* Approved variants

---

# 50. Implementation Order

When implementing a page, generally work in this order:

```text
1. Page structure
2. Container
3. Header/navigation
4. Hero
5. Section layout
6. Typography
7. Images
8. Components
9. Responsive behavior
10. Interaction states
11. Animation
12. Accessibility
13. Performance
14. Visual validation
```

Do not polish animations before the basic layout is accurate.

---

# 51. Visual Comparison Checklist

For every major page, compare:

### Structure

* [ ] Correct section order
* [ ] Correct content hierarchy
* [ ] Correct container width
* [ ] Correct section proportions

### Typography

* [ ] Correct font family
* [ ] Correct font weight
* [ ] Correct font size
* [ ] Correct line height
* [ ] Correct letter spacing
* [ ] Correct wrapping

### Spacing

* [ ] Correct section spacing
* [ ] Correct component spacing
* [ ] Correct padding
* [ ] Correct grid gaps
* [ ] Correct mobile spacing

### Images

* [ ] Correct asset
* [ ] Correct aspect ratio
* [ ] Correct crop
* [ ] Correct object position
* [ ] Correct loading behavior
* [ ] Correct alt text

### Components

* [ ] Correct card dimensions
* [ ] Correct button dimensions
* [ ] Correct radius
* [ ] Correct borders
* [ ] Correct shadows

### Responsive

* [ ] 1440px
* [ ] 1280px
* [ ] 1024px
* [ ] 834px
* [ ] 768px
* [ ] 390px
* [ ] 375px
* [ ] 360px

### Interaction

* [ ] Hover
* [ ] Focus
* [ ] Active
* [ ] Selected
* [ ] Open
* [ ] Closed
* [ ] Disabled
* [ ] Loading where required

### Accessibility

* [ ] Keyboard navigation
* [ ] Focus visibility
* [ ] Semantic HTML
* [ ] Accessible labels
* [ ] Contrast
* [ ] Touch targets
* [ ] Reduced motion

### Performance

* [ ] Images optimized
* [ ] Fonts optimized
* [ ] Minimal client JavaScript
* [ ] No unnecessary effects
* [ ] No unnecessary client components

---

# 52. Final Review

Before declaring a page complete:

1. Compare it against the approved design.
2. Check desktop layouts.
3. Check tablet layouts.
4. Check mobile layouts.
5. Check typography.
6. Check spacing.
7. Check imagery.
8. Check navigation.
9. Check buttons and CTAs.
10. Check interaction states.
11. Check accessibility.
12. Check performance.
13. Fix visible inconsistencies.
14. Re-test after fixes.

A page is not complete simply because it renders without errors.

It is complete when the implementation is visually faithful, responsive, accessible, functional, and maintainable.

---

# 53. Important Design-System Rule

Do **not** place exact colors, fonts, spacing values, radii, shadows, or other design tokens in this skill file unless they are universal implementation rules.

The correct workflow is:

```text
Reference
    ↓
Impeccable analyzes and refines
    ↓
Final design direction
    ↓
design-system.md
    ↓
Claude implements
```

Therefore:

* `visual-implementation.md` defines **how to implement** the design.
* `design-system.md` defines **what the final design values are**.

For example, this file may say:

```text
Use the approved primary color.
```

while `design-system.md` defines the actual color value.

This separation prevents visual rules from becoming duplicated or inconsistent.

---

# 54. Source of Truth Priority

When making an implementation decision, use this priority:

```text
1. Explicit project requirements
2. Approved Impeccable design
3. design-system.md
4. prototype-rules.md
5. project-overview.md
6. Reference website
7. General frontend conventions
```

If a lower-priority source conflicts with an approved design decision, follow the higher-priority source.

---

# 55. Final Implementation Principle

The implementation should feel like the approved design was intentionally built as a coherent system.

It should not feel like:

* Separate pages designed independently
* Random components assembled together
* A generic AI-generated template
* A collection of CSS patches
* A collection of unrelated visual styles

The final result should demonstrate:

* Visual fidelity
* Consistency
* Reusability
* Responsive behavior
* Accessibility
* Performance
* Maintainability

**Implement the design. Do not redesign it while implementing.**
