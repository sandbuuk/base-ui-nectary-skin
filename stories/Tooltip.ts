import { useArgs, useRef } from '@storybook/addons'
import type { TSinchTooltip } from '@saas/components/tooltip'
import type { Meta, Story } from '@storybook/html'
import '@saas/components/tooltip'
import '@saas/components/icon/share'

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

const Template: Story<TSinchTooltip> = () => {
  const [{
    text,
    width,
    inverted,
    orientation,
  }] = useArgs()

  const tooltipef = useRef<(HTMLElement & TSinchTooltip) | null>(null)
  const wrapperRef = useRef<(HTMLElement) | null>(null)

  if (tooltipef.current === null) {
    const $wrapper = document.createElement('div')

    $wrapper.style.height = '300px'
    $wrapper.style.display = 'flex'
    $wrapper.style.justifyContent = 'center'
    $wrapper.style.alignItems = 'center'

    const $input = document.createElement('sinch-tooltip')

    $input.innerHTML = `
      <sinch-icon-share size=24></sinch-icon-share>
    `

    $wrapper.appendChild($input)

    tooltipef.current = $input
    wrapperRef.current = $wrapper
  }

  const tooltip = tooltipef.current!

  tooltip.text = text
  tooltip.width = width
  tooltip.inverted = inverted
  tooltip.orientation = orientation

  return wrapperRef.current!
}

export const Tooltip = Template.bind({})

Tooltip.args = {
  text: 'Tooltip text long',
}

Tooltip.parameters = {
  docs: {
    source: {
      code: `
      <sinch-tooltip text={text} width={width}></sinch-tooltip>
      `,
    },
  },
}
