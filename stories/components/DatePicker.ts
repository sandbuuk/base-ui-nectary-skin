import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/date-picker'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/calendar-today'

export default {
  title: 'Components/DatePicker',
  argTypes: {
    value: {
      description: 'Date value in ISO 8601 (e.g. YYYY-MM-DD) format',
      control: 'text',
    },
    min: {
      description: 'Date min limit in ISO 8601 (e.g. YYYY-MM-DD) format',
    },
    max: {
      description: 'Date max limit in ISO 8601 (e.g. YYYY-MM-DD) format',
    },
    locale: {
      description: 'BCP 47 language tag (e.g. en-US), which changes day and month display names in the calendar',
    },
    'on-change': {
      description: 'Handler to sync date state',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Date Picker component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (): Story => () => {
  const [{ value, min, max, locale }, updateArgs] = useArgs()
  const popoverRef = useRef<HTMLElement | null>(null)
  const datePickerRef = useRef<HTMLElementTagNameMap['sinch-date-picker'] | null>(null)
  const inputRef = useRef<HTMLElementTagNameMap['sinch-input'] | null>(null)

  if (datePickerRef.current == null) {
    const $popover = document.createElement('sinch-popover')
    const $input = document.createElement('sinch-input')
    const $iconButton = document.createElement('sinch-icon-button')
    const $iconCalendar = document.createElement('sinch-icon-calendar-today')
    const $datePicker = document.createElement('sinch-date-picker')

    $popover.modal = true

    datePickerRef.current = $datePicker
    inputRef.current = $input

    $iconCalendar.setAttribute('slot', 'icon')

    $iconButton.setAttribute('slot', 'right')
    $iconButton.setAttribute('small', '')
    $iconButton.appendChild($iconCalendar)
    $iconButton.addEventListener('click', () => {
      datePickerRef.current!.value = inputRef.current!.value
      popoverRef.current!.setAttribute('open', '')
    })

    $input.setAttribute('slot', 'target')
    $input.setAttribute('label', 'Date input')
    $input.appendChild($iconButton)
    $input.addEventListener('-change', (e) => {
      inputRef.current!.value = e.detail
    })

    $datePicker.setAttribute('slot', 'content')
    $datePicker.setAttribute('min', min)
    $datePicker.setAttribute('max', max)
    $datePicker.setAttribute('locale', locale)
    $datePicker.addEventListener('-change', (e) => {
      const value = e.detail

      popoverRef.current!.removeAttribute('open')
      inputRef.current!.value = value
      updateArgs({ value })
    })

    $popover.appendChild($input)
    $popover.appendChild($datePicker)
    $popover.addEventListener('-close', () => {
      popoverRef.current!.removeAttribute('open')
    })

    popoverRef.current = $popover
  }

  const $input = inputRef.current!

  $input.value = value

  return popoverRef.current!
}

export const DatePicker = Template()

DatePicker.args = {
  value: '1984',
  min: '1980-05-05',
  max: '2023-05-05',
  locale: 'en-US',
}

DatePicker.parameters = {
  docs: {
    source: {
      code: `<sinch-popover
  open={isOpen}
  orientation="bottom-left"
  aria-label="Date input"
  on-close={onClose}
>
  <sinch-input
    slot="target"
    label="Date input"
    aria-label="Date input"
    value={value}
    on-change={onChange}
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
    min="2021-05-05"
    max="2023-05-05"
    locale="en-US"
    aria-label="Date Picker"
    value={isoValue}
    on-change={onIsoChange}
  />
</sinch-popover>`,
    },
  },
}
