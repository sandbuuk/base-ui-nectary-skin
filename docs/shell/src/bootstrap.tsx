import '@sinch-engage/nectary-theme-base/index'
import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { setAssetsRegistry } from '@sinch-engage/nectary-assets/utils'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'

const rootEl = document.querySelector('#app')!

setNectaryRegistry(window.customElements)
setAssetsRegistry(window.customElements)

createRoot(rootEl).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
