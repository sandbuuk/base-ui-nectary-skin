import {
  defineCustomElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'table')
  }
})

export type TSinchTableElement = HTMLElement

export type TSinchTableReact = TSinchElementReact<TSinchTableElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table': TSinchTableReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-table': TSinchTableElement,
  }
}
