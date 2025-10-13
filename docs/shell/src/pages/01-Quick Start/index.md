# Quick Start

---

> Nectaries are specialized nectar-producing structures of the flower.

> Bumblebees eat nectar and pollen made by flowers. The sugary nectar provides the bees with energy while the pollen provides them with protein.

---

Quick start guide for regular applications. See [Quick Start - MFE](?path=/quick-start-mfe) on how to set up Nectary for Micro-Frontends.

## Install

Add the `components`, `assets` and `theme-base` library to `package.json`:

```shell
npm install @nectary/components @nectary/assets @nectary/theme-base
```

## Registry

For the browser to be able to parse the custom elements, they need to be added to the elmenets registry,
in the root of your application:

```js
import { setNectaryRegistry } from '@nectary/components/utils'
import { setAssetsRegistry } from '@nectary/assets/utils'

setNectaryRegistry(window.customElements)
setAssetsRegistry(window.customElements)
```

## Theme

Import and add the theme class to the root element. See [Theme](?path=/themes) for more info on setting up themes and list of available themes:

```js
import '@nectary/theme-base'

<div class="nectary-theme-base">
  // Your app content here
</div>
```

## Usage

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

## Example (React 19+)

```tsx
// main.tsx
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { setNectaryRegistry } from "@nectary/components/utils";
import { setAssetsRegistry } from "@nectary/assets/utils";

setNectaryRegistry(window.customElements);
setAssetsRegistry(window.customElements);

createRoot(document.getElementById('root')!).render(<App />)

// App.tsx
import "@nectary/theme-base"
import "@nectary/components/button"

export const App = () => {
  return (
    <div className="nectary-theme-base">
      <sinch-button text="Click" aria-label="Click" onClick={() => console.log('click')}></sinch-button>
    </div>
  )
}
```


## Automatic Imports using eslint

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
