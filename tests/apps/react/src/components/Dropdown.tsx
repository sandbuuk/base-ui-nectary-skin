import { useCallback, useMemo, useState } from 'react'
import type { TSinchPopoverOrientation } from '@sinch-engage/nectary/popover/types'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/dropdown'
import '@sinch-engage/nectary/dropdown-text-option'
import '@sinch-engage/nectary/dropdown-checkbox-option'
import '@sinch-engage/nectary/dropdown-radio-option'

type TDropdown = {
  search: URLSearchParams,
}

export const Dropdown: FC<TDropdown> = ({ search }) => {
  const isCheckbox = search.get('checkbox') !== null
  const isRadio = search.get('radio') !== null
  const isSelect = !isCheckbox && !isRadio
  const isMultiple = search.get('multiple') !== null
  const orientation = search.get('orientation') as TSinchPopoverOrientation ?? undefined
  const [isOpen, setOpen] = useState(search.get('open') !== null)
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent<string>>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-dropdown-change', { detail: value }))
        setValue(value)

        if (!isMultiple) {
          setOpen(false)
        }
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

  return (
    <sinch-dropdown
      open={isOpen}
      multiple={isMultiple}
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
          <sinch-dropdown-text-option value="1" text="Option 1 value long long long" slot="option" aria-label="Option 1">
            <sinch-icon-open-in-new slot="icon"/>
          </sinch-dropdown-text-option>
          <sinch-dropdown-text-option value="2" text="Option 2 value" slot="option" disabled aria-label="Option 2">
            <sinch-icon-open-in-new slot="icon"/>
          </sinch-dropdown-text-option>
          <sinch-dropdown-text-option value="3" text="Option 3 value" slot="option" disabled={false} aria-label="Option 3"/>
          <sinch-dropdown-text-option value="4" text="Option 4 value" slot="option" aria-label="Option 4"/>
        </>
      )}
    </sinch-dropdown>
  )
}
