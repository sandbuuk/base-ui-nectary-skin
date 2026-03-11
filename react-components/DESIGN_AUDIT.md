# @nectary/react Design Audit

> **Date:** 2026-03-11
> **Components audited:** 67 files across 54 component directories
> **Styling:** Tailwind CSS + CVA (class-variance-authority)
> **Token namespace:** `--sinch-*` (`sys`, `comp`, `ref`, `global` layers)
> **Theme:** Tokens defined in `/themes/base/comp/*.css`, loaded via `.nectary-theme-base` class
> **Benchmark:** Base UI component library (visual quality reference)

---

## What This Audit Covers

This audit compares the **visual output and UX quality** of @nectary/react components against Base UI's reference implementations. It identifies why components look unpolished — missing elevation, inconsistent spacing, bare-default styling, poor visual hierarchy — and provides concrete fixes.

It also covers accessibility gaps, API inconsistencies, and token hygiene.

---

## Summary

| Category | P0 | P1 | P2 | P3 | Total |
|----------|:---:|:---:|:---:|:---:|:---:|
| Visual Quality & Polish | 5 | 6 | 4 | 2 | 17 |
| Accessibility | 4 | 4 | 6 | 5 | 19 |
| API Consistency | 2 | 3 | 3 | 2 | 10 |
| Token/Styling | 0 | 2 | 4 | 3 | 9 |
| Documentation | 0 | 2 | 1 | 0 | 3 |
| **Total** | **11** | **17** | **18** | **12** | **58** |

---

# PART 1 — Visual Quality & Polish

These are the issues that make components look "off" compared to Base UI's polished reference.

## P0 — Components that look broken or unstyled

### V1. Dialog lacks visual hierarchy between title, body, and actions
**File:** `dialog/Dialog.tsx:327-378`
**What it looks like now:** Title, body text, and action buttons blend together — no clear visual separation between sections.
**What Base UI looks like:** Clear title (bold, larger), body text (regular weight, muted), actions section separated by space with well-styled buttons.
**Fix:**
- Add `border-b border-[var(--sinch-sys-color-border-default)]` under the header section (line 328)
- Add `border-t border-[var(--sinch-sys-color-border-default)]` above the buttons section (line 374)
- Increase footer top margin from `mt-5` to `mt-6 pt-4` and header bottom margin from `mb-3` to `mb-0 pb-4`
- Ensure body text uses `text-[var(--sinch-sys-color-text-muted)]` for contrast against bold title

### V2. Dialog/Sheet backdrop too opaque, no blur
**Files:** `dialog/Dialog.tsx:66` (`bg-black/55`), `sheet/Sheet.tsx:129-130`
**What it looks like now:** Heavy black overlay that obscures the entire page. Feels dated.
**What Base UI looks like:** Subtle semi-transparent backdrop, often with blur that keeps context visible.
**Fix:**
- Dialog: Change `bg-black/55` → `bg-black/30 backdrop-blur-sm` (line 66)
- Sheet: Add `backdrop-blur-sm` alongside existing gradient backdrop
- Define token: `--sinch-sys-color-surface-overlay: rgba(0,0,0,0.3)` and `--sinch-sys-blur-overlay: 4px`

### V3. Dialog missing width constraint — renders as `fit-content`
**File:** `dialog/Dialog.tsx:40`
**What it looks like now:** `w-[var(--sinch-comp-dialog-width,fit-content)]` — dialog shrinks to content width. Short text produces a tiny dialog; long text fills max-width. Inconsistent.
**What Base UI looks like:** Consistent width that doesn't shrink below a minimum.
**Fix:**
- Change default: `w-[var(--sinch-comp-dialog-width,100%)]` so dialog fills to `max-width` by default
- Add `min-w-[320px]` to prevent tiny dialogs
- Add size prop (see API3 below) for explicit size control

### V4. SelectMenu search input feels disconnected
**File:** `select-menu/SelectMenu.tsx:456-477`
**What it looks like now:** Search box has hardcoded `mx-[10px] my-[10px]` margins, no visual separator from options below. Feels like a floating input pasted into a dropdown.
**What Base UI looks like:** Search is visually integrated — sticky at top with a bottom border divider.
**Fix:**
- Replace `mx-[10px] my-[10px]` with `mx-2 my-2`
- Add `border-b border-[var(--sinch-sys-color-border-default)] pb-2` below search container
- Make search container sticky: `sticky top-0 z-10 bg-[var(--sinch-comp-select-menu-color-background)]`

