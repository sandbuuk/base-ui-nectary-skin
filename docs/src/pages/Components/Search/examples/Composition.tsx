import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
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
      onClose={() => setIsOpen(false)}
    >
      <sinch-input
        slot="target"
        label="Search"
        aria-label="Search"
        value={value}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onChange={(e) => setValue(e.nativeEvent.detail)}
      >
        <sinch-icon-search slot="icon"/>
        <sinch-icon-button
          slot="right"
          aria-label="Clear search"
          small
          onClick={() => setValue('')}
        >
          <sinch-icon-close slot="icon"/>
        </sinch-icon-button>
      </sinch-input>
      {
        options.map((text) => (
          <sinch-action-menu-option
            key={text}
            text={text}
            slot="option"
            aria-label={text}
            onClick={() => onOptionClick(text)}
          />
        ))
      }
    </sinch-action-menu>
  )
}
