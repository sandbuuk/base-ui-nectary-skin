# Design Audit — @nectary/react

Audit of 62 components and 62 stories in the Nectary React component library.

**Date:** March 2026
**Severity counts:** 4 P0, 6 P1, 38 P2, 12 P3

## Severity Legend

| Level | Label | Meaning |
|---|---|---|
| P0 | Critical | Blocks accessibility or causes runtime errors |
| P1 | High | Significant API gap or incorrect pattern |
| P2 | Medium | Token/style inconsistency, technical debt |
| P3 | Low | Minor polish, documentation gaps |

---

## 1. Accessibility (P0 / P1)

### P0 — No `forwardRef` on interactive components

None of the 62 components use `forwardRef`. This prevents consumers from attaching refs for focus management, scroll-into-view, and imperative handles. Most critical for:

- **DatePicker**, **TimePicker**, **EmojiPicker**, **ColorMenu** — pickers that need programmatic open/close
- **RichTextarea** — needs ref for focus and content access
- **Input**, **Textarea**, **NumberField** — form controls that need ref for validation libraries (react-hook-form, etc.)

### P0 — Input has no standalone label association

`Input` must be wrapped in `Field` for label association. Using `Input` alone produces an unlabelled form control. Needs either a built-in `aria-label` prop or a dev-time warning.

### P0 — Dialog missing focus management configuration

`Dialog` wraps Base UI's Dialog but doesn't expose `initialFocus` or `restoreFocus` props. Focus trap exists via Base UI but consumers can't control which element receives initial focus.

### P0 — No keyboard interaction documentation

Zero stories include keyboard interaction documentation. Users of screen readers and keyboard-only navigation have no reference for expected behavior.

### P1 — Missing `onOpenChange` on pickers

`DatePicker`, `TimePicker`, `EmojiPicker`, `ColorMenu`, `SelectButton`, and `FilePicker` don't expose `onOpenChange`. Consumers can't synchronize open state with external UI (e.g. disabling background scroll, analytics tracking).

Components that **do** expose `onOpenChange`: Dialog, AlertDialog, Popover, Menu, Sheet, Collapsible, Pop (7 total).

### P1 — EmojiPicker minimal API

Only 3 props: `onSelect`, `className`, `style`. Missing:
- Skin tone selection
- Recently used emojis
- Custom emoji support
- Controlled open state
- Search callback

### P1 — RichTextarea uses deprecated `document.execCommand`

The entire toolbar (bold, italic, underline, link, lists) relies on `document.execCommand`, which is deprecated and has inconsistent browser behavior. Only 6 props exposed (`value`, `onValueChange`, `placeholder`, `disabled`, `className`, `style`).

### P1 — Select missing common features

No support for: searchable/filterable options, clearable selection, multi-select, option groups, or async option loading.

### P1 — Dialog missing size variants

Single fixed size. No `size` prop for small/medium/large/fullscreen variants.

### P1 — Grid component has no responsive breakpoint support

`Grid` accepts static `columns`, `gap`, `rows` props but no responsive breakpoint configuration.

---

## 2. Token Consistency (P2)

### Hardcoded `opacity: 0.5` in disabled states

23 component stylesheets use hardcoded `opacity: 0.5` for disabled states instead of a shared token. Should use a `--nectary-opacity-disabled` token for consistency.

**Affected components:** Button, TextField, Switch, Checkbox, Radio, Input, Textarea, Toggle, ToggleGroup, NumberField, Collapsible, Select, Slider, Chip, Card, List, SegmentedControl, SelectButton, DatePicker, TimePicker, FilePicker, RichTextarea, Skeleton

### Hardcoded `rgba()` shadow values

5 stylesheets use raw `rgba()` instead of token references for shadows and overlays:

| File | Usage |
|---|---|
| Sheet.module.css | Backdrop overlay color |
| Dialog.module.css | Backdrop overlay color |
| AlertDialog.module.css | Backdrop overlay color |
| Switch.module.css | Thumb shadow |
| TextField.module.css | Focus ring shadow |

### Hardcoded pixel spacing

59 of 62 component stylesheets contain hardcoded `px` values. While some are structural (e.g. `1px` borders), many spacing values like `padding: 8px`, `gap: 12px`, `margin: 16px` should reference `--nectary-spacing-*` tokens.

**Highest priority replacements (frequently used values):**

| Value | Suggested token | Approx. occurrences |
|---|---|---|
| `4px` | `--nectary-spacing-xs` | ~30 |
| `8px` | `--nectary-spacing-sm` | ~50 |
| `12px` | `--nectary-spacing-md` | ~40 |
| `16px` | `--nectary-spacing-lg` | ~35 |
| `24px` | `--nectary-spacing-xl` | ~15 |

---

## 3. CSS Pattern Inconsistencies (P2)

### Mixed state indication

Some components use Base UI `data-*` attributes for state styling, others use conditional className logic in TSX:

- **Data attributes** (correct pattern): Button, Input, Textarea, Toggle, Checkbox, Radio, Switch, Select, Tabs, Slider
- **Conditional classes** (inconsistent): Tag, Chip, FileStatus, ProgressStepper, SegmentedControl, ColorSwatch, Breadcrumb

Both work, but the library should standardize on one approach.

### ColorMenu uses inline styles

`ColorMenu` applies swatch background colors via inline `style={{ backgroundColor }}` instead of CSS custom properties or a CSS Module pattern. This is the only component that does this for its primary visual treatment.

---

## 4. Component API Gaps (P1 / P2)

### P2 — No compound component consistency

Some complex components use compound pattern (`Table.Root`, `List.Root`), others export flat (`DatePicker`, `TimePicker`). Compound pattern components:

Accordion, Alert, AlertDialog, Breadcrumb, Card, Collapsible, Dialog, Field, Grid, InlineAlert, List, Menu, Popover, Pop, ScrollArea, Select, Sheet, Table, Tabs, Toast, ToggleGroup (21 total)

Flat components: all others (41 total). Not all need compound APIs, but `DatePicker`, `TimePicker`, and `Pagination` would benefit from sub-component customization.

### P2 — No controlled/uncontrolled pattern for pickers

`DatePicker`, `TimePicker`, and `ColorMenu` are uncontrolled only. Missing `value`/`onChange` controlled mode for DatePicker and TimePicker (ColorMenu has `onSelect`).

---

## 5. Recommendations

### Immediate (P0 — before production use)

1. Add `forwardRef` to all 62 components
2. Add `aria-label` fallback prop to `Input` for standalone usage
3. Expose `initialFocus` prop on `Dialog`
4. Add keyboard interaction documentation to all interactive component stories

### Short-term (P1 — next sprint)

5. Add `onOpenChange` to all picker/overlay components
6. Replace `document.execCommand` in RichTextarea with a proper rich text engine (Tiptap, Lexical, or ProseMirror)
7. Add size variants to Dialog
8. Add searchable/clearable mode to Select
9. Expand EmojiPicker API (skin tones, recents, controlled state)
10. Add responsive breakpoints to Grid

### Long-term (P2 — tech debt)

11. Create `--nectary-opacity-disabled` token and replace 23 hardcoded `opacity: 0.5` values
12. Replace all `rgba()` shadow values with token references
13. Audit and replace hardcoded `px` spacing with `--nectary-spacing-*` tokens
14. Standardize state indication on `data-*` attributes across all components
15. Move ColorMenu swatch colors to CSS custom properties
16. Add controlled mode to DatePicker, TimePicker
17. Evaluate compound component pattern for DatePicker, TimePicker, Pagination
