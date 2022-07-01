import { useCallback, useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/textarea'

type TTextarea = {
  search: URLSearchParams,
}

export const Textarea: FC<TTextarea> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-textarea-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-textarea-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-textarea-blur')), [])
  const labelText = search.get('label') ?? ''
  const optionalText = search.get('optional') ?? undefined
  const additionalText = search.get('additional') ?? undefined
  const invalidText = search.get('invalid') ?? undefined
  const placeholderText = search.get('placeholder') ?? undefined
  const isDisabled = search.get('disabled') != null
  const rows = useMemo(() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  }, [search])
  const isResizable = search.get('resizable') === 'true'
  const tooltip = useMemo(() =>
    search.get('tooltip') != null && (
      <sinch-help-tooltip text={search.get('tooltip')!} slot="tooltip"/>
    ),
  [search])

  return (
    <sinch-textarea
      label={labelText}
      optionalText={optionalText}
      additionalText={additionalText}
      invalidText={invalidText}
      placeholder={placeholderText}
      disabled={isDisabled}
      value={value}
      rows={rows}
      resizable={isResizable}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="Textarea"
    >
      {tooltip}
    </sinch-textarea>
  )
}
