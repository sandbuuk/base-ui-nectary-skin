import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import '../grid-item'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-grid', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

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
