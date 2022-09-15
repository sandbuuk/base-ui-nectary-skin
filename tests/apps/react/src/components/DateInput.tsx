import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/field'
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
  const min = search.get('min') ?? ''
  const max = search.get('max') ?? ''
  const locale = search.get('locale') ?? ''

  return (
    <sinch-popover
      open={isOpen}
      orientation="bottom-left"
      aria-label="Date input"
      onClose={onClose}
      modal
    >
      <sinch-field slot="target" label="Date input">
        <sinch-input
          slot="input"
          placeholder="Date input"
          aria-label="Date input"
          value={value}
          on-change={onChange}
        >
          <sinch-icon-button
            slot="right"
            small
            aria-label="Open Date Picker"
            on-click={onOpen}
          >
            <sinch-icon-calendar-today slot="icon"/>
          </sinch-icon-button>
        </sinch-input>
      </sinch-field>
      <sinch-date-picker
        slot="content"
        min={min}
        max={max}
        locale={locale}
        value={isoValue}
        on-change={onIsoChange}
        aria-label="Date Picker"
        next-month-aria-label="Next month"
        prev-month-aria-label="Prev month"
        next-year-aria-label="Next year"
        prev-year-aria-label="Prev year"
      />
    </sinch-popover>
  )
}
