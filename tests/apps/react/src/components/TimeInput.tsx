import { useCallback, useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/time-picker'
import '@nectary/components/input'
import '@nectary/components/field'
import '@nectary/components/popover'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/schedule'

type TTimeInput = {
  search: URLSearchParams,
}

export const TimeInput: FC<TTimeInput> = ({ search }) => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState(search.get('value') ?? '')
  const [isoValue, setIsoValue] = useState(search.get('isovalue') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    setValue(value)
  }
  const onIsoChange = (e: CustomEvent<string>) => {
    const value = e.detail

    setValue(value)
    setOpen(false)
  }
  const onOpen = () => {
    setIsoValue(value)
    setOpen(true)
  }
  const onClose = useCallback(() => setOpen(false), [])
  const isAmpm = search.get('ampm') !== null

  return (
    <sinch-popover
      open={isOpen}
      orientation="bottom-left"
      aria-label="Time input"
      onClose={onClose}
      modal
    >
      <sinch-field slot="target" label="Time input">
        <sinch-input
          slot="input"
          aria-label="Time input"
          placeholder="Time input"
          value={value}
          on-change={onChange}
        >
          <sinch-icon-button
            slot="right"
            size="s"
            aria-label="Open Time Picker"
            onClick={onOpen}
          >
            <sinch-icon-schedule slot="icon"/>
          </sinch-icon-button>
        </sinch-input>
      </sinch-field>
      <sinch-time-picker
        slot="content"
        aria-label="time input"
        submit-aria-label="submit time"
        ampm={isAmpm}
        value={isoValue}
        on-change={onIsoChange}
      />
    </sinch-popover>
  )
}
