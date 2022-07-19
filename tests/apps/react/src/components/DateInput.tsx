import { useCallback, useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/date-input'

type TDateInput = {
  search: URLSearchParams,
}

export const DateInput: FC<TDateInput> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-date-input-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-date-input-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-date-input-blur')), [])
  const labelText = search.get('label') ?? ''
  const optionalText = search.get('optional') ?? undefined
  const additionalText = search.get('additional') ?? undefined
  const invalidText = search.get('invalid') ?? undefined
  const placeholderText = search.get('placeholder') ?? undefined
  const isDisabled = search.get('disabled') != null
  const tooltipText = search.get('tooltip')
  const min = search.get('min') ?? ''
  const max = search.get('max') ?? ''
  const locale = search.get('locale') ?? ''

  return (
    <sinch-date-input
      min={min}
      max={max}
      label={labelText}
      placeholder={placeholderText}
      invalidText={invalidText}
      optionalText={optionalText}
      additionalText={additionalText}
      disabled={isDisabled}
      locale={locale}
      aria-label="Date input"
      open-aria-label="Open date picker"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {tooltipText !== null && (
        <sinch-help-tooltip text={tooltipText} slot="tooltip"/>
      )}
    </sinch-date-input>
  )
}
