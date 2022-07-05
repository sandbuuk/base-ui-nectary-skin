import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { render } from 'react-dom'
import { App } from './components/App'

setNectaryRegistry(window.customElements)

render(<App/>, document.querySelector('#app'))
