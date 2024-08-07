import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/popover'
import '@nectary/components/time-picker'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-clock'

const style: CSSProperties = {
  width: 200,
}

export const TimeInputExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('22:30')
  const [pickerValue, setPickerValue] = useState('22:30')
  const onInputChange = (e: CustomEvent<string>) => {
    setInputValue(e.detail)
  }
  const onPickerChange = (e: CustomEvent<string>) => {
    setInputValue(e.detail)
    setOpen(false)
  }
  const onOpen = () => {
    setPickerValue(inputValue)
    setOpen(true)
  }
  const onClose = () => setOpen(false)

  return (
    <sinch-popover
      open={isOpen}
      orientation="bottom-left"
      aria-label="Time input"
      modal
      on-close={onClose}
    >
      <sinch-field
        slot="target"
        label="Time picker"
        style={style}
      >
        <sinch-input
          slot="input"
          aria-label="Pick time"
          mask="00:00@@HH:MM"
          value={inputValue}
          on-change={onInputChange}
        >
          <sinch-button
            slot="right"
            size="s"
            aria-label="Open Time Picker"
            on-click={onOpen}
          >
            <sinch-icon-fa-clock slot="icon"/>
          </sinch-button>
        </sinch-input>
      </sinch-field>
      <sinch-time-picker
        slot="content"
        aria-label="Time Picker"
        submit-aria-label="Submit time"
        value={pickerValue}
        on-change={onPickerChange}
      />
    </sinch-popover>
  )
}
