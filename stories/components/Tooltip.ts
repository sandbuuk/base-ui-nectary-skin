import { orientationValues } from '@sinch-engage/nectary/tooltip/utils'
import { useArgs, useRef } from '@storybook/addons'
import { useStoryWrapper } from '../use-story-wrapper'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/tooltip'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

export default {
  title: 'Components/Tooltip',
  argTypes: {
    orientation: {
      description: 'Tooltip Orientation',
      control: 'select',
      options: orientationValues,
    },
    text: {
      description: 'Text',
      control: 'text',
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

const Template = (innerHTML: string): Story => () => {
  const [{
    text,
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
  tooltip.inverted = inverted
  tooltip.orientation = orientation

  return $wrapper
}

export const Tooltip = Template('<sinch-icon-button><sinch-icon-close slot="icon"></sinch-icon-close></sinch-icon-button>')

Tooltip.args = {
  text: 'Tooltip text long',
  inverted: false,
}

Tooltip.parameters = {
  docs: {
    source: {
      code: `
<sinch-tooltip text={text}>
  <sinch-icon-button>
    <sinch-icon-close slot="icon"></sinch-icon-close>
  </sinch-icon-button>
</sinch-tooltip>
`,
    },
  },
}
