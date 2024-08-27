import { packCsv, unpackCsv } from '@nectary/components/utils'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/popover'
import '@nectary/components/date-picker'
import '@nectary/components/button'
import '@nectary/components/icon'

const styles: CSSProperties = {
  width: 300,
}

const reverseDateValue = (value: string) => value.split('-').reverse().join('-')

export const RangeExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [pickerValue, setPickerValue] = useState('')

  const onInputChange = (e: CustomEvent<string>) => {
    setInputValue(e.detail)
  }
  const onPickerChange = (e: CustomEvent<string>) => {
    const dates = unpackCsv(e.detail).map(reverseDateValue)

    setInputValue(dates.join(' / '))
    setOpen(false)
  }
  const onOpen = () => {
    const [inputDate1 = '', inputDate2 = ''] = inputValue.split(' / ')
    const date1 = reverseDateValue(inputDate1)
    const date2 = reverseDateValue(inputDate2)

    setPickerValue(packCsv([date1, date2]))
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
        label="Ranged date input"
        style={styles}
      >
        <sinch-input
          slot="input"
          aria-label="Pick date"
          mask="00-00-0000 / 00-00-0000@@DD/MM/YYYY / DD/MM/YYYY"
          value={inputValue}
          on-change={onInputChange}
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
        range
        value={pickerValue}
        on-change={onPickerChange}
      />
    </sinch-popover>
  )
}
