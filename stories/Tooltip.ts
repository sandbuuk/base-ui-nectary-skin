import { useArgs, useRef } from '@storybook/addons'
import { useStoryWrapper } from './use-story-wrapper'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/tooltip'
import '@sinch-engage/nectary/icon/open-in-new'

export default {
  title: 'Components/Tooltip',
  argTypes: {
    orientation: {
      description: 'Tooltip Orientation',
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    text: {
      description: 'Text',
      control: 'text',
    },
    width: {
      description: 'Max Width',
      control: 'number',
    },
    inverted: {
      description: 'Is Inverted',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Tooltip component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-tooltip']> => () => {
  const [{
    text,
    width,
    inverted,
    orientation,
  }] = useArgs()
  const $wrapper = useStoryWrapper()
  const tooltipef = useRef<HTMLElementTagNameMap['sinch-tooltip'] | null>(null)

  if (tooltipef.current === null) {
    const $input = document.createElement('sinch-tooltip')

    $input.innerHTML = innerHTML

    $wrapper.appendChild($input)
    tooltipef.current = $input
  }

  const tooltip = tooltipef.current!

  tooltip.text = text
  tooltip.width = width
  tooltip.inverted = inverted
  tooltip.orientation = orientation

  return $wrapper
}

export const Tooltip = Template('<sinch-icon-open-in-new size=24></sinch-icon-open-in-new>')

Tooltip.args = {
  text: 'Tooltip text long',
}

Tooltip.parameters = {
  docs: {
    source: {
      code: `
<sinch-tooltip text={text}>
  <sinch-icon-open-in-new size="24"></sinch-icon-open-in-new>
</sinch-tooltip>
`,
    },
  },
}
