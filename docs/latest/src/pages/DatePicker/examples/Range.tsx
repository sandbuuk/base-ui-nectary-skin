import { packCsv, unpackCsv } from '@sinch-engage/nectary/utils'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/date-picker'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/calendar-today'

const INITIAL_RANGE = ['2022-07-19', '2022-07-28']

const inputStyles: CSSProperties = {
  width: 300,
}

const formatDateRange = (range: string[]): string => range.join(' / ')
const parseDateRange = (range: string): string[] => range.split(' / ')

export const RangeExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState(formatDateRange(INITIAL_RANGE))
  const [isoValue, setIsoValue] = useState(packCsv(INITIAL_RANGE))

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }
  const onIsoChange = (e: CustomEvent<string>) => {
    setValue(formatDateRange(unpackCsv(e.detail)))
    setOpen(false)
  }
  const onOpen = () => {
    setIsoValue(packCsv(parseDateRange(value)))
    setOpen(true)
  }
  const onClose = () => setOpen(false)

  return (
    <sinch-popover
      open={isOpen}
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
          style={inputStyles}
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
        range
        value={isoValue}
        on-change={onIsoChange}
      />
    </sinch-popover>
  )
}
