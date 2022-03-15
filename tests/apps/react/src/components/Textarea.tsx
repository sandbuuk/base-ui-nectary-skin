import { useCallback, useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'

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
  const labelText = useMemo(() => search.get('label') ?? '', [search])
  const optionalText = useMemo(() => search.get('optional') ?? undefined, [search])
  const additionalText = useMemo(() => search.get('additional') ?? undefined, [search])
  const invalidText = useMemo(() => search.get('invalid') ?? undefined, [search])
  const placeholderText = useMemo(() => search.get('placeholder') ?? undefined, [search])
  const isDisabled = useMemo(() => search.get('disabled') != null, [search])
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
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="Textarea"
    >
      {tooltip}
    </sinch-textarea>
  )
}
