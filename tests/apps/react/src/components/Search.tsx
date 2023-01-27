import { useCallback, useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary-assets/icons/search'
import '@sinch-engage/nectary-assets/icons/close'

type TSearch = {
  search: URLSearchParams,
}

const options: string[] = [
  'Option 1 value long long long',
  'Option 2',
  'Option 3',
  'Option 4',
]

export const Search: FC<TSearch> = ({ search }) => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }
  const onOptionClick = (text: string) => {
    window.dispatchEvent(new CustomEvent('sinch-search-change', { detail: text }))

    setValue(text)
    setOpen(false)
  }
  const onClose = () => {
    setOpen(false)
  }
  const onFocus = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-search-focus'))
    setOpen(true)
  }, [])
  const onBlur = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-search-blur'))
  }, [])

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
          aria-label="Search input"
          placeholder="Search input"
          value={value}
          on-change={onChange}
          on-focus={onFocus}
          on-blur={onBlur}
        >
          <sinch-icon-search slot="icon"/>
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
