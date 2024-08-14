import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { TSinchInputElement } from '@nectary/components/input/types'
import type { FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/input'
import '@nectary/components/field'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/button'
import '@nectary/assets/icons/magnifying-glass'
import '@nectary/assets/icons/fa-xmark'

const options: string[] = [
  'Option 1 value long long long',
  'Option 2',
  'Option 3',
  'Option 4',
]

export const Search: FC = () => {
  const [search] = useSearchParams()
  const [isOpen, setOpen] = useState(false)
  const [isClearActive, setClearActive] = useState(false)
  const [value, setValue] = useState(search.get('value') ?? '')
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
    window.dispatchEvent(new CustomEvent('sinch-search-change', { detail: text }))

    setValue(text)
    setClearActive(text.length > 0)
    setOpen(false)
  }
  const onClose = () => {
    setOpen(false)
  }
  const onFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-search-focus'))
    setOpen(true)
    setClearActive(value.length > 0)
  }
  const onBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-search-blur'))
  }

  return (
    <sinch-popover
      open={isOpen}
      orientation="bottom"
      on-close={onClose}
      aria-label="Search"
    >
      <sinch-field slot="target" label="Label">
        <sinch-input
          slot="input"
          ref={inputRef}
          aria-label="Search input"
          placeholder="Search input"
          value={value}
          on-change={onChange}
          on-focus={onFocus}
          on-blur={onBlur}
        >
          <sinch-icon-magnifying-glass slot="icon"/>
          {isClearActive && (
            <sinch-button slot="right" on-click={onClearClick} aria-label="Clear">
              <sinch-icon-fa-xmark slot="icon"/>
            </sinch-button>
          )}
        </sinch-input>
      </sinch-field>
      <sinch-action-menu aria-label="Search autocomplete" slot="content">
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
