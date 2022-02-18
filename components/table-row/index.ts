import {
  defineCustomElement, getBooleanAttribute, updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-row', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'row')
  }

  set sticky(isSticky: boolean) {
    updateBooleanAttribute(this, 'sticky', isSticky)
  }

  get sticky() {
    return getBooleanAttribute(this, 'sticky')
  }
})

type TSinchTableRowElement = HTMLElement & {
  sticky: boolean,
}

type TSinchTableRowReact = TSinchElementReact<TSinchTableRowElement> & {
  sticky?: boolean,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-row': TSinchTableRowReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-table-row': TSinchTableRowElement,
  }
}
