import {
  defineCustomElement, NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-body', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'rowgroup')
  }
})

export type TSinchTableBodyElement = HTMLElement

export type TSinchTableBodyReact = TSinchElementReact<TSinchTableBodyElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-body': TSinchTableBodyReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-table-body': TSinchTableBodyElement,
  }
}
