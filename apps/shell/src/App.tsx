import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { Login } from './components/Login'
import { MFERoute } from './components/MFERoute'
import { NotFound } from './components/NotFound'
import { SidebarButton } from './components/SidebarButton'
import type { FC } from 'react'
import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/tooltip'
import '@sinch-engage/nectary/logo/sinch-icon'
import '@sinch-engage/nectary/icon-branded/home'
import '@sinch-engage/nectary/icon-branded/rocket'
import '@sinch-engage/nectary/icon-branded/contact'
import '@sinch-engage/nectary/icon-branded/chatbot'
import '@sinch-engage/nectary/icon-branded/campaigns'
import '@sinch-engage/nectary/icon-branded/barchart-down'
import '@sinch-engage/nectary/icon-branded/user'
import '@sinch-engage/nectary/icon-branded/users'
import '@sinch-engage/nectary/icon-branded/multiple-channels'
import '@sinch-engage/nectary/icon-branded/settings'

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
    <Router basename="/">
      <div className={styles.app}>
        <header className={styles.header}>
          <sinch-logo-sinch-icon size={32}/>
          <Login/>
        </header>
        <aside className={styles.aside}>
          <SidebarButton to="/" text="Home" tooltip="Home" icon="sinch-icon-home"/>
          <SidebarButton to="/quick-starts" text="Quick Starts" tooltip="Quick Starts" icon="sinch-icon-rocket"/>
          <div className={styles.space}/>
          <SidebarButton to="/conversations" text="Conversations" tooltip="Conversations" icon="sinch-icon-contact"/>
          <SidebarButton to="/chatbot" text="Chatbot" tooltip="Chatbot" icon="sinch-icon-chatbot"/>
          <SidebarButton to="/campaign" text="Campaign" tooltip="Campaign" icon="sinch-icon-campaigns"/>
          <div className={styles.space}/>
          <SidebarButton to="/analytics" text="Analytics" tooltip="Analytics" icon="sinch-icon-barchart-down"/>
          <SidebarButton to="/audience" text="Audience" tooltip="Audience" icon="sinch-icon-users"/>
          <SidebarButton to="/channels" text="Channels" tooltip="Channels" icon="sinch-icon-multiple-channels"/>
          <SidebarButton to="/settings" text="Settings" tooltip="Settings" icon="sinch-icon-settings"/>
        </aside>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<NotFound title="Home"/>}/>
            <Route path="/quick-starts/*" element={<MFERoute loadRender={() => import('Quickstarts/Container').then(({ default: x }) => x)}/>}/>
            <Route path="/conversations/*" element={<NotFound title="Conversations"/>}/>
            <Route path="/chatbot/*" element={<NotFound title="Chatbot"/>}/>
            <Route path="/campaign/*" element={<NotFound title="Campaign"/>}/>
            <Route path="/analytics/*" element={<NotFound title="Analytics"/>}/>
            <Route path="/audience/*" element={<NotFound title="Audience"/>}/>
            <Route path="/channels/*" element={<NotFound title="Channels"/>}/>
            <Route path="/settings/*" element={<NotFound title="Settings"/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}
