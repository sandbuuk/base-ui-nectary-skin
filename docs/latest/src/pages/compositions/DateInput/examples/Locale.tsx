import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/popover'
import '@nectary/components/date-picker'
import '@nectary/components/field'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-calendar'

const inputStyles: CSSProperties = {
  width: 300,
}

const reverseDateValue = (value: string) => value.split('-').reverse().join('-')

export const LocaleExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('19-07-2022')
  const [pickerValue, setPickerValue] = useState('2022-07-19')

  const onInputChange = (e: CustomEvent<string>) => {
    setInputValue(e.detail)
  }
  const onPickerChange = (e: CustomEvent<string>) => {
    setInputValue(reverseDateValue(e.detail))
    setOpen(false)
  }
  const onOpen = () => {
    setPickerValue(reverseDateValue(inputValue))
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
        label="Datum inmatningsfält"
        style={inputStyles}
      >
        <sinch-input
          slot="input"
          aria-label="Pick date"
          mask="00-00-0000@@DD/MM/YYYY"
          value={inputValue}
          on-change={onInputChange}
        >
          <sinch-button
            slot="right"
            size="s"
            aria-label="Open Date Picker"
            on-click={onOpen}
          >
            <sinch-icon-fa-calendar slot="icon"/>
          </sinch-button>
        </sinch-input>
      </sinch-field>
      <sinch-date-picker
        slot="content"
        min="2021-12-25"
        max="2025-07-19"
        locale="sv-SE"
        aria-label="Date Picker"
        next-month-aria-label="Next Month"
        prev-month-aria-label="Next Month"
        next-year-aria-label="Next Year"
        prev-year-aria-label="Prev Year"
        value={pickerValue}
        on-change={onPickerChange}
      />
    </sinch-popover>
  )
}
