import { useCallback, useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'

type TToggle = {
  search: URLSearchParams,
}

export const Toggle: FC<TToggle> = ({ search }) => {
  const [value, setValue] = useState(search.get('checked') !== null)
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent<boolean>>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-toggle-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-toggle-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-toggle-blur')), [])
  const isDisabled = useMemo(() => search.get('disabled') != null, [search])
  const isSmall = useMemo(() => search.get('small') != null, [search])
  const isLabeled = useMemo(() => search.get('labeled') != null, [search])
  const text: any = search.get('text') ?? undefined

  return (
    <sinch-toggle
      text={text}
      aria-label="Toggle"
      small={isSmall}
      disabled={isDisabled}
      labeled={isLabeled}
      checked={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}
