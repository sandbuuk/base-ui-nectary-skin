import { useArgs, useRef } from '@storybook/addons'
import { useStoryWrapper } from '../use-story-wrapper'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/search'
import '@sinch-engage/nectary/search-option'

export default {
  title: 'Components/Search',
  argTypes: {
    value: {
      description: 'Input value',
      control: 'text',
    },
    maxVisibleItems: {
      description: 'Number of visible items in the list',
      control: { type: 'range', min: 1, max: 5, step: 1 },
    },
    onChange: {
      description: 'Handler to sync input value with the state',
      action: 'onChange',
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
        component: 'Search component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (innerHTML: string): Story => ({ onChange }) => {
  const [{
    value,
    label,
    placeholder,
    maxVisibleItems,
  }, updateArgs] = useArgs()

  const $wrapper = useStoryWrapper()
  const inputRef = useRef<HTMLElementTagNameMap['sinch-search'] | null>(null)

  if (inputRef.current === null) {
    const $input = document.createElement('sinch-search')

    $input.innerHTML = innerHTML

    $input.addEventListener('keydown', (e) => {
      e.stopPropagation()
    })

    $input.addEventListener('change', (e) => {
      e.stopPropagation()
      onChange(e.detail)
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      // setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    $wrapper.appendChild($input)
    inputRef.current = $input
  }

  const $input = inputRef.current!

  $input.value = value
  $input.label = label
  $input.placeholder = placeholder
  $input.maxVisibleItems = maxVisibleItems

  return $wrapper
}

const dropdownInnerHTML = `
  <sinch-search-option text="Option 1 value long" slot="option"></sinch-search-option>
  <sinch-search-option text="Option 2 value" slot="option"></sinch-search-option>
  <sinch-search-option text="Option 3 value" slot="option"></sinch-search-option>
  <sinch-search-option text="Option 4 value" slot="option"></sinch-search-option>
`

export const Search = Template(dropdownInnerHTML)

Search.args = {
  label: 'Search',
  value: '',
  placeholder: 'Placeholder',
  maxVisibleItems: 0,
}

Search.parameters = {
  docs: {
    source: {
      code: `<sinch-search label="Search" placeholder="Placeholder" value={value} onChange={setValue}>${dropdownInnerHTML}</sinch-search>`,
    },
  },
}
