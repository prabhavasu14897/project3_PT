# Prototype Rules

## Purpose

These rules govern how Impeccable and Claude should translate the reference website into the final product.

---

# Rule 1 — Reference First

Always consider the reference website before inventing a new visual pattern.

Reference:

https://lionsunitedsports.com/home

---

# Rule 2 — Design Before Implementation

Do not jump directly into code when the design is not established.

The visual system should be understood before implementation.

---

# Rule 3 — Preserve Visual Hierarchy

Maintain the reference's hierarchy between:

- Hero
- Section headings
- Supporting text
- Cards
- CTAs
- Supporting content

Do not flatten the hierarchy.

---

# Rule 4 — Reuse Components

If the same pattern appears multiple times, create one reusable component.

Example:

Instead of:

```text
FootballCard
BasketballCard
CricketCard
when they share the same structure, prefer:

SportCard

with data-driven content.

Rule 5 — Do Not Over-Componentize

Not every <div> requires a component.

Create components when they provide:

Reuse
Clear responsibility
Better maintainability
Meaningful abstraction
Rule 6 — Data Driven Content

Repeated content should be data-driven.

Example:

const sports = [
  {
    title: "Football",
    image: "/images/sports/football.jpg",
    description: "..."
  }
];
Rule 7 — Responsive By Design

Every component must consider:

Desktop
Tablet
Mobile

Do not implement desktop first and ignore mobile until the end.

Rule 8 — Image Integrity

Never stretch images.

Use appropriate:

aspect ratios
object-fit
object-position
responsive cropping

Preserve important visual subjects.

Rule 9 — Accessibility

Every interactive element must be usable with keyboard and assistive technology.

Do not sacrifice accessibility to reproduce a visual effect.

Rule 10 — Interaction Consistency

Similar interactions should behave similarly throughout the site.

For example:

All primary buttons should have consistent:

hover
focus
active
disabled

behavior.

Rule 11 — Avoid Generic AI Design

Do not automatically add:

gradients
glass cards
excessive shadows
giant rounded cards
floating blobs
unnecessary icons
excessive animations

Only use these if supported by the reference/design.

Rule 12 — Content Density

Maintain the reference's content density.

Avoid:

huge empty spaces
overcrowded sections
extremely long paragraphs
excessive cards
Rule 13 — Mobile Navigation

Mobile navigation must be treated as a dedicated interaction.

It should not merely be a collapsed desktop navigation.

Rule 14 — Loading and Error States

Where functionality requires asynchronous operations, provide:

Loading state
Empty state
Error state
Success state where appropriate
Rule 15 — No Fake Functionality

Do not create interactions that appear functional but do nothing.

If backend functionality is unavailable, clearly separate frontend prototype behavior from production functionality.

Rule 16 — Consistency Over Novelty

When uncertain:

Choose the option that is most consistent with the existing design system.

Do not introduce novelty simply to make a section look different.

Rule 17 — Preserve the Approved Design

Once the design has been approved, Claude must implement it faithfully.

Do not redesign during implementation.

If something appears incorrect:

Check the approved design.
Check the design system.
Check the reference.
Correct the implementation.

Rule 18 — Small Iterative Changes

Implement page-by-page and component-by-component.

After each major section:

Check layout
Check responsive behavior
Check spacing
Check typography
Check imagery
Check interactions

Do not build the entire website blindly and review only at the end.