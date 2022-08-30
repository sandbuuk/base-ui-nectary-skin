import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/search'
import '@sinch-engage/nectary/icons/close'

const options: string[] = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
]

export const CompositionExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  const onOptionClick = (text: string) => {
    setValue(text)
    setIsOpen(false)
  }

  return (
    <sinch-action-menu
      orientation="bottom"
      maxVisibleItems={3}
      aria-label="Search autocomplete"
      open={isOpen}
      on-close={() => setIsOpen(false)}
    >
      <sinch-field slot="target" label="Search">
        <sinch-input
          slot="input"
          aria-label="Search"
          value={value}
          on-focus={() => setIsOpen(true)}
          on-blur={() => setIsOpen(false)}
          on-change={(e) => setValue(e.detail)}
        >
          <sinch-icon-search slot="icon"/>
          <sinch-icon-button
            slot="right"
            aria-label="Clear search"
            small
            on-click={() => setValue('')}
          >
            <sinch-icon-close slot="icon"/>
          </sinch-icon-button>
        </sinch-input>
      </sinch-field>
      {
        options.map((text) => (
          <sinch-action-menu-option
            key={text}
            text={text}
            slot="option"
            aria-label={text}
            on-click={() => onOptionClick(text)}
          />
        ))
      }
    </sinch-action-menu>
  )
}
