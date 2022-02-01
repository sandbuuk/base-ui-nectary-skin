import { render } from 'react-dom'
import { App } from './App'
import './keycloak' // Login, side effects.

render(
  <App/>,
  document.getElementById('shell')
)
