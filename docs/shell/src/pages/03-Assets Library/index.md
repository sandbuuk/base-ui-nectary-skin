# Assets

The Assets library contain some common assets, such as animations, illustrations and icons that can be used in combination with @nectary/components to create compositions.

## Install

Add the assets library dependency to `package.json`:

```shell
npm install @nectary/assets
```

## Usage

### Registry

#### For Microfrontends using shadow roots (recommended)

```js
import { setAssetsRegistry, resetAssetsRegistry } from '@nectary/assets/utils'


// mount function
const mount = () => {
  const customElements = new CustomElementRegistry();
  
  setAssetsRegistry(customElements)

  const shadowRoot = element.attachShadow({
    mode: "open",
    customElements,
  });

  // ... rest of the mount function


  // unmount function
  return () => {
    resetAssetsRegistry()
    // ... rest of the unmount function
  }
}
```

#### Apps and Microfrontend without shadow-roots

> !!! Warning: if you are using an MFE without shadow root, some elements might already be imported by the shell application and might not be using the same Nectary version as the one in your package.json, we strive to not make any breaking change but please note that we strongly recommend using shadow roots whenever possible.

Nectary needs a custom elements registry to work with, even if it's a global default one:

```js
import { setAssetsRegistry } from '@nectary/assets/utils'

setAssetsRegistry(window.customElements)

// App
```

## Example

As for everything in this guide, you can refer to the [MFE template](https://gitlab.com/sinch/sinch-projects/applications/teams/core/mfe-template) that we maintain to be using the most up to date set up for Nectary.
