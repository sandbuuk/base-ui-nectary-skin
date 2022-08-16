import { useCallback, useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/time-picker'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/schedule'

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
  const labelText = search.get('label') ?? ''
  const optionalText = search.get('optional') ?? undefined
  const additionalText = search.get('additional') ?? undefined
  const invalidText = search.get('invalid') ?? undefined
  const placeholderText = search.get('placeholder') ?? undefined
  const isDisabled = search.get('disabled') != null
  const isAmpm = search.get('ampm') !== null

  return (
    <sinch-popover
      open={isOpen}
      orientation="bottom-left"
      aria-label="Time input"
      onClose={onClose}
    >
      <sinch-input
        slot="target"
        label={labelText}
        placeholder={placeholderText}
        invalidText={invalidText}
        optionalText={optionalText}
        additionalText={additionalText}
        disabled={isDisabled}
        aria-label="Input"
        value={value}
        on-change={onChange}
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
        aria-label="time input"
        submit-aria-label="submit time"
        ampm={isAmpm}
        value={isoValue}
        on-change={onIsoChange}
      />
    </sinch-popover>
  )
}
