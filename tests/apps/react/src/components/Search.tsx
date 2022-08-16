import { useCallback, useMemo, useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/search'
import '@sinch-engage/nectary/icons/close'

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
    const value = e.detail

    setValue(value)

    if (value.length >= 5) {
      setOpen(true)
    }
  }
  const onOptionClick = (text: string) => {
    window.dispatchEvent(new CustomEvent('sinch-search-change', { detail: text }))

    setValue(text)
    setOpen(false)
  }
  const onClose = () => {
    setOpen(false)
  }
  const onClear = () => {
    setValue('')
    setOpen(false)
  }
  const onFocus = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-search-focus'))
  }, [])
  const onBlur = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-search-blur'))
    setOpen(false)
  }, [])
  const maxVisibleItems = useMemo(() => {
    const val = search.get('maxvisibleitems')

    return val !== null ? parseInt(val) : undefined
  }, [search])
  const labelText = search.get('label') ?? ''
  const optionalText = search.get('optional') ?? undefined
  const additionalText = search.get('additional') ?? undefined
  const invalidText = search.get('invalid') ?? undefined
  const placeholderText = search.get('placeholder') ?? undefined
  const isDisabled = search.get('disabled') != null
  const tooltipText = search.get('tooltip')

  return (
    <sinch-action-menu
      orientation="bottom"
      open={isOpen}
      maxVisibleItems={maxVisibleItems}
      aria-label="Search"
      on-close={onClose}
    >
      <sinch-input
        slot="target"
        aria-label="Search Input"
        value={value}
        on-change={onChange}
        label={labelText}
        optionalText={optionalText}
        additionalText={additionalText}
        invalidText={invalidText}
        placeholder={placeholderText}
        disabled={isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <sinch-icon-search slot="icon"/>
        <sinch-icon-button
          slot="right"
          small
          aria-label="Clear search"
          onClick={onClear}
          onFocus={(e) => {
            e.stopPropagation()
          }}
          onBlur={(e) => {
            e.stopPropagation()
          }}
        >
          <sinch-icon-close slot="icon"/>
        </sinch-icon-button>
        {tooltipText !== null && (
          <sinch-help-tooltip text={tooltipText} slot="tooltip"/>
        )}
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
