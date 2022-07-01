import { useCallback, useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/search'
import '@sinch-engage/nectary/search-option'

type TSearch = {
  search: URLSearchParams,
}

export const Search: FC<TSearch> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent<string>>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-search-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const onFocus = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-search-focus'))
  }, [])
  const onBlur = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-search-blur'))
  }, [])
  const maxVisibleItems = useMemo(() => {
    const val = search.get('maxvisibleitems')

    return val !== null ? parseInt(val) : undefined
  }, [search])
  const label = search.get('label') ?? ''
  const placeholder = search.get('placeholder') ?? undefined

  const options = value.length < 5 ? (
    null
  ) : (
    <>
      <sinch-search-option text="Option 1 value long long long" slot="option" aria-label="Option 1"/>
      <sinch-search-option text="Option 2 value" slot="option" aria-label="Option 2"/>
      <sinch-search-option text="Option 3 value" slot="option" aria-label="Option 3"/>
      <sinch-search-option text="Option 4 value" slot="option" aria-label="Option 4"/>
    </>
  )

  return (
    <sinch-search
      label={label}
      placeholder={placeholder}
      maxVisibleItems={maxVisibleItems}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="Search"
      clear-aria-label="Clear"
    >
      {options}
    </sinch-search>
  )
}
