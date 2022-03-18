import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/alert'
import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Home } from './pages/Home'
import { QuickStartsPages } from './quickstarts/QuickStartsPages'
import type { FC } from 'react'

type TApp = {
  baseUrl: string,
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  min-height: 100%;
  box-sizing: border-box;
  font: var(--sinch-font-body);
  background-color: var(--sinch-color-snow-500);
`

export const App: FC<TApp> = ({ baseUrl }) => (
  <StrictMode>
    <AppContainer>
      <Router basename={baseUrl}>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path=":id/*" element={<QuickStartsPages/>}/>
        </Routes>
      </Router>
    </AppContainer>
  </StrictMode>
)
