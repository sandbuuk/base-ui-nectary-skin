import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/vertical-stepper'
import '@sinch-engage/nectary/vertical-stepper-item'

export default {
  title: 'Components/VerticalStepper',
  argTypes: {
    index: { control: 'text', description: 'Stepper Item index' },
  },
} as Meta

const Template = (innerHTML: string): Story => () => {
  const [{ index }] = useArgs()
  const accRef = useRef<HTMLElementTagNameMap['sinch-vertical-stepper'] | null>(null)

  if (accRef.current === null) {
    const $acc = document.createElement('sinch-vertical-stepper')

    $acc.innerHTML = innerHTML

    accRef.current = $acc
  }

  const $acc = accRef.current!

  $acc.index = index

  return $acc
}

const stepperInnerHtml = `
  <sinch-vertical-stepper-item label="Step 1" description="Step description"></sinch-vertical-stepper-item>
  <sinch-vertical-stepper-item status="error" label="Step 2" description="Step description"></sinch-vertical-stepper-item>
  <sinch-vertical-stepper-item status="skip" label="Step label long long long long long" description="Step description long long long long long"></sinch-vertical-stepper-item>
  <sinch-vertical-stepper-item label="Step label long long long long long" description="Step description long long long long long"></sinch-vertical-stepper-item>
`

export const VerticalStepper = Template(stepperInnerHtml)

VerticalStepper.args = {
  index: '0',
}

VerticalStepper.parameters = {
  docs: {
    source: {
      code: `
<sinch-vertical-stepper index="0">${stepperInnerHtml}</sinch-vertical-stepper>`,
    },
  },
}
