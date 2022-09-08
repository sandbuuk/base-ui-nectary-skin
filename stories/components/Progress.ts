import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/progress'

export default {
  title: 'Components/Progress',
  argTypes: {
    value: {
      description: 'Progress value from 0 to 100',
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    detailed: {
      description: 'Shows percentage text',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Progress component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (): Story => () => {
  const [args] = useArgs()
  const elRef = useRef<HTMLElementTagNameMap['sinch-progress'] | null>(null)

  if (elRef.current == null) {
    const $el = document.createElement('sinch-progress')

    elRef.current = $el
  }

  const $el = elRef.current!

  $el.value = args.value
  $el.detailed = args.detailed

  return $el
}

export const Progress = Template()

Progress.args = {
  value: 0,
  detailed: false,
}

Progress.parameters = {
  docs: {
    source: {
      code: `
<sinch-progress
  value={progressValue}
  detailed
></sinch-progress>`,
    },
  },
}
