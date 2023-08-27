import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/date-picker'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/calendar-today'

const styles: CSSProperties = {
  width: 300,
}

const reverseDateValue = (value: string) => value.split('-').reverse().join('-')

export const CompositionExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [datePickerValue, setDatePickerValue] = useState('')

  const onInputChange = (e: CustomEvent<string>) => {
    setInputValue(e.detail)
  }
  const onDatePickerChange = (e: CustomEvent<string>) => {
    const inputValue = reverseDateValue(e.detail)

    setInputValue(inputValue)
    setOpen(false)
  }
  const onOpen = () => {
    const datePickerValue = reverseDateValue(inputValue)

    setDatePickerValue(datePickerValue)
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
        style={styles}
      >
        <sinch-input
          slot="input"
          aria-label="Pick date"
          mask="00-00-0000@@DD/MM/YYYY"
          value={inputValue}
          on-change={onInputChange}
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
        value={datePickerValue}
        on-change={onDatePickerChange}
      />
    </sinch-popover>
  )
}
