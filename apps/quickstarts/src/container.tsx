import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { render, unmountComponentAtNode } from 'react-dom'
import { App } from './components/App'

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

class SinchReactApp extends HTMLElement {
  appElement: HTMLElement

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
  }

  connectedCallback() {
    const cache = createCache({
      key: 'css',
      prepend: true,
      container: this.shadowRoot as any as HTMLElement,
    })

    render(
      <CacheProvider value={cache}>
        <App baseUrl="/quickstarts"/>
      </CacheProvider>,
      this.appElement
    )
  }

  disconnectedCallback() {
    unmountComponentAtNode(this.appElement)
  }
}

global.customElements.define(appName, SinchReactApp)