### V5. Accordion expand/collapse animation is jerky
**File:** `accordion/Accordion.tsx:448-452`
**What it looks like now:** Uses `max-h-[2000px]` trick for expand animation — this causes visible speed inconsistency (fast for short content, slow for long content, always weird timing).
**What Base UI looks like:** Smooth, consistent expand/collapse regardless of content height.
**Fix:**
- Replace `max-height` animation with CSS `grid-template-rows: 0fr` → `1fr` technique:
  ```css
  /* closed */ grid-template-rows: 0fr; overflow: hidden;
  /* open */   grid-template-rows: 1fr; transition: grid-template-rows 250ms ease;
  ```
- Wrap content in inner `div` with `min-h-0` to allow collapsing

---

## P1 — Components that work but look unpolished

### V6. Popover tip/arrow doesn't have shadow continuity
**File:** `popover/Popover.tsx:62-66, 420`
**What it looks like now:** Popover content has shadow but the arrow/tip has no shadow — creates a visual disconnect where the arrow looks "flat" against a shadowed box.
**Fix:**
- Add `drop-shadow-sm` to the tip SVG element
- Or use CSS `filter: drop-shadow(...)` on the tip container to match the content shadow

### V7. Toast vertical alignment inconsistent
**File:** `toast/Toast.tsx:46-49`
**What it looks like now:** Icon has `my-1`, content has `py-1`, and container uses `gap-2` — these overlap causing inconsistent vertical centering across toast variants.
**Fix:**
- Remove individual `my-1`/`py-1` from children
- Use `items-center` on flex container and `gap-3` for consistent spacing
- Standardize icon size across all toast types (currently varies by type)

### V8. Card missing interactive elevation
**File:** `card/Card.tsx`
**What it looks like now:** Static card with no hover state. Clickable cards should show elevation change.
**What Base UI looks like:** Cards have `hover:shadow-lg` transition for interactive variants.
**Fix:**
- Add `variant` prop: `default` (static) vs `interactive` (hover elevation)
- Interactive: `hover:shadow-lg transition-shadow duration-200 cursor-pointer`
- Add `active:shadow-sm` for click feedback

### V9. DatePicker day grid misaligned with weekday headers
**File:** `date-picker/DatePicker.tsx:542-604`
**What it looks like now:** Weekday headers and day number cells both use `gap-2` but without fixed cell widths, text-width differences cause column drift.
**Fix:**
- Constrain both weekday and day cells to fixed width: `w-8 h-8` (32px)
- Use CSS grid instead of flex: `grid grid-cols-7 gap-1` for perfect alignment

### V10. Sheet lacks visual separation between header, body, footer
**File:** `sheet/Sheet.tsx:408-444`
**What it looks like now:** Header, content, and footer sections blend together with no visual dividers.
**Fix:**
- Add `border-b border-[var(--sinch-sys-color-border-default)]` to header section
- Add `border-t border-[var(--sinch-sys-color-border-default)]` to footer section
- Ensure content area has `overflow-y-auto` with proper padding

### V11. Focus-visible styling inconsistent across components
**Multiple files**
**What it looks like now:** Some use `focus-visible:ring-2`, others use `outline`, others use `border-2`. Focus ring color, offset, and thickness vary.
**Fix:**
- Standardize to one pattern everywhere:
  ```
  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--sinch-sys-color-focus)]
  ```
- Apply to: Checkbox (uses `outline`), Radio (uses `outline`), Toggle (uses custom `rounded-[17px]` — should be `rounded-full`), SelectButton (uses `border-2`)

---

## P2 — Polish improvements

### V12. Tooltip not keyboard-accessible
**File:** `tooltip/Tooltip.tsx:260-289`
**Issue:** Only triggers on hover — keyboard users can never see tooltips.
**Fix:** Show tooltip on `focus` of trigger element, hide on `blur`. Add `tabindex="0"` support.

### V13. Tab content area has no visual container
**File:** `tabs/Tabs.tsx`
**Issue:** When switching tabs, content just appears below with no visual indication of the content boundary.
**Fix:** Wrap tab content in `rounded-b-md border-x border-b bg-[var(--sinch-sys-color-surface-primary-default)]` container.

### V14. Checkbox/Radio focus ring bleeds outside container
**Files:** `checkbox/Checkbox.tsx:238`, `radio/Radio.tsx`
**Issue:** Focus outline uses `inset-[-3px]` which can clip off-screen on edge-positioned elements.
**Fix:** Reduce to `inset-[-2px]` or use `ring` instead of absolute-positioned outline.

