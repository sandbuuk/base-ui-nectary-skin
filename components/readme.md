# 🐝 Nectary

Design System's framework-agnostic Component Library implementation.

>Nectaries are specialized nectar-producing structures of the flower.

>Bumblebees eat nectar and pollen made by flowers. The sugary nectar provides the bees with energy while the pollen provides them with protein.

## Install

Add the component library dependency to `package.json`:

```
npm install @nectary/components
# or
yarn add @nectary/components
```

## Usage

### Registry

Nectary needs a custom elements registry to work with, even if it's a global default one:

```js
import { setNectaryRegistry } from '@nectary/components/utils'

setNectaryRegistry(window.customElements)

// App
```

Or a custom one for the Shell/MFE use case, see [mfe-helper-react](https://gitlab.com/sinch/sinch-projects/applications/teams/core/core-npm-packages/-/tree/main/packages/mfe-helper-react) as an example for more details:

```js
import { setNectaryRegistry } from '@nectary/components/utils'

const customRegistry = new CustomElementRegistry();

setNectaryRegistry(customRegistry)

// ShadowRoot wrapper
```

### Theme

```js
import '@nectary/theme-base'
```

Use color palette or custom font face:

```css
span {
  color: var(--sinch-color-honey-700);
}

h2 {
  font: var(--sinch-font-title-l);
}
```

### Components

Import component:

```js
import '@nectary/components/button'
```

Use it in React/Vue/Angular/etc, for example:

```jsx
<sinch-button value="Click me" onClick={() => console.log('click')}></sinch-button>
```

⚠️ Note that it's not allowed to self-close custom element tags.

## Testing

If you are testing your application using Nectary components with Jest, you might run into some problems, as it does not work out of the box. Here are the common pitfalls and their solutions.

### Example configuration

jest.config.js

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

babel.config.js

```js
module.exports = {presets: ['@babel/preset-env']}
```

### CSS

If you already have a babel loader for CSS, you might not need this part. If you do not, you can use [identity-obj-proxy](https://www.npmjs.com/package/identity-obj-proxy) to mock your CSS imports:

```
npm install identity-obj-proxy
# or
yarn add identity-obj-proxy
```

Then add this part to your jest.config.js file:

```
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

```
npm install babel-jest
# or
yarn add babel-jest
```

Then add this lines to your jest.config.js file:

```
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
module.exports = {presets: ['@babel/preset-env']}
```

If you import any component:

```js
import '@nectary/components/input'
```

It should not throw the error: 

```Jest encountered an unexpected token```
