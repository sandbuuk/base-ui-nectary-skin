import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-head', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'rowgroup')
  }
})

export type TSinchTableHeadElement = HTMLElement

export type TSinchTableHeadReact = TSinchElementReact<TSinchTableHeadElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-head': TSinchTableHeadReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-table-head': TSinchTableHeadElement,
  }
}