### V15. TimePicker clock face lacks visual depth
**File:** `time-picker/TimePicker.tsx:519`
**Issue:** 1px border on clock face looks flat. No visual indication of which region is AM vs PM.
**Fix:** Use `border-2` and subtle inner shadow: `shadow-inner`

---

## P3 — Nice-to-haves

### V16. Missing loading/skeleton states in SelectMenu, DatePicker, TimePicker
### V17. Alert and Toast use different color maps for same severity levels

---

# PART 2 — Accessibility

## P0 — Critical

### A1. SelectButton missing `aria-haspopup`
**File:** `select-menu/SelectMenu.tsx:914`
**Fix:** Add `aria-haspopup="listbox"` and `aria-expanded={open}`.

### A2. Tooltip trigger missing `aria-describedby`
**File:** `tooltip/Tooltip.tsx:260-289`
**Fix:** Generate unique ID, set on tooltip, add `aria-describedby` to trigger when visible.

### A3. Popover trigger/content ARIA association broken
**File:** `popover/Popover.tsx:413-417, 456`
**Fix:** Set `id={contentId}` on the popover content root element.

### A4. Scroll lock conflicts across modal components
**Files:** `pop/Pop.tsx`, `popover/Popover.tsx`, `dialog/Dialog.tsx`, `sheet/Sheet.tsx`
**Issue:** Pop.tsx has counter-based scroll lock, others use raw `document.body.style.overflow`. Nested modals cause premature unlock.
**Fix:** Extract to shared `src/utils/scrollLock.ts`.

## P1 — High

### A5. Icon-only Button missing aria-label validation
**File:** `button/Button.tsx:280-358`
**Fix:** Dev-only warning when `isIconOnly` and no `aria-label`.

### A6. Dialog focus trap doesn't handle nested dialogs
**File:** `dialog/Dialog.tsx:258-290`
**Fix:** Filter focusable elements to exclude those inside child `[role="dialog"]`.

### A7. Input standalone missing label warning
**File:** `input/Input.tsx`
**Fix:** Dev-only useEffect warning when no label/aria-label/aria-labelledby.

### A8. Tabs icon-only option lacks fallback aria-label
**File:** `tabs/Tabs.tsx:605-658`
**Fix:** Set `aria-label` on button as fallback alongside tooltip.

## P2 — Medium

- **A9.** Toggle/Checkbox/Radio use `div+role` instead of native inputs — less robust with assistive tech
- **A10.** ColorSwatch missing "no color" `aria-label`
- **A11.** SegmentedControl arrow keys don't select (should follow radio group pattern)
- **A12.** Sheet missing aria-label validation
- **A13.** Link renders as `<a>` when disabled (should be `<span>`)
- **A14.** Tabs Home/End iterate one step at a time

## P3 — Low

- **A15.** Input icon slot needs `aria-hidden` documentation
- **A16.** Accordion disabled items could announce "(disabled)"
- **A17.** Popover modal mode missing `aria-modal="true"` on content
- **A18.** SelectMenu Home/End at option level
- **A19.** Avatar mask gradient uses hardcoded `#fff/#000`

---

# PART 3 — API Consistency

## P0 — Critical

### API1. Missing `onOpenChange` on modal/floating components
**Files:** `dialog/Dialog.tsx`, `sheet/Sheet.tsx`, `pop/Pop.tsx`, `popover/Popover.tsx`
**Fix:** Add `onOpenChange?: (open: boolean) => void`.

### API2. SelectMenuOption `aria-selected` vs `aria-checked`
**File:** `select-menu/SelectMenu.tsx:641-656`
**Fix:** `aria-selected` for single, `aria-checked` for multiple mode.

## P1 — High

### API3. Dialog missing size variants
**Fix:** Add `size?: 'sm' | 'md' | 'lg' | 'fullscreen'` with max-widths `384px / 512px / 768px / 100vw`.

### API4. SelectMenu missing clearable
**Fix:** Add `clearable?: boolean` and `onClear?: () => void`.

### API5. Dialog missing animation callbacks
**Fix:** Add `onAnimationStart` / `onAnimationEnd` (Sheet already has these).

## P2 — Medium

- **API6.** Inconsistent `data-*` attribute usage across components
- **API7.** DatePicker/TimePicker missing `clearable`
- **API8.** Checkbox `indeterminate` not fully controlled

## P3 — Low

- **API9.** ColorMenu missing `clearable`/`defaultValue`
- **API10.** Pop/Popover missing `onFocus`/`onBlur` passthrough

---

# PART 4 — Token/Styling Hygiene

## P1 — High

