import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { defineNectaryElements } from '@nectary/components/utils'
import { filterMessage, isData, isTokenMessage, listenToBus, tokenRequestMessage, sendMessageOnBus } from '@saas/bus'
import { render, unmountComponentAtNode } from 'react-dom'
import { App } from './components/App'
import { TokenContext } from './contexts'
import type { EmotionCache } from '@emotion/cache'
import type { TOKEN_PAYLOAD } from '@saas/bus'

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

const tokenOnly = filterMessage(isTokenMessage)
const customRegistry = new CustomElementRegistry()

defineNectaryElements(customRegistry)

class SinchReactApp extends HTMLElement {
  appElement: HTMLElement
  cache: EmotionCache
  token: TOKEN_PAYLOAD = null
  unsubscribeTokenBus: () => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'open',
      // @ts-ignore
      customElements: customRegistry,
    })

    // StyleLoader style inject
    const stylesFrag = (document.head as any)[appName]

    if (stylesFrag != null) {
      shadowRoot.appendChild(stylesFrag.cloneNode(true))
    }

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.appElement = shadowRoot.getElementById(appName)!
    Object.defineProperty(this.appElement, 'ownerDocument', { value: shadowRoot })

    this.cache = createCache({
      key: 'css',
      prepend: true,
      container: shadowRoot as any as HTMLElement,
    })

    this.unsubscribeTokenBus = listenToBus(tokenOnly((message) => {
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
          <TokenContext.Consumer>{
            (data) => {
              if (data !== null) {
                // data.token is what one would send for example in the `Authentication:` header when doing backend calls.
                console.log('Here is the a small piece of the latest token inside the MFE!', data.token.substr(-10))
                // @ts-ignore
                console.log('Here is the username from the parsed token:', data.parsedToken.preferred_username)

                return null
              }

              console.log('Currently we have no token. Are you logged in?')

              return null
            }
          }
          </TokenContext.Consumer>
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

customElements.define(appName, SinchReactApp)

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
