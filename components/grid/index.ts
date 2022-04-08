import { defineCustomElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import '../grid-item'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-grid', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

export type TSinchGridElement = HTMLElement

export type TSinchGridReact = TSinchElementReact<TSinchGridElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-grid': TSinchGridReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-grid': TSinchGridElement,
  }
}
