import { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
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
      <sinch-input label="Input" value={value} onChange={setValue}/>
      <sinch-button type="cta" text="Next" onClick={onClick}/>
    </div>
  )
}
