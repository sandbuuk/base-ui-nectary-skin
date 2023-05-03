import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { setAssetsRegistry } from '@sinch-engage/nectary-assets/utils'
import '@sinch-engage/nectary-theme-base'
import darkThemeCss from '@sinch-engage/nectary-theme-dark/index.css?theme'
import { DocumentProvider, ThemeNameProvider } from 'docs-common'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App/App'
import { createShadowRoot } from './utils'
import type { TThemeName } from 'docs-common'

export * from './entries'

const bus = new BroadcastChannel('MESSAGE_BUS')

declare let STYLE_INJECT_KEY: string

const registry = new CustomElementRegistry()

setNectaryRegistry(registry)
setAssetsRegistry(registry)

type TBootstrapOptions = {
  themeName: TThemeName,
}

export const bootstrap = (el: HTMLElement, { themeName }: TBootstrapOptions) => {
  // console.log('bootstrap', pkg.version)

  const wrapper = el
  const { appElement, shadowRoot } = createShadowRoot(wrapper, registry)
  const abortController = new AbortController()

  let readyPromise: Promise<any> = Promise.resolve()
  let currentThemeName = themeName

  if (currentThemeName === 'dark') {
    darkThemeCss.use({ target: shadowRoot })
  }

  bus.addEventListener('message', (msg) => {
    if (msg.data.type === 'THEME') {
      switch (msg.data.payload) {
        case 'dark': {
          currentThemeName = msg.data.payload
          darkThemeCss.use({ target: shadowRoot })

          break
        }

        case 'light': {
          currentThemeName = msg.data.payload
          darkThemeCss.unuse()

          break
        }

        default: {
          console.error(`Unsupported theme: ${msg.data}`)
        }
      }
    }
  }, { signal: abortController.signal })

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

      if (currentThemeName === 'dark') {
        darkThemeCss.unuse()
      }

      requestAnimationFrame(() => {
        reactRoot.unmount()
      })
    },
  }
}
