ESLint plugin to check and autofix missing/redundant Nectary component imports.

## Install

```
npm add @sinch-engage/eslint-plugin-nectary --save-dev
yarn add @sinch-engage/eslint-plugin-nectary --dev
pnpm add @sinch-engage/eslint-plugin-nectary --save-dev
```

## Config

```js
plugins: [
  '@sinch-engage/nectary'
],
rules: {
  '@sinch-engage/nectary/imports': 'error'
}
```