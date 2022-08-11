import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/horizontal-stepper'
import '@sinch-engage/nectary/horizontal-stepper-item'

export default {
  title: 'Components/HorizontalStepper',
  argTypes: {
    index: { control: 'text', description: 'Stepper Item index' },
  },
} as Meta

const Template = (innerHTML: string): Story => () => {
  const [{ index }] = useArgs()
  const accRef = useRef<HTMLElementTagNameMap['sinch-horizontal-stepper'] | null>(null)

  if (accRef.current === null) {
    const $acc = document.createElement('sinch-horizontal-stepper')

    $acc.innerHTML = innerHTML

    accRef.current = $acc
  }

  const $acc = accRef.current!

  $acc.index = index

  return $acc
}

const stepperInnerHtml = `
  <sinch-horizontal-stepper-item label="Step 1" description="Step description"></sinch-horizontal-stepper-item>
  <sinch-horizontal-stepper-item status="error" label="Step 2" description="Step description"></sinch-horizontal-stepper-item>
  <sinch-horizontal-stepper-item status="skip" label="Step label long long long long long" description="Step description long long long long long"></sinch-horizontal-stepper-item>
  <sinch-horizontal-stepper-item label="Step label long long long long long" description="Step description long long long long long"></sinch-horizontal-stepper-item>
`

export const HorizontalStepper = Template(stepperInnerHtml)

HorizontalStepper.args = {
  index: '0',
}

HorizontalStepper.parameters = {
  docs: {
    source: {
      code: `
<sinch-horizontal-stepper index="0">${stepperInnerHtml}</sinch-horizontal-stepper>`,
    },
  },
}
