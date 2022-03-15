import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/alert'
import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { Home } from './pages/Home'
import { QuickStartsPages } from './quickstarts/QuickStartsPages'
import type { FC } from 'react'

type TApp = {
  baseUrl: string,
}

export const App: FC<TApp> = ({ baseUrl }) => (
  <StrictMode>
    <div className={styles.app}>
      <Router basename={baseUrl}>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path=":id/*" element={<QuickStartsPages/>}/>
        </Routes>
      </Router>
    </div>
  </StrictMode>
)
