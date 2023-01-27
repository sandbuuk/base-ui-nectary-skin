import pkg from '@sinch-engage/nectary/package.json'
import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { setAssetsRegistry } from '@sinch-engage/nectary-assets/utils'
import { DocumentProvider } from 'docs-common'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App/App'
import { createShadowRoot } from './utils'
import '@sinch-engage/nectary/theme'

declare let STYLE_INJECT_KEY: string

const registry = new CustomElementRegistry()

setNectaryRegistry(registry)
setAssetsRegistry(registry)

export const bootstrap = (el: HTMLElement) => {
  console.log('bootstrap', pkg.version)

  const wrapper = el
  const { appElement, shadowRoot } = createShadowRoot(wrapper, registry)

  if (Reflect.has(document.head, STYLE_INJECT_KEY)) {
    shadowRoot.prepend(Reflect.get(document.head, STYLE_INJECT_KEY).cloneNode(true))
  }

  const reactRoot = createRoot(appElement)

  reactRoot.render(
    <StrictMode>
      <DocumentProvider value={shadowRoot as any as Document}>
        <App/>
      </DocumentProvider>
    </StrictMode>
  )

  return () => {
    console.log('unmount', pkg.version)

    requestAnimationFrame(() => {
      reactRoot.unmount()
    })
  }
}
