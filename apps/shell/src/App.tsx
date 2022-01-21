import { useEffect, useRef } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import styles from './App.module.css'
import { Login } from './Login'
import { Quickstarts } from './components/Quickstarts'
import type { FC } from 'react'
import '@nectary/components/theme.css'

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
  }, [])

  return (
    <HashRouter basename="/">
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>Header</h1>
          <Login/>
        </header>
        <aside className={styles.aside}>
          <h3>Menu</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quickstarts">Quickstarts</Link></li>
          </ul>
        </aside>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<h3>Home</h3>}/>
            <Route path="/quickstarts/*" element={<Quickstarts/>}/>
          </Routes>
        </main>
        <footer className={styles.footer}>
          <h2>Footer</h2>
        </footer>
      </div>
    </HashRouter>
  )
}
