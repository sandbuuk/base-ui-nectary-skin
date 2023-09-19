import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/radio'
import '@nectary/components/radio-option'

const options = [{
  value: '1',
  text: 'Option value 1',
}, {
  value: '2',
  text: 'Option value 2',
  disabled: true,
}, {
  value: '3',
  text: 'Option value 3',
}, {
  value: '4',
  text: 'Option value 4',
}]
const singleOption = [{
  value: '1',
  text: 'Option value 1',
}]

export const Radio: FC = () => {
  const [search] = useSearchParams()
  const [value, setValue] = useState(() => search.get('value') ?? '')
  const isInvalid = search.get('invalid') !== null
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-radio-change', { detail: value }))
    setValue(value)
  }
  const example = search.get('example')

  let opts = options

  if (example === 'single') {
    opts = singleOption
  }

  return (
    <sinch-radio
      value={value}
      on-change={onChange}
      aria-label="Radio"
      invalid={isInvalid}
    >
      {opts.map((opt: any) => (
        <sinch-radio-option
          key={opt.value}
          value={opt.value}
          text={opt.text}
          disabled={opt.disabled}
          aria-label={opt.text}
        />
      ))}
    </sinch-radio>
  )
}
