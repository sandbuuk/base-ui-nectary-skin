import { useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/time-picker'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/schedule'

export const AMPMExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('22:30:00')
  const [isoValue, setIsoValue] = useState('22:30:00')

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
      aria-label="Time input"
      onClose={onClose}
    >
      <sinch-input
        slot="target"
        label="Time picker"
        aria-label="Pick time"
        placeholder="hh:mm:ss"
        additionalText="Additional text"
        value={value}
        onChange={onChange}
      >
        <sinch-icon-button
          slot="right"
          small
          aria-label="Open Time Picker"
          onClick={onOpen}
        >
          <sinch-icon-schedule slot="icon"/>
        </sinch-icon-button>
      </sinch-input>
      <sinch-time-picker
        slot="content"
        ampm
        aria-label="Time Picker"
        submit-aria-label="Submit time"
        value={isoValue}
        onChange={onIsoChange}
      />
    </sinch-popover>
  )
}
