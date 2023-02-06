import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { setAssetsRegistry } from '@sinch-engage/nectary-assets/utils'
import '@webcomponents/scoped-custom-element-registry'
import '@sinch-engage/nectary-theme-base/index'
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

const registry = new CustomElementRegistry()
const appElement = createShadowRoot(document.getElementById('app')!, registry)

setNectaryRegistry(registry)
setAssetsRegistry(registry)

render(
  <App/>,
  appElement
)
