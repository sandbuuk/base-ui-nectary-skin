import {
  defineCustomElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-head', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'rowgroup')
  }
})

type TSinchTableHeadElement = HTMLElement

type TSinchTableHeadReact = TSinchElementReact<TSinchTableHeadElement>

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
