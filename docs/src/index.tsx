import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'

const rootEl = document.querySelector('#app')!

setNectaryRegistry(window.customElements)
createRoot(rootEl).render(<App/>)
