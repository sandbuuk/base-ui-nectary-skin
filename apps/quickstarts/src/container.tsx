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

    shadowRoot.appendChild(template.content.cloneNode(true))

    const stylesFrag = (document.head as any)[appName]

    if (stylesFrag != null) {
      shadowRoot.prepend(stylesFrag.cloneNode(true))
    }

    this.appElement = shadowRoot.getElementById(appName)!
  }

  connectedCallback() {
    render(
      <App baseUrl="/quickstarts"/>,
      this.appElement
    )
  }

  disconnectedCallback() {
    unmountComponentAtNode(this.appElement)
  }
}

global.customElements.define(appName, SinchReactApp)
