import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/popover'
import '@nectary/components/time-picker'
import '@nectary/components/icon-button'
import '@nectary/components/field'
import '@nectary/assets/icons/schedule'

const style: CSSProperties = {
  width: 200,
}

export const AMPMExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('10:30')
  const [isoValue, setIsoValue] = useState('10:30')

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
      <sinch-field
        slot="target"
        label="Time picker"
        style={style}
      >
        <sinch-input
          slot="input"
          aria-label="Pick time"
          mask="00:00@@HH:MM"
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
      </sinch-field>
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
