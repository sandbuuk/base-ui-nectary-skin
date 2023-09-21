ESLint plugin to check and autofix missing/redundant Nectary component imports.

## Install

```
npm add @nectary/eslint-plugin --save-dev
yarn add @nectary/eslint-plugin --dev
pnpm add @nectary/eslint-plugin --save-dev
```

## Config

```js
plugins: [
  '@nectary'
],
rules: {
  '@nectary/imports': 'error'
}
```
