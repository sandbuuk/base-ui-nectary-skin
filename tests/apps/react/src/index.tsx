import { setAssetsRegistry } from '@nectary/assets/utils'
import { setNectaryRegistry } from '@nectary/components/utils'
import '@nectary/scoped-custom-element-registry'
import '@nectary/theme-base'
import { render } from 'react-dom'
import { App } from './App'
import 'axe-core'
import { DocumentProvider } from './context/document'

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
  <DocumentProvider value={appElement.ownerDocument}>
    <App/>
  </DocumentProvider>,
  appElement
)
