import pkg from '@sinch-engage/nectary/package.json'
import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { setAssetsRegistry } from '@sinch-engage/nectary-assets/utils'
import { DocumentProvider } from 'docs-common'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App/App'
import { createShadowRoot } from './utils'
import '@sinch-engage/nectary/theme'

export * from './entries'

declare let STYLE_INJECT_KEY: string

const registry = new CustomElementRegistry()

setNectaryRegistry(registry)
setAssetsRegistry(registry)

export const bootstrap = (el: HTMLElement) => {
  console.log('bootstrap', pkg.version)

  const wrapper = el
  const { appElement, shadowRoot } = createShadowRoot(wrapper, registry)

  let readyPromise: Promise<any> = Promise.resolve()

  if (Reflect.has(document.head, STYLE_INJECT_KEY)) {
    const fragment: HTMLElement = Reflect.get(document.head, STYLE_INJECT_KEY).cloneNode(true)

    readyPromise = Promise.all(
      Array.from(fragment.children).map((el) => new Promise<void>((resolve) => {
        const abortCtr = new AbortController()
        const onLoad = () => {
          abortCtr.abort()
          requestAnimationFrame(() => resolve())
        }

        el.addEventListener('load', onLoad, { signal: abortCtr.signal })
        el.addEventListener('error', onLoad, { signal: abortCtr.signal })
      }))
    )

    shadowRoot.prepend(fragment)
  }

  const reactRoot = createRoot(appElement)

  reactRoot.render(
    <StrictMode>
      <DocumentProvider value={shadowRoot as any as Document}>
        <App/>
      </DocumentProvider>
    </StrictMode>
  )

  return {
    ready: readyPromise,
    unmount() {
      console.log('unmount', pkg.version)

      requestAnimationFrame(() => {
        reactRoot.unmount()
      })
    },
  }
}
