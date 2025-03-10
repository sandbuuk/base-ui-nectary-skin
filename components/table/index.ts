import {
  defineCustomElement, NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTableElement, TSinchTableReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'table')
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-table': TSinchTableElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table': TSinchTableReact,
    }
  }
}
