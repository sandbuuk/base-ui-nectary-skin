import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/select-option'

type TSelect = {
  search: URLSearchParams,
}

export const Select: FC<TSelect> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-select-change', { detail: value }))
    setValue(value)
  }
  const onFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-select-focus'))
  }
  const onBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-select-blur'))
  }
  const labelText = search.get('label') ?? ''
  const optionalText = search.get('optional') ?? undefined
  const additionalText = search.get('additional') ?? undefined
  const invalidText = search.get('invalid') ?? undefined
  const placeholderText = search.get('placeholder') ?? undefined
  const isDisabled = search.get('disabled') != null
  const maxVisibleItems = (() => {
    const val = search.get('maxvisibleitems')

    return val !== null ? parseInt(val) : undefined
  })()
  const tooltip =
    search.get('tooltip') != null && (
      <sinch-help-tooltip text={search.get('tooltip')!} slot="tooltip"/>
    )

  return (
    <sinch-select
      label={labelText}
      optionalText={optionalText}
      additionalText={additionalText}
      invalidText={invalidText}
      placeholder={placeholderText}
      disabled={isDisabled}
      value={value}
      maxVisibleItems={maxVisibleItems}
      on-change={onChange}
      on-focus={onFocus}
      on-blur={onBlur}
      aria-label="Select"
    >
      {tooltip}
      <sinch-select-option value="1" text="Option 1 value" slot="option" aria-label="Option 1">
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-select-option>
      <sinch-select-option value="2" text="Option 2 value" slot="option" disabled aria-label="Option 2">
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-select-option>
      <sinch-select-option value="3" text="Option 3 value" slot="option" disabled={false} aria-label="Option 3"/>
      <sinch-select-option value="4" text="Option 4 value" slot="option" aria-label="Option 4"/>
    </sinch-select>
  )
}
