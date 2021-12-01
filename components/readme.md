# 🐝 Nectary

Design System's framework-agnostic Component Library implementation.

>Nectaries are specialized nectar-producing structures of the flower.

>Bumblebees eat nectar and pollen made by flowers. The sugary nectar provides the bees with energy while the pollen provides them with protein.

## Install

Add the following line to `.npmrc` in the project root:

```
@nectary:registry=https://nexus.int.clxnetworks.net/repository/sinch_npm/
```

Add the component library dependency to `package.json`:

```
npm install @nectary/components
# or
yarn add @nectary/components
```

⚠️ VPN is required.

## Usage

### Theme

Import CSS file with [custom properties](./theme.css) (variables):

```js
import '@nectary/components/theme.css'
```

Use color palette or custom font face:

```css
span {
  color: var(--sinch-color-honey-700);
}

h2 {
  font: var(--sinch-font-title-2);
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

## TODO

- [x] [Storybook](https://saas.pages.sinch.com/engage/engage/) (VPN is required)
- [x] Follow the WCAG 2.1 guidelines
- [x] Tests
  - [x] (in progress) Cross-browser Chromium/Firefox/WebKit visual regression tests
  - [x] Cross-framework React/Vue/Angular tests 
  - [x] a11y tests using [Axe](https://www.deque.com/axe/) library
- [ ] CI/CD
  - [ ] Auto-publish on Git tag
  - [ ] Provide unique Storybook preview link in PRs
