import {
  Button,
  Checkbox,
  Input,
  ProgressStepper,
  ProgressStepperItem,
  Text,
  Title,
} from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'

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
      <Text type="m">{description}</Text>
      <Input value="" placeholder={label} aria-label={label} invalid={isInvalid}/>
      <Checkbox
        checked={isInvalid}
        onChange={onInvalidToggle}
        text="Toggle invalid"
        aria-label="Toggle invalid"
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 'auto' }}>
        <Button variant="secondary" text="Prev" aria-label="Prev step" disabled={onPrev == null} onClick={onPrev}/>
        <Button variant="primary" text="Next" aria-label="Next step" disabled={onNext == null} onClick={onNext}/>
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
  const onPrev = (gotoPage: string) => () => {
    setStep(gotoPage)
  }
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
        <Title level="1" type="l" text="Checkout"/>
        <ProgressStepper
          aria-label="Stepper"
          value={step}
          progressValue={progressStep}
          onChange={setStep}
        >
          <ProgressStepperItem value="page1" text="Shipping address" invalid={invalidState.page1} aria-label="Shipping address"/>
          <ProgressStepperItem value="page2" text="Payment method" invalid={invalidState.page2} aria-label="Payment method"/>
          <ProgressStepperItem value="page3" text="Item and shipping" invalid={invalidState.page3} aria-label="Item and shipping"/>
        </ProgressStepper>
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
