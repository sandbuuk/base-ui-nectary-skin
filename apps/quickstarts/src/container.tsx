import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { filterMessage, isData, isTokenMessage, listenToBus, tokenRequestMessage, sendMessageOnBus } from '@sinch/bus'
import { createContext } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { App } from './components/App'
import type { EmotionCache } from '@emotion/cache'
import type { TOKEN_PAYLOAD } from '@sinch/bus'

const appName = 'sinch-quickstarts-app'
const template = document.createElement('template')

template.innerHTML = `
<style>
:host {
  display: block;
}
:host > #${appName} {
  height: 100%;
  box-sizing: border-box;
}
</style>
<div id="${appName}"></div>
`

// These helpers/types should probably be imported from some common lib.
const TokenContext = createContext<TOKEN_PAYLOAD>(null)
const tokenOnly = (filterMessage(isTokenMessage))

class SinchReactApp extends HTMLElement {
  appElement: HTMLElement
  cache: EmotionCache
  token: TOKEN_PAYLOAD = null
  unsubscribeTokenBus: () => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    // StyleLoader style inject
    const stylesFrag = (document.head as any)[appName]

    if (stylesFrag != null) {
      shadowRoot.appendChild(stylesFrag.cloneNode(true))
    }

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.appElement = shadowRoot.getElementById(appName)!

    this.cache = createCache({
      key: 'css',
      prepend: true,
      container: shadowRoot as any as HTMLElement,
    })

    this.unsubscribeTokenBus = listenToBus(tokenOnly((message) => {
      console.log('got token message in MFE!', message)
      // TODO: This seems way too strict? Not even sure what is going on here, isData does return a bool.
      // Could this rule actually be so dumb to not allow type narrowing?
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      this.token = isData(message) ? message.payload : null
      this.render()
    }))

    sendMessageOnBus(tokenRequestMessage())
  }

  render() {
    if (!this.isConnected) {
      return
    }

    render(
      <CacheProvider value={this.cache}>
        <TokenContext.Provider value={this.token}>
          <App baseUrl="/quickstarts"/>
        </TokenContext.Provider>
      </CacheProvider>,
      this.appElement
    )
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
    this.unsubscribeTokenBus()
    unmountComponentAtNode(this.appElement)
  }
}

global.customElements.define(appName, SinchReactApp)

type TSinchQuickstartsApp = {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['sinch-quickstarts-app']: TSinchQuickstartsApp,
    }
  }

  interface HTMLElementTagNameMap {
    ['sinch-quickstarts-app']: TSinchQuickstartsApp,
  }
}
