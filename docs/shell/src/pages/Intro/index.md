# 👋 Intro

Sinch Design System.

> Nectaries are specialized nectar-producing structures of the flower.

> Bumblebees eat nectar and pollen made by flowers. The sugary nectar provides the bees with energy while the pollen provides them with protein.

## Install

Add the component library dependency to `package.json`:

```shell
npm install @nectary/components @nectary/assets @nectary/theme-base
```

## Usage

### Registry

Nectary needs a custom elements registry to work with, even if it's a global default one:

```js
import { setNectaryRegistry } from '@nectary/components/utils'
import { setAssetsRegistry } from '@nectary/assets/utils'

setNectaryRegistry(window.customElements)
setAssetsRegistry(window.customElements)

// App
```

Or a custom one for the Shell/MFE use case:

```js
import { setNectaryRegistry } from '@nectary/components/utils'
import { setAssetsRegistry } from '@nectary/assets/utils'

const customRegistry = new CustomElementRegistry();

setNectaryRegistry(customRegistry)
setAssetsRegistry(customRegistry)

// ShadowRoot wrapper
```

### Theme

Base theme:

```jsx
import '@nectary/theme-base'

const App = () => (
  <div id="app" className="nectary-theme-base">
    ...
  </div>
)
```

Dark theme:

```jsx
import '@nectary/theme-base'
import '@nectary/theme-dark'

const App = () => (
  <div id="app" className="nectary-theme-base nectary-theme-dark">
    ...
  </div>
)
```

MessageMedia theme:

```jsx
import '@nectary/theme-base'
import '@nectary/theme-message-media'

const App = () => (
  <div id="app" className="nectary-theme-base nectary-theme-message-media">
    ...
  </div>
)
```

Use color palette or custom font face:

```css
span {
  color: var(--sinch-ref-color-honey-700);
}

h2 {
  font: var(--sinch-sys-font-desktop-title-l);
}
```

#### Importing Theme (and CSS) in a Shadow Root

Install the following packages:

1. Dependencies: `yarn add @nectary/scoped-stylesheet` / `npm install @nectary/scoped-stylesheet`
2. devDepencencies: `yarn add -D postcss postcss-import postcss-loader` / `npm install --save-dev postcss postcss-import postcss-loader`

Make sure to add the following to the webpack rules:

```ts
module.exports = {
  //...
  module: {
    rules: [
      // ...
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-import")],
              },
            },
          },
        ],
        type: "asset/source",
      },
    ],
  },
  // ...
};
```

In the entry file of your microfrontend:

```tsx
import { ScopedStyleSheet } from "@nectary/scoped-stylesheet";
import baseTheme from "@nectary/theme-base";
import mmTheme from "@nectary/theme-message-media";
import simpleTextingTheme from "@nectary/theme-simple-texting";

const mount = (element) => {
  // ...
  const shadowRoot = // some logic to create the shadowroot
  const appElement = shadowRoot.appendChild(document.createElement("div")); // or other logic for the root element

  const scopedStyleSheet = new ScopedStyleSheet(shadowRoot);
  scopedStyleSheet.addStyle(baseTheme);
  scopedStyleSheet.addStyle(mmTheme);
  scopedStyleSheet.addStyle(simpleTextingTheme);

  appElement.className = "nectary-theme-base nectary-theme-message-media nectary-theme-base nectary-simple-texting"

  // ... Render app within appElement
}
```

##### Explanation

In the `index.css` of the theme we import multiple files that compose the theme, in order to be able to read them, webpack needs the `postcss-loader` with the `postcss-import` plugin. Since we want to be able to inject the css in the shadow root we need the css imports to be a string, therefore we use the rule `type: "asset/source"`.

The `@nectary/scoped-stylesheet` package allows us to append styles directly within the shadow root for use, we can then use this to inject the themes. Make sure to add the correct className to the root element of the app inside the shadow root!

### Components

Import component:

```js
import '@nectary/components/button'
```

Use it in React/Vue/Angular/etc, for example:

```jsx
<sinch-button value="Click me" aria-label="Submit button" on-click={() => console.log('click')}></sinch-button>
```

⚠️ Note that it's not allowed to self-close custom element tags.

## Testing

If you are testing your application using Nectary components with Jest, you might run into some problems, as it does not work out of the box. Here are the common pitfalls and their solutions.

### Example configuration

`jest.config.js`

```js
/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!@nectary)"
  ]
}
```

`babel.config.js`

```js
module.exports = {presets: ['@babel/preset-env']}
```

### CSS

If you already have a babel loader for CSS, you might not need this part. If you do not, you can use [identity-obj-proxy](https://www.npmjs.com/package/identity-obj-proxy) to mock your CSS imports:

```shell
npm install identity-obj-proxy
# or
yarn add identity-obj-proxy
```

Then add this part to your jest.config.js file:

```js
moduleNameMapper: {
  "\\.(css)$": "identity-obj-proxy"
},
```

It lets Jest know how to mock the css imports in your codebase, like for example when you import the theme:

```js
import '@nectary/theme-base'
```

This import should not throw an error now.

### JS and TS

You are going to need to install [babel-jest](https://www.npmjs.com/package/babel-jest) if it is not already done:

```shell
npm install babel-jest
# or
yarn add babel-jest
```

Then add this lines to your jest.config.js file:

```js
transform: {
  "^.+\\.(ts|tsx)?$": "ts-jest", // if you are using Typescript and ts-jest
  "^.+\\.(js|jsx)$": "babel-jest"
},
transformIgnorePatterns: [
  "node_modules/(?!@nectary)"
]
```

It is necessary to export the env preset in the babel.js.config file:

```js
module.exports = { presets: ['@babel/preset-env'] }
```

If you import any component:

```js
import '@nectary/components/input'
```

It should not throw the `Jest encountered an unexpected token` error.

