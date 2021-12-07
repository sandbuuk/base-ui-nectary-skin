import '@nectary/components/theme.css'
import '@nectary/components/button'
import { useEffect, useRef } from 'react'
import './App.css'
import type { FC } from 'react'

export const App: FC<{}> = () => {
  const bus = useRef<BroadcastChannel>()

  useEffect(() => {
    bus.current = new BroadcastChannel('TEST_CHANNEL')

    bus.current.addEventListener('message', (e) => {
      switch (e.data.type) {
        default: {
          console.log('message', e.data)
        }
      }
    })

    return () => {
      bus.current?.close()
    }
  })

  return (
    <div className="wrapper">
      <h3>Quickstarts</h3>
      <sinch-button text="Button" type="primary" onClick={() => {}}/>
    </div>
  )
}
