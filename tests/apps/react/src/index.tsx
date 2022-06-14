import '@webcomponents/scoped-custom-element-registry'
import { getNectaryCustomRegistry } from '@sinch-engage/nectary/utils'
import { render } from 'react-dom'
import { App } from './App'
import 'axe-core'

const createShadowRoot = (element: HTMLElement, registry: CustomElementRegistry) => {
  const shadowRoot = element.attachShadow({
    mode: 'open',
    customElements: registry,
  })

  const appElement = shadowRoot.appendChild(document.createElement('div'))

  Object.defineProperty(appElement, 'ownerDocument', { value: shadowRoot })
  Object.defineProperty(shadowRoot, 'createTextNode', {
    value: document.createTextNode.bind(shadowRoot.ownerDocument),
  })
  Object.defineProperty(shadowRoot, 'createElementNS', {
    value: document.createElementNS.bind(shadowRoot.ownerDocument),
  })

  return appElement
}

const appElement = createShadowRoot(document.getElementById('app')!, getNectaryCustomRegistry())

render(
  <App/>,
  appElement
)
