# Component Architecture Skill

## Purpose

Define and enforce a reusable, scalable, maintainable component architecture for the Lions United Sports website.

The component architecture must support:

* Reusability
* Composition
* Single responsibility
* Data-driven rendering
* Accessibility
* Responsive behavior
* Maintainability
* Type safety
* Visual consistency
* Easy future expansion

The goal is to prevent duplicated UI, inconsistent styling, oversized components, and page-specific implementations of reusable patterns.

---

# 1. Core Architecture Principles

## 1.1 Reusability

Build components once and reuse them wherever the same visual or behavioral pattern appears.

If multiple pages use the same:

* Button
* Card
* Heading
* Section header
* Navigation item
* Form field
* CTA
* Gallery item
* Event item

they must use the same reusable component.

Do not duplicate the markup and styling.

---

## 1.2 Composition

Prefer composing smaller components together instead of creating large components that handle everything.

Good:

```tsx
<Section>
  <SectionHeader
    title="Our Sports"
    description="Explore our sports programs."
  />

  <SportsGrid sports={sports} />
</Section>
```

Avoid:

```tsx
<SportsSectionEverything />
```

where one component contains:

* Section layout
* Heading
* Cards
* Buttons
* Images
* Responsive logic
* Data
* Animations
* Navigation

---

## 1.3 Single Responsibility

Each component should have one clear responsibility.

For example:

```text
Button
```

handles button presentation and interaction.

```text
SportCard
```

handles presentation of one sport.

```text
SportsGrid
```

handles the layout of multiple sport cards.

```text
SportsSection
```

handles the complete section composition.

Do not make one component responsible for unrelated concerns.

---

## 1.4 Data-Driven Rendering

Repeated content must be represented as structured data.

Example:

```ts
export interface Sport {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}
```

Data:

```ts
export const sports: Sport[] = [
  {
    id: "football",
    title: "Football",
    description: "Professional football training and development.",
    image: "/images/sports/football.jpg",
    href: "/sports/football",
  },
  {
    id: "basketball",
    title: "Basketball",
    description: "Training programs for developing basketball players.",
    image: "/images/sports/basketball.jpg",
    href: "/sports/basketball",
  },
];
```

Component:

```tsx
<SportsGrid sports={sports} />
```

Do not duplicate card markup for each item.

---

## 1.5 Accessibility

Reusable components must be accessible by default.

Components must support:

* Semantic HTML
* Keyboard interaction
* Visible focus states
* Accessible labels
* Appropriate heading hierarchy
* Screen-reader compatibility
* Appropriate ARIA attributes when required
* Touch-friendly interaction

Accessibility must be built into the component rather than fixed separately on individual pages.

---

## 1.6 Responsive Behavior

Components must be designed to work across:

* Desktop
* Tablet
* Mobile

Do not rely on page-specific CSS hacks to make components responsive.

Responsive behavior belongs to the component when the behavior is intrinsic to that component.

---

## 1.7 Type Safety

Use strict TypeScript throughout the component system.

Never use:

```ts
any
```

Do not use loosely typed props.

Every component should have an intentional and understandable prop API.

---

# 2. Component Hierarchy

Use the following conceptual hierarchy:

```text
Primitives
    ↓
UI Components
    ↓
Navigation / Forms
    ↓
Content Components
    ↓
Section Components
    ↓
Page Composition
```

Components should generally depend on components below them in the hierarchy.

Avoid circular dependencies between component layers.

---

# 3. Component Layers

## 3.1 Primitives

Primitives are the smallest reusable building blocks.

Examples:

* Button
* Text
* Heading
* Container
* Image
* Icon
* Divider
* Link
* Stack
* Grid

These components should remain generic.

They should not contain Lions United Sports-specific business logic.

---

## 3.2 Button

The Button component should support the project's approved button variants.

Example:

```ts
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";
```

Possible sizes:

```ts
type ButtonSize =
  | "sm"
  | "md"
  | "lg";
```

