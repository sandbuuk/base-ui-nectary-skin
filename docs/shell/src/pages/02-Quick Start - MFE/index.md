# Quick Start - MFE

Quick start guide for Micro-Frontends. See [Quick Start](?path=/quick-start) on how to set up Nectary for regular applications.

## Install

Add the `components`, `assets` and `theme-base` library to `package.json`:

```shell
npm install @nectary/components @nectary/assets @nectary/theme-base
```

## For Micro-Frontends not using ShadowRoot

The setup is the same as for regular applications, see [Quick Start](?path=/quick-start).

## For Micro-Frontends using ShadowRoot

### Registry

For the browser to be able to parse the custom elements, they need to be added to the elmenets registry.
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

#### window.customElements

⚠️ `window.customElements` is the global registry provided by the browser. If used, some elements might already be imported by other MFEs and might not be using the same Nectary version as the one in your package.json. Thats why its highly recommended to use the scoped `CustomElementRegistry` whenever possible.

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
<sinch-button value="Click me" aria-label="Submit button" on-click={() => console.log('click')}></sinch-button>
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
