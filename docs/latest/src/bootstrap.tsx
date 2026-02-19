import { setAssetsRegistry } from '@nectary/assets/utils'
import { setNectaryRegistry } from '@nectary/components/utils'
import { setLabRegistry } from '@nectary/labs/utils'
import '@nectary/theme-base'
import '@nectary/theme-dark'
import '@nectary/theme-message-media'
import '@nectary/theme-cpaas-base'
import '@nectary/theme-cpaas-mailgun'
import '@nectary/theme-cpaas-mailjet'
import '@nectary/theme-cpaas-dashboard'
import './tailwind.css'
import { DocumentProvider, ThemeNameProvider } from 'docs-common'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App/App'
import { createShadowRoot } from './utils'
import type { TThemeName } from 'docs-common'

export * from './entries'

declare let STYLE_INJECT_KEY: string

const registry = new CustomElementRegistry()

setNectaryRegistry(registry)
setAssetsRegistry(registry)
setLabRegistry(registry)

type TBootstrapOptions = {
  themeName: TThemeName,
}

export const bootstrap = (el: HTMLElement, { themeName }: TBootstrapOptions) => {
  const { appElement, shadowRoot } = createShadowRoot(el, registry)
  const abortController = new AbortController()

  let readyPromise: Promise<any> = Promise.resolve()

  window.addEventListener('style-loader', ((e: CustomEvent<HTMLStyleElement>) => {
    const origStyle = e.detail
    const clonedStyle = origStyle.cloneNode(true) as HTMLStyleElement

    shadowRoot.prepend(clonedStyle)
  }) as any, { signal: abortController.signal })

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
        <ThemeNameProvider initialThemeName={themeName}>
          <App/>
        </ThemeNameProvider>
      </DocumentProvider>
    </StrictMode>
  )

  return {
    ready: readyPromise,
    unmount() {
      // console.log('unmount', pkg.version)
      abortController.abort()

      requestAnimationFrame(() => {
        reactRoot.unmount()
      })
    },
  }
}
