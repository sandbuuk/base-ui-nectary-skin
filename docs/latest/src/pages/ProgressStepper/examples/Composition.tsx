import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/progress-stepper'
import '@sinch-engage/nectary/progress-stepper-item'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/checkbox'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/title'

const layoutStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}

type TPage = {
  label: string,
  description: string,
  isInvalid: boolean,
  onNext?: () => void,
  onPrev?: () => void,
  onInvalidToggle: () => void,
}

const Page: FC<TPage> = ({ label, description, isInvalid, onNext, onPrev, onInvalidToggle }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: 256 }}>
      <sinch-text type="m">{description}</sinch-text>
      <sinch-input value="" placeholder={label} aria-label={label} invalid={isInvalid}/>
      <sinch-checkbox
        checked={isInvalid}
        on-change={onInvalidToggle}
        text="Toggle invalid"
        aria-label="Toggle invalid"
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 'auto' }}>
        <sinch-button type="secondary" text="Prev" aria-label="Prev step" disabled={onPrev == null} on-click={onPrev}/>
        <sinch-button type="primary" text="Next" aria-label="Next step" disabled={onNext == null} on-click={onNext}/>
      </div>
    </div>
  )
}

export const CompositionExample: FC = () => {
  const [step, setStep] = useState('page1')
  const [progressStep, setProgressStep] = useState('page1')
  const [invalidState, setInvalidState] = useState<Record<string, boolean>>({
    page1: false,
    page2: false,
    page3: false,
  })
  const onChange = (e: CustomEvent<string>) => setStep(e.detail)
  const onPrev = (gotoPage: string) => () => setStep(gotoPage)
  const onNext = (currentPage: string, gotoPage: string) => () => {
    if (progressStep === currentPage) {
      setProgressStep(gotoPage)
    }

    setStep(gotoPage)
  }
  const onInvalidToggle = (page: string) => () => {
    setInvalidState((state) => ({
      ...state,
      [page]: !state[page],
    }))
  }

  return (
    <div style={layoutStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <sinch-title level="1" type="l" text="Checkout"/>
        <sinch-progress-stepper
          aria-label="Stepper"
          value={step}
          progressValue={progressStep}
          on-change={onChange}
        >
          <sinch-progress-stepper-item value="page1" text="Shipping address" invalid={invalidState.page1} aria-label="Step 1"/>
          <sinch-progress-stepper-item value="page2" text="Payment method" invalid={invalidState.page2} aria-label="Step 2"/>
          <sinch-progress-stepper-item value="page3" text="Item and shipping" invalid={invalidState.page3} aria-label="Step 3"/>
        </sinch-progress-stepper>
      </div>

      {step === 'page1' && (
        <Page
          label="Shipping address"
          description="Choose a shipping address to continue checking out. You'll still have a chance to review and edit your order before it's final."
          isInvalid={invalidState.page1}
          onNext={onNext('page1', 'page2')}
          onInvalidToggle={onInvalidToggle('page1')}
        />
      )}
      {step === 'page2' && (
        <Page
          label="Payment method"
          description="Choose a payment method to continue checking out. You'll still have a chance to review and edit your order before it's final."
          isInvalid={invalidState.page2}
          onNext={onNext('page2', 'page3')}
          onPrev={onPrev('page1')}
          onInvalidToggle={onInvalidToggle('page2')}
        />
      )}
      {step === 'page3' && (
        <Page
          label="Item and shipping"
          description=""
          isInvalid={invalidState.page3}
          onPrev={onPrev('page2')}
          onInvalidToggle={onInvalidToggle('page3')}
        />
      )}
    </div>
  )
}
