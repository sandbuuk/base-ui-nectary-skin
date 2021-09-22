import { createApp, App as TApp } from 'vue'
import App from './App.vue'

const template = document.createElement('template')

template.innerHTML = `
<style>
  :host {
    display: block;
    border: 2px red dashed;
    padding: 20px;
    width: 200px;
  }
  h3 {
    margin: 0 0 20px;
  }
</style>
<h3>Vue App:</h3>
<div id="app"></div>
`

class SinchVueApp extends HTMLElement {
  appElement: HTMLElement
  app!: TApp<Element>

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.appElement = shadowRoot.getElementById('app')!
  }

  connectedCallback() {
    this.app = createApp(App)

		this.app.mount(this.appElement)
  }

  disconnectedCallback() {
    this.app.unmount()
  }
}

window.customElements.define('sinch-vue-app', SinchVueApp)