The final variants must follow the approved design system.

Button states must include:

* Default
* Hover
* Active
* Focus
* Disabled
* Loading where applicable

Do not create separate components such as:

```text
PrimaryButton
SecondaryButton
HeroButton
CardButton
```

when they can be represented by variants of one reusable Button component.

---

# 4. Typography Components

Use reusable typography components when they provide meaningful consistency.

Examples:

```text
Heading
Text
Label
Eyebrow
```

Example:

```tsx
<Heading level={2} size="lg">
  Our Sports
</Heading>
```

Do not create:

```text
HomeHeading
SportsHeading
AboutHeading
ContactHeading
```

unless they have genuinely different behavior.

---

# 5. Container

Use a shared Container component for page content.

Example:

```tsx
<Container>
  {children}
</Container>
```

The Container should control:

* Maximum width
* Horizontal padding
* Responsive gutters

Do not create separate container implementations for each page.

---

# 6. Image Component

Create a consistent image abstraction where useful.

The component should support:

* Responsive sizing
* Aspect ratio
* Object positioning
* Lazy loading
* Priority loading where required
* Alt text
* Consistent image treatment

Hero images may require priority loading.

Below-the-fold images should generally use appropriate lazy loading.

Never distort images.

---

# 7. Icon Component

Icons should use a consistent icon system.

Do not mix unrelated icon libraries without a clear reason.

Icons must support:

* Accessible labeling where needed
* Decorative handling where appropriate
* Consistent sizing
* Consistent alignment

Avoid using icons purely as decoration when they reduce clarity.

---

# 8. Form Components

Form components should be reusable and accessible.

Examples:

* Input
* Textarea
* Select
* Checkbox
* Radio
* FormField
* SubmitButton
* ErrorMessage
* FieldLabel

---

## FormField

A reusable form field should be able to provide:

* Label
* Input
* Description
* Error message
* Required state

Example:

```tsx
<FormField
  label="Email"
  error={errors.email}
>
  <Input
    type="email"
    name="email"
  />
</FormField>
```

---

## Form States

Forms should support:

* Default
* Focus
* Filled
* Error
* Disabled
* Loading
* Success where applicable

Do not create visually inconsistent form controls across pages.

---

# 9. Navigation Components

Navigation components should be separated from page content.

Recommended components:

```text
Header
DesktopNavigation
MobileNavigation
NavigationItem
NavigationGroup
DropdownMenu
MobileMenu
Footer
FooterColumn
```

---

## Header

The Header is responsible for:

* Logo
* Primary navigation
* CTA
* Responsive navigation trigger
* Header states

It should not contain page-specific content.

---

## DesktopNavigation

Responsible for:

* Navigation links
* Dropdowns
* Active states
* Hover behavior

---

## MobileNavigation

Responsible for:

* Mobile menu
* Open/close behavior
* Nested navigation
* Mobile CTA

Mobile navigation should be treated as a dedicated interaction.

Do not simply hide desktop navigation and display the same markup without considering mobile usability.

---

# 10. Content Components

Content components represent reusable domain content.

Examples:

```text
SportCard
ProgramCard
EventCard
TeamCard
NewsCard
TestimonialCard
GalleryCard
StatisticCard
```

---

## SportCard

A SportCard may contain:

* Image
* Sport name
* Description
* CTA
* Optional metadata

Example:

```tsx
<SportCard
  title="Football"
  description="..."
  image="/images/sports/football.jpg"
  href="/sports/football"
/>
```

---

## ProgramCard

Used to display a sports program or training offering.

Possible content:

* Image
* Title
* Description
* Age group
* Schedule
* CTA

Only include fields required by the actual design.

---

## EventCard

Used for:

* Upcoming events
* Sports events
* Tournaments
* Activities

Possible fields:

```ts
interface Event {
  id: string;
  title: string;
  date: string;
  location?: string;
  image?: string;
  href: string;
}
```

---

## TeamCard

Used for:

* Teams
* Coaches
* Athletes

The component should be adapted to the approved design.

Do not add information simply because it could be useful.

---

## NewsCard

Used for:

* News
* Articles
* Updates

Keep the visual structure consistent.

---

## TestimonialCard

Used for:

* Testimonials
* Reviews
* Participant feedback

The component should support:

* Quote
* Person name
* Role or relationship
* Image where required

---

## GalleryCard

Used for sports imagery.

Support:

* Image
* Caption where required
* Link/modal behavior if applicable

---

## StatisticCard

Used for numerical achievements or organizational statistics.

Possible fields:

```ts
interface Statistic {
  id: string;
  value: string;
  label: string;
}
```

Do not create separate components for each statistic.

---

# 11. Section Components

Section components combine content components into complete page sections.

Examples:

```text
Hero
SectionHeader
SportsSection
ProgramsSection
EventsSection
TeamsSection
TestimonialsSection
GallerySection
StatsSection
CTASection
```

---

# 12. Hero Component

The Hero component should support the approved reference design.

Possible props:

```ts
interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  image?: string;
}
```

Do not create:

```text
HomeHero
AboutHero
SportsHero
ContactHero
```

unless their behavior or structure genuinely differs.

Prefer a reusable Hero with variants.

Example:

```tsx
<Hero
  variant="image"
  title="..."
  description="..."
  image="/images/hero/home.jpg"
/>
```

---

# 13. SectionHeader

Use a reusable SectionHeader for repeated heading patterns.

Example:

```tsx
<SectionHeader
  eyebrow="Our Programs"
  title="Develop Your Game"
  description="..."
/>
```

Support only the variations required by the approved design.

---

# 14. Section Components

A section should compose reusable components.

Example:

```tsx
<Section>
  <SectionHeader
    title="Our Sports"
    description="Explore our sports programs."
  />

  <SportsGrid sports={sports} />
</Section>
```

Avoid putting every card directly into the page component.

---

# 15. CTA Section

The CTA section should provide a reusable conversion pattern.

Possible content:

* Eyebrow
* Heading
* Description
* Primary action
* Secondary action
* Background image

Use variants when different visual treatments are required.

---

# 16. Page Architecture

Pages should primarily compose existing components.

Example:

```tsx
export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SportsSection />
        <ProgramsSection />
        <EventsSection />
        <GallerySection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
```

Pages should not contain large amounts of duplicated UI markup.

---

# 17. Reuse Rules

If two components share:

* Structure
* Behavior
* Styling

they should probably be one component.

Use:

* Props
* Variants
* Composition
* Data

to handle differences.

---

# 18. Component Variants

Use variants when the component has the same conceptual responsibility but requires different presentation.

Example:

```ts
type CardVariant =
  | "default"
  | "featured"
  | "horizontal";
```

Prefer:

```tsx
<Card variant="featured" />
```

over:

```text
FeaturedCard
```

when both components fundamentally represent the same concept.

---

# 19. When NOT to Reuse

Do not force unrelated components into a single abstraction.

If two components only look vaguely similar but have:

* Different responsibilities
* Different behaviors
* Different content structures
* Different accessibility requirements

they may remain separate.

Reuse should improve maintainability, not make the architecture harder to understand.

---

# 20. Component API Rules

Component props must be intentional.

Avoid passing large unrelated objects.

### Bad

```tsx
<Component data={everything} />
```

where `everything` contains unrelated application data.

### Better

```tsx
<Component
  title={title}
  description={description}
  image={image}
  href={href}
/>
```

when those are the actual required properties.

---

# 21. Avoid Excessive Prop Drilling

If deeply nested components require the same data, consider:

* Composition
* Context where appropriate
* Better component boundaries
* Data closer to where it is consumed

Do not introduce global state simply to avoid passing two or three props.

---

# 22. Data Layer

Keep repeated content outside presentation components.

Recommended structure:

```text
data/
├── sports.ts
├── programs.ts
├── events.ts
├── teams.ts
├── testimonials.ts
└── navigation.ts
```