- **T1.** Hardcoded `rgba()` shadow fallbacks in Dialog, PersistentOverlay, Popover, Sheet
- **T2.** Hardcoded pixel dimensions in TimePicker (248px, 216px) and ColorMenu (44px, 56px, 34px)

## P2 — Medium

- **T3.** Toggle local CSS variables (`16px`, `32px`, `12px`) should reference tokens
- **T4.** Fallback values in CSS custom properties use hardcoded values instead of token chains
- **T5.** SegmentedControl hardcoded offset calculations (`+3px`, `-4px`)
- **T6.** `opacity-50` not tokenized (FileDrop, Sheet)

## P3 — Low

- **T7-T9.** Story files use hardcoded hex colors, inline px styles

---

# PART 5 — Documentation

## P1 — High

- **D1.** 46 of 54 components missing keyboard interaction docs in stories
- **D2.** Only 2 of 54 stories have `parameters.docs.description`

## P2 — Medium

- **D3.** Compound component stories inconsistently named

---

# Execution Plan

### Phase 1 — Visual Polish (P0) ✅
1. ✅ **Dialog visual overhaul:** Section dividers, backdrop blur, min-width, size variants
2. ✅ **Accordion animation:** Replaced max-height with grid-template-rows technique
3. ✅ **SelectMenu search:** Sticky positioning and border divider
4. ✅ **Sheet section dividers:** Header/footer borders
5. ✅ **Focus-visible standardization:** Unified ring pattern across all components

### Phase 2 — Accessibility P0 + API P0 ✅
6. ✅ Fixed ARIA associations (SelectButton, Tooltip, Popover)
7. ✅ Extracted shared `useScrollLock` utility
8. ✅ Added `onOpenChange` to all 4 modal components
9. ✅ Fixed SelectMenuOption `aria-selected`/`aria-checked`

### Phase 3 — Visual Polish (P1) ✅
10. ✅ Popover tip shadow, Toast alignment, Card interactive variant
11. ✅ DatePicker grid alignment, TimePicker visual depth
12. ✅ Tab content container

### Phase 4 — Accessibility + API P1 ✅
13. ✅ Dev warnings (Button, Input, Sheet)
14. ✅ Dialog focus trap for nested dialogs
15. ✅ Dialog size variants + animation callbacks (`onDialogTransitionStart`/`onDialogTransitionEnd`)
16. ✅ SelectMenu clearable

### Phase 5 — Token Hygiene ✅
17. ✅ Replaced all hardcoded rgba/px fallbacks with token chains (globals.css system tokens)
18. ✅ Tokenized Toggle, TimePicker, ColorMenu dimensions

### Phase 6 — Documentation ✅
19. ✅ Added keyboard interaction docs to 26 interactive component stories
20. ✅ Added `parameters.docs.description` to all 55 stories
21. ✅ Added 24 Font Awesome SVG icon assets to `src/assets/icons/fontawesome/`

### Phase 7 — P2/P3 Cleanup ✅
22. ✅ V12: Tooltip keyboard accessibility (tabIndex, focus/blur, Escape key)
23. ✅ V14: Checkbox/Radio focus ring inset reduced to -2px
24. ✅ V15: TimePicker clock face border 2px + inner shadow
25. ✅ A10: ColorSwatch "No color" aria-label default
26. ✅ A12: Sheet dev warning for missing accessible label; added `aria-label`/`aria-labelledby` props
27. ✅ A13: Link renders as `<span role="link">` when disabled
28. ✅ A17: Popover already had `aria-modal={modal}` (no change needed)
29. ✅ API6: Added `data-value` to Toggle, DatePicker, TimePicker
30. ✅ API7: DatePicker/TimePicker clearable props with clear buttons
31. ✅ D3: Compound component story descriptions now mention sub-components

### Remaining P2/P3 items (not addressed)
- V13: Tab content area visual container
- V16: Loading/skeleton states in SelectMenu, DatePicker, TimePicker
- V17: Alert/Toast color map inconsistency
- A9: Toggle/Checkbox/Radio use div+role instead of native inputs
- A11: SegmentedControl arrow keys don't select
- A14: Tabs Home/End iterate one step
- A15: Input icon slot aria-hidden docs
- A16: Accordion disabled items announce "(disabled)"
- A18: SelectMenu Home/End at option level
- A19: Avatar mask gradient hardcoded colors
- API8: Checkbox indeterminate not fully controlled
- API9: ColorMenu missing clearable/defaultValue
- API10: Pop/Popover missing onFocus/onBlur passthrough
- T7-T9: Story files hardcoded hex/px values
