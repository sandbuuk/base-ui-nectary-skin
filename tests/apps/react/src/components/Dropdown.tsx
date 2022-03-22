import { isAttrTrue } from '@sinch-engage/nectary/utils'
import { useCallback, useMemo, useState } from 'react'
import type { TSinchDropdownOrientation } from '@sinch-engage/nectary/dropdown'
import type { FC, SyntheticEvent } from 'react'

type TDropdown = {
  search: URLSearchParams,
}

export const Dropdown: FC<TDropdown> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent<string>>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-dropdown-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const onFocus = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-dropdown-focus'))
  }, [])
  const onBlur = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-dropdown-blur'))
  }, [])
  const maxVisibleItems = useMemo(() => {
    const val = search.get('maxvisibleitems')

    return val !== null ? parseInt(val) : undefined
  }, [search])
  const isDisabled = isAttrTrue(search.get('disabled'))

  const orientation = search.get('orientation') as TSinchDropdownOrientation ?? undefined

  return (
    <sinch-dropdown
      maxVisibleItems={maxVisibleItems}
      disabled={isDisabled}
      value={value}
      orientation={orientation}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="Dropdown"
    >
      <sinch-button
        slot="target"
        type="cta-secondary"
        text="Some content"
        aria-label="Button"
        onClick={() => {}}
      />
      <sinch-dropdown-option value="1" text="Option 1 value long long long" slot="option" aria-label="Option 1">
        <sinch-icon-open-in-new slot="icon" size={20}/>
      </sinch-dropdown-option>
      <sinch-dropdown-option value="2" text="Option 2 value" slot="option" disabled aria-label="Option 2">
        <sinch-icon-open-in-new slot="icon" size={20}/>
      </sinch-dropdown-option>
      <sinch-dropdown-option value="3" text="Option 3 value" slot="option" disabled={false} aria-label="Option 3"/>
      <sinch-dropdown-option value="4" text="Option 4 value" slot="option" aria-label="Option 4"/>
    </sinch-dropdown>
  )
}
