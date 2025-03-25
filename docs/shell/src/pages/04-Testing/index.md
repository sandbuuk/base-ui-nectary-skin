# Testing

## Introduction

### Testing your application

We hope that the components we have built will make it easier for you to develop your application.
As the Nectary team, we take responsibility for testing the Nectary components.
Your role is to test the application you have developed using these components.
During the testing process, it is important to interact with our components solely through their public interface.
Keep in mind that implementation details of the components may change, and it is not advisable to rely on those details in your test code.
[Read more here](https://www.artima.com/articles/design-principles-from-design-patterns).

### What is the purpose of testing

Testing serves the purpose of ensuring a positive user experience.
It also benefits the development process itself, as demonstrated by Test-Driven Development (TDD).
Effective testing should mirror the way users interact with your application.
While the ultimate quality standard is achieved through real users in a real browser. However, practicality calls for automation efforts.

## Main recommendation: Playwright

We recommend that you test your application with Playwright. Playwright is used to test the Nectary components, so maintainability comes for free, meaning we can guarantee that it will work well.
Additionally, Playwright is more similar to how real users interact in a real browser compared to many other frameworks (like Testing Library and Jest with JSDOM), making it more reliable. Read more [here](https://playwright.dev/docs/why-playwright).

### Setup

For setting things up, it should be enough to follow the guide on the Playwright [website](https://playwright.dev/docs/test-components).
However, you will need to add the following snippet to the `<rootDir>/playwright/index.tsx` file.

```tsx
import { setNectaryRegistry } from '@nectary/components/utils/element'

setNectaryRegistry(window.customElements)
```

### Example Tests

Below, we show a simple example component: a `sinch-button` connected to a `sinch-text` via a state variable called `count`. The component you're building will probably have a more sensible use case.

`ButtonCounter.tsx`

```tsx
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/text'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
}

export const ButtonCounterExample: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="test" style={wrapperStyles}>
      <sinch-button
        text="Click"
        aria-label="Click"
        type="primary"
        size="l"
        on-click={() => {
          setCount((prevCount) => prevCount + 1)
        }}
      />
      <sinch-text type="xs">{`counter is at current value ${count}`}</sinch-text>
    </div>
  )
}
```

`ButtonCounter.test.tsx`

```tsx
import { expect, test } from '@playwright/experimental-ct-react'
import { ButtonCounter } from './ButtonCounter'

test('Click on the button two times', async ({ mount }) => {
  const component = await mount(<ButtonCounter/>)
  await component.locator('[aria-label=Click]').click()
  // The second click is to show that it's possible to select the Nectary components directly
  await component.locator('sinch-button').click()
  await expect(component).toContainText('counter is at current value 2')
})
```

## Playwright for end-to-end testing

For end-to-end testing we recommend using Playwright.

### Setup

For setting things up it should be enough to follow the guide on the [Playwright website](https://playwright.dev/docs/intro)

### Example Tests

Below we show a simple example component: A `sinch-button` connected to a `sinch-text` via state variable called `count`.

`ButtonCounter.spec.tsx`

```tsx
import { test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/button-counter')
  await page.getByLabel('Click').click()
  await page.getByLabel('counter is at current value 1')
})
```

## Testing Library + Jest

It's possible to test your code with Testing Library + Jest.

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

Its should be enough to follow the steps on the Testing Library [documentation](https://testing-library.com/).
Do not forget to set the NectaryRegistry and like below in your tests.

```tsx
import { setNectaryRegistry } from '@nectary/components/utils'

setNectaryRegistry(window.customElements)
```

### Example Tests

Below we show a simple example component: A `sinch-button` connected to a `sinch-text` via a state variable called `count`.

`ButtonCounter.test.tsx`

```tsx
import { setNectaryRegistry } from '@nectary/components/utils'
import { fireEvent, render, screen } from '@testing-library/react'
import { ButtonCounter } from './ButtonCounter'

setNectaryRegistry(window.customElements)

test('Click Button, read resulting value from text field', () => {
  render(<ButtonCounter/>)
  const button = screen.getByLabelText('Click')
  fireEvent(button, new CustomEvent('-click'))
  fireEvent(button, new CustomEvent('-click'))
  fireEvent(button, new CustomEvent('-click'))
  screen.getByText('counter is at current value 3')
})
```

## Cypress E2E

It's possible to test your code with Cypress E2E [cypress-testing-library](https://testing-library.com/docs/cypress-testing-library/intro/).

### Example Tests

Below we show a simple example component: A `sinch-button` connected to a `sinch-text` via state variable called `count`.

`ButtonCounter.cy.tsx`

```tsx
it('Button', async () => {
  cy.visit('/button')
  const element = await cy.findByLabelText('Click')[0]
  element.dispatchEvent(new CustomEvent('-click'))
  cy.findByText('counter is at current value 1')
})
```
