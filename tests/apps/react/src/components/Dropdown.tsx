import { useCallback, useMemo, useState } from 'react'
import type { TSinchDropdownOrientation } from '@sinch-engage/nectary/dropdown'
import type { FC, SyntheticEvent } from 'react'

type TDropdown = {
  search: URLSearchParams,
}

export const Dropdown: FC<TDropdown> = ({ search }) => {
  const isCheckbox = search.get('checkbox') !== null
  const isRadio = search.get('radio') !== null
  const isSelect = !isCheckbox && !isRadio
  const [isOpen, setOpen] = useState(search.get('open') !== null)
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent<string>>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-dropdown-change', { detail: value }))
        setValue(value)
        setOpen(false)
      }
      : () => {}),
  [search, setValue])
  const onFocus = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-dropdown-focus'))
  }, [])
  const onBlur = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-dropdown-blur'))
  }, [])
  const onClose = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-dropdown-close'))
    setOpen(false)
  }, [])
  const maxVisibleItems = useMemo(() => {
    const val = search.get('maxvisibleitems')

    return val !== null ? parseInt(val) : undefined
  }, [search])

  const orientation = search.get('orientation') as TSinchDropdownOrientation ?? undefined

  return (
    <sinch-dropdown
      open={isOpen}
      maxVisibleItems={maxVisibleItems}
      value={value}
      orientation={orientation}
      onChange={onChange}
      onClose={onClose}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="Dropdown"
    >
      <sinch-button
        slot="target"
        type="cta-secondary"
        text="Some content"
        aria-label="Button"
        onClick={() => {
          setOpen(true)
        }}
      />
      {isCheckbox && (
        <>
          <sinch-dropdown-checkbox-option value="1" text="Option 1 value long long long" slot="option" aria-label="Option 1"/>
          <sinch-dropdown-checkbox-option disabled value="2" text="Option 2" slot="option" aria-label="Option 2"/>
          <sinch-dropdown-checkbox-option value="3" text="Option 3" slot="option" aria-label="Option 3"/>
          <sinch-dropdown-checkbox-option value="4" text="Option 4" slot="option" aria-label="Option 4"/>
        </>
      )}
      {isRadio && (
        <>
          <sinch-dropdown-radio-option value="1" text="Option 1 value long long long" slot="option" aria-label="Option 1"/>
          <sinch-dropdown-radio-option disabled value="2" text="Option 2" slot="option" aria-label="Option 2"/>
          <sinch-dropdown-radio-option value="3" text="Option 3" slot="option" aria-label="Option 3"/>
          <sinch-dropdown-radio-option value="4" text="Option 4" slot="option" aria-label="Option 4"/>
        </>
      )}
      {isSelect && (
        <>
          <sinch-dropdown-option value="1" text="Option 1 value long long long" slot="option" aria-label="Option 1">
            <sinch-icon-open-in-new slot="icon"/>
          </sinch-dropdown-option>
          <sinch-dropdown-option value="2" text="Option 2 value" slot="option" disabled aria-label="Option 2">
            <sinch-icon-open-in-new slot="icon"/>
          </sinch-dropdown-option>
          <sinch-dropdown-option value="3" text="Option 3 value" slot="option" disabled={false} aria-label="Option 3"/>
          <sinch-dropdown-option value="4" text="Option 4 value" slot="option" aria-label="Option 4"/>
        </>
      )}
    </sinch-dropdown>
  )
}
