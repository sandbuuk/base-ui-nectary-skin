import { useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/date-picker'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/calendar-today'

export const CompositionExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('2022-07-19')
  const [isoValue, setIsoValue] = useState('2022-07-19')

  const onChange = (e: SyntheticEvent<Element, CustomEvent>) => {
    setValue(e.nativeEvent.detail)
  }
  const onIsoChange = (e: SyntheticEvent<Element, CustomEvent>) => {
    setValue(e.nativeEvent.detail)
    setOpen(false)
  }
  const onOpen = () => {
    setIsoValue(value)
    setOpen(true)
  }
  const onClose = () => setOpen(false)

  return (
    <sinch-popover
      open={isOpen}
      orientation="bottom-left"
      aria-label="Date input"
      onClose={onClose}
    >
      <sinch-input
        slot="target"
        label="Date picker"
        aria-label="Pick date"
        placeholder="YYYY-MM-DD"
        additionalText="Additional text"
        value={value}
        onChange={onChange}
      >
        <sinch-icon-button
          slot="right"
          small
          aria-label="Open Date Picker"
          onClick={onOpen}
        >
          <sinch-icon-calendar-today slot="icon"/>
        </sinch-icon-button>
      </sinch-input>
      <sinch-date-picker
        slot="content"
        min="2021-12-25"
        max="2025-07-19"
        locale="en-US"
        aria-label="Date Picker"
        value={isoValue}
        onChange={onIsoChange}
      />
    </sinch-popover>
  )
}
