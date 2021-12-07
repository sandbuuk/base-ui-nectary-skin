import { useEffect, useRef, useState } from 'react'
import styles from './App.module.css'
import type { FC } from 'react'
import '@nectary/components/theme.css'
import '@nectary/components/button'

export const App: FC<{}> = () => {
  const bus = useRef<BroadcastChannel>()
  const [isAppShown, setAppShown] = useState(false)

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
  }, [])

  useEffect(() => {
    setTimeout(() => {
      import('Quickstarts/Container').catch(console.error)

      setAppShown(!isAppShown)
    }, 2000)
  }, [isAppShown])

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
      <aside className={styles.aside}>
        <h3>Menu</h3>
      </aside>
      <main className={styles.main}>
        {isAppShown && <sinch-quickstarts-app/>}
        <sinch-quickstarts-app/>
      </main>
      <footer className={styles.footer}>
        <h2>Footer</h2>
      </footer>
    </div>
  )
}