Example:

```ts
export const sports: Sport[] = [
  {
    id: "football",
    title: "Football",
    description: "...",
    image: "/images/sports/football.jpg",
    href: "/sports/football",
  },
];
```

Components should consume this data.

---

# 23. Navigation Data

Navigation should preferably be represented as structured data.

Example:

```ts
interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
}
```

This allows desktop and mobile navigation to share the same navigation source.

Do not duplicate navigation definitions between desktop and mobile.

---

# 24. Styling Rules

Use the centralized design system.

Do not introduce arbitrary:

* Colors
* Spacing
* Font sizes
* Border radius
* Shadows
* Breakpoints

inside individual components.

If a new visual value is genuinely required:

1. Check whether an existing token can be used.
2. If not, update the design system.
3. Then use the new token.

Do not silently create one-off values.

---

# 25. Responsive Rules

Each reusable component must define how it behaves across:

* Desktop
* Tablet
* Mobile

Examples:

### Card Grid

Desktop:

```text
4 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

The exact layout must follow the approved design.

---

# 26. Component State Rules

Interactive components should support appropriate states.

Common states:

* Default
* Hover
* Focus
* Active
* Selected
* Disabled
* Loading
* Error
* Success
* Open
* Closed

Do not implement only the default state when the component is interactive.

---

# 27. Accessibility Rules

Every interactive component must support keyboard navigation.

Examples:

Buttons:

* Enter
* Space
* Focus

Dropdowns:

* Keyboard navigation
* Escape to close where appropriate
* Correct focus behavior

Dialogs:

* Focus management
* Escape handling
* Accessible labeling

Forms:

* Labels
* Error association
* Required state
* Keyboard navigation

---

# 28. Semantic HTML

Use the correct HTML element.

Prefer:

```html
<button>
```

for actions.

Prefer:

```html
<a>
```

for navigation.

Prefer:

```html
<nav>
```

for navigation.

Prefer:

```html
<header>
<main>
<section>
<article>
<footer>
```

where semantically appropriate.

Do not use `<div>` for everything.

---

# 29. Component Naming

Use clear, descriptive names.

Good:

```text
SportCard
EventCard
SectionHeader
MobileNavigation
ContactForm
```

Avoid:

```text
Box
Thing
ContentBlock
Card2
NewSection
ComponentA
```

---

# 30. File Naming

Use consistent naming.

Example:

```text
components/
├── ui/
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── Heading.tsx
│   └── Input.tsx
│
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
│
├── cards/
│   ├── SportCard.tsx
│   ├── EventCard.tsx
│   └── TeamCard.tsx
│
└── sections/
    ├── Hero.tsx
    ├── SportsSection.tsx
    └── CTASection.tsx
