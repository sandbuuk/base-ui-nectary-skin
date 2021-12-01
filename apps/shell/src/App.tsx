import { useEffect, useRef } from 'react'
import type { FC } from 'react'
import '@nectary/components/theme.css'
import '@nectary/components/button'

export const App: FC<{}> = () => {
  const bus = useRef<BroadcastChannel>()

  useEffect(() => {
    import('Quickstarts/Container').catch(console.error)

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
  }, [])

  return (
    <div>
      <h1>SHELL</h1>
      <sinch-button text="Shell Button" type="cta" onClick={() => {}}/>
      <sinch-quickstarts-app/>
    </div>
  )
}
