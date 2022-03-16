import { useCallback, useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'

type TCheckbox = {
  search: URLSearchParams,
}

export const Checkbox: FC<TCheckbox> = ({ search }) => {
  const [value, setValue] = useState(search.get('checked') !== null)
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent<boolean>>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-checkbox-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-checkbox-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-checkbox-blur')), [])
  const isDisabled = useMemo(() => search.get('disabled') != null, [search])
  const isIndeterminate = useMemo(() => search.get('indeterminate') != null, [search])
  const isInvalid = useMemo(() => search.get('invalid') != null, [search])
  const text: any = search.get('text') ?? undefined

  return (
    <sinch-checkbox
      text={text}
      disabled={isDisabled}
      indeterminate={isIndeterminate}
      invalid={isInvalid}
      checked={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="Checkbox"
    />
  )
}
