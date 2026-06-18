# Component Guidelines

## Component philosophy

Components should be simple, composable, accessible, and easy to adapt across marketing and product surfaces.

Each component should define:

- Purpose
- Anatomy
- States
- Accessibility requirements
- Content guidance
- Responsive behavior

## Core components to build first

### Button

Purpose: Move users into a clear next action.

Variants:

- Primary
- Secondary
- Tertiary / text
- Destructive, only when needed

States:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading

Accessibility:

- Minimum touch target: 44px height
- Visible focus state
- Button text must describe the action

### Card

Purpose: Group related content and make scanning easier.

Variants:

- Basic content card
- Program / product card
- Testimonial card
- Stat card

Guidance:

- Keep one primary action per card.
- Avoid stacking too many visual treatments.
- Use consistent padding and radius tokens.

### Form field

Purpose: Capture user information with low friction.

States:

- Default
- Focus
- Error
- Success
- Disabled

Guidance:

- Labels should always be visible.
- Error messages should explain how to fix the issue.
- Required fields should be obvious without relying on color alone.

### Hero

Purpose: Establish the page promise and drive the primary action.

Anatomy:

- Eyebrow, optional
- Headline
- Supporting copy
- Primary CTA
- Secondary CTA, optional
- Supporting image or proof element

Guidance:

- Headline should communicate the user-facing value, not the internal campaign objective.
- Keep the CTA close to the copy on mobile.

### Navigation

Purpose: Help users orient and move through the experience.

Guidance:

- Keep navigation labels short and concrete.
- Prioritize the highest-value paths.
- Avoid hiding critical actions behind ambiguous labels.

## Naming conventions

Use clear semantic names:

- `ButtonPrimary`
- `ButtonSecondary`
- `ProgramCard`
- `LeadForm`
- `HeroSection`
- `TestimonialCard`

Avoid names based on visual styling alone, such as `BlueCard` or `BigButton`.
