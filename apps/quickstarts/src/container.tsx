import { filterMessage, isData, isTokenMessage, listenToBus, tokenRequestMessage, sendMessageOnBus } from '@saas/bus'
import { defineNectaryElements } from '@sinch-engage/nectary/utils'
import { render, unmountComponentAtNode } from 'react-dom'
import { StyleSheetManager } from 'styled-components'
import { App } from './App'
import { TokenContext } from './contexts'
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
      // Make sure styled-components insert the styles inside the Shadow DOM.
      // @ts-expect-error Should be able to remove this line when types include Shadow DOM nodes.
      <StyleSheetManager target={this.shadowRoot}>
        <TokenContext.Provider value={this.token}>
          {/** TODO: This basename should really come from the shell. The shell decides where to mount it. */}
          <App baseUrl="/quick-starts"/>
        </TokenContext.Provider>
      </StyleSheetManager>,
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