```

Follow the conventions already established by the project if they differ.

---

# 31. Component Size

Avoid giant components.

If a component becomes difficult to understand because it contains:

* Multiple unrelated sections
* Complex state
* Large repeated markup
* Multiple responsibilities

consider splitting it.

However, do not split components merely to make files smaller.

The goal is meaningful boundaries, not maximum fragmentation.

---

# 32. Page Components

Page components should primarily coordinate sections.

Avoid:

```tsx
export default function Home() {
  // hundreds of lines of markup
}
```

Prefer:

```tsx
export default function Home() {
  return (
    <>
      <Hero />
      <SportsSection />
      <ProgramsSection />
      <EventsSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
```

---

# 33. Business Logic

Keep business logic out of presentational components whenever possible.

Avoid putting:

* API calls
* Data transformation
* Complex business rules
* Authentication logic

inside simple UI components.

Separate concerns appropriately.

---

# 34. API and Data Fetching

If a component requires external data:

* Keep fetching logic separate where practical.
* Define proper response types.
* Handle loading states.
* Handle empty states.
* Handle errors.

Do not make presentational components responsible for the entire data layer unless there is a clear reason.

---

# 35. Error and Empty States

Reusable components that depend on data should have appropriate empty/error states where required.

Examples:

```text
Loading
No events found
No gallery images
Unable to load programs
```

Do not leave broken or blank UI.

---

# 36. Testing Considerations

Reusable components should be easy to test.

Prioritize testing for:

* Rendering
* User interaction
* Accessibility
* Variants
* Responsive behavior where applicable
* Error states
* Form validation

Do not make components unnecessarily coupled to page-specific implementation details.

---

# 37. Performance

Reusable components must not introduce unnecessary performance costs.

Avoid:

* Unnecessary client components
* Unnecessary state
* Unnecessary effects
* Large client-side dependencies
* Repeated expensive calculations

Prefer server-rendered components where appropriate in Next.js.

Use client components only when interactivity requires them.

---

# 38. Server vs Client Components

For Next.js App Router:

Prefer Server Components by default.

Use `"use client"` only when required for:

* State
* Event handlers
* Browser APIs
* Interactive UI
* Client-side effects

Do not mark entire page trees as client components unnecessarily.

---

# 39. No Generic "Universal Component"

Do not create components such as:

```text
UniversalCard
UniversalSection
UniversalContent
UniversalComponent
```

unless the abstraction has a clear and meaningful purpose.

Generic abstractions often make the code harder to maintain.

---

# 40. Avoid Unnecessary Abstraction

Do not create an abstraction for something that is used once and has no meaningful reusable behavior.

Create abstractions when they provide:

* Reuse
* Consistency
* Clear responsibility
* Meaningful composition

---

# 41. Avoid Repeated Markup

Do not copy and paste the same markup.

Bad:

```tsx
<div className="sport-card">
  ...
</div>

<div className="sport-card">
  ...
</div>

<div className="sport-card">
  ...
</div>
```

Prefer:

```tsx
{sports.map((sport) => (
  <SportCard
    key={sport.id}
    {...sport}
  />
))}
```

---

# 42. Avoid Page-Specific Styling Hacks

Do not solve layout problems with arbitrary:

```css
margin-top: 137px;
```

or similar hacks.

First inspect:

* Container
* Grid
* Flex alignment
* Spacing tokens
* Typography
* Component structure

Fix the actual layout problem.

---

# 43. Design System Integration

Every component must use the approved design system.

The component architecture must consume:

* Color tokens
* Typography tokens
* Spacing tokens
* Radius tokens
* Shadow tokens
* Breakpoint tokens

Do not create a separate visual system inside individual components.

---

# 44. Image Asset Integration

Images must come from the approved project asset mapping.

Example:

```ts
const sports = [
  {
    id: "football",
    image: "/images/sports/football.jpg",
  },
];
```

Do not place random external image URLs inside components.

If an image is assigned to a specific section, use that image.

---

# 45. Final Component Checklist

Before considering a component complete, verify:

### Architecture

* [ ] Single responsibility
* [ ] Reusable where appropriate
* [ ] Proper component boundary
* [ ] No unnecessary abstraction

### TypeScript

* [ ] Strict typing
* [ ] No `any`
* [ ] Intentional props
* [ ] Clear interfaces/types

### Design

* [ ] Uses design tokens
* [ ] Matches approved design
* [ ] Consistent states
* [ ] Correct spacing
* [ ] Correct typography

### Responsive

* [ ] Desktop
* [ ] Tablet
* [ ] Mobile
* [ ] No overflow
* [ ] Appropriate layout changes

### Accessibility

* [ ] Semantic HTML
* [ ] Keyboard support
* [ ] Focus state
* [ ] Accessible labels
* [ ] Appropriate ARIA

### Performance

* [ ] No unnecessary client component
* [ ] No unnecessary state
* [ ] No unnecessary effects
* [ ] Images optimized

### Maintainability

* [ ] No duplicated markup
* [ ] No page-specific hacks
* [ ] Clear naming
* [ ] Clear file structure
* [ ] Easy to extend
