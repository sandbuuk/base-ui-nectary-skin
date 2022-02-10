import { render } from 'react-dom'
import { App } from './App'
import './keycloak' // Login, side effects.
import './token-bus-handler'

render(
  <App/>,
  document.getElementById('shell')
)
