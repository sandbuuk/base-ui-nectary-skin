import '@nectary/components/theme.css'
import '@nectary/components/button'
import { useEffect, useRef } from 'react'
import { HashRouter, Link, Routes, Route } from 'react-router-dom'
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
    <HashRouter basename="/quickstarts">
      <div className="wrapper">
        <h3>Quickstarts</h3>
        <ul>
          <li><Link to="/1">Page 1</Link></li>
          <li><Link to="/2">Page 2</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<h4>Homepage</h4>}/>
          <Route path="/1" element={<h4>Page 1</h4>}/>
          <Route path="/2" element={<h4>Page 2</h4>}/>
          <Route path="*" element={<h4>Not Found</h4>}/>
        </Routes>
        <sinch-button text="Button" type="primary" onClick={() => {}}/>
      </div>
    </HashRouter>
  )
}
