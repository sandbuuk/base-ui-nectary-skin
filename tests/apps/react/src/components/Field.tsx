import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/icons/search'

type TField = {
  search: URLSearchParams,
}

export const Field: FC<TField> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }
  const labelText = search.get('label') ?? ''
  const optionalText = search.get('optional') ?? undefined
  const additionalText = search.get('additional') ?? undefined
  const invalidText = search.get('invalid') ?? undefined
  const placeholderText = search.get('placeholder') ?? undefined
  const isDisabled = search.get('disabled') != null
  const tooltipText = search.get('tooltip')

  return (
    <sinch-field
      label={labelText}
      optionalText={optionalText}
      additionalText={additionalText}
      invalidText={invalidText}
      disabled={isDisabled}
    >
      {tooltipText !== null && (
        <sinch-help-tooltip text={tooltipText} slot="tooltip"/>
      )}
      <sinch-input
        slot="input"
        placeholder={placeholderText}
        disabled={isDisabled}
        invalid={Boolean(invalidText)}
        value={value}
        on-change={onChange}
        aria-label="Input"
      >
        <sinch-icon-search slot="icon"/>
        <sinch-tag slot="right" text="text"/>
      </sinch-input>
    </sinch-field>
  )
}
