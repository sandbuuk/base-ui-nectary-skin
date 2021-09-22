import { FC, useEffect, useRef, useState } from 'react'
import '@saas/components/button'
import '@saas/components/input'
import '@saas/components/checkbox'

export const App: FC<{}> = () => {
  const bus = useRef<BroadcastChannel>()
  const [value, setValue] = useState('John')

  const onClick = () => {
    bus.current?.postMessage({ type: 'FIRST_STEP_DONE', value })
  }

  useEffect(() => {
    bus.current = new BroadcastChannel('TEST_CHANNEL')

    return () => {
      bus.current?.close()
    }
  })

  return (
    <div>
      <p>First name:</p>
      <sinch-input value={value} onChange={setValue}></sinch-input>
      <sinch-button value="Next" onClick={onClick}></sinch-button>
    </div>
  )
}
