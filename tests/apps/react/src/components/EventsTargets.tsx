import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/popover'
import '@nectary/components/date-picker'
import '@nectary/components/button'
import '@nectary/components/icon'
import '@nectary/components/card-v2'

export const EventTargets: FC = () => {
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
    <sinch-card-v2>
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
            <sinch-button
              slot="right"
              size="s"
              aria-label="Open Date Picker"
              on-click={onOpen}
            >
              <sinch-icon icons-version="2" name="fa-calendar" slot="icon"/>
            </sinch-button>
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
    </sinch-card-v2>
  )
}
