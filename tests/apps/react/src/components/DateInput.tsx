import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/date-picker'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/calendar-today'

type TDateInput = {
  search: URLSearchParams,
}

export const DateInput: FC<TDateInput> = ({ search }) => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState(search.get('value') ?? '')
  const [isoValue, setIsoValue] = useState(search.get('isovalue') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    setValue(value)
  }
  const onIsoChange = (e: CustomEvent<string>) => {
    const value = e.detail

    setValue(value)
    setOpen(false)
  }
  const onOpen = () => {
    setIsoValue(value)
    setOpen(true)
  }
  const onClose = () => setOpen(false)
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
    <sinch-popover
      open={isOpen}
      orientation="bottom-left"
      aria-label="Date input"
      onClose={onClose}
    >
      <sinch-input
        slot="target"
        label={labelText}
        placeholder={placeholderText}
        invalidText={invalidText}
        optionalText={optionalText}
        additionalText={additionalText}
        disabled={isDisabled}
        aria-label="Input"
        value={value}
        on-change={onChange}
      >
        <sinch-icon-button
          slot="right"
          small
          aria-label="Open Date Picker"
          onClick={onOpen}
        >
          <sinch-icon-calendar-today slot="icon"/>
        </sinch-icon-button>
        {tooltipText !== null && (
          <sinch-help-tooltip text={tooltipText} slot="tooltip"/>
        )}
      </sinch-input>
      <sinch-date-picker
        slot="content"
        min={min}
        max={max}
        locale={locale}
        value={isoValue}
        on-change={onIsoChange}
        aria-label="Date Picker"
      />
    </sinch-popover>
  )
}
