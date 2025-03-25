# 👋 Intro

Sinch Design System.

> Nectaries are specialized nectar-producing structures of the flower.

> Bumblebees eat nectar and pollen made by flowers. The sugary nectar provides the bees with energy while the pollen provides them with protein.

## Install

Add the component library dependency to `package.json`:

```shell
npm install @nectary/components
```

### For Microfrontends using shadow roots (recommended)

```js
import { setNectaryRegistry, resetNectaryRegistry } from '@nectary/components/utils'

// mount function
const mount = () => {
  const customElements = new CustomElementRegistry();
  
  setNectaryRegistry(customElements)

  const shadowRoot = element.attachShadow({
    mode: "open",
    customElements,
  });

  // ... rest of the mount function


  // unmount function
  return () => {
    resetNectaryRegistry()
    // ... rest of the unmount function
  }
}
```

### Apps and Microfrontend without shadow-roots

> !!! Warning: if you are using an MFE without shadow root, some elements might already be imported by the shell application and might not be using the same Nectary version as the one in your package.json, we strive to not make any breaking change but please note that we strongly recommend using shadow roots whenever possible.

Nectary needs a custom elements registry to work with, even if it's a global default one:

```js
import { setNectaryRegistry } from '@nectary/components/utils'

setNectaryRegistry(window.customElements)

// App
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
