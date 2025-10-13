# Quick Start - MFE

Quick start guide for Micro-Frontends. See [Quick Start](?path=/quick-start) on how to set up Nectary for regular applications.

## Install

Add the `components`, `assets` and `theme-base` library to `package.json`:

```shell
npm install @nectary/components @nectary/assets @nectary/theme-base
```

## For Micro-Frontends NOT using ShadowRoot

`@nectary/components@5.0` and `@nectary/assets@3.0` comes with a new `/global` import path that's optimized for MFEs using Nectary with the global registry:
```js
import '@nectary/components/button/global' // ✅ Optimized bundle size
```
```js
import '@nectary/components/button' // ⚠️ Imports redundant JavaScript code
```
> This assumes that the Host application has enabled Global Components for Micro-Frontends to consume, you can read more about it in the [Global Components](?path=/global-components) page.

Apart from this, the setup is the same as for regular applications, see [Quick Start](?path=/quick-start).

## For Micro-Frontends using ShadowRoot

### Registry

For the browser to be able to parse the custom elements, they need to be added to the elements registry.
The registry then needs to be attached to the MFE's shadowRoot, inside of your mount function:

```js
import { setNectaryRegistry, resetNectaryRegistry } from '@nectary/components/utils'
import { setAssetsRegistry, resetAssetsRegistry } from '@nectary/assets/utils'

const mount = (element) => {
  const customElements = new CustomElementRegistry() // or window.customElements
  setNectaryRegistry(customElements)
  setAssetsRegistry(customElements)

  const shadowRoot = element.attachShadow({
    mode: "open",
    customElements, // <- Attach to the shadowRoot
  });

  // ... existing code

  return () => {
    // If using the CustomElementRegistry, it needs to be cleaned up when MFE gets unmounted.
    resetNectaryRegistry()
    resetAssetsRegistry()
  }
}
```

### Theme

Import and add the theme class to the root element. See [Theme](?path=/themes) for more info on setting up themes and list of available themes:

```js
import { ScopedStyleSheet } from "@nectary/scoped-stylesheet";
import baseTheme from "@nectary/theme-base/index.css?inline"

const mount = (element) => {
  // ... existing code

  const scopedStyleSheet = new ScopedStyleSheet(shadowRoot);
  scopedStyleSheet.addStyle(baseTheme);
  appElement.className = "nectary-theme-base"

  // ... existing code
}
```

### Usage

Import component:

```js
import '@nectary/components/button'
```

Use it in React/Vue/Angular/etc, for example:

```jsx
<sinch-button text="Click me" aria-label="Submit button" on-click={() => console.log('click')}></sinch-button>
```

⚠️ Note that it's not allowed to self-close custom element tags.

⚠️ Note for React 19 - You should use camelCase for event handlers (see [Event Handlers](?path=/event-handlers) for more info)

### Example (React 19+)

```tsx
// index.tsx
import { ScopedStyleSheet } from "@nectary/scoped-stylesheet";
import { setAssetsRegistry } from "@nectary/assets/utils";
import { setNectaryRegistry } from "@nectary/components/utils";
import type { MFE } from "@sinch/mfe-types";
import { createRoot } from "react-dom/client";
import { createShadowRoot } from "@sinch/mfe-helper-react";
import { App } from "./App";
import styles from "./style.css?inline";
import baseTheme from "@nectary/theme-base/index.css?inline";

const mount: MFE = (element) => {
  const customRegistry = new CustomElementRegistry() 
  setNectaryRegistry(customRegistry);
  setAssetsRegistry(customRegistry);
  
  const { appElement, shadowRoot } = createShadowRoot(
    element,
    customRegistry,
    "mfe-name"
  );

  const scopedStyleSheet = new ScopedStyleSheet(shadowRoot);
  scopedStyleSheet.addStyle(styles);
  scopedStyleSheet.addStyle(baseTheme);
  appElement.className = "nectary-theme-base"

  const appRoot = createRoot(appElement);
  appRoot.render(<App />);

  return () => {
    appRoot.unmount();
    resetAssetsRegistry();
    resetNectaryRegistry();
  };
};

export default mount;

// App.tsx
import "@nectary/components/button"

export const App = () => {
  return (
    <div>
      <sinch-button text="Click" aria-label="Click" onClick={() => console.log('click')}></sinch-button>
    </div>
  )
}
```

### Manual Component Registration

By default, components register themselves automatically when you import them. However, this automatic registration can cause issues if your bundler reorders or optimizes imports during the build process, leading to unpredictable registration order and unexpected runtime behavior.

You can disable the import side-effect by setting the `manualRegistration` option:
```js
setNectaryRegistry(customRegistry, { manualRegistration: true })
```
And in some other part of your code:
```js
import { registerComponent } from "@nectary/components/utils"
import { Button } from "@nectary/components/button"

registerComponent("sinch-button", Button)
```

### Automatic Imports using eslint

You can install the following eslint plugin

```bash
npm install @nectary/eslint-plugin
```

and use it like so:

```js
// eslint-disable-next-line no-undef
module.exports = {
  // ...
  plugins: [/** ..., */ "@nectary"],
  rules: {
    "@nectary/imports": "error",
    // ...
  },
};
```

## Example

As for everything in this guide, you can refer to the [MFE template](https://gitlab.com/sinch/sinch-projects/applications/teams/core/mfe-template) that we maintain to be using the most up to date set up for Nectary.
