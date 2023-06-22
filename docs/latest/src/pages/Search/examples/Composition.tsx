import { useRef, useState } from 'react'
import type { TSinchInputElement } from '@sinch-engage/nectary/input/types'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'

const inputWidth: CSSProperties = {
  width: 250,
}

const options: string[] = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
]

export const CompositionExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClearActive, setClearActive] = useState(false)
  const [value, setValue] = useState('')
  const inputRef = useRef<TSinchInputElement>(null)

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
    setClearActive(e.detail.length > 0)
  }

  const onClearClick = () => {
    setValue('')
    setClearActive(false)
    inputRef.current!.focus()
  }

  const onOptionClick = (text: string) => {
    setValue(text)
    setClearActive(true)
    setIsOpen(false)
  }

  return (
    <sinch-popover
      orientation="bottom"
      open={isOpen}
      aria-label="Search autocomplete"
      on-close={() => setIsOpen(false)}
    >
      <sinch-field slot="target" label="Search">
        <sinch-input
          slot="input"
          ref={inputRef}
          aria-label="Search"
          value={value}
          style={inputWidth}
          on-focus={() => setIsOpen(true)}
          on-blur={() => setIsOpen(false)}
          on-change={onChange}
        >
          <sinch-icon slot="icon" name="search"/>
          {isClearActive && (
            <sinch-icon-button slot="right" on-click={onClearClick} aria-label="Clear search">
              <sinch-icon slot="icon" name="close"/>
            </sinch-icon-button>
          )}
        </sinch-input>
      </sinch-field>
      <sinch-action-menu
        slot="content"
        rows={3}
        aria-label="Search autocomplete"
      >
        {
          options.map((text) => (
            <sinch-action-menu-option
              key={text}
              text={text}
              aria-label={text}
              on-click={() => onOptionClick(text)}
            />
          ))
      }
      </sinch-action-menu>
    </sinch-popover>
  )
}
