# Nectary React — Claude Code Project Guide

## What this project is

A **multi-platform design system library** for the Sinch Conversations product, layering
[Nectary](https://nectary.sinch.com/) (`@nectary/theme-base`) design tokens on top of
[Base UI](https://base-ui.com/) (MUI's unstyled accessible component primitives).

Three co-located SDKs share the same token vocabulary:

| Platform | Location | Tech stack |
|----------|----------|------------|
| React/Web | `src/` | TypeScript · Base UI · CSS Modules · Vite |
| Android | `android/` | Kotlin · Jetpack Compose · Material 3 |
| iOS | `ios/` | Swift 5.9 · SwiftUI · Swift Package Manager |

---

## Token system

All token names start with `--sinch-` (CSS) or `tokens.` (Kotlin/Swift).

### Token categories

```
color       --sinch-color-action-primary / --sinch-sys-color-*
spacing     --sinch-spacing-{0..8}        (4pt grid: 0,4,8,12,16,20,24,32,48)
radius      --sinch-radius-{xs,s,m,l,xl,full}
font        --sinch-font-{label,body,heading}-{size}
size        --sinch-size-icon-{xs,s,m,l,xl}
```

The source of truth for **React** is `src/tokens.ts` — CSS custom property name constants.
Actual values are provided at runtime by `@nectary/theme-base/css` (imported in `NectaryProvider`).

### Adding a token

1. Add the CSS var name to the correct object in `src/tokens.ts`
2. Add a matching entry in `.vscode/nectary-tokens.css-data.json` (VS Code autocomplete)
3. Add matching fields to `android/.../NectaryTokens.kt` (`ColorTokens` / `SpacingTokens` etc.)
4. Add matching fields to `ios/.../NectaryTokens.swift`

---

## React library (`src/`)

### Architecture

```
src/
  index.ts              ← public API — import everything from here
  tokens.ts             ← CSS custom property name constants
  NectaryProvider.tsx   ← <NectaryProvider> + useNectaryContext()
  components/
    Button/             ← Button.tsx · Button.module.css · Button.types.ts · index.ts
    ButtonGroup/
    TextField/
    Switch/
    Badge/
    Checkbox/
  vite-env.d.ts         ← CSS module type declarations
  prototype/            ← dev sandbox (NOT part of library build)
    App.tsx
    DeviceFrame.tsx
    InboxScreen.tsx
    NewMessageScreen.tsx
    global.css
```

### Anatomy of a component

Every component follows this pattern:

```
ComponentName/
  ComponentName.types.ts    Props interface + exported types
  ComponentName.module.css  CSS Modules — ONLY use var(--sinch-*) tokens, never raw values
  ComponentName.tsx         Thin wrapper around a Base UI primitive
  index.ts                  Re-exports component + all types
```

### Adding a component

1. Create `src/components/MyComp/` directory
2. Write `MyComp.types.ts` — props interface
3. Write `MyComp.module.css` — styles using `var(--sinch-*)` tokens only
4. Write `MyComp.tsx` — import from `@base-ui-components/react/<primitive>`, apply CSS Modules
5. Write `index.ts` — `export { MyComp } from './MyComp'` + type re-exports
6. Add to `src/index.ts`

### CSS Modules rules

- Use `var(--sinch-*)` for EVERY visual value (color, spacing, radius, typography)
- Never hardcode `#hex`, `px` values, or raw font sizes in component CSS
- Use `data-*` attributes (set by Base UI) for state variants: `[data-disabled]`, `[data-checked]`
- Focus rings: `box-shadow: 0 0 0 2px var(--sinch-sys-color-border-focus)`

### Base UI primitives available

```
Button · Checkbox · CheckboxGroup · Field · Switch · Select · Slider
Dialog · Drawer · Menu · Menubar · Popover · Tooltip · Toast
Accordion · Collapsible · Tabs · ToggleGroup · Toolbar
Separator · ScrollArea · Progress · Meter · Avatar · Combobox
```

Import pattern: `import { Switch } from '@base-ui-components/react/switch'`

---

## Android SDK (`android/`)

```
android/
  build.gradle.kts
  src/main/kotlin/com/sinch/nectary/
    tokens/
      NectaryTokens.kt     ← NectaryTokens data class (ColorTokens, SpacingTokens, …)
    theme/
      NectaryColors.kt     ← colorTokensToLightScheme() / colorTokensToDarkScheme()
      NectaryTypography.kt ← typographyTokensToM3Typography()
      NectaryTheme.kt      ← NectaryTheme composable + LocalNectaryTokens
    components/
      NectaryButton.kt
      NectaryTextField.kt
      NectaryCheckbox.kt
      NectarySwitch.kt
```

### Usage

```kotlin
NectaryTheme {
    NectaryButton("Send", onClick = { })
    NectaryTextField(value = text, onValueChange = { text = it }, label = "Message")
    NectaryCheckbox(checked = agreed, onCheckedChange = { agreed = it }, label = "Agree")
    NectarySwitch(checked = on, onCheckedChange = { on = it }, label = "Enable")
}
```

### Accessing tokens directly

```kotlin
val tokens = NectaryTheme.tokens
Box(Modifier.background(tokens.color.surfaceSecondary)) { … }
```

### Adding an Android component

1. Create `android/src/main/kotlin/com/sinch/nectary/components/Nectary<Name>.kt`
2. Access tokens via `val tokens = NectaryTheme.tokens`
3. Map to Compose/Material 3 equivalents
4. Add to `build.gradle.kts` if new dependencies are required

---

## iOS SDK (`ios/`)

```
ios/
  Package.swift                     ← Swift Package Manager manifest
  Sources/Nectary/
    Nectary.swift                   ← Module docs
    Tokens/
      NectaryTokens.swift           ← NectaryTokens struct (all token categories)
    Theme/
      NectaryTheme.swift            ← NectaryTheme<Content> + \.nectaryTokens env key
    Components/
      NectaryButton.swift
      NectaryTextField.swift
      NectaryToggle.swift           ← NectaryToggle (switch) + NectaryCheckbox
  Tests/NectaryTests/
    NectaryTokensTests.swift
```

### Usage

```swift
import Nectary

struct ContentView: View {
    @State private var text = ""

    var body: some View {
        NectaryTheme {
            VStack {
                NectaryButton("Send") { send() }
                NectaryTextField(text: $text, label: "Message")
                NectaryToggle("Notifications", isOn: $notificationsOn)
                NectaryCheckbox("Accept terms", isOn: $accepted)
            }
        }
    }
}
```

### Accessing tokens directly

```swift
@Environment(\.nectaryTokens) var tokens

Text("Hello")
    .foregroundColor(tokens.color.textPrimary)
    .padding(tokens.spacing.spacing4)
```

### Adding an iOS component

1. Create `ios/Sources/Nectary/Components/Nectary<Name>.swift`
2. Read tokens via `@Environment(\.nectaryTokens) private var tokens`
3. Add a `#Preview` block for Xcode previews
4. Write tests in `ios/Tests/NectaryTests/`

---

## Dev workflow

```bash
# Start the interactive prototype (iOS + Android side-by-side)
npm run dev              # → http://localhost:5173

# Type-check everything
npm run typecheck

# Build the publishable library
npm run build:lib        # → dist/index.js, dist/index.cjs, dist/style.css, dist/*.d.ts
```

### Prototype location

`src/prototype/` is the **sandbox** — it is excluded from the library build.
Screens:
- `InboxScreen.tsx` — conversation inbox (9 mock conversations)
- `NewMessageScreen.tsx` — compose sheet with simulated keyboard
- `DeviceFrame.tsx` — iOS / Android device chrome

---

## Publishing

```bash
npm run build:lib
npm publish --access public
```

Consumers install with:

```bash
npm install @nectary/react @base-ui-components/react @nectary/theme-base
```

Then wrap their app:

```tsx
import { NectaryProvider, Button } from '@nectary/react'
import '@nectary/react/style.css'

export default function App() {
  return (
    <NectaryProvider colorScheme="system">
      <Button variant="primary">Send</Button>
    </NectaryProvider>
  )
}
```

---

## Key design decisions

- **No hardcoded values in component CSS** — every property uses a `var(--sinch-*)` token
- **Base UI as the primitive layer** — handles accessibility (ARIA, keyboard nav, focus management)
- **Fallback values in CSS** — `var(--sinch-color-action-primary, #007aff)` so components work without the theme installed
- **Token parity across platforms** — same conceptual token name in CSS, Kotlin, and Swift
- **Dark-mode-first prototype** — the sandbox uses a dark Sinch Conversations theme to match the product
