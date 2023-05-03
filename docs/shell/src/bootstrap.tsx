import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { setAssetsRegistry } from '@sinch-engage/nectary-assets/utils'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { ThemeControlProvider } from './context/theme-control'
import { AppStateProvider } from './store'

const rootEl = document.querySelector('#app')!

setNectaryRegistry(window.customElements)
setAssetsRegistry(window.customElements)

createRoot(rootEl).render(
  <StrictMode>
    <AppStateProvider>
      <ThemeControlProvider>
        <App/>
      </ThemeControlProvider>
    </AppStateProvider>
  </StrictMode>
)
