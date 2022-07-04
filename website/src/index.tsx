import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { render } from 'react-dom'
import { App } from './App'
import '@sinch-engage/nectary/theme.css'
import 'dracula-prism/dist/css/dracula-prism.css'

setNectaryRegistry(window.customElements)

render(<App/>, document.querySelector('#app'))
