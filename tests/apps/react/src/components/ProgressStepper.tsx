import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/progress-stepper'
import '@nectary/components/progress-stepper-item'

export const ProgressStepper: FC = () => {
  const [search] = useSearchParams()
  const [step, setStep] = useState(() => search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-progress-stepper-change', { detail: value }))
    setStep(value)
  }

  const progressValue = search.get('progress') ?? ''
  const invalidValue = search.get('invalid')
  const example = search.get('example')

  if (example === 'single') {
    return (
      <sinch-progress-stepper
        aria-label="Stepper"
        value={step}
        progressValue={progressValue}
      >
        <sinch-progress-stepper-item
          value="1"
          invalid={invalidValue !== null}
          text="Shipping address"
          aria-label="1"
        />
      </sinch-progress-stepper>
    )
  }

  return (
    <sinch-progress-stepper
      aria-label="Stepper"
      value={step}
      progressValue={progressValue}
      on-change={onChange}
    >
      <sinch-progress-stepper-item value="1" invalid={invalidValue === '1'} text="Shipping address" aria-label="1"/>
      <sinch-progress-stepper-item value="2" invalid={invalidValue === '2'} text="Payment method" aria-label="2"/>
      <sinch-progress-stepper-item value="3" invalid={invalidValue === '3'} text="Item and shipping" aria-label="3"/>
      <sinch-progress-stepper-item value="4" invalid={invalidValue === '4'} text="Final" aria-label="4"/>
    </sinch-progress-stepper>
  )
}
