import { useArgs, useRef } from '@storybook/addons'
import { useStoryWrapper } from './use-story-wrapper'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/popover'

export default {
  title: 'Components/Popover',
  argTypes: {
    open: {
      description: 'Sets popover open state',
      control: 'boolean',
    },
    orientation: {
      description: 'Popover Orientation',
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    onClose: {
      description: 'Close event handler',
      action: 'onClose',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Popover component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-popover']> => ({ onClose }) => {
  const [{
    open,
    orientation,
  }, updateArgs] = useArgs()

  const $wrapper = useStoryWrapper()
  const popoverRef = useRef<HTMLElementTagNameMap['sinch-popover'] | null>(null)

  if (popoverRef.current === null) {
    const $popover = document.createElement('sinch-popover')

    $popover.innerHTML = innerHTML

    $popover.querySelector('sinch-button')?.addEventListener('click', () => {
      updateArgs({ open: true })
    })

    $popover.addEventListener('close', (e: any) => {
      onClose?.(e)
      updateArgs({ open: false })
    })

    $wrapper.appendChild($popover)
    popoverRef.current = $popover
  }

  const $popover = popoverRef.current!

  $popover.orientation = orientation
  $popover.open = open

  return $wrapper
}

const popoverInnerHTML = `
  <sinch-button text="Button" type="cta-secondary" slot="target"></sinch-button>
  <section slot="content" style="width: 240px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</section>
`

export const Popover = Template(popoverInnerHTML)

Popover.args = {
  open: false,
  orientation: 'bottom-right',
}

Popover.parameters = {
  docs: {
    source: {
      code: `<sinch-popover open={isOpen} onClose={onClose}>${popoverInnerHTML}</sinch-input>`,
    },
  },
}
