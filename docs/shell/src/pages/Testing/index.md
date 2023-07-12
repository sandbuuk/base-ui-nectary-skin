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
import { setNectaryRegistry } from '@sinch-engage/nectary/utils/element'

setNectaryRegistry(window.customElements)
```

### Example Tests

Below, we show a simple example component: a `sinch-button` connected to a `sinch-text` via a state variable called `count`. The component you're building will probably have a more sensible use case.

`ButtonCounter.tsx`

```tsx
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/text'

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

### Setup

Besides the steps we outlined in the [Intro](http://localhost:5000/?version=latest&path=/intro#testing).
Its should be enough to follow the steps on the Testing Library [documentation](https://testing-library.com/).
Do not forget to set the NectaryRegistry and like below in your tests.

```tsx
import { setNectaryRegistry } from '@sinch-engage/nectary/utils'

setNectaryRegistry(window.customElements)
```

### Example Tests

Below we show a simple example component: A `sinch-button` connected to a `sinch-text` via a state variable called `count`.

`ButtonCounter.test.tsx`

```tsx
import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
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
