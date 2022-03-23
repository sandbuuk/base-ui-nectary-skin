import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/alert'
import { filterMessage, isData, isTokenMessage, listenToBus, tokenRequestMessage, sendMessageOnBus } from '@saas/bus'
import { useRef, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { ModalContext, TokenContext } from './contexts'
import { Home } from './pages/Home'
import { QuickStartsPages } from './quickstarts/QuickStartsPages'
import type { TOKEN_PAYLOAD } from '@saas/bus'
import type { FC } from 'react'

const tokenOnly = filterMessage(isTokenMessage)

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

export const App: FC<TApp> = ({ baseUrl }) => {
  const modalRef = useRef(null)
  const [token, setToken] = useState<TOKEN_PAYLOAD>(null)

  useEffect(() => {
    const unsub = listenToBus(tokenOnly((message) => {
      // TODO: This seems way too strict? Not even sure what is going on here, isData does return a bool.
      // Could this rule actually be so dumb to not allow type narrowing?
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      setToken(isData(message) ? message.payload : null)
    }))

    sendMessageOnBus(tokenRequestMessage())

    return unsub
  }, [])

  return (
    <TokenContext.Provider value={token}>
      <AppContainer>
        <ModalContext.Provider value={modalRef}>
          <Router basename={baseUrl}>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path=":id/*" element={<QuickStartsPages/>}/>
            </Routes>
          </Router>
        </ModalContext.Provider>
        <div ref={modalRef}/>
      </AppContainer>
    </TokenContext.Provider>
  )
}
