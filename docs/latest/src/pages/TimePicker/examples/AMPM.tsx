import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/time-picker'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/schedule'

export const AMPMExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('22:30:00')
  const [isoValue, setIsoValue] = useState('22:30:00')

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
    <sinch-popover
      open={isOpen}
      orientation="bottom-left"
      aria-label="Time input"
      modal
      on-close={onClose}
    >
      <sinch-input
        slot="target"
        aria-label="Pick time"
        placeholder="hh:mm:ss"
        value={value}
        on-change={onChange}
      >
        <sinch-icon-button
          slot="right"
          size="s"
          aria-label="Open Time Picker"
          on-click={onOpen}
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
        on-change={onIsoChange}
      />
    </sinch-popover>
  )
}
