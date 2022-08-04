import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/time-picker'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/schedule'

export default {
  title: 'Components/TimePicker',
  argTypes: {
    value: {
      description: 'Time value in ISO 8601 (e.g. hh:mm:ss) format',
      control: 'text',
    },
    ampm: {
      description: 'AM/PM 12-hour clock system',
      control: 'boolean',
    },
    onChange: {
      description: 'Handler to sync date state',
      action: 'onChange',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Time Picker component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (): Story => () => {
  const [{ value, ampm }, updateArgs] = useArgs()
  const popoverRef = useRef<HTMLElement | null>(null)
  const timePickerRef = useRef<HTMLElementTagNameMap['sinch-time-picker'] | null>(null)
  const inputRef = useRef<HTMLElementTagNameMap['sinch-input'] | null>(null)

  if (timePickerRef.current == null) {
    const $popover = document.createElement('sinch-popover')
    const $input = document.createElement('sinch-input')
    const $iconButton = document.createElement('sinch-icon-button')
    const $iconSchedule = document.createElement('sinch-icon-schedule')
    const $timePicker = document.createElement('sinch-time-picker')

    timePickerRef.current = $timePicker
    inputRef.current = $input

    $iconSchedule.setAttribute('slot', 'icon')

    $iconButton.setAttribute('slot', 'right')
    $iconButton.setAttribute('small', '')
    $iconButton.appendChild($iconSchedule)
    $iconButton.addEventListener('click', () => {
      timePickerRef.current!.value = inputRef.current!.value
      popoverRef.current!.setAttribute('open', '')
    })

    $input.setAttribute('slot', 'target')
    $input.setAttribute('label', 'Date input')
    $input.appendChild($iconButton)
    $input.addEventListener('change', (e) => {
      inputRef.current!.value = e.detail
    })

    $timePicker.setAttribute('slot', 'content')
    $timePicker.setAttribute('ampm', ampm)
    $timePicker.addEventListener('change', (e) => {
      const value = e.detail

      popoverRef.current!.removeAttribute('open')
      inputRef.current!.value = value
      updateArgs({ value })
    })

    $popover.appendChild($input)
    $popover.appendChild($timePicker)
    $popover.addEventListener('close', () => {
      popoverRef.current!.removeAttribute('open')
    })

    popoverRef.current = $popover
  }

  const $input = inputRef.current!
  const $timePicker = timePickerRef.current!

  $input.value = value
  $timePicker.ampm = ampm

  return popoverRef.current!
}

export const TimePicker = Template()

TimePicker.args = {
  value: '22:00:00',
  ampm: false,
}

TimePicker.parameters = {
  docs: {
    source: {
      code: `<sinch-popover
  open={isOpen}
  orientation="bottom-left"
  aria-label="Time input"
  onClose={onClose}
>
  <sinch-input
    slot="target"
    label="Time input"
    aria-label="Time input"
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
    ampm={ampm}
    aria-label="Time Picker"
    submit-aria-label="Submit time"
    value={isoValue}
    onChange={onIsoChange}
  />
</sinch-popover>`,
    },
  },
}
