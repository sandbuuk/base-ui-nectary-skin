import { useMemo, useState } from 'react'
import type { FC } from 'react'

type TTextarea = {
  search: URLSearchParams
}

export const Textarea: FC<TTextarea> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() => search.get('uncontrolled') === null ? setValue : () => {}, [search, setValue])
  const labelText = useMemo(() => search.get('label') ?? '', [search])
  const optionalText = useMemo(() => search.get('optional') ?? undefined, [search])
  const additionalText = useMemo(() => search.get('additional') ?? undefined, [search])
  const invalidText = useMemo(() => search.get('invalid') ?? undefined, [search])
  const placeholderText = useMemo(() => search.get('placeholder') ?? undefined, [search])
  const isDisabled = useMemo(() => search.get('disabled') != null, [search])
  const tooltip = useMemo(
    () => search.get('tooltip') != null && (
      <sinch-input-tooltip text={search.get('tooltip')!}></sinch-input-tooltip>
    ),
    [search]
  )

  return (
    <sinch-textarea
      label={labelText}
      optionalText={optionalText}
      additionalText={additionalText}
      invalidText={invalidText}
      placeholder={placeholderText}
      disabled={isDisabled}
      value={value}
      onChange={onChange}>
      {tooltip}
    </sinch-textarea>
  )
}
