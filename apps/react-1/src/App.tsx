import { FC, useEffect, useRef, useState } from 'react'
import '@saas/components/button'
import '@saas/components/input'
import '@saas/components/checkbox'

const steps = ['one', 'two', 'three']

export const App: FC<{}> = () => {
  const bus = useRef<BroadcastChannel>()
  const [currentStep, setCurrentStep] = useState(steps[0])
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    bus.current = new BroadcastChannel('TEST_CHANNEL')

    bus.current.addEventListener('message', (e) => {
      switch (e.data.type) {
        case 'SECOND_STEP_READY': {
          setCurrentStep(steps[1])

          break
        }

        case 'THIRD_STEP_READY': {
          setCurrentStep(steps[2])

          break
        }

        case 'THIRD_STEP_DONE': {
          setIsDone(true)

          break
        }
      }
    })

    return () => {
      bus.current?.close()
    }
  })

  if (isDone) {
    return (
      <h2>Done</h2>
    )
  }

  return (
    <ul>
      {steps.map((step) => (
        <li style={{ color: step === currentStep ? 'black' : 'gray' }} key={step}>Step {step}</li>
      ))}
    </ul>
  )
}
