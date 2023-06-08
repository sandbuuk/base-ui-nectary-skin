import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/progress-stepper'
import '@sinch-engage/nectary/progress-stepper-item'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/checkbox'

type TPage = {
  label: string,
  isInvalid: boolean,
  onNext?: () => void,
  onPrev?: () => void,
  onInvalidToggle: () => void,
}

const Page: FC<TPage> = ({ label, isInvalid, onNext, onPrev, onInvalidToggle }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <sinch-title type="m" level="2" text={label}/>

      <sinch-checkbox
        checked={isInvalid}
        on-change={onInvalidToggle}
        text="Toggle invalid"
        aria-label="Toggle invalid"
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <sinch-progress-stepper
        aria-label="Stepper"
        value={step}
        progressValue={progressStep}
        on-change={onChange}
      >
        <sinch-progress-stepper-item value="page1" text="Step 1" invalid={invalidState.page1} aria-label="Step 1"/>
        <sinch-progress-stepper-item value="page2" text="Step 2 singleveryveryveryverylongword" invalid={invalidState.page2} aria-label="Step 2"/>
        <sinch-progress-stepper-item value="page3" text="Step 3" invalid={invalidState.page3} aria-label="Step 3"/>
      </sinch-progress-stepper>

      {step === 'page1' && (
        <Page
          label="Step 1"
          isInvalid={invalidState.page1}
          onNext={onNext('page1', 'page2')}
          onInvalidToggle={onInvalidToggle('page1')}
        />
      )}
      {step === 'page2' && (
        <Page
          label="Step 2"
          isInvalid={invalidState.page2}
          onNext={onNext('page2', 'page3')}
          onPrev={onPrev('page1')}
          onInvalidToggle={onInvalidToggle('page2')}
        />
      )}
      {step === 'page3' && (
        <Page
          label="Step 3"
          isInvalid={invalidState.page3}
          onPrev={onPrev('page2')}
          onInvalidToggle={onInvalidToggle('page3')}
        />
      )}
    </div>
  )
}
