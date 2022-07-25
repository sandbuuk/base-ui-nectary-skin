import { useCallback, useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/calendar-today'

type TInput = {
  search: URLSearchParams,
}

export const Input: FC<TInput> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-input-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-input-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-input-blur')), [])
  const type: any = search.get('type') ?? undefined
  const labelText = search.get('label') ?? ''
  const optionalText = search.get('optional') ?? undefined
  const additionalText = search.get('additional') ?? undefined
  const invalidText = search.get('invalid') ?? undefined
  const placeholderText = search.get('placeholder') ?? undefined
  const isDisabled = search.get('disabled') != null
  const tooltipText = search.get('tooltip')
  const hasRightButton = search.get('right') != null

  return (
    <sinch-input
      type={type}
      label={labelText}
      optionalText={optionalText}
      additionalText={additionalText}
      invalidText={invalidText}
      placeholder={placeholderText}
      disabled={isDisabled}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="Input"
    >
      {tooltipText !== null && (
        <sinch-help-tooltip text={tooltipText} slot="tooltip"/>
      )}
      {hasRightButton && (
        <sinch-icon-button slot="right" small aria-label="Button" onClick={() => {}}>
          <sinch-icon-calendar-today slot="icon"/>
        </sinch-icon-button>
      )}
    </sinch-input>
  )
}
