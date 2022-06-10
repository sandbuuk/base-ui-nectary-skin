import { useArgs, useRef } from '@storybook/addons'
import { useStoryWrapper } from './use-story-wrapper'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/dropdown'
import '@sinch-engage/nectary/icons/open-in-new'

export default {
  title: 'Components/Dropdown',
  argTypes: {
    open: {
      description: 'Is dropdown open',
      control: 'boolean',
    },
    value: {
      description: 'Dropdown value',
      control: 'text',
    },
    orientation: {
      description: 'Dropdown Orientation',
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    maxVisibleItems: {
      description: 'Number of visible items in the list',
      control: { type: 'range', min: 1, max: 5, step: 1 },
    },
    onChange: {
      description: 'Handler to sync dropdown value with the state',
      action: 'onChange',
    },
    onClose: {
      description: 'Close event handler',
      action: 'onClose',
    },
    onFocus: {
      description: 'Focus handler',
      action: 'onFocus',
    },
    onBlur: {
      description: 'Blur handler',
      action: 'onBlur',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Dropdown component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-dropdown']> => ({ onChange }) => {
  const [{
    open,
    value,
    maxVisibleItems,
    orientation,
  }, updateArgs] = useArgs()

  const $wrapper = useStoryWrapper()
  const dropdownRef = useRef<HTMLElementTagNameMap['sinch-dropdown'] | null>(null)

  if (dropdownRef.current === null) {
    const $dropdown = document.createElement('sinch-dropdown')

    $dropdown.innerHTML = innerHTML

    $dropdown.querySelector('sinch-button')?.addEventListener('click', () => {
      updateArgs({ open: true })
    })

    $dropdown.addEventListener('change', (e: any) => {
      onChange(e.detail)
      updateArgs({ value: e.detail, open: false })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    $dropdown.addEventListener('close', () => {
      updateArgs({ open: false })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    $wrapper.appendChild($dropdown)
    dropdownRef.current = $dropdown
  }

  const $dropdown = dropdownRef.current!

  $dropdown.open = open
  $dropdown.value = value
  $dropdown.orientation = orientation
  $dropdown.maxVisibleItems = maxVisibleItems

  return $wrapper
}

const dropdownInnerHTML = `
  <sinch-button text="Button" type="cta-secondary" slot="target"></sinch-button>
  <sinch-dropdown-option value="1" text="Option 1 value long" slot="option">
    <sinch-icon-open-in-new></sinch-icon-open-in-new>
  </sinch-dropdown-option>
  <sinch-dropdown-option value="2" text="Option 2 value" slot="option" disabled>
    <sinch-icon-open-in-new></sinch-icon-open-in-new>
  </sinch-dropdown-option>
  <sinch-dropdown-option value="3" text="Option 3 value" slot="option"></sinch-dropdown-option>
  <sinch-dropdown-option value="4" text="Option 4 value" slot="option"></sinch-dropdown-option>
`

export const Dropdown = Template(dropdownInnerHTML)

Dropdown.args = {
  open: false,
  value: '2',
  orientation: 'bottom-right',
}

Dropdown.parameters = {
  docs: {
    source: {
      code: `<sinch-dropdown open={isOpen} value={value} onChange={setValue} onClose={onClose}>${dropdownInnerHTML}</sinch-input>`,
    },
  },
}
