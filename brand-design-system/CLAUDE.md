# Claude / AI Handoff Notes

Use this folder as the front-end focused brand design system source of truth.

## Recommended upload / attach set

For large codebases, attach this folder first instead of the full repository:

- `brand-design-system/README.md`
- `brand-design-system/design-tokens/tokens.json`
- `brand-design-system/design-tokens/tokens.css`
- `brand-design-system/foundations/brand-foundation.md`
- `brand-design-system/foundations/voice-and-tone.md`
- `brand-design-system/components/component-guidelines.md`
- `brand-design-system/assets/asset-inventory.md`

## What Claude should do

1. Treat `tokens.json` and `tokens.css` as the system baseline.
2. Preserve brand voice unless explicitly asked to explore alternatives.
3. Use semantic tokens first, not hard-coded colors.
4. Create accessible, responsive components by default.
5. Keep generated code simple, portable, and easy to inspect.

## Brand working assumptions

- Voice: warm, clear, professional, modern.
- Visual direction: clean, confident, approachable.
- Layout: generous spacing, readable hierarchy, mobile-first.
- Color: primary blue, dark navy secondary, amber accent.

Replace these assumptions once final brand assets, palette, fonts, and logos are added.

## Figma / .fig guidance

If a `.fig` file is added later, parse it locally where possible and use it as a visual reference. Do not assume the `.fig` replaces the token source unless tokens are explicitly exported from the file.
