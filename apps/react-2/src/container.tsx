import { render, unmountComponentAtNode } from 'react-dom'
import { App } from './App'

const template = document.createElement('template')

template.innerHTML = `
<style>
  :host {
    display: block;
    border: 2px green dashed;
    padding: 20px;
    width: 200px;
  }
  h3 {
    margin: 0 0 20px;
  }
</style>
<h3>React App 2:</h3>
<div id="app"></div>
`

class SinchReactApp extends HTMLElement {
  appElement: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.appElement = shadowRoot.getElementById('app')!
  }

  connectedCallback() {
    render(<App/>, this.appElement)
  }

  disconnectedCallback() {
    unmountComponentAtNode(this.appElement)
  }
}

global.customElements.define('sinch-react-2-app', SinchReactApp)
