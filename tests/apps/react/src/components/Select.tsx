import { useCallback, useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'

type TSelect = {
  search: URLSearchParams,
}

export const Select: FC<TSelect> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent<string>>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-select-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-select-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-select-blur')), [])
  const labelText = useMemo(() => search.get('label') as string, [search])
  const optionalText = useMemo(() => search.get('optional') ?? undefined, [search])
  const additionalText = useMemo(() => search.get('additional') ?? undefined, [search])
  const invalidText = useMemo(() => search.get('invalid') ?? undefined, [search])
  const placeholderText = useMemo(() => search.get('placeholder') ?? undefined, [search])
  const isDisabled = useMemo(() => search.get('disabled') != null, [search])
  const maxVisibleItems = useMemo(() => {
    const val = search.get('maxvisibleitems')

    return val !== null ? parseInt(val) : undefined
  }, [search])
  const tooltip = useMemo(
    () => search.get('tooltip') != null && (
      <sinch-help-tooltip text={search.get('tooltip')!} slot="tooltip"/>
    ),
    [search]
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
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="Select"
    >
      {tooltip}
      <sinch-select-option value="1" text="Option 1 value" slot="select" aria-label="Option 1">
        <sinch-icon-open-in-new slot="icon" size={20}/>
      </sinch-select-option>
      <sinch-select-option value="2" text="Option 2 value" slot="select" disabled aria-label="Option 2">
        <sinch-icon-open-in-new slot="icon" size={20}/>
      </sinch-select-option>
      <sinch-select-option value="3" text="Option 3 value" slot="select" disabled={false} aria-label="Option 3"/>
      <sinch-select-option value="4" text="Option 4 value" slot="select" aria-label="Option 4"/>
    </sinch-select>
  )
}
