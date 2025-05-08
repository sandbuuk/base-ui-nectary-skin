import { useState } from 'react'
import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/field'
import '@nectary/components/help-tooltip'
import '@nectary/components/tag'
import '@nectary/components/icon'

export const Field: FC<{ searchPrefix?: string, children?: React.ReactNode }> = ({ searchPrefix = 'field', children }) => {
  const [search] = useComponentSearchParams(searchPrefix)
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
      {children ?? (
        <>
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
            <sinch-icon icons-version="2" name="fa-magnifying-glass" slot="icon"/>
            <sinch-tag slot="right" text="text"/>
          </sinch-input>
        </>
      )}
    </sinch-field>
  )
}
