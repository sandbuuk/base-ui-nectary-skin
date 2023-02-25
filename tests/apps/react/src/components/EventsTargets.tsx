import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/date-picker'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/segment'
import '@sinch-engage/nectary/dialog'
import '@sinch-engage/nectary-assets/icons/calendar-today'

type TEventTargets = {
  search: URLSearchParams,
}

export const EventTargets: FC<TEventTargets> = () => {
  const [_isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('2022-07-19')
  const [isoValue, setIsoValue] = useState('2022-07-19')

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }
  const onIsoChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
    setOpen(false)
  }
  const onOpen = () => {
    setIsoValue(value)
    setOpen(true)
  }
  const onClose = () => setOpen(false)

  return (
    <sinch-segment caption="Segment">
      <sinch-popover
        slot="content"
        open
        orientation="bottom-left"
        aria-label="Date input"
        modal
        on-close={onClose}
      >
        <sinch-field
          slot="target"
          label="Date picker"
          additionalText="Additional text"
        >
          <sinch-input
            slot="input"
            aria-label="Pick date"
            placeholder="YYYY-MM-DD"
            value={value}
            on-change={onChange}
          >
            <sinch-icon-button
              slot="right"
              size="s"
              aria-label="Open Date Picker"
              on-click={onOpen}
            >
              <sinch-icon-calendar-today slot="icon"/>
            </sinch-icon-button>
          </sinch-input>
        </sinch-field>
        <sinch-date-picker
          slot="content"
          min="2021-12-25"
          max="2025-07-19"
          locale="en-US"
          aria-label="Date Picker"
          next-month-aria-label="Next Month"
          prev-month-aria-label="Next Month"
          next-year-aria-label="Next Year"
          prev-year-aria-label="Prev Year"
          value={isoValue}
          on-change={onIsoChange}
        />
      </sinch-popover>
    </sinch-segment>
  )
}
